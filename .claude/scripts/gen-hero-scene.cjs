// 히어로 등각(isometric) 건축 장면 SVG 생성기. node gen-scene.cjs > scene.svg
// 좌표: x는 화면 오른쪽 아래, y는 왼쪽 아래, z는 위. 빛은 위·왼쪽 → 윗면 밝음, +y면(왼쪽) 중간, +x면(오른쪽) 어두움.
const S = 32, OX = 214, OY = 178;
const P = (x, y, z) => [OX + (x - y) * 0.866 * S, OY + (x + y) * 0.5 * S - z * S];
const pts = a => a.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ');
const PAL = {
  stone: ['var(--iso-top)', 'var(--iso-left)', 'var(--iso-right)'],
  accent: ['#8a7cf0', '#6250d8', '#4434b0'],
  mint: ['#d4fbef', '#a0f0d8', '#6fd2b6'],
  blue: ['#c3d3f6', '#8aa6ea', '#6080d0'],
};
function box(x, y, z, w, d, h, pal = 'stone', cls = '') {
  const [t, l, r] = PAL[pal];
  const top = [P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)];
  const left = [P(x, y + d, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x, y + d, z)];
  const right = [P(x + w, y, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x + w, y, z)];
  return `<g${cls ? ` class="${cls}"` : ''}><polygon points="${pts(top)}" fill="${t}"/><polygon points="${pts(left)}" fill="${l}"/><polygon points="${pts(right)}" fill="${r}"/></g>`;
}
const out = [];
// 해(뒤): 민트 원
const sun = P(3.6, -0.6, 4.6);
out.push(`<circle class="hs-sun" cx="${sun[0].toFixed(1)}" cy="${sun[1].toFixed(1)}" r="78" fill="url(#hs-sun)"/>`);
// 섬 바닥: 역피라미드 + 판
const c = P(3, 3, -5.2);
out.push(`<g class="hs-island">`);
out.push(`<polygon points="${pts([P(0, 6, 0), P(6, 6, 0), c])}" fill="var(--iso-left)" opacity=".85"/>`);
out.push(`<polygon points="${pts([P(6, 0, 0), P(6, 6, 0), c])}" fill="var(--iso-right)" opacity=".85"/>`);
out.push(box(0, 0, -0.5, 6, 6, 0.5));
// 바닥 타일 줄눈
for (let i = 1; i < 6; i++) {
  out.push(`<polyline points="${pts([P(i, 0, 0), P(i, 6, 0)])}" stroke="var(--iso-line)" stroke-width="1" fill="none"/>`);
  out.push(`<polyline points="${pts([P(0, i, 0), P(6, i, 0)])}" stroke="var(--iso-line)" stroke-width="1" fill="none"/>`);
}
// 뒤쪽부터(x+y 작은 것부터) 그린다
// 탑 + 돔
out.push(box(0.4, 0.4, 0, 1.6, 1.6, 4.2));
out.push(box(0.6, 0.6, 4.2, 1.2, 1.2, 0.35, 'accent'));
const dc = P(1.2, 1.2, 4.55);
out.push(`<path d="M${(dc[0] - 34).toFixed(1)},${dc[1].toFixed(1)} a34,34 0 0 1 68,0 z" fill="#7060e0"/><path d="M${dc[0].toFixed(1)},${(dc[1] - 34).toFixed(1)} a34,34 0 0 1 34,34 h-34 z" fill="#5040c8"/>`);
// 탑 창(아치)
const w1 = P(1.2, 2.0, 2.4);
out.push(`<path d="M${(w1[0] - 7).toFixed(1)},${(w1[1] + 22).toFixed(1)} v-16 a7,7 0 0 1 14,0 v16 z" fill="var(--iso-window)"/>`);
// 오른쪽 높은 단 + 계단
out.push(box(3.9, 0.3, 0, 1.8, 1.8, 2.5));
for (let k = 0; k < 4; k++) out.push(box(4.2, 2.1 + 0.5 * k, 0, 1.2, 0.5, 2.5 - 0.6 * (k + 1)));
// 목표 표시(단 위 마름모)
const g = [P(4.55, 0.95, 2.5), P(5.05, 0.95, 2.5), P(5.05, 1.45, 2.5), P(4.55, 1.45, 2.5)];
out.push(`<polygon class="hs-goal" points="${pts(g)}" fill="#a0f0d8"/>`);
// 아치 문(두 기둥 + 상인방)
out.push(box(1.2, 4.2, 0, 0.45, 0.45, 2.1));
out.push(box(2.85, 4.2, 0, 0.45, 0.45, 2.1));
out.push(box(1.2, 4.2, 2.1, 2.1, 0.45, 0.4, 'blue'));
// 앞쪽 낮은 블록
out.push(box(4.4, 4.4, 0, 1.2, 1.2, 0.6, 'mint'));
out.push(`</g>`);
// 떠 있는 큐브
out.push(`<g class="hs-float">${box(5.4, 3.2, 3.6, 0.8, 0.8, 0.8, 'accent')}</g>`);
out.push(`<g class="hs-float hs-float-2">${box(-0.6, 4.4, 2.8, 0.5, 0.5, 0.5, 'mint')}</g>`);

const svg = `<svg class="hero-scene" viewBox="0 0 430 460" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hs-sun"><stop offset="0" stop-color="#a0f0d8" stop-opacity=".9"/><stop offset="1" stop-color="#a0f0d8" stop-opacity="0"/></radialGradient></defs>${out.join('')}</svg>`;
process.stdout.write(svg);
