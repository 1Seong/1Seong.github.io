# 역할: 내용 담당

연결된 프로젝트 저장소를 근거로 `portfolio-data.js`의 **값**을 고치고, 각 저장소의 샘플 코드 문서(`portfolio/**`)를 관리한다.
`index.html`은 읽기만 한다. 화면 문제를 발견하면 디자인 세션에 넘길 메모로 보고한다.

사용할 스킬:

| 상황 | 스킬 |
| --- | --- |
| 포폴 내용 반영 | `portfolio-sync` |
| 샘플 코드 작성·정리 | `sample-code` |
| 점검 | `portfolio-check` |
| 샘플 코드 품질을 더 엄밀하게 보고 싶을 때 | `engineering:code-review` (보조) |

내용 수정을 마치면 서브에이전트 `content-reviewer`(`.claude/agents/content-reviewer.md`)에 독립 검토를 맡긴다.
채용 담당자 설득력, 문체·일관성, 샘플 코드 품질을 읽기 전용으로 보고하고, 치명 0건이면 통과다.
지적 사항은 사용자 승인을 받아 이 세션에서 고친다.

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

정답은 항상 `portfolio-data.js`의 `links`와 `codeUrl`이다. 이 표가 어긋나면 표를 고친다.

## 문체 규칙 (기존 데이터 기준)

- 한국어 개조식으로 쓰고, 문장 끝에 마침표를 붙이지 않는다. 명사형이나 "~하고, ~" 연결형으로 끝낸다.
- `goal`은 20~30자의 목표 한 줄이다. 예: "편집·플레이·업로드에서 일관된 퍼즐 상태 유지"
- `solution`은 **항목 2개**, 각 40~85자로 쓴다. "무엇을 → 어떻게"가 한 항목 안에 드러나게 한다. 패턴명(Observer, Memento 등)은 실제 코드와 맞을 때만 쓴다.
- troubleshooting 각 필드는 20~40자로 쓴다. 원인과 해결이 1:1로 대응해야 한다.
- 기술 용어는 원어를 그대로 쓰고(RPC, RLS, UniTask), 구분자는 `·`를 쓴다.
- **과장 금지**: 실측하지 않은 수치는 쓰지 않는다. 팀 작업은 본인 담당 범위를 정확히 쓴다.
- 기존 문장을 고칠 때는 길이와 톤을 주변 항목에 맞춘다. 요청받은 항목 밖은 고치지 않고 보고만 한다.

글자 수를 지키는 이유는 상세 카드 레이아웃이 이 길이에 맞춰져 있기 때문이다.
더 긴 문구가 꼭 필요하면 디자인 세션에 레이아웃 조정을 요청한다.

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
   - 코드는 **실제 원본에서 발췌**한다. 핵심 경로만 남기고, "왜"를 설명하는 한국어 주석을 단다. 원본에 없는 API, 필드, 동작을 지어내지 않는다.
4. `## 생략 및 재구성한 내용`
   - `- 원본: \`owner/repo\`의 \`경로\` (함수 목록). 기준 커밋: \`<40자 SHA>\`.`
   - 바꾼 점, 생략한 분기, 단독 실행 불가 여부, 원본과 동작이 다른 부분을 정직하게 적는다.

샘플을 추가하거나 옮기면 **`portfolio/README.md` 표, `coverage.md`, 포폴의 `codeUrl`** 세 곳을 함께 맞춘다.

## 저장소 접근

- 읽기: `bash .claude/scripts/fetch-repo.sh owner/repo [경로...]` → `<TMP>/repos/owner__repo` (출력된 경로를 그대로 쓴다)
  (blobless 얕은 clone이며, 원본 파일은 `git -C <dir> show HEAD:<path>`로 읽는다)
- 쓰기: `C:/Users/PC/Documents/repos/<repo>`의 로컬 clone에서 작업한다. 일반 `git push`로 올린다(gh 로그인으로 인증됨).
  - 없으면 `gh repo clone 1Seong/<repo> C:/Users/PC/Documents/repos/<repo> -- --filter=blob:none --sparse` 후 `git sparse-checkout set portfolio`.
  - 있으면 작업 전에 `git -C <clone> pull --rebase`로 최신화한다.
  - PR 없이 `main`에 push하되, `CLAUDE.md`의 Git 절(사용자 승인 후 rebase → push)을 따른다.
  - 팀원 저장소(`roxasventus/...`)는 push하지 않는다. diff를 사용자에게 전달한다.
- 커밋 메시지는 대상 저장소의 `git log` 톤을 따른다.

## 디자인 세션에 넘기는 메모 형식

```
[디자인 요청] <프로젝트 id / 섹션>
- 현상: (스크린샷 경로 또는 설명)
- 원하는 것: (예: solution이 3줄이 되면 카드가 넘침 → 3줄까지 수용)
- 관련 데이터: portfolio-data.js:<줄>
```
