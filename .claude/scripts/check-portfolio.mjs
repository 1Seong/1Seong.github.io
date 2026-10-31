#!/usr/bin/env node
// 포트폴리오 데이터 검증 스크립트
//
//   node .claude/scripts/check-portfolio.mjs            # 데이터 구조 + 로컬 asset 검사 (빠름)
//   node .claude/scripts/check-portfolio.mjs --remote   # + codeUrl 대상 파일이 실제 저장소에 있는지 확인
//   node .claude/scripts/check-portfolio.mjs --render   # + 헤드리스 브라우저로 메인/상세 페이지 렌더링 오류 확인
//   node .claude/scripts/check-portfolio.mjs --quiet    # 문제가 있을 때만 출력 (훅용)
//
// 종료 코드: 0 = 오류 없음(경고는 허용), 1 = 오류 있음

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const args = new Set(process.argv.slice(2));
const QUIET = args.has('--quiet');
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

// ---------- 1. 데이터 로드 ----------
const dataPath = path.join(ROOT, 'portfolio-data.js');
let D;
try {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(
    fs.readFileSync(dataPath, 'utf8') +
      `;this.__D={PROFILE,SKILLS,BOOKS,AWARDS,OTHER_WORKS,PROJECT_ORDER,MAIN_PROJECT_IDS,PROJECTS,DETAIL_LINK_SLOTS};`,
    ctx,
    { filename: 'portfolio-data.js' },
  );
  D = ctx.__D;
} catch (e) {
  console.error(`✖ portfolio-data.js 로드 실패: ${e.message}`);
  process.exit(1);
}

// ---------- 2. 구조 검사 ----------
const assetExists = (src) => !src || /^https?:/.test(src) || fs.existsSync(path.join(ROOT, src));
const checkAsset = (where, src) => {
  if (src && !assetExists(src)) err(`${where}: 파일 없음 → ${src}`);
};
const codeUrls = []; // { where, url }
const checkCodeUrl = (where, url) => {
  if (!url) return;
  let u;
  try { u = new URL(url); } catch { return err(`${where}: codeUrl 형식 오류 → ${url}`); }
  // index.html의 renderCodeLink는 https://github.com 이외 링크를 조용히 숨긴다.
  if (u.protocol !== 'https:' || u.hostname !== 'github.com')
    return err(`${where}: codeUrl은 https://github.com 만 표시됨 → ${url}`);
  codeUrls.push({ where, url });
};

