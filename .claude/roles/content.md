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

샘플 코드 문서(`portfolio/**`)를 고친 뒤에는 서브에이전트 `content-reviewer`에 문서 품질 검토를 맡긴다(요청 시 또는 큰 수정 뒤).

## 자동 최종 검토 루프 (사용자가 부르지 않아도 한다)

`portfolio-data.js`의 값이나 `assets/projects/**`를 바꾼 작업은, **커밋해 작업 브랜치에 push하고 보고하기 전에** 이 루프를 돈다.
오탈자 한두 개처럼 화면 인상이 바뀌지 않는 수정만 했으면 건너뛰고, 건너뛴 사실을 보고에 적는다.

1. **검토**: 서브에이전트 `recruiter-reviewer`(`.claude/agents/recruiter-reviewer.md`)를 부른다.
   범위는 이번에 바꾼 프로젝트 id와 홈(첫 화면·프로젝트 목록)이다. 2회차부터는 이전 회차 보고의 발견 목록을 함께 넘긴다.
2. **판정**: 품질 기준을 만족하면 루프를 끝낸다.
   - **품질 기준**: 내용 세션이 고칠 수 있는 발견 중 **치명 0건, 중요 0건**
   - 디자인 세션 몫, 사용자만 아는 사실이 필요한 발견은 판정에서 빼고 메모·질문으로 모은다.
3. **목표 설정**: 남은 내용 발견 가운데 이번 회차에 고칠 것을 효과가 큰 순서로 고르고, 회차 목표를 한 줄로 적는다.
   (예: "2회차 목표: unity_loop 카드에서 미구현 범위가 완성으로 읽히지 않게 summary와 칩 정리")
4. **수정**: 목표에 든 항목만 고친다. 문체 규칙, 칩 규칙, 데이터 계약을 지키고, 근거 없는 사실은 만들지 않는다. 빠른 검사(`check-portfolio.mjs`) 오류 0을 확인한다.
5. 1로 돌아간다. **루프는 최대 3회**다. 3회차 검토 뒤에도 기준을 넘지 못하면 멈추고, 남은 발견을 그대로 보고한다.

- 루프 중 수정은 회차마다 따로 커밋해도 되고 마지막에 한 번에 커밋해도 된다. push는 작업 브랜치에만 하고, `main`은 기존 규칙대로 사용자 승인 뒤에만 한다.
- 이전 회차에 고친 것이 다시 지적되거나, 고친 것 때문에 새 문제가 생기면 같은 방향으로 더 밀지 않고 보고에 적는다.
- 보고에는 회차별 목표, 고친 것, 판정 변화(예: 치명 1·중요 3 → 치명 0·중요 1 → 통과)와 남은 디자인 메모·사용자 질문을 넣는다.

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

### 카드 칩(`badges`) 규칙

칩은 채용 담당자가 카드에서 "무엇을 맡아 어떤 성과를 냈는지"를 바로 읽는 자리다. 최대 3개, 각 12자 안팎.

1. `primary` 1개: **내 역할** (예: 리드 프로그래머, 풀스택, 클라이언트 단독, 1인 개발). `role`과 맞아야 한다.
2. `sub`: **성과·검증**이 있으면 먼저 (Steam 출시, PlayX4 전시, 공모전 출품). 출처가 `AWARDS`나 `links`에 있어야 한다.
3. `sub`: 엔진을 뺀 **핵심 기술·특징** (Supabase · PostgreSQL, OpenAI API, Android 이식).

- 장르는 `subtitle`, 엔진·플랫폼·팀 규모는 `meta` 줄이 보여 주므로 칩에 다시 쓰지 않는다. "Unity · C#"처럼 모든 카드에 같은 칩도 쓰지 않는다.
- 메인 카드의 `tags`는 비워 둔다(칩과 같은 모양이라 반복돼 보인다).

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
