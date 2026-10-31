#!/usr/bin/env bash
# 프로젝트 저장소를 읽기 전용으로 가져온다 (blobless 얕은 clone + sparse checkout).
#   bash .claude/scripts/fetch-repo.sh 1Seong/SQUARE-ERAUQS                 # portfolio/ 만
#   bash .claude/scripts/fetch-repo.sh 1Seong/SQUARE-ERAUQS Assets/Scripts  # 추가 경로
# 체크아웃하지 않은 파일도 `git -C <dir> show HEAD:<path>` / `git -C <dir> ls-tree -r --name-only HEAD`로 읽을 수 있다.
# 저장 위치는 <TMP>/repos/owner__repo 이고, <TMP>는 check-portfolio.mjs와 같은 node os.tmpdir()다
# (Windows: C:/Users/<you>/AppData/Local/Temp, Linux: /tmp). 출력되는 경로를 그대로 git -C에 쓴다.
# push가 필요하면 이 사본이 아니라 content.md의 "저장소 접근"에 적힌 로컬 clone을 쓴다.
set -euo pipefail
repo="${1:?usage: fetch-repo.sh owner/repo [path...]}"; shift || true
tmp="${PORTFOLIO_TMP:-$(node -p "require('os').tmpdir().replace(/\\\\/g, '/')")}"
dir="$tmp/repos/${repo/\//__}"
export GIT_LFS_SKIP_SMUDGE=1
if [ -d "$dir/.git" ]; then
  git -C "$dir" fetch -q --depth 1 --filter=blob:none origin HEAD
  git -C "$dir" checkout -q FETCH_HEAD
else
  mkdir -p "$tmp/repos"
  git clone -q --depth 1 --filter=blob:none --sparse "https://github.com/$repo" "$dir"
fi
git -C "$dir" sparse-checkout set portfolio "$@"
echo "$dir @ $(git -C "$dir" rev-parse HEAD)"