// 상세 페이지가 아는 기여 카테고리 (디자인 세션에서 바뀔 수 있으므로 index.html에서 직접 읽는다)
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const catBlock = html.match(/const CONTRIB_CATS\s*=\s*\{([\s\S]*?)\n\s*\};/);
const CATS = new Set(catBlock ? [...catBlock[1].matchAll(/^\s*'([^']+)'\s*:/gm)].map((m) => m[1]) : []);

const ids = new Set(Object.keys(D.PROJECTS));
for (const id of D.PROJECT_ORDER) if (!ids.has(id)) err(`PROJECT_ORDER에 있는 '${id}'가 PROJECTS에 없음`);
for (const id of D.MAIN_PROJECT_IDS) if (!D.PROJECT_ORDER.includes(id)) err(`MAIN_PROJECT_IDS의 '${id}'가 PROJECT_ORDER에 없음`);
for (const id of ids) if (!D.PROJECT_ORDER.includes(id)) warn(`PROJECTS.${id}가 PROJECT_ORDER에 없어 화면에 표시되지 않음`);

for (const [id, p] of Object.entries(D.PROJECTS)) {
  const at = `PROJECTS.${id}`;
  if (p.id !== id) err(`${at}.id('${p.id}')가 키와 다름`);
  for (const k of ['title', 'subtitle', 'meta', 'media', 'summary'])
    if (p[k] == null) err(`${at}.${k} 누락`);
  for (const k of ['engine', 'platform', 'team', 'year'])
    if (p.meta && !p.meta[k]) warn(`${at}.meta.${k} 비어 있음`);

  (p.media || []).forEach((m, i) => {
    if (!['image', 'video'].includes(m.type)) err(`${at}.media[${i}].type은 image|video`);
    checkAsset(`${at}.media[${i}]`, m.src);
    checkAsset(`${at}.media[${i}].thumbnail`, m.thumbnail);
  });

  (p.contributions || []).forEach((c, i) => {
    const w = `${at}.contributions[${i}] "${c.title}"`;
    for (const k of ['title', 'category']) if (!c[k]) err(`${w}: ${k} 누락`);
    if (!c.goal) warn(`${w}: goal 없음 — 목표/해결 단계 대신 desc 요약으로 표시됨`);
    if (c.category && CATS.size && !CATS.has(c.category))
      warn(`${w}: category '${c.category}'는 index.html CONTRIB_CATS에 없어 기본 아이콘으로 표시됨`);
    if (c.solution != null && !Array.isArray(c.solution)) err(`${w}: solution은 문자열 배열`);
    (c.images || []).forEach((s) => checkAsset(w, s));
    checkCodeUrl(w, c.codeUrl);
  });
  (p.troubleshooting || []).forEach((t, i) => {
    const w = `${at}.troubleshooting[${i}] "${t.title}"`;
    for (const k of ['title', 'problem', 'cause', 'solution', 'result']) if (!t[k]) warn(`${w}: ${k} 비어 있음`);
    checkCodeUrl(w, t.codeUrl);
  });
  (p.optimizations || []).forEach((o, i) => {
    const w = `${at}.optimizations[${i}] "${o.title}"`;
    (o.images || []).forEach((s) => checkAsset(w, s));
    checkAsset(`${w}.comparison.before`, o.comparison?.before?.src);
    checkAsset(`${w}.comparison.after`, o.comparison?.after?.src);
    checkCodeUrl(w, o.codeUrl);
  });
  (p.retrospective?.images || []).forEach((s) => checkAsset(`${at}.retrospective`, s));
  (p.links || []).forEach((l, i) => {
    if (!l.label || !l.url) err(`${at}.links[${i}]: label/url 누락`);
  });

  const det = p.detail;
  if (det) {
    if (det.coreContributionCount != null && det.coreContributionCount > (p.contributions || []).length)
      warn(`${at}.detail.coreContributionCount(${det.coreContributionCount}) > contributions 수(${(p.contributions || []).length})`);
    for (const [slot, label] of Object.entries(det.linkMap || {}))
      if (!(p.links || []).some((l) => l.label === label))
        warn(`${at}.detail.linkMap["${slot}"] → '${label}' 라벨의 링크가 links에 없음`);
  }
}

(D.BOOKS || []).forEach((b, i) => checkAsset(`BOOKS[${i}] "${b.title}"`, b.cover));

// 원본 자리표시 문구가 실제 데이터로 남았는지 (주석은 vm 실행 시 제외되므로 실제 값만 걸림)
const placeholder = /^(책 제목|수상명|활동명|카테고리명|구현 항목 \d)$/;
JSON.stringify(D, (k, v) => {
  if (typeof v === 'string' && placeholder.test(v)) err(`자리표시 문구가 실제 데이터에 남음: "${v}"`);
  return v;
});

// ---------- 3. --remote: codeUrl 대상 존재 확인 ----------
if (args.has('--remote') && codeUrls.length) {
  const byRepo = new Map();
  for (const c of codeUrls) {
    const m = new URL(c.url).pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/);
    if (!m) { warn(`${c.where}: blob 경로 형식이 아님(확인 생략) → ${c.url}`); continue; }
    const [, owner, repo, ref, file] = m;
    const key = `${owner}/${repo}@${ref}`;
    if (!byRepo.has(key)) byRepo.set(key, { owner, repo, ref, items: [] });
    byRepo.get(key).items.push({ ...c, file: decodeURIComponent(file) });
  }
  for (const { owner, repo, ref, items } of byRepo.values()) {
    let files;
    try {
      const dir = cloneSparse(owner, repo, ref);
      files = new Set(execFileSync('git', ['-C', dir, 'ls-tree', '-r', '--name-only', 'HEAD'], { encoding: 'utf8', maxBuffer: 64 << 20 }).split('\n'));
    } catch (e) {
      warn(`${owner}/${repo}@${ref}: 저장소를 읽지 못해 codeUrl 확인 생략 (${String(e.message).split('\n')[0]})`);
      continue;
    }
    for (const it of items) if (!files.has(it.file)) err(`${it.where}: 저장소에 파일 없음 → ${it.url}`);
  }
}

