# 포트폴리오 저장소 가이드

최성원(게임 클라이언트 프로그래머)의 포트폴리오 사이트(GitHub Pages)다.
작업은 **세션 단위로 역할을 나눠** 진행한다. 두 세션이 같은 파일을 동시에 고치지 않게 하는 것이 목적이다.

## 세션 역할 정하기 (가장 먼저)

| 역할 | 맡는 일 | 지침 |
| --- | --- | --- |
| **내용** | 프로젝트 저장소를 읽고 포폴 문구 갱신, 샘플 코드 문서 작성·정리 | `.claude/roles/content.md` |
| **디자인** | 레이아웃, 스타일, 반응형, 인터랙션, 렌더링 로직 | `.claude/roles/design.md` |

1. 사용자가 역할을 밝히면 해당 지침 파일을 **먼저 읽고** 그대로 따른다.
2. 역할을 밝히지 않았으면 첫 요청으로 판단한다.
   - 문구, 프로젝트 저장소, 샘플 코드, 링크 → 내용
   - 색, 배치, 애니메이션, 화면 깨짐 → 디자인
3. 애매하면 한 번 묻는다. 한 세션에서 정한 역할은 사용자가 바꾸라고 할 때까지 유지한다.
4. 자기 역할 밖의 수정이 필요하면 직접 고치지 않는다. 무엇이 왜 필요한지 정리해서 다른 세션에 넘길 메모로 사용자에게 전달한다.
   (사소한 오탈자처럼 충돌 위험이 없는 것은 예외로 한다)

## 파일 소유권

| 경로 | 소유 | 비고 |
| --- | --- | --- |
| `portfolio-data.js` — 값(문구, 링크, 미디어 경로) | 내용 | |
| `portfolio-data.js` — 스키마(필드 추가·이름 변경) | 디자인 | 아래 "데이터 계약"을 함께 갱신해야 한다 |
| `index.html` (CSS, 마크업, 렌더 함수) | 디자인 | |
| `assets/projects/**` | 내용 | 디자인용 장식 이미지는 `assets/` 아래 별도 폴더에 둔다 |
| `assets/vendor/**` | 디자인 | 로컬 아이콘 서브셋 등. `build-icons.sh`로 생성하며 직접 고치지 않는다 |
| 각 프로젝트 저장소의 `portfolio/**` | 내용 | |
| `CLAUDE.md`, `.claude/**` | 공통 | 규칙을 바꾸면 커밋 메시지에 남긴다 |

## 데이터 계약 (`portfolio-data.js` ↔ `index.html`)

두 세션이 공유하는 유일한 접점이다. **디자인 세션이 렌더러가 읽는 필드를 추가, 변경, 삭제하면 같은 커밋에서 이 절을 고친다.**
내용 세션은 이 절에 있는 필드만 쓴다.

- 전역: `PROFILE`, `MILESTONE_SUMMARY`, `SKILLS`, `BOOKS`, `AWARDS`, `OTHER_WORKS`, `PROJECT_ORDER`, `MAIN_PROJECT_IDS`, `PROJECTS`, `DETAIL_LINK_SLOTS`
- 홈 첫 화면의 '한눈에 보기' 패널은 `MILESTONE_SUMMARY`, `AWARDS.수상`, `AWARDS.시험및자격증`, 메인 프로젝트의 `title`·`subtitle`·첫 `primary` 배지·첫 `media` 썸네일을 그대로 보여 준다. 이 값들은 짧게 유지한다.
- 표시 순서는 `PROJECT_ORDER`, 메인 카드는 `MAIN_PROJECT_IDS`가 정한다. 나머지는 서브 프로젝트다.
  `showMore:false` 또는 `detail.showMore:false`이면 상세 페이지가 없다.
- `PROJECTS.<id>`: `id, title, subtitle, meta{engine,platform,team,year}, badges[{text,type:primary|sub}], media[{type:image|video,src,thumbnail?,label}], summary, goal, keyChallenges[], role[{name,icon,desc(HTML)}], activities[]`
- `contributions[]`: `{ title, category, goal, solution:[문자열 2개], codeUrl, codeLabel?, images[] }`
  - `goal`이 없으면 렌더러가 `desc`의 첫 문장으로 대체한다.
  - `category`는 `index.html`의 `CONTRIB_CATS` 키 중 하나다. 검사 스크립트가 이 목록을 직접 읽는다.
  - `codeLabel`의 기본값은 "GitHub 샘플 코드"다.
