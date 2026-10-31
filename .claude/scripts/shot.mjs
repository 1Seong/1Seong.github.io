#!/usr/bin/env node
// 디자인 리뷰용 스크린샷 도우미. 결과는 /tmp/portfolio-shots/<label>/ 에 저장된다.
//
// 촬영
//   node .claude/scripts/shot.mjs                         # 홈: 첫 화면 + 섹션별 (데스크톱 1440x900)
//   node .claude/scripts/shot.mjs --page=eulerian_aurora  # 상세 페이지: 첫 화면 + 섹션별
//   node .claude/scripts/shot.mjs --page=all              # 홈 + 상세 가능한 모든 프로젝트
//        --mobile             390x844 모바일 뷰포트 (파일명에 -m)
//        --fold               첫 화면(뷰포트)만 찍음
//        --selector=<css>     지정한 요소만 찍음 (예: --selector=#skills)
//        --label=<name>       저장 폴더 이름 (기본: now). 변경 전후 비교에 before/after 사용
//
// 비교
//   node .claude/scripts/shot.mjs --compare before after  # 같은 파일명끼리 좌우로 붙인 이미지를 compare/ 에 생성
//
// 예) 변경 전후 비교
//   node .claude/scripts/shot.mjs --label=before --selector=#skills
//   (수정)
//   node .claude/scripts/shot.mjs --label=after  --selector=#skills
//   node .claude/scripts/shot.mjs --compare before after
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = '/tmp/portfolio-shots';
const argv = process.argv.slice(2);
const opt = (k) => argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3);
const has = (k) => argv.includes(`--${k}`);
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

if (has('compare')) {
  const [a, b] = argv.filter((x) => !x.startsWith('--'));
  if (!a || !b) { console.error('사용: --compare <labelA> <labelB>'); process.exit(1); }
  await compare(a, b);
  process.exit(0);
}

const MOBILE = has('mobile');
const sfx = MOBILE ? '-m' : '';
const label = opt('label') || 'now';
const dir = path.join(OUT, label);
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: MOBILE ? { width: 390, height: 844 } : { width: 1440, height: 900 },
  ...(MOBILE ? { isMobile: true, hasTouch: true, deviceScaleFactor: 2 } : {}),
});
const failed = new Set();
page.on('requestfailed', (r) => { if (!/ABORTED/.test(r.failure()?.errorText || '')) failed.add(new URL(r.url()).host || 'file'); });
await page.goto('file://' + path.join(ROOT, 'index.html'));
await page.waitForTimeout(800);

const target = opt('page') || 'home';
const ids = target === 'all'
  ? ['home', ...(await page.evaluate(() => PROJECT_ORDER.filter((id) => {
      const p = PROJECTS[id]; return p && p.showMore !== false && p.detail?.showMore !== false;
    })))]
  : [target];

const saved = [];
for (const id of ids) {
  if (id !== 'home') {
    const ok = await page.evaluate((pid) => { try { showDetail(pid); return true; } catch (e) { return String(e); } }, id);
    if (ok !== true) { console.error(`showDetail('${id}') 실패: ${ok}`); continue; }
  } else {
    await page.evaluate(() => { if (typeof showList === 'function') showList(); });
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  const base = id === 'home' ? 'home' : id;

  // 첫 화면
  if (!opt('selector')) {
    const f = `${base}-fold${sfx}.png`;
    await page.screenshot({ path: path.join(dir, f) }); saved.push(f);
  }
  if (has('fold')) continue;

  // 섹션별 (또는 지정 요소)
  const sel = opt('selector') || (id === 'home'
    ? '#list-view > section:not([hidden])'
    : '#detail-view .detail-section');
  const els = await page.$$(sel);
  // 화면보다 긴 요소를 이어 찍을 때 고정 메뉴바가 중간에 끼지 않도록 섹션 촬영 동안만 고정을 푼다
  const unpin = await page.addStyleTag({ content: '#nav{position:absolute!important}' });
  for (const [i, el] of els.entries()) {
    if (!(await el.isVisible())) continue;
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(350); // 스크롤 연동 효과(in-view)가 적용될 시간
    // id가 있으면 id만으로 이름을 정해, --selector로 찍어도 전체 촬영과 파일명이 같게 한다(비교용)
    const eid = await el.evaluate((e) => e.id);
    const name = eid || `${String(i).padStart(2, '0')}-${await el.evaluate((e) => e.className.split(' ')[0] || e.tagName.toLowerCase())}`;
    const f = `${base}-${name.replace(/[^\w-]/g, '')}${sfx}.png`;
    await el.screenshot({ path: path.join(dir, f) }); saved.push(f);
  }
  await unpin.evaluate((n) => n.remove());
}
await browser.close();
console.log(`${saved.length}장 → ${dir}/`);
saved.forEach((f) => console.log('  ' + f));
if (failed.size) console.log(`(로드 실패한 외부 호스트: ${[...failed].join(', ')} — 샌드박스 네트워크 제한일 수 있음)`);

async function compare(a, b) {
  const da = path.join(OUT, a), db = path.join(OUT, b), dc = path.join(OUT, 'compare');
  fs.mkdirSync(dc, { recursive: true });
  const files = fs.readdirSync(da).filter((f) => f.endsWith('.png') && fs.existsSync(path.join(db, f)));
  if (!files.length) { console.error(`${a}와 ${b}에 같은 이름의 스크린샷이 없음`); process.exit(1); }
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const f of files) {
    const uri = (d) => 'data:image/png;base64,' + fs.readFileSync(path.join(d, f)).toString('base64');
    await page.setContent(`<body style="margin:0;background:#888;font:600 14px sans-serif">
      <div style="display:flex;gap:12px;padding:12px;align-items:flex-start;width:max-content">
        <figure style="margin:0"><figcaption style="color:#fff;padding:0 0 6px">${a}</figcaption><img id="a" src="${uri(da)}"></figure>
        <figure style="margin:0"><figcaption style="color:#fff;padding:0 0 6px">${b}</figcaption><img id="b" src="${uri(db)}"></figure>
      </div></body>`);
    await page.waitForFunction(() => [...document.images].every((i) => i.complete));
    // 너무 큰 이미지는 폭 900px로 줄여 나란히 본다
    await page.evaluate(() => document.querySelectorAll('img').forEach((i) => { if (i.naturalWidth > 900) i.style.width = '900px'; }));
    const box = await page.$('body > div');
    await box.screenshot({ path: path.join(dc, f) });
  }
  await browser.close();
  console.log(`${files.length}장 → ${dc}/`);
}