function cloneSparse(owner, repo, ref) {
  const dir = path.join('/tmp/repos', `${owner}__${repo}`);
  const env = { ...process.env, GIT_LFS_SKIP_SMUDGE: '1' };
  if (fs.existsSync(path.join(dir, '.git'))) {
    execFileSync('git', ['-C', dir, 'fetch', '-q', '--depth', '1', '--filter=blob:none', 'origin', ref], { env, stdio: 'pipe' });
    execFileSync('git', ['-C', dir, 'checkout', '-q', 'FETCH_HEAD'], { env, stdio: 'pipe' });
  } else {
    fs.mkdirSync(path.dirname(dir), { recursive: true });
    execFileSync('git', ['clone', '-q', '--depth', '1', '--filter=blob:none', '--sparse', '--branch', ref,
      `https://github.com/${owner}/${repo}`, dir], { env, stdio: 'pipe' });
    execFileSync('git', ['-C', dir, 'sparse-checkout', 'set', 'portfolio'], { env, stdio: 'pipe' });
  }
  return dir;
}

// ---------- 4. --render: 실제 렌더링 확인 ----------
if (args.has('--render')) {
  const { createRequire } = await import('node:module');
  const require = createRequire(import.meta.url);
  let chromium;
  try { ({ chromium } = require('playwright')); } catch { warn('playwright 없음 — 렌더 검사 생략'); }
  if (chromium) {
    const outDir = '/tmp/portfolio-render';
    fs.mkdirSync(outDir, { recursive: true });
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const pageErrors = [];
    page.on('pageerror', (e) => pageErrors.push(e.message));
    // 외부 폰트/CDN은 샌드박스에서 막힐 수 있으므로 로컬 리소스 실패만 오류로 본다.
    // 영상은 상세 화면 전환 시 로드가 취소(ERR_ABORTED)되는 것이 정상이므로 제외한다.
    page.on('requestfailed', (r) => {
      if (r.url().startsWith('file:') && !/ABORTED/.test(r.failure()?.errorText || ''))
        pageErrors.push(`로컬 리소스 로드 실패: ${r.url()}`);
    });
    await page.goto('file://' + path.join(ROOT, 'index.html'));
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${outDir}/home.png`, fullPage: true });
    for (const id of D.PROJECT_ORDER) {
      const p = D.PROJECTS[id];
      if (!p || p.showMore === false || p.detail?.showMore === false) continue;
      const ok = await page.evaluate((pid) => { try { showDetail(pid); return true; } catch (e) { return String(e); } }, id);
      if (ok !== true) pageErrors.push(`showDetail('${id}') 실패: ${ok}`);
      await page.waitForTimeout(300);
      await page.screenshot({ path: `${outDir}/detail-${id}.png`, fullPage: true });
    }
    await browser.close();
    pageErrors.forEach((m) => err(`렌더: ${m}`));
    if (!QUIET) console.log(`스크린샷: ${outDir}/`);
  }
}

// ---------- 출력 ----------
if (!QUIET || errors.length || warnings.length) {
  for (const m of errors) console.log(`✖ ${m}`);
  for (const m of warnings) console.log(`⚠ ${m}`);
}
if (!QUIET) {
  const n = Object.keys(D.PROJECTS).length;
  console.log(`\n프로젝트 ${n}개, codeUrl ${codeUrls.length}개 검사 — 오류 ${errors.length}, 경고 ${warnings.length}`);
}
process.exit(errors.length ? 1 : 0);
