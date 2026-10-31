#!/usr/bin/env node
// PostToolUse 훅: portfolio-data.js가 편집되면 빠른 검사를 돌린다.
// 오류가 있으면 exit 2로 Claude에게 stderr를 돌려준다.
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let input = '';
for await (const chunk of process.stdin) input += chunk;
let file = '';
try { file = JSON.parse(input)?.tool_input?.file_path || ''; } catch {}
if (path.basename(file) !== 'portfolio-data.js') process.exit(0);

const script = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'check-portfolio.mjs');
const r = spawnSync(process.execPath, [script, '--quiet'], { encoding: 'utf8' });
if (r.status !== 0) {
  process.stderr.write(`portfolio-data.js 검사 실패:\n${r.stdout}${r.stderr}`);
  process.exit(2);
}
process.exit(0);
