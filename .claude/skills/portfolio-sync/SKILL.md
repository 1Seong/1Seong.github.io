---
name: portfolio-sync
description: 연결된 게임 프로젝트 저장소(GitHub)의 실제 코드·커밋을 읽고 portfolio-data.js의 프로젝트 항목(요약, 기여, 트러블슈팅, 최적화, 기술 스택, 링크)을 추가하거나 갱신한다. "포폴에 반영해줘", "새 프로젝트 추가", "이 기능 기여 항목으로 넣어줘", "저장소 보고 내용 업데이트"처럼 포트폴리오 내용 수정을 요청할 때 사용한다.
---

# portfolio-sync — 프로젝트 저장소 → 포폴 데이터

먼저 저장소 루트의 `CLAUDE.md`(스키마, 문체 규칙, 매핑표)를 읽고 따른다. 디자인(`index.html`)은 건드리지 않는다.

## 1. 대상 파악

- 어느 프로젝트(`PROJECTS.<id>`)의 어느 항목을 다루는지 정한다. 모호하면 사용자에게 한 번만 묻는다.
- 현재 항목을 읽는다. `portfolio-data.js`에서 해당 `id:` 블록을 찾아 contributions, troubleshooting, optimizations, detail까지 본다.
- 같은 프로젝트의 기존 항목 수, 길이, 톤을 기준으로 삼는다.

## 2. 저장소 조사 (사실 확인)

```bash
bash .claude/scripts/fetch-repo.sh <owner/repo> [Assets/Scripts ...]
git -C /tmp/repos/<owner__repo> ls-tree -r --name-only HEAD | grep -i <키워드>
git -C /tmp/repos/<owner__repo> show HEAD:<path>
```

- 기존 샘플(`portfolio/<topic>/README.md`, `coverage.md`)을 먼저 읽는다. 이미 정리된 설명이 가장 정확한 출처다.
- 커밋 작성자로 본인 기여 범위를 확인할 수 있다. 얕은 clone이라 이력이 필요하면 `git -C <dir> fetch --depth=200 origin HEAD` 또는 `mcp__github__list_commits`(author 필터)를 쓴다.
- 문장마다 근거가 되는 원본 파일과 함수를 확인한다. 근거가 없는 주장(성능 수치, 패턴명, 담당 범위)은 쓰지 않는다. 대신 사용자에게 확인을 요청한다.

## 3. 작성

- 스키마는 CLAUDE.md의 "PROJECTS 스키마 요약"을 따르고, 문체는 "문체 규칙"을 따른다.
- 기여 항목: `goal` 1줄(20~30자), `solution` 2개(각 40~85자), `category`는 `CONTRIB_CATS` 키 중 하나로 쓴다.
- `codeUrl`은 해당 기능의 샘플 문서(`.../blob/main/portfolio/<topic>/README.md`)를 가리킨다.
  - 샘플이 아직 없으면 `sample-code` 스킬로 먼저 만들거나, 만들지 사용자에게 묻는다.
  - 원본 소스 파일에 직접 링크하는 것은 단일 파일로 충분할 때만 한다.
- 이미지나 영상이 새로 필요하면 `assets/projects/<dir>/`에 둔다. 파일이 없으면 경로를 지어내지 말고 사용자에게 요청한다.
- 새 프로젝트는 기존 서브 프로젝트 블록을 복제해 시작한다. `PROJECT_ORDER`에 넣는 위치(메인/서브)는 사용자에게 확인한다.
- 수정 범위는 요청받은 항목으로 한정한다. 겸사겸사 다른 문장을 다듬지 않는다. 눈에 띄는 문제는 따로 보고만 한다.

## 4. 검증과 보고

```bash
node .claude/scripts/check-portfolio.mjs --remote --render
```

- 오류가 0개여야 한다. 바뀐 상세 페이지의 스크린샷(`/tmp/portfolio-render/detail-<id>.png`)을 직접 열어 문장 길이와 줄바꿈을 확인한다.
- 커밋하고 지정된 브랜치에 push한다.
- 사용자에게는 바뀐 항목, 각 문장의 근거(원본 파일), 확인이 필요한 점을 짧게 보고한다.
