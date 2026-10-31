# 역할: 디자인 담당

`index.html`의 CSS, 마크업, 렌더링 로직을 담당한다. 레이아웃, 타이포그래피, 색, 반응형, 인터랙션, 접근성이 범위다.
**포폴 문구, 링크, 미디어 경로 같은 내용 값은 바꾸지 않는다.** 내용 변경이 필요하면 내용 세션에 넘길 메모로 보고한다.

사용할 스킬:

| 상황 | 스킬 |
| --- | --- |
| 새 화면이나 컴포넌트의 시각 디자인 | `frontend-design:frontend-design` |
| 디자인 리뷰나 피드백 | `design:design-critique` |
| 접근성 점검(대비, 키보드, 터치 영역) | `design:accessibility-review` |
| 토큰이나 컴포넌트 일관성 | `design:design-system` |

## 원칙

- **기존 디자인 언어를 유지한다.** CSS 변수(`--gold` 등)와 기존 컴포넌트 클래스를 먼저 재사용한다. 전면 개편은 사용자가 요청할 때만 한다.
- **데이터가 비어 있어도 깨지지 않게** 만든다. 선택 필드(`goal`, `codeUrl`, `images`, `comparison.src`, `feedback` 등)가 없으면 해당 블록을 숨긴다. 렌더러는 이미 이 방식을 쓰고 있으니 유지한다.
- **콘텐츠 길이 가정**을 지킨다. 내용 세션은 `goal` 20~30자, `solution` 항목 2개 × 40~85자, troubleshooting 필드 20~40자를 기준으로 쓴다.
  이보다 긴 텍스트에서도 레이아웃이 무너지지 않는지 확인한다.
- 사용자 텍스트를 HTML에 넣을 때는 `escapeHTML`을 쓴다. HTML이 허용된 필드(`role[].desc`, `optimizations[].desc`)만 예외다.
- `codeUrl` 처리(`renderCodeLink`)의 github.com 제한은 유지한다.
- 외부 라이브러리나 폰트를 추가하면 로딩 실패 시의 대체 동작을 고려한다.

## 스키마를 바꿀 때 (내용 세션과의 계약)

렌더러가 읽는 필드를 추가, 이름 변경, 삭제하면 다음을 지킨다.

1. **같은 커밋에서** `CLAUDE.md`의 "데이터 계약" 절을 고친다.
2. 기존 데이터와 호환되게 만든다. 새 필드는 선택 필드로 하고, 없으면 숨긴다.
   이름을 바꿀 때는 옛 필드도 한동안 읽거나, `portfolio-data.js`의 해당 키만 기계적으로 옮긴다. 이때 값(문구)은 그대로 둔다.
3. 기여 카테고리(`CONTRIB_CATS`)를 추가하거나 삭제하면 검사 스크립트가 자동으로 따라간다. 삭제하는 경우 데이터에서 그 카테고리를 쓰는 곳이 없는지 확인한다.
4. 커밋 메시지에 `schema:` 접두어를 붙여 내용 세션이 알아볼 수 있게 한다. 예: `schema: add optional demoUrl to contributions`

## 검증

```bash
node .claude/scripts/check-portfolio.mjs --render                              # 데스크톱 1440x900
node .claude/scripts/check-portfolio.mjs --render --mobile                     # 모바일 390x844
node .claude/scripts/check-portfolio.mjs --render --only=eulerian_aurora       # 한 상세 페이지만
```

- 스크린샷은 `/tmp/portfolio-render/`에 저장된다. 고친 화면은 **변경 전후**를 직접 열어 비교한다. 긴 이미지는 PIL로 잘라서 본다.
- 렌더 검사 끝의 **지표**(홈·상세 길이, Projects가 몇 번째 화면에 나오는지)를 변경 전후로 비교한다. "한눈에 보기" 개선의 근거로 쓴다.
- 변경 전후 비교는 `shot.mjs`로 한다. 첫 화면과 섹션 단위로 찍어 PIL로 자를 필요가 없다.
  ```bash
  node .claude/scripts/shot.mjs --label=before [--page=<id>|all] [--mobile] [--selector=#skills]
  # (수정)
  node .claude/scripts/shot.mjs --label=after  ...같은 옵션...
  node .claude/scripts/shot.mjs --compare before after   # → /tmp/portfolio-shots/compare/
  ```
- 아이콘은 CDN이 아니라 로컬 서브셋(`assets/vendor/tabler-icons/`)이다. 새 `ti-*` 아이콘을 쓰면 `bash .claude/scripts/build-icons.sh`를 다시 실행한다. 빠뜨리면 빠른 검사가 오류로 알려 준다.
- 큰 개선 작업 전후에는 `portfolio-design-review` 스킬로 같은 기준의 리뷰를 돌린다.
- 메인 4개 상세 페이지와 서브 1개 이상을 데스크톱과 모바일 양쪽에서 확인한다.
- 렌더 검사의 콘솔 오류(`pageerror`)는 0이어야 한다. 외부 CDN이나 폰트 로드 실패는 샌드박스 네트워크 때문일 수 있다.
- 사용자에게 결과를 보여줄 때는 저장소 안 임시 파일로 스크린샷을 보내고, 커밋하지 않고 지운다.

## 내용 세션에 넘기는 메모 형식

```
[내용 요청] <프로젝트 id / 필드>
- 이유: (예: 새 레이아웃에서 summary가 2줄을 넘으면 잘림)
- 원하는 것: (예: summary 60자 이내로 축약)
```
