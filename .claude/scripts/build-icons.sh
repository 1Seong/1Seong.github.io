#!/usr/bin/env bash
# Tabler Icons 웹폰트에서 index.html / portfolio-data.js가 실제로 쓰는 아이콘만 추려
# assets/vendor/tabler-icons/ 에 서브셋 폰트(woff2)와 CSS를 만든다.
# CDN 의존을 없애서, 실제 사이트와 샌드박스 렌더 모두 아이콘이 깨지지 않게 한다.
#
# 사용: bash .claude/scripts/build-icons.sh
# 새 아이콘(ti-xxx)을 쓰면 다시 실행한다. check-portfolio.mjs가 누락을 경고한다.
# 필요: curl, python3 + fonttools, brotli (없으면 pip install fonttools brotli)
set -euo pipefail

VERSION="3.19.0"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/assets/vendor/tabler-icons"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

python3 -c "import fontTools, brotli" 2>/dev/null || pip install -q fonttools brotli

curl -sSfL -o "$WORK/t.tgz" "https://registry.npmjs.org/@tabler/icons-webfont/-/icons-webfont-$VERSION.tgz"
tar xzf "$WORK/t.tgz" -C "$WORK"

ICONS="$(grep -ohE '\bti-[a-z0-9]+(-[a-z0-9]+)*' "$ROOT/index.html" "$ROOT/portfolio-data.js" | sort -u)"
mkdir -p "$OUT"

python3 - "$WORK/package/dist" "$OUT" "$VERSION" $ICONS <<'PY'
import re, sys, os
from fontTools import subset
dist, out, ver, *icons = sys.argv[1:]
css = open(os.path.join(dist, 'tabler-icons.css'), encoding='utf8').read()
glyphs = dict(re.findall(r'\.(ti-[a-z0-9-]+):before\s*\{\s*content:\s*"\\([0-9a-f]+)"', css))
missing = [i for i in icons if i not in glyphs]
used = [i for i in icons if i in glyphs]
if missing:
    print('⚠ Tabler에 없는 아이콘(무시):', ' '.join(missing))
opts = subset.Options(); opts.flavor = 'woff2'; opts.layout_features = []
font = subset.load_font(os.path.join(dist, 'fonts', 'tabler-icons.ttf'), opts)
for t in ('GSUB', 'GPOS', 'GDEF'):  # 원본의 리거처 테이블이 fontTools에서 깨져 읽히므로 제외 (코드포인트로만 사용)
    if t in font: del font[t]
s = subset.Subsetter(opts); s.populate(unicodes=[int(glyphs[i], 16) for i in used]); s.subset(font)
subset.save_font(font, os.path.join(out, 'tabler-icons-subset.woff2'), opts)
rules = '\n'.join(f'.{i}:before{{content:"\\{glyphs[i]}"}}' for i in used)
open(os.path.join(out, 'tabler-icons-subset.css'), 'w', encoding='utf8').write(
f'''/* Tabler Icons v{ver} (MIT) — 사용 중인 아이콘 {len(used)}개만 포함한 서브셋.
   생성: bash .claude/scripts/build-icons.sh (직접 편집하지 말 것) */
@font-face{{font-family:"tabler-icons";font-style:normal;font-weight:400;font-display:block;
src:url("tabler-icons-subset.woff2") format("woff2")}}
.ti{{font-family:"tabler-icons"!important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;
text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}}
{rules}
''')
print(f'아이콘 {len(used)}개 → {out}')
PY
cp "$WORK/package/LICENSE" "$OUT/LICENSE"
ls -la "$OUT"
