# 상세 페이지 개편안: System Design (초안)

상태: **구조 확정 전 초안**. 내용 세션이 작성했고, 렌더러와 스키마 구현은 디자인 세션이 맡는다.
main에는 아직 올리지 않는다.

## 왜 바꾸나

기능 구현 목록보다 **프로젝트를 어떻게 구조화하고 큰 흐름을 설계했는지**를 보여 주는 것이 목표다.
그래서 `Technical Contributions`와 `Troubleshooting`을 하나로 합쳐, 설계 사례 2~3개로 압축한다.

## 페이지 순서

| 순서 | 섹션 | 상태 |
| --- | --- | --- |
| 1 | Hero 미디어 + Overview (goal, role, stack, links) | 그대로 |
| 2 | **Architecture** — 프로젝트 전체 흐름 구조도 | 새로 |
| 3 | **System Design** — 설계 사례 2~3개 | 새로 (contributions + troubleshooting 대체) |
| 4 | Optimization | 일단 그대로. 나중에 사례로 합칠지 결정 |
| 5 | Retrospective, Feedback, Other | 그대로 |

섹션 이름 후보: `System Design`(추천), `Architecture Decisions`, `Core Systems`.

## 스키마 (선택 필드, 모두 없으면 기존 섹션을 그대로 렌더)

```js
architecture: {                       // 없으면 Architecture 섹션 숨김
  diagram: { src, alt },              // SVG 또는 PNG. 본문 폭 전체로 크게, 클릭하면 확대
  caption: "한 줄 설명",              // 40~80자
  flow: ["입력", "상태", "시스템", "표시"],  // 선택. 도식 아래 3~5단계 요약 칩
},
designCases: [                        // 2~3개. 있으면 contributions·troubleshooting 섹션 대신 렌더
  {
    title, category,                  // category는 CONTRIB_CATS 키
    context: "왜 이 구조가 필요했나",  // 30~60자
    decisions: ["구조 결정 1", "구조 결정 2"],  // 2~3개, 각 40~85자
    issue: { problem, cause, fix },   // 선택. 트러블슈팅을 흡수. 각 20~40자
    result: "결과 한 줄",              // 20~50자. 실측하지 않은 수치는 쓰지 않음
    diagram: { src, alt },            // 선택. 사례 단위 작은 도식
    media: [{ type: "image"|"gif"|"video", src, caption, thumbnail? }],  // 0~2개
    codeUrl, codeLabel?,
  },
],
```

- 기존 `contributions`, `troubleshooting` 데이터는 지우지 않는다. 프로젝트별로 `designCases`가 채워지면 그 프로젝트만 새 구조로 바뀐다.
- 모든 글자 수는 초안이다. 레이아웃이 정해지면 디자인 세션이 확정하고 `content.md` 문체 규칙에 옮긴다.

## 레이아웃 요구

- **Architecture 도식**: 본문 폭 전체, 최소 높이를 넉넉히(데스크톱 기준 화면 절반 정도). 글자가 작은 도식은 클릭 확대(라이트박스).
- **설계 사례 카드**: 데스크톱은 왼쪽 텍스트(context → decisions → issue → result → 코드 링크), 오른쪽 미디어(GIF/영상 16:9, 아래에 사례 도식).
  모바일은 미디어를 텍스트 위로 쌓는다.
- `issue`는 경고색 왼쪽 띠 정도로 가볍게 구분한다. 없으면 숨긴다.
- `media`가 없으면 텍스트가 전체 폭을 쓴다. GIF는 화면 밖에서는 멈추거나 정지 이미지를 쓴다(용량·성능).
- 오른쪽 섹션 TOC에 Architecture, System Design이 잡혀야 한다.

## 도식 제작 방식 (내용 세션)

- 전체 구조도는 SVG로 만들어 `assets/projects/<dir>/architecture.svg`에 둔다. 확대해도 선명하고 용량이 작다.
- mermaid 같은 외부 라이브러리 런타임 렌더는 쓰지 않는다(CDN 실패 시 빈 칸).

## 결정이 필요한 것

1. 섹션 이름
2. Optimization을 사례로 합칠지
3. 서브 프로젝트에도 Architecture를 둘지 (추천: 메인 4개만 필수, 서브는 선택)
