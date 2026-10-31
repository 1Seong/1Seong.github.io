---
name: sample-code
description: 포트폴리오 상세 페이지의 codeUrl이 가리키는 프로젝트 저장소의 샘플 코드 문서(portfolio/<topic>/README.md)를 새로 만들거나 다듬는다. 원본 코드와 대조해 발췌를 정확하게 맞추고, 주석·도식·생략 내용을 정리하며, portfolio/README.md·coverage.md·codeUrl을 동기화한다. "샘플 코드 다듬어줘", "코드 링크 정리", "이 기능 샘플 만들어줘"처럼 요청할 때 사용한다.
---

# sample-code — 샘플 코드 문서 작성·정리

먼저 `CLAUDE.md`의 "샘플 코드 문서 규칙"을 읽는다. 기존 36개 문서가 모두 같은 양식을 쓰므로 새 문서도 그대로 맞춘다.

## 1. 대상과 원본 확보

1. `portfolio-data.js`에서 대상 항목의 `codeUrl`과 문구(`title`, `goal`, `solution`)를 확인한다. 샘플은 이 문구를 **뒷받침해야** 한다.
2. 프로젝트 저장소를 받는다.
   ```bash
   bash .claude/scripts/fetch-repo.sh <owner/repo>
   ```
3. 대상 README의 `## 생략 및 재구성한 내용`에서 원본 경로와 **기준 커밋**을 읽는다. 원본은 HEAD와 기준 커밋 양쪽에서 비교한다.
   ```bash
   git -C <dir> fetch -q --depth=1 --filter=blob:none origin <sha>
   git -C <dir> show <sha>:<path>
   git -C <dir> show HEAD:<path>
   ```

## 2. 점검 체크리스트

- [ ] **정확성**: 발췌한 메서드, 필드, 호출 순서가 원본과 같은가? 원본에 없는 API나 이름을 쓰지 않았는가? 재구성한 부분은 `생략 및 재구성한 내용`에 적혀 있는가?
- [ ] **포폴 문구 대응**: `solution`에서 주장한 내용(패턴명, 처리 순서, 최적화)이 코드에 실제로 드러나는가?
- [ ] **컴파일 가능성**: 괄호, 타입, `async`/`await`(UniTask), 제네릭 문법이 맞는가? 단독 실행이 안 되면 그 사실을 적었는가?
- [ ] **주석**: 무엇을 하는지가 아니라 **왜 그렇게 하는지**를 한국어로 짧게 적었는가? 군더더기 주석이나 원본의 디버그 로그는 뺐는가?
- [ ] **분량**: 핵심 경로 위주로 코드 블록 1~3개 정도인가? 반복되는 분기는 "나머지 N방향도 동일" 같은 주석으로 줄였는가?
- [ ] **도식**: mermaid가 공통 init 블록을 쓰고, 노드 라벨은 `"..."`로 감쌌는가? 흐름이 코드 순서와 일치하는가?
- [ ] **담당자**: 팀 작업에서 본인과 팀원의 범위를 정확히 나눴는가? (README 표와 담당자 줄이 같아야 한다)
- [ ] **원본 표기**: `- 원본: \`owner/repo\`의 \`경로\` (함수 목록). 기준 커밋: \`<40자 SHA>\`.` 형식을 지켰는가? 원본을 다시 대조했다면 SHA를 그 커밋으로 갱신했는가?
- [ ] **동기화**: `portfolio/README.md` 표, `coverage.md` 행, 포폴의 `codeUrl`, `codeLabel`이 모두 일치하는가?
- [ ] **보안**: API 키, Supabase URL과 anon key, 토큰, 내부 경로가 들어가지 않았는가? 필요하면 `"<SUPABASE_URL>"`처럼 가린다.

문제를 찾으면 고치되, 원본과 다른 동작을 "개선"해서 넣지 않는다. 샘플은 실제 구현을 보여주는 문서다.

## 3. 반영 (프로젝트 저장소에 push)

1. `add_repo`에 `owner`, `repo`, `access:"push"`를 넘겨 첨부한 뒤, 안내받은 경로(`/home/user/<repo>`)에 clone한다.
   Unity 저장소는 크므로 `--depth 1 --filter=blob:none --sparse`로 받고 `git sparse-checkout set portfolio`를 쓴다.
2. 작업 브랜치를 만들어 커밋한다. 메시지 예시는 `docs: clarify undo snapshot scope in gameplay sample`이다. 같은 저장소의 `git log`에서 톤을 확인한다.
3. 브랜치를 push한다. `main`에 반영하거나 PR을 만드는 것은 사용자가 요청할 때만 한다.
   `codeUrl`은 `main`을 가리키므로, 반영 전에는 포폴 링크가 바뀌지 않는다는 점을 보고에 적는다.
4. 팀원 저장소(`roxasventus/...`)는 push하지 않는다. 수정한 파일 내용이나 diff를 사용자에게 전달한다.

## 4. 포폴 쪽 동기화와 검증

- 폴더 이름이 바뀌거나 문서가 추가되면 `portfolio-data.js`의 `codeUrl`도 고친다. 이 저장소의 지정 브랜치에 커밋한다.
- 검증 명령:
  ```bash
  node .claude/scripts/check-portfolio.mjs --remote
  ```
  `--remote`는 각 저장소의 기본 브랜치 HEAD를 기준으로 하므로, 아직 main에 반영하지 않은 새 파일은 "없음"으로 나올 수 있다.
- 보고에는 항목별로 무엇을 왜 고쳤는지, 원본과 대조한 커밋, 사용자가 판단할 점(예: 담당 범위 표현)을 적는다.
