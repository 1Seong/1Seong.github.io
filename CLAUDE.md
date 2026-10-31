# 포트폴리오 수정 에이전트 가이드

이 저장소는 최성원(게임 클라이언트 프로그래머)의 포트폴리오 사이트(GitHub Pages)다.
이 세션의 역할은 **내용 담당**이다.

1. 연결된 프로젝트 저장소를 읽고 `portfolio-data.js`의 내용을 갱신한다.
2. 상세 페이지의 `codeUrl`이 가리키는 샘플 코드 문서(`<프로젝트 저장소>/portfolio/<topic>/README.md`)를 작성하고 다듬는다.

**디자인은 다른 세션이 담당한다.** `index.html`의 CSS·마크업·렌더링 로직은 바꾸지 않는다.
기존 필드와 양식만 사용한다. 새 필드가 꼭 필요하면 데이터에 넣기 전에 사용자에게 먼저 묻는다.
(`index.html` 편집은 설정에서 `ask`로 묶여 있다.)

## 파일 구조

| 파일 | 역할 |
| --- | --- |
| `portfolio-data.js` | **모든 내용**: PROFILE, SKILLS, BOOKS, AWARDS, OTHER_WORKS, PROJECTS 등 |
| `index.html` | 렌더링과 디자인 (수정 금지, 읽기만) |
| `assets/projects/<dir>/` | 프로젝트 이미지와 영상 |
| `.claude/scripts/check-portfolio.mjs` | 데이터 검증 스크립트 (아래 참고) |
| `.claude/scripts/fetch-repo.sh` | 프로젝트 저장소를 `/tmp/repos`에 읽기 전용으로 sparse clone |

## 프로젝트 ↔ 저장소 매핑

| id | 제목 | 저장소 | assets |
| --- | --- | --- | --- |
| `eulerian_aurora` | Eulerian Aurora (메인) | `1Seong/EulerianAurora` | `aurora` |
| `square_erauqs` | SQUARE::ERAUQS (메인) | `1Seong/SQUARE-ERAUQS` | `square` |
| `save_the_world` | Save The World (메인) | `1Seong/SaveTheWorld` | `stw` |
| `omakhase` | 오,막하세! (메인) | `1Seong/OMakHase` | `omak` |
| `detective_ai` | Detective A&I | `1Seong/DetectiveAI` | `dai` |
| `hell_pit` | Hell Pit | `1Seong/hell-pit` | `hellpit` |
| `necromancer_survivors` | Necromancer Survivors | `roxasventus/CIEN-tutorial-project-team2` (**팀원 소유, push 불가**) | `nec` |
| `soulmate_system` | Soulmate System | (상세 없음, `showMore:false`) | `soul` |
| `runepago` | RUNEpago | `1Seong/unijam2025` (`PROJECT_ORDER`에 없어 현재 숨김) | — |

이 표는 바뀔 수 있다. 정답은 항상 `portfolio-data.js`의 `links`와 `codeUrl`이다.

## PROJECTS 스키마 요약

- 표시 순서는 `PROJECT_ORDER`, 메인 카드는 `MAIN_PROJECT_IDS`가 정한다. 나머지는 서브 프로젝트로 표시된다.
- `showMore:false` 또는 `detail.showMore:false`이면 상세 페이지가 없다.
- `contributions[]`: `{ title, category, goal, solution:[2개], codeUrl, codeLabel?, images[] }`
  - `category`는 `index.html`의 `CONTRIB_CATS` 키 중 하나를 쓴다 (게임플레이, 기믹, 물리, 그래픽, 셰이더, UI, UX, 백엔드, DB, 인증, 네트워크, 에디터 …).
  - `codeLabel`의 기본값은 "GitHub 샘플 코드"다. 재구성 예시 등 범위가 다를 때만 쓴다.
- `troubleshooting[]`: `{ title, problem, cause, solution, result, codeUrl? }`
- `optimizations[]`: `{ title, category, desc(HTML), codeUrl?, images[], comparison:{before,after} }`
- `detail`: `{ coreContributionCount, techStack[], linkMap{슬롯:links라벨}, optimizations[{measurement,cause,improvement,result}] }`
- `links[]`: `{ label, url }`. 상세 개요에는 `DETAIL_LINK_SLOTS`/`linkMap`에 해당하는 링크만 나온다.
- `codeUrl`은 **반드시 `https://github.com/.../blob/<branch>/...`** 형식이어야 한다. 다른 호스트는 렌더러가 조용히 숨긴다.
- 주석 처리된 블록(`/* technicalDecisions … */`, `// 예시 형식`)은 사용자가 일부러 끈 것이다. 요청이 없으면 되살리지 않는다.

