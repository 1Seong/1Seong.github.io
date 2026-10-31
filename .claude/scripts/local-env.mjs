// check-portfolio.mjs / shot.mjs가 함께 쓰는 실행 환경 설정 (Windows 로컬과 Linux 클라우드 모두 동작).
//
// - 임시 폴더: node의 os.tmpdir(). Windows에서는 %TEMP%(= Git Bash의 /tmp), Linux에서는 /tmp.
//   PORTFOLIO_TMP로 바꿀 수 있다. fetch-repo.sh도 같은 값을 쓴다.
// - playwright: 저장소 기준 node_modules → ~/.portfolio-tools/node_modules 순으로 찾는다.
//   설치: npm i --prefix ~/.portfolio-tools playwright
// - 브라우저: playwright 번들 Chromium → 설치된 Chrome → Edge 순으로 띄운다.
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

export const TMP = (process.env.PORTFOLIO_TMP || os.tmpdir()).replace(/\\/g, '/');

export function loadChromium() {
  for (const base of [import.meta.url, path.join(os.homedir(), '.portfolio-tools', 'package.json')]) {
    try { return createRequire(base)('playwright').chromium; } catch {}
  }
  return null;
}

export async function launchBrowser(chromium) {
  let last;
  for (const channel of [undefined, 'chrome', 'msedge']) {
    try { return await chromium.launch(channel ? { channel } : {}); } catch (e) { last = e; }
  }
  throw last;
}

export const fileUrl = (p) => pathToFileURL(p).href;
