---
name: portfolio-check
description: 포트폴리오 전체를 점검한다. 데이터 구조, 누락된 asset, 깨진 codeUrl, 렌더링 오류, 오탈자, 포폴 문구와 샘플 코드의 불일치를 찾는다. "포폴 점검해줘", "링크 깨진 거 있어?", "지원 전에 전체 검토"처럼 요청할 때, 그리고 큰 수정을 마친 뒤 사용한다. 기본적으로 고치지 않고 보고만 한다.
---

# portfolio-check — 전체 점검 (보고 위주)

## 1. 자동 검사

```bash
node .claude/scripts/check-portfolio.mjs --remote --render
```

- `✖`는 실제 문제다. `⚠`는 의도된 상태일 수 있다. CLAUDE.md의 "현재 남아 있는 경고"와 비교해 새로 생긴 것만 강조한다.
- `/tmp/portfolio-render/home.png`와 `detail-*.png`를 열어 텍스트 넘침, 빈 섹션, 깨진 이미지가 있는지 본다. 이미지가 길면 PIL로 잘라서 본다.
- 외부 폰트나 CDN 로드 실패는 샌드박스 네트워크 때문일 수 있으므로 무시한다.

## 2. 수동 검토 (자동 검사가 못 잡는 것)

- **오탈자와 표기**: 책 제목, 기관명, 날짜 형식(`YYYY.MM`)이 맞는지, 같은 고유명사를 일관되게 표기했는지 본다.
- **사실 일관성**: `meta.team`, `meta.year`, `activities`, `AWARDS`, `MILESTONE_SUMMARY`가 서로 맞는지 본다.
  예: 팀 프로젝트 수와 실제 팀 프로젝트 수.
- **문구 ↔ 샘플**: 프로젝트를 골라(요청이 없으면 메인 4개) `contributions[].solution`의 핵심 주장이 `codeUrl` 문서에 실제로 있는지 대조한다.
  ```bash
  bash .claude/scripts/fetch-repo.sh <owner/repo>
  ```
- **샘플 원본 최신성**: 각 README의 기준 커밋 이후 원본 경로가 바뀌었는지 확인한다.
  ```bash
  git -C <dir> fetch -q --depth=200 origin HEAD
  git -C <dir> log --oneline <sha>..HEAD -- <path>
  ```
  얕은 clone에 해당 SHA가 없으면 깊이를 늘린다.
- **문체 일탈**: CLAUDE.md 문체 규칙에서 벗어난 항목을 찾는다(마침표, 길이 초과, 근거 없는 수치).

## 3. 보고

다음 세 등급으로 묶어 짧게 보고한다. 각 항목에는 `파일:줄`과 제안 수정안을 붙인다.

1. 깨짐: 링크, asset, 렌더 오류
2. 사실 또는 정확성: 문구와 코드 불일치, 오래된 원본
3. 다듬기: 오탈자, 문체

사용자가 고치라고 하면 `portfolio-sync` 또는 `sample-code` 스킬의 절차대로 수정한다.