## 문체 규칙 (기존 데이터 기준)

- 한국어 개조식으로 쓰고, 문장 끝에 마침표를 붙이지 않는다. 명사형이나 "~하고, ~" 연결형으로 끝낸다.
- `goal`은 20~30자의 목표 한 줄이다. 예: "편집·플레이·업로드에서 일관된 퍼즐 상태 유지"
- `solution`은 **항목 2개**, 각 40~85자로 쓴다. "무엇을 → 어떻게"가 한 항목 안에 드러나게 한다. 패턴명(Observer, Memento 등)은 실제 코드와 맞을 때만 쓴다.
- troubleshooting 각 필드는 20~40자로 쓴다. 원인과 해결이 1:1로 대응해야 한다.
- 기술 용어는 원어를 그대로 쓰고(RPC, RLS, UniTask), 구분자는 `·`를 쓴다.
- **과장 금지**: 실측하지 않은 수치는 쓰지 않는다. 프로파일링 자료가 없으면 "요청 흐름 점검"처럼 사실만 쓴다. 팀 작업은 본인 담당 범위를 정확히 쓴다.
- 기존 문장을 고칠 때는 길이와 톤을 주변 항목에 맞춘다.

## 샘플 코드 문서 규칙 (프로젝트 저장소의 `portfolio/`)

```
portfolio/
  README.md        # "# <게임명> 샘플 코드" + | 항목 | 담당자 | 표
  coverage.md      # 포폴 항목 ↔ 샘플 폴더 ↔ 범위 대응표
  <topic>/README.md
```

각 `<topic>/README.md`의 양식:

1. `# 제목` (포폴 contribution 제목과 같거나 더 구체적인 제목)
2. `**담당자:** 최성원 — 담당 범위` (팀 작업이면 공통부와 본인 부분을 나눠 적는다)
3. `## 코드`
   - 한두 문장 개요 → mermaid 도식 → `**클래스/메서드:** 역할` 설명 → 코드 블록 순서로 쓴다.
   - mermaid는 맨 앞에 저장소 공통 `%%{init: {"htmlLabels": false, ...}}%%` 블록을 그대로 복사해 쓴다.
   - 코드는 **실제 원본에서 발췌**한다. 핵심 경로만 남기고, "왜"를 설명하는 한국어 주석을 단다.
   - 원본에 없는 API, 필드, 동작을 지어내지 않는다.
4. `## 생략 및 재구성한 내용`
   - `- 원본: \`owner/repo\`의 \`경로\` (함수 목록). 기준 커밋: \`<40자 SHA>\`.`
   - 바꾼 점, 생략한 분기, 단독 실행 불가 여부, 원본과 동작이 다른 부분을 정직하게 적는다.

샘플을 추가하거나 옮기면 같은 커밋에서 **`portfolio/README.md` 표, `coverage.md`, 포폴의 `codeUrl`** 세 곳을 함께 맞춘다.

## 저장소 접근과 커밋

- 읽기: `bash .claude/scripts/fetch-repo.sh owner/repo [경로...]` → `/tmp/repos/owner__repo`
  (blobless 얕은 clone이며, 원본 파일은 `git -C <dir> show HEAD:<path>`로 읽는다)
- 쓰기(샘플 수정 push): `add_repo`에 `access:"push"`를 넘긴다. 그러면 `/home/user/<repo>`에 따로 clone하고 거기서 작업한다.
  팀원 저장소(`roxasventus/...`)는 push하지 않는다. 변경안만 만들어 사용자에게 전달한다.
- 프로젝트 저장소에는 **작업 브랜치를 만들어 push**한다. `main`에 직접 push하거나 PR을 만드는 것은 사용자가 요청했을 때만 한다.
- 이 저장소는 세션에서 지정한 브랜치에 커밋하고 push한다.
- 커밋 메시지는 기존 스타일(영문 명령형 또는 짧은 한국어)을 따른다.

## 검증 (변경 후 항상)

```bash
node .claude/scripts/check-portfolio.mjs            # 구조, asset, 카테고리
node .claude/scripts/check-portfolio.mjs --remote   # + codeUrl 대상 파일 실존 확인
node .claude/scripts/check-portfolio.mjs --render   # + 메인/상세 렌더 오류, 스크린샷 /tmp/portfolio-render/
```

`portfolio-data.js`를 편집하면 PostToolUse 훅이 기본 검사를 자동으로 실행한다.
오류가 나오면 이어서 작업하기 전에 고친다.
현재 남아 있는 경고(runepago 숨김, soulmate goal 없음, necromancer linkMap)는 기존 상태이며 의도된 것일 수 있다.
사용자가 요청하지 않으면 고치지 않는다.