- `troubleshooting[]`: `{ title, problem, cause, solution, result, codeUrl? }`
- `optimizations[]`: `{ title, category, desc(HTML), codeUrl?, images[], comparison:{before:{src,alt,caption}, after:{...}} }`
- `retrospective`: `{ good, bad, images[] }` / `feedback`, `other_contributions`: `null` 또는 렌더러가 기대하는 형식
- `links[]`: `{ label, url }`
- `detail`: `{ coreContributionCount, techStack[], linkMap{슬롯:links의 label}, optimizations[{measurement,cause,improvement,result}] }`
- `codeUrl`은 `https://github.com/...`만 표시된다. 다른 호스트는 `renderCodeLink`가 숨긴다.
- 주석 처리된 블록(`/* technicalDecisions … */`, `// 예시 형식`)은 사용자가 일부러 끈 것이다. 요청이 없으면 되살리지 않는다.

## 검증 (역할과 무관하게 변경 후 항상)

```bash
node .claude/scripts/check-portfolio.mjs                       # 구조, asset, 카테고리 (빠름)
node .claude/scripts/check-portfolio.mjs --remote              # + codeUrl 대상 파일 실존
node .claude/scripts/check-portfolio.mjs --render              # + 메인/상세 렌더 오류, 스크린샷 <TMP>/portfolio-render/
node .claude/scripts/check-portfolio.mjs --render --mobile --only=<id>   # 모바일 뷰포트, 한 프로젝트만
```

- 로컬 환경(Windows)에서 쓰는 경로와 도구:
  - `<TMP>`는 node의 `os.tmpdir()`다. 이 PC에서는 `C:/Users/PC/AppData/Local/Temp`(Git Bash의 `/tmp`와 같은 곳)이고, 스크립트가 실제 경로를 출력한다.
    `fetch-repo.sh`, `--remote`, 스크린샷이 모두 이 아래(`repos/`, `portfolio-render/`, `portfolio-shots/`)를 쓴다.
  - playwright는 저장소 밖 `~/.portfolio-tools`에 설치한다(`npm i --prefix ~/.portfolio-tools playwright`). 모든 worktree가 함께 쓴다.
    브라우저는 설치된 Chrome(없으면 Edge)을 쓰므로 `playwright install`은 필요 없다. 저장소 루트에서 `npm i`를 하면 멈추니 하지 않는다.
  - GitHub 조회는 `gh` CLI(로그인 계정 `1Seong`)나 `git`으로 한다.

- `--render`는 끝에 "한눈에 보기" 지표(페이지 길이, Projects·Overview 시작 위치)를 출력한다.
- 화면 단위 스크린샷과 변경 전후 비교는 `node .claude/scripts/shot.mjs`를 쓴다(사용법은 파일 머리말).

- `portfolio-data.js`나 `index.html`을 편집하면 PostToolUse 훅이 빠른 검사를 자동으로 실행한다. 오류(✖)가 나오면 다음 작업 전에 고친다.
- 현재 남아 있는 경고 4개는 기존 상태이며 의도된 것일 수 있다. 요청이 없으면 고치지 않는다.
  (runepago 숨김, soulmate/runepago goal 없음, necromancer linkMap "Google Drive")

## Git

- **혼자 쓰는 저장소이므로 PR 없이 `main`에 바로 push한다** (사용자 승인 사항).
  이 저장소와 본인 소유의 프로젝트 저장소(`1Seong/*`)에 모두 적용한다.
  세션에 작업 브랜치가 지정돼 있으면 그 브랜치에도 같은 커밋을 push한다.
- **`main` push는 사용자 승인 후에만 한다.** 작업이 끝나면 커밋을 **세션 작업 브랜치에만** push하고(미리보기용),
  변경 요약(커밋 목록·바뀐 점·검사 결과)을 짧게 알린 뒤 멈춘다. 스크린샷은 요청이 있을 때만 보낸다.
  사용자는 그 브랜치를 받아 로컬에서 `index.html`을 열어 검토한다. "push"(또는 "main 반영")라고 승인하면 아래 절차로 `main`에 push한다.
  승인은 그 커밋 묶음에만 유효하다. 작업 브랜치가 없는 세션은 로컬 커밋까지만 하고 승인을 기다린다.
- 두 세션이 동시에 `main`에 push할 수 있다. push 직전에는 항상 다음을 실행한다.
  ```bash
  git fetch origin main && git rebase origin/main
  git push origin HEAD:main
  ```
  force push는 하지 않는다. rebase 충돌이 나면 파일 소유권 표에 따라 해결하고, 판단이 어려우면 멈추고 사용자에게 묻는다.
- 시작할 때도 `git fetch origin main`으로 상대 세션의 변경을 받는다. `schema:` 커밋이 있으면 데이터 계약 변경을 확인한다.
- `_config.yml`은 Pages 빌드에서 `CLAUDE.md`를 제외한다. `.claude/`는 점 폴더라 기본으로 제외된다.
