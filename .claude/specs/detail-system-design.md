# 상세 페이지 개편안: System Design (초안 v2)

상태: **구조 확정 전 초안**. 내용 세션이 작성했고, 렌더러와 스키마 구현은 디자인 세션이 맡는다.
main에는 아직 올리지 않는다.

## 왜 바꾸나

기능 구현 목록보다 **프로젝트를 어떻게 구조화하고 큰 흐름을 설계했는지**를 보여 주는 것이 목표다.
그래서 `Technical Contributions`와 `Troubleshooting`을 하나로 합쳐, 설계 사례 2~3개로 압축한다.

v1에서 따로 두었던 Architecture 섹션은 없앤다. 전체 구조도도 설명이 필요하고, 개별 사례에도 큰 도식이
필요할 수 있어서 경계가 모호했다. **전체 구조도 하나의 사례**로 다루고, 도식 크기는 사례마다 고른다.

## 페이지 순서

| 순서 | 섹션 | 상태 |
| --- | --- | --- |
| 1 | Hero 미디어 + Overview (goal, role, stack, links) | 그대로 |
| 2 | **System Design** — 설계 사례 2~3개 (보통 첫 사례가 전체 구조) | 새로 (contributions + troubleshooting 대체) |
| 3 | Optimization | 일단 그대로. 나중에 사례로 합칠지 결정 |
| 4 | Retrospective, Feedback, Other | 그대로 |

섹션 이름 후보: `System Design`(추천), `Architecture Decisions`, `Core Systems`.

## 스키마 (선택 필드, 없으면 기존 섹션을 그대로 렌더)

```js
designCases: [                        // 2~3개. 있으면 contributions·troubleshooting 섹션 대신 렌더
  {
    title, category,                  // category는 CONTRIB_CATS 키
    context: "왜 이 구조가 필요했나",  // 30~60자
    decisions: ["구조 결정 1", "구조 결정 2"],  // 2~3개, 각 40~85자
    issue: { problem, cause, fix },   // 선택. 트러블슈팅을 흡수. 각 20~40자
    result: "결과 한 줄",              // 선택, 20~50자. 실측하지 않은 수치는 쓰지 않음
    diagram: {                        // 선택
      src, alt,                       // SVG 또는 PNG
      size: "full" | "side",          // full: 카드 맨 위에 본문 폭 전체 / side: 오른쪽 칸 (기본 side)
      caption?,                       // 선택. 도식 읽는 법 한 줄
    },
    media: [{ type: "image"|"gif"|"video", src, caption, thumbnail? }],  // 0~2개
    codeUrl, codeLabel?,
  },
],
```

- 전체 구조 사례는 예를 들어 `title: "전체 흐름 구조"`, `diagram.size: "full"`, `decisions`에 구조를 읽는 요점, `issue`·`media`는 비움.
- 개별 시스템 사례도 흐름이 크면 `size: "full"`을 쓸 수 있다. 순서와 개수는 데이터가 정한다.
- 기존 `contributions`, `troubleshooting` 데이터는 지우지 않는다. 프로젝트별로 `designCases`가 채워지면 그 프로젝트만 새 구조로 바뀐다.
- 글자 수는 초안이다. 레이아웃이 정해지면 디자인 세션이 확정하고 `content.md` 문체 규칙에 옮긴다.

## 사례 카드 레이아웃

```
size: "full"                              size: "side" (기본)
┌──────────────────────────────────┐     ┌────────────────┬─────────────────┐
│ 제목 · category                   │     │ 제목 · category │  GIF / 영상      │
│ ┌──────────────────────────────┐ │     │ context        │  (16:9)          │
│ │       도식 (본문 폭 전체)      │ │     │ decisions      ├─────────────────┤
│ └──────────────────────────────┘ │     │ issue (선택)    │  도식 (선택)      │
├────────────────┬─────────────────┤     │ result · 코드   │                 │
│ context        │  GIF / 영상      │     └────────────────┴─────────────────┘
│ decisions      │  (있을 때만)      │
│ issue · result │                 │     모바일: 도식 → 미디어 → 텍스트 순으로 쌓음
└────────────────┴─────────────────┘
```

- 오른쪽 칸에 넣을 것이 없으면(미디어 없음, 도식이 full이거나 없음) 텍스트가 전체 폭을 쓴다.
- 도식은 클릭하면 확대(라이트박스). full 도식은 데스크톱에서 넉넉한 높이를 준다.
- `issue`는 경고색 왼쪽 띠 정도로 가볍게 구분한다. 없으면 숨긴다.
- GIF는 화면 밖에서는 멈추거나 정지 이미지를 쓴다(용량·성능).
- 오른쪽 섹션 TOC에 System Design이 잡히고, 사례 제목이 하위 항목으로 보이면 좋다.

## 도식 제작 방식 (내용 세션)

- SVG로 만들어 `assets/projects/<dir>/`에 둔다. 확대해도 선명하고 용량이 작다.
- mermaid 같은 외부 라이브러리 런타임 렌더는 쓰지 않는다(CDN 실패 시 빈 칸).

## 결정이 필요한 것

1. 섹션 이름
2. Optimization을 사례로 합칠지
3. 서브 프로젝트도 이 구조로 바꿀지 (추천: 메인 4개 먼저, 서브는 기존 구조 유지 가능)
