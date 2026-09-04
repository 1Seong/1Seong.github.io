// ============================================================
//  PORTFOLIO DATA — 기업 지원 시 이 블록만 수정하세요
// ============================================================
const PROFILE = {
  nameKo: "최성원", nameEn: "SEONGWON CHOI • 崔城源",
  role: "Game Client Programmer",
  university: "중앙대학교 소프트웨어학부",
  email: "qwik0102@gmail.com",
  links: [
    { label: "GitHub",  icon: "github",  url: "https://github.com/1Seong" },
    //{ label: "Steam",   icon: "steam",   url: "https://steamcommunity.com/profiles/76561198190444966/" },
    { label: "Notion",  icon: "notion",  url: "https://www.notion.so/9516adf7733d404ebc914550ff4af2a2" },
  ],
};
const SKILLS = [
  { category: "Main Stack", items: [{ name:"Unity 6 / URP", icon:"" }, { name:"C#", icon:"" }, { name:"C++", icon:"" }] },
  { category: "Sub Stack", items: [{ name:"PostgreSQL", icon:"" }] },
  { category: "Tools", items: [{ name:"Git", icon:"" }, { name:"Supabase", icon:"" }, { name:"Codex", icon:"" }, { name:"OpenAI API", icon:"" }] },
  { category: "Architecture / Libraries", items: [{ name:"Design Pattern", icon:"" }, { name:"MVC", icon:"" }, { name:"UniTask", icon:"" }, { name:"DOTween", icon:"" }] },
  { category: "Platform", items: [{ name:"PC / Steam", icon:"" }, { name:"Android", icon:"" }] },
];
const BOOKS = [
  // 예시 형식:
  // { title: "책 제목", author: "저자", genre: "언어", memo: "한 줄 메모", h: 190 },
  // genre는 "언어", "엔진", "소프트웨어 개발", "네트워크" 중 하나
  // h는 책 높이(px) — 150~220 사이로 자유롭게 지정
  { title: "C++ Primer", author: "Lippman",    genre: "언어",         memo: "C++ 기초 다지기에 큰 도움이 됨.", h: 200, cover: "assets/covers/primer.jpg" },
  { title: "Effective Modern C++",                  author: "Scott Meyers", genre: "언어", memo: "덕분에 복잡한 C++ 개념들과 언어의 특성을 어느정도 정리할 수 있었음.", h: 180, cover: "assets/covers/emcpp.jpg" },
  { title: "Microsoft Visual C# Steop by Step",          author: "John Sharp",     genre: "언어", memo: "C# 입문서로 활용. 기본 문법 위주라서 살짝 아쉬웠던 책.", h: 190, cover: "assets/covers/mvs.jpg" },
  { title: "Effective C#",       author: "Bill Wagner",             genre: "언어",          memo: "C#의 활용과 특성을 이해하는데 도움이 되었고, C++과의 차이점을 여기에서 크게 체감.", h: 210, cover: "assets/covers/ecs.jpg" },
  { title: "헤드퍼스트 디자인 패턴",         author: "Eric Freeman, Elisabeth Robson", genre: "소프트웨어 개발",    memo: "단순히 패턴뿐만 아니라 설계의 토대를 잘 잡아준 책.", h: 170, cover: "assets/covers/hdp.jpg" },
  { title: "게임 프로그래밍 패턴",          author: "Robert Nystrom",              genre: "소프트웨어 개발",         memo: "디자인 패턴을 게임 맥락으로. 아키텍처 설계에 큰 도움. 게임 엔진 구조 이해에도 많이 도움됨.", h: 185, cover: "assets/covers/gpp.jpg" },
  { title: "유니티 C# 스크립팅 마스터하기",        author: "Alan Thorn",    genre: "엔진",          memo: "유니티의 컴포넌트들을 이해하기 위해 부분부분 참고.", h: 160, cover: "assets/covers/ucss.jpg" },
  { title: "초보자를 위한 유니티 입문",        author: "아라카와 다쿠야, 아사노 유이치",    genre: "엔진",          memo: "유니티 입문서로 활용.", h: 180, cover: "assets/covers/ufb.jpg" },
  { title: "게임 서버 프로그래밍 교과서",        author: "배현직",    genre: "네트워크",          memo: "클라이언트-서버 구조의 프로젝트를 설계하는 데 활용.", h: 190, cover: "assets/covers/gsp.jpg" },
];
const AWARDS = {
  // 예시 형식:
  // 수상: [{ date:"2024.06", title:"수상명", org:"주관기관" }],
  // 대외활동: [{ date:"2023.01", title:"활동명", org:"기관명" }],
  // 시험및자격증: [{ date:"2024.11", title:"TOPCIT 500점", org:"정보통신기획평가원" }],
  수상: [
    { date:"2026.02", title:"최우수상 - 메토링 4기", org:"NEXON" },
  ],
  대외활동: [
    { date:"2026.02", title:"2026 메토링 4기", org:"NEXON" },
    { date:"2025.11", title:"게임 전시(챌린저) - UNICON 2025", org:"UNIDEV" },
    { date:"2025.01", title:"UNIJAM", org:"UNIDEV" },
    { date:"2026.05", title:"게임 전시 - PlayX4 IndieSeed", org:"경기콘텐츠진흥원 외" },
    { date:"2024.11", title:"게임 전시 - 게임개발동아리 창립제", org:"중앙대학교" },
    { date:"2026.03", title:"게임 전시 - 동아리박람회", org:"중앙대학교" },
    { date:"2026.08", title:"게임 전시 - UNICON 2026", org:"UNIDEV" },
  ],
  시험및자격증: [
    { date:"2026.05", title:"TOPCIT 620점", org:"정보통신기획평가원" },
  ],
};
const OTHER_WORKS = [
  // 예시 형식:
  // { category: "카테고리명", items: ["구현 항목 1", "구현 항목 2", "구현 항목 3"] },
  {
    category: "Data Structure / Algorithm",
    items: [
      "AVL, B-Tree 구현",
      "그래프 최단거리 · MST",
      "영어사전 구현",
    ],
  },
  {
    category: "SW Engineering",
    items: ["Arkanoid 게임(OOP)", "윷놀이(SOLID/MVC/Unit Test)"],
  },
  {
    category: "OS / Multicore",
    items: ["자동화 물류 시뮬레이터(스레드 관리)", "차량 교차로(데드락 처리)"],
  },
  {
    category: "Graphics",
    items: ["OpenGL 3D 수영 애니메이션", "OpenGL Cook-Torrance lighting"],
  },
  {
    category: "DB",
    items: ["ERD, Relation Schema 설계 및 구현", "간단한 RDBMS 직접 구현"],
  },
  {
    category: "AI",
    items: ["A* 경로 탐색", "Minimax/Expectimax 게임 AI", "강화학습 게임 AI(Q-learning)"],
  },
  {
    category: "CS Theory",
    items: ["간단한 컴파일러 및 파서 구현"],
  },
];
const PROJECT_ORDER = ["eulerian_aurora", "square_erauqs", "save_the_world", "omakhase", "detective_ai","hell_pit", "necromancer_survivors", "soulmate_system"];
// 프로젝트 순서 변경 시 배열 순서만 바꾸면 됩니다.
const MAIN_PROJECT_IDS = ["eulerian_aurora", "square_erauqs", "save_the_world", "omakhase"];
const SUB_PROJECT_IDS = PROJECT_ORDER.filter(id => !MAIN_PROJECT_IDS.includes(id));

const PROJECTS = {
  eulerian_aurora: {
    id:"eulerian_aurora",
    title:"Eulerian Aurora",
    subtitle:"UGC 3D 퍼즐 게임",
    meta:{ engine:"Unity", platform:"PC(Windows)", team:"3인 팀", year:"2026.01 ~"},
    tags:null,
    badges:[
      { text:"Full-stack", type:"primary" },
      { text:"UGC", type:"sub" },
      { text:"Map Editor", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/aurora/trailer.mp4", thumbnail: "assets/projects/aurora/trailerthumb.png", label:"Trailer" },
      { type:"video", src:"assets/projects/aurora/trailer.mp4", thumbnail: "assets/projects/aurora/demothumb.png", label:"Demo" },
      { type:"image", src:"assets/projects/aurora/editor.png", label:"1" },
      { type:"image", src:"assets/projects/aurora/usermap.png", label:"2" },
      { type:"image", src:"assets/projects/aurora/mymap.png", label:"3" },
    ],
    summary:"유저가 3D 퍼즐 맵을 직접 제작·공유하고, 다른 유저의 맵을 플레이할 수 있는 UGC 기반 3D 퍼즐 게임.",
    goal:"유저가 직접 3D 퍼즐 맵을 제작·공유하고, 다른 유저의 맵을 플레이할 수 있는 UGC 루프 구현",

    keyChallenges:[
      "레이어 회전 데이터 동기화",
      "맵 에디터와 플레이 데이터 공유",
      "온라인 맵 검색·정렬·필터링",
      "인증·RLS·Storage 연동"
    ],
    role:[
      { name:"풀스택 프로그래밍", icon:"ti-code", desc:"백엔드(Supabase),<br>클라이언트(Unity)" },
      { name:"아트", icon:"ti-brush", desc:"Codex를 활용한<br>AI 그래픽 아트 구현" },
    ],
    activities:["2026 UNICON 전시"],
    contributions:[
      {
        title:"퍼즐 핵심 게임플레이 루프",
        category:"게임플레이",
        desc:"<br><strong>에디터·플레이·업로드 흐름에서 동일한 3D 배열 기반 상태 구조를 설계</strong><ul><li>stack을 활용한 스냅샷 저장으로 Undo 구현</li></ul>",
        images:["assets/projects/aurora/tile.png"]
      },
      {
        title:"기믹 시스템과 상호작용",
        category:"게임플레이",
        desc:"<br><strong>포탈, 회전, 인버터 등 6가지 기믹을 공통 타일 상태 시스템 위에 구현</strong><ul><li>인버터는 발동 지점 기준 맨해튼 거리로 타일을 그룹화하고, 순서대로 연출을 재생해 파도 연출 구현</li></ul>",
        images:["assets/projects/aurora/gimmik.png"]
      },
      {
        title:"맵 에디터와 레벨 제작 파이프라인",
        category:"에디터",
        desc:"<br><strong>유저가 직접 타일과 기믹을 배치하고 저장·업로드할 수 있는 맵 에디터 구현</strong><ul><li>맵 데이터, 포탈 정보, 회전 정보를 직렬화해 DB에 저장하고, 동일 데이터 포맷으로 에디터·플레이 테스트·업로드 흐름을 연결</li></ul>",
        images:["assets/projects/aurora/editor2.png"]
      },
      {
        title:"Supabase 기반 UGC 백엔드",
        category:"백엔드",
        desc:"<br><strong>Supabase Auth와 RPC를 Unity 클라이언트에 연결해 서버 통신 흐름을 구성</strong><ul><li>로그인, 회원가입, 세션 복원을 Supabase Auth 기반의 단일 인증 흐름으로 정리</li><li>온라인·인증 상태 변경을 옵저버 구조로 앱 전역에 전파</li></ul>",
        images:["assets/projects/aurora/supabase.png"]
      },
      {
        title:"UGC 맵 데이터베이스 구조 설계",
        category:"DB",
        desc:"<br><strong>맵, 좋아요, 클리어 기록 등을 PostgreSQL로 UGC 데이터 저장 기준을 정리</strong><ul><li>RLS 정책으로 사용자별 읽기·쓰기 권한을 제한하고, 본인 데이터와 공개 맵 데이터 접근 범위를 분리</li></ul>",
        images:["assets/projects/aurora/db.png"]
      },
    ],
    troubleshooting: [
      {
        title: "레이어 회전 후 좌표 기준이 어긋나는 문제",
        problem: "루빅큐브식 레이어 오브젝트를 실제로 회전시키면, 이후 오브젝트의 로컬 좌표와 데이터 좌표가 달라지는 문제가 발생",
        cause: "회전 연출과 맵 데이터 변환을 같은 오브젝트 상태에 의존하면서, 회전한 뒤의 좌표 기준을 계속 보정해야 해 계산이 복잡해짐",
        solution: "회전은 화면 연출로만 처리하고, 실제 퍼즐 상태는 2D 단면 배열을 분리한 뒤 전치·역순 변환으로 데이터 좌표만 재매핑하도록 분리",
        result: "회전 연출 이후에도 맵 데이터 기준을 일정하게 유지해 좌표 계산 복잡도를 줄이고, 연속 회전 상황에서도 퍼즐 상태를 안정적으로 갱신"
      },
      {
        title: "중심 큐브 뒤의 기믹 이펙트가 완전히 가려지지 않는 문제",
        problem: "일반 스텐실 마스킹만으로는 중심 큐브 뒤쪽에 존재하는 기믹 이펙트가 일부 노출되는 문제가 발생",
        cause: "스텐실 버퍼는 의도한 영역 제한에는 유효했지만, 큐브 볼륨 뒤에 있는 픽셀까지 완전히 판별하기에는 기준이 부족했음",
        solution: "스텐실 마스킹에 광선-AABB 교차 판정을 추가해 큐브 영역 밖이거나 큐브 뒤에 있어야 하는 픽셀을 제거",
        result: "고스트, 레이저, 인버터, 포탈 등 기믹 이펙트가 큐브 내부 영역에 맞춰 안정적으로 표시되고, 불필요한 이펙트 노출을 방지"
      }
    ],
    /*
    technicalDecisions:[
      {
        q:"왜 3D 배열 기반으로 맵을 관리했나요?",
        a:"큐브 표면 좌표, 타일 상태, 기믹 정보를 하나의 직렬화 가능한 데이터로 관리하고, 에디터와 플레이 모드에서 같은 포맷을 공유하기 위해 선택했습니다."
      },
      {
        q:"왜 Supabase를 사용했나요?",
        a:"별도 서버 구축 없이 Auth, Database, Storage, RLS, RPC를 빠르게 연결해 UGC 맵 공유 루프를 검증할 수 있었기 때문입니다."
      },
      {
        q:"AI 도구는 개발 과정에서 어떻게 활용했나요?",
        a:"로그인 인증 처럼 처음 다루는 영역에서 구현 대안과 예외 상황을 비교하는 보조 도구로 활용했습니다. 최종 구조는 프로젝트 요구사항과 테스트 결과를 기준으로 직접 검증해 반영했습니다."
      }
    ],
    */
    optimizations:[
      {
        title:"RPC 조회 기반 맵 목록 조회 최적화",
        category:"최적화",
        desc:"<br><strong>온라인 맵 목록에서 필요한 데이터를 여러 번 나누어 요청하지 않도록 조회 흐름을 통합</strong><ul><li>검색, 정렬, 페이지네이션, 클리어 필터를 DB 함수 호출 하나로 처리</li><li>좋아요·클리어·신고 여부는 맵 키 목록을 기반으로 한 번에 조회하고, 클라이언트에서 딕셔너리로 매핑</li><li>닉네임 조회도 작성자 ID 기준으로 묶어 처리해 같은 작성자 정보를 반복 요청하지 않도록 구성</li></ul>",
        images:[]
      },
    ],

    retrospective:{
      good:"UGC 게임에 필요한 인증, DB, RPC, RLS를 Unity 클라이언트와 직접 연결하며 서버-클라이언트 전체 흐름을 구축했습니다. 맵 에디터와 온라인 공유 기능을 통해 팀원이 코드 작업 없이 맵을 제작하고, 유저가 이를 플레이하는 루프를 완성한 점이 가장 의미 있었습니다.",
      bad:"백엔드, 클라이언트, 그래픽의 기능 구현에 비해 문서화가 부족했습니다. 이후에는 API 흐름, 데이터 포맷처럼 협업에 필요한 기준을 구현과 함께 정리하려고 합니다.",
      images:["assets/projects/aurora/unicon.jpg", "assets/projects/aurora/uniconteam.jpg"]
    },
    
    feedback:null,
    other_contributions:null,
    links:[
      { label:"GitHub", url:"https://github.com/1Seong/Capstone2" },
      { label:"Game Build", url:"https://drive.google.com/drive/u/0/folders/10mRU31GlTHey1yCcf1V_u7jEjr0QA4JT"},
      { label:"Google Drive", url:"https://drive.google.com/drive/u/0/folders/1IGMLGUreO3WDR3LEqzpbtfKZpKzZaxUQ"}
    ],
  
    detail: {
      coreContributionCount:5,
      techStack:["Unity", "C#", "Supabase", "PostgreSQL", "Storage"],
      linkMap:{ Document:"Google Drive", GitHub:"GitHub", "Game Build":"Game Build" },
      optimizations:[
        {
          measurement:"유저 맵 검색, 정렬, 필터, 좋아요/클리어가 호출되는 흐름을 점검",
          cause:"맵 목록과 사용자별 상태 데이터를 따로 요청하면서 같은 맵/작성자 정보를 반복 조회",
          improvement:"RPC로 목록 조회를 통합하고 좋아요, 클리어 등을 키 목록 기준으로 한번에 조회",
          result:"요청 횟수를 한 번으로 개선하면서 대기 시간 소폭 감소"
        }
      ]
    },
  },
  
  square_erauqs: {
    id:"square_erauqs",
    title:"SQUARE::ERAUQS",
    subtitle:"2D 퍼즐 플랫포머",
    meta:{ engine:"Unity", platform:"PC(Windows/Mac) / Android", team:"5인 팀", year:"2025.01 ~ 2026.09"},
    tags:[],
    badges:[
      { text:"Steam Released", type:"primary" },
      { text:"Map-Editor", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/square/trailer.mp4", thumbnail: "assets/projects/square/1.png", label:"Trailer" },
      { type:"image", src:"assets/projects/square/mobile.png", label:"1" },
      { type:"image", src:"assets/projects/square/5.png", label:"2" },
      { type:"image", src:"assets/projects/square/3.png", label:"3" },
    ],
    summary:"두 플레이어를 동시에 조작하며 다양한 기믹과 시점 전환 기능으로 퍼즐을 해결.",
    role:[
        { name:"리드 프로그래머", icon:"ti-code", desc:"스테이지 및 퍼즐 기믹 구현<br>맵 생성 파이프라인 구현<br>모바일 이식" },
      ],
    activities:["Steam 출시", "2025, 2026 UNICON 전시", "교내 동아리박람회 전시"],
    goal:"두 캐릭터와 시점 전환을 활용한 복합 2D 플랫포머 퍼즐 경험 구현",

    keyChallenges:[
      "탑뷰·사이드뷰 전환",
      "커스텀 중력·빙판 상호작용 안정화",
      "PC·모바일 입력 구조 통합",
      "Steam 출시 전 품질 검증"
    ],

    contributions:[
      {
        title:"시점 전환 기반 듀얼 뷰 시스템",
        category:"게임플레이",
        desc:"<br><strong>탑뷰와 사이드뷰를 오가며 퍼즐 방식이 바뀌는 핵심 시스템 구현</strong><ul><li>시점 전환 시 카메라 회전, 벽 활성화, 플레이어 위치 보정 등을 이벤트 체인으로 순차 실행</li></ul>",
        images:["assets/projects/square/view.png"]
      },
      {
        title:"커스텀 중력 및 물리 상태 제어",
        category:"물리",
        desc:"<br><strong>Unity 기본 중력 대신 방향별 중력 상태를 이벤트 기반으로 직접 관리</strong><ul><li>상태 변경 시 Rigidbody 제약 조건을 함께 관리해 의도한 축으로만 이동 제어</li></ul>",
        images:["assets/projects/square/gravity.png"]
      },
      {
        title:"추상화 기반 기믹 오브젝트 구조",
        category:"구조",
        desc:"<br><strong></strong><ul><li>템플릿 메서드 패턴으로 공통 흐름은 상위 구조에서 처리하고, 하위에서는 개별 기믹 로직에 집중</li><li>다양한 기믹을 같은 발동 흐름 위에서 확장 가능하게 구성</li></ul>",
        images:["assets/projects/square/gimmik.png"]
      },
      {
        title: "맵툴 데이터 기반 레벨 제작 파이프라인",
        category: "구조",
        desc: `<strong>맵툴에서 제작한 데이터를 게임 내 스테이지 구조로 변환하는 파이프라인 구현.</strong><ul><li>맵툴 출력 데이터를 파싱하고, 게임 로직에서 사용할 수 있는 타일/오브젝트 배치 데이터로 가공</li></ul>`
        ,images:["assets/projects/square/editor.png"]
      },
      {
        title:"모바일 이식 — 입력 추상화 및 UI 대응",
        category:"플랫폼",
        desc:"<br><strong>PC 입력과 모바일 가상 버튼 입력을 같은 게임 로직 위에서 사용할 수 있도록 입력 계층 추상화</strong><ul><li>모바일 UI 안전 영역 대응을 추가해 모든 Android 기기에서도 플레이 가능하게 이식</li></ul>",
        images:["assets/projects/square/mobile2.png"]
      },
      {
        title:"Unity Localization 기반 번역 지원",
        category:"UI",
        desc:"<br><strong>텍스트와 애니메이션, UI 레이아웃을 런타임에 교체하는 로컬라이징 구조 구현</strong><ul><li>Unity Localization 기반으로 코드 수정 없이 문자열 관리</li></ul>",
        images:["assets/projects/square/hint.png"]
      }
    ],
    troubleshooting: [
      {
        title: "빙판 위 오브젝트가 미세한 틈에서 튕기는 문제",
        problem: "빙판 위 오브젝트가 다른 오브젝트에 부딪히면 정지해야 했지만, 오브젝트 사이에 미세한 틈이 있을 경우 당구공처럼 서로 튕기는 버그가 발생",
        cause: "충돌 순간의 접촉 여부만으로 정지 상태를 판단하면서, 실제로는 벽과 연결된 구조인데도 미세한 간격 때문에 연결 상태를 놓치는 경우가 있었음",
        solution: "좌우 BoxCast로 인접 오브젝트를 감지하고, 벽에 연결된 상태를 인접 오브젝트에 전파해 연결 여부를 판단하도록 수정",
        result: "빙판 위 연쇄 오브젝트가 미세한 틈에 영향을 덜 받게 되었고, 벽과 연결된 경우 안정적으로 정지하도록 개선"
      },
      {
        title: "벽에 붙은 스프링이 간헐적으로 동작하지 않는 문제",
        problem: "벽에 스프링이 붙어 있을 때 플레이어가 닿아도 간헐적으로 스프링이 발동하지 않는 문제가 발생",
        cause: "스프링 자체 문제가 아니라, 플레이어와 벽이 미세하게 겹치는 순간 점프 BoxCast가 벽을 바닥처럼 비정상 감지해 점프 플래그를 꺼버린 것이 원인",
        solution: "바닥 감지 로직에서 충돌체 감지만 보지 않고, 감지된 표면의 normal을 추가로 검사해 실제 바닥에 착지한 경우에만 점프 상태를 갱신하도록 수정",
        result: "점프 중일 때만 동작하는 스프링 조건이 의도대로 유지되었고, 벽 접촉 상황에서 스프링이 간헐적으로 무시되는 문제를 해결"
      }
    ],
    /*
    technicalDecisions:[
      {
        q:"왜 시점 전환을 이벤트 체인으로 구성했나요?",
        a:"카메라 회전, 투영 벽 전환, 플레이어 위치 보정 등이 동시에 얽혀 있었기 때문에 각 기능을 직접 호출로 묶기보다 전환 이벤트에 구독시키는 방식이 유지보수와 확장에 유리했습니다."
      },
      {
        q:"왜 Unity 기본 중력 대신 커스텀 중력을 구현했나요?",
        a:"이 게임은 탑뷰·사이드뷰 전환과 중력 반전 기믹이 핵심이라, 단일 전역 중력만으로는 플레이어와 오브젝트별 상태를 제어하기 어려웠습니다. 그래서 오브젝트별 중력 방향과 Rigidbody 제약을 직접 관리했습니다."
      },
      {
        q:"왜 New Input System 대신 입력 계층을 직접 추상화했나요?",
        a:"초기에는 PC 출시를 기준으로 개발했지만, 이후 모바일 이식이 결정되면서 기존 플레이어 로직을 크게 바꾸지 않는 방식이 필요했습니다. 그래서 전체 입력 구조를 교체하기보다, 기존 입력 호출부 위에 얇은 래퍼를 두었습니다."
      }
    ],
    */
    optimizations:[
      {
        title:"맵툴 기반 스테이지 생성 최적화",
        category:"최적화",
        desc:"<br><strong>시점 전환마다 벽을 동적으로 생성하기보다, 스테이지 구조에 맞춰 필요한 충돌 영역을 사전 배치하는 방식으로 안정성 확보</strong><ul><li>초기에는 내부 벽 메시를 투영해 런타임에 충돌 벽을 생성하는 구조를 검토했지만, 스테이지 수와 구조가 제한적이라는 점을 고려해 사전 배치 방식이 더 적합하다고 판단</li><li>시점 전환 시에는 미리 준비된 투영 벽과 제한 영역의 활성 상태만 전환해 런타임 메시 생성 비용과 예외 상황을 줄임</li><li>복잡한 동적 생성보다 예측 가능한 충돌 구조를 선택해 퍼즐 풀이와 QA 안정성을 우선시</li></ul>",
        images:[]
      },
      {
        title:"모바일 실기 프로파일링 및 렌더링 최적화",
        category:"최적화",
        desc:"<br><strong>Android 실기 환경에서 성능을 확인하고, 2D 타일맵 기반 게임에 불필요한 3D 렌더링 비용을 줄임</strong><ul><li>모바일 기기를 노트북과 연결해 Unity Profiler로 실기 프레임과 렌더링 비용을 점검</li><li>게임이 2D 타일맵 중심으로 구성된 점을 고려해 불필요한 조명·그림자 렌더링을 비활성화</li><li>모바일 환경에서 화면 전환과 퍼즐 조작이 안정적으로 유지되도록 렌더링 설정과 UI 표시를 점검</li></ul>",
        images:[]
      }
    ],
    retrospective:{
      good:"리드 프로그래머로서 시점 전환, 커스텀 물리, 기믹 구조, 모바일 이식까지 프로젝트의 핵심 기술 방향을 주도했습니다. 개발 시작부터 Steam 출시와 전시까지 이어지는 전체 사이클을 경험하며, 장기 프로젝트에서 구조 설계가 얼마나 중요한지 체감했습니다.",
      bad:"초기에는 기믹별 구현을 빠르게 붙이는 데 집중해 맵을 확장하는 데에 어려움을 겪었습니다. 이후에는 협업을 통해 맵툴과 레벨 생성 파이프라인을 구현하여, 기획 사이드에서 맵 확장 및 수정을 쉽게 할 수 있게 개선하였습니다.",
      images:["assets/projects/square/unicon26.jpg","assets/projects/square/uniconteam.jpg",]
    },
    feedback:{
      graphs: [
        { label:"재미", value:4.49, max:5, unit:"/5", source:"설문 49명" },
        { label:"독창성", value:3.94, max:5,unit:"/5", source:"설문 49명" },
        { label:"비주얼", value:4.51, max:5,unit:"/5", source:"설문 49명" },
      ],
      quotes: [
        {text:"응답자의 73%가 3,000원 이상 지불 의향 (중앙값 3,000~5,000원, 응답 49명)"},
      ]
    },
    other_contributions:null,
    links:[
      { label: "Game Build", url:"https://drive.google.com/drive/folders/1vM2_CeByVGM1knHkupi5VcFxYvktSX5H?usp=sharing"},
      { label: "Google Drive", url:"https://drive.google.com/drive/u/0/folders/1CryMZz71U2earFqjluCkLWHVGd4bTEiC"},
      { label: "QA Log", url:"https://docs.google.com/spreadsheets/d/1-eGDIEAFwoTwJuYDjnPrFnmGSa9eE8IL7ZH3_mnJYps/edit?usp=sharing"}
    ],
  
    detail: {
      coreContributionCount:4,
      techStack:["Unity", "C#", "Localization", "Android"],
      linkMap:{ Document:"Google Drive", "Game Build":"Steam" },
      optimizations:[
        {
          measurement:"씬 로딩 중 벽 생성 과정에서 메시 위치 계산과 오브젝트 재배치가 반복되는 것을 확인",
          cause:"두 시점에 대한 각각의 벽을 런타임 메시 기준으로 계산해 스테이지마다 생성 비용 증가",
          improvement:"맵툴에서 탑뷰/사이드뷰 벽 데이터를 미리 정의하고, 두 뷰의 union 위치를 기준으로 벽을 생성하도록 변경",
          result:"스테이지 생성 계산을 단순화하면서 스테이지 로딩 시간을 4초대에서 1초 이내로 단축"
        },
        {
          measurement:"Unity Profiler를 Android 기기에 연결하여 실기 프레임과 렌더링 비용을 측정",
          cause:"2D 타일맵 중심 게임에 불필요한 조명, 그림자, 후처리 설정이 남아 있었음",
          improvement:"모바일 빌드 기준에 맞는 렌더링 설정을 정리하고 불필요한 비용을 줄임",
          result:"모바일 환경에서 안정적인 60 프레임 이상 확보"
        }
      ],
      feedbackIterations:[
        { feedback:"어려운 맵에서 진행을 보조해 줄 힌트가 있으면 좋겠다", improvement:"원활한 게임플레이를 도와주도록 스테이지별 힌트 시스템 도입" },
        { feedback:"스테이지 수가 적어 플레이타임이 다소 아쉽다", improvement:"맵툴을 구현하고 스테이지를 쉽게 확장 가능하도록 개선하여 스테이지 수를 2배로 확장" }
      ]
    },
  },

  save_the_world: {
    id:"save_the_world",
    title:"Save The World",
    subtitle:"포인트 앤 클릭 룸 이스케이프",
    meta:{ engine:"Unity", platform:"PC(Windows)", team:"3인 팀", year:"2025.06 ~ 2025.12"},
    tags:[],
    badges:[
      { text:"Solo Client", type:"primary" },
      { text:"System Design", type:"sub" },
      { text:"Shader", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/stw/trailer.mp4", thumbnail: "assets/projects/stw/thumbnail.jpg",label:"Trailer" },
      { type:"image", src:"assets/projects/stw/room.png", label:"1" },
      { type:"image", src:"assets/projects/stw/syringe.png", label:"2" },
      { type:"image", src:"assets/projects/stw/ending1.png", label:"3" },
      { type:"image", src:"assets/projects/stw/crutch.png", label:"4" },
    ],
    summary:"6.25 전쟁유공자의 삶을 회고하는 스토리텔링 기반 포인트 앤 클릭 룸 이스케이프. 다채로운 미니게임으로 몰입도 높은 게임플레이를 제공.",
    role:[
        { name:"클라이언트 프로그래밍", icon:"ti-code", desc:"클라이언트 프로그래밍 단독 담당" },
        { name:"기획", icon:"ti-pencil", desc:"연출 기획" },
        { name:"아트", icon:"ti-brush", desc:"픽셀 아트, 그래픽 아트" },
      ],
    //activities:["교내 캡스톤디자인 1"],
    goal:"1인칭 방 탐색, 아이템 사용, 각종 미니게임, 회상 연출을 통한 6.25 전쟁유공자 스토리 중심 포인트 앤 클릭 경험 구현",

    keyChallenges:[
      "면 단위 방 탐색",
      "아이템 사용 흐름 통합",
      "미니게임 공통 구조",
      "CSV 기반 회상 연출",
      "진행 상태 저장·복원"
    ],

    contributions:[
      {
        title:"1인칭 방 탐색과 면 단위 상호작용 구조",
        category:"게임플레이",
        desc:"<br><strong>방을 여러 면으로 나누어 관리하고, 현재 바라보는 면에 해당하는 상호작용 요소만 활성화되는 탐색 구조 구현</strong><ul><li>카메라 이동과 UI 입력을 분리해 방 회전, 오브젝트 클릭, 클로즈업 진입이 서로 충돌하지 않도록 제어</li></ul>",
        images:["assets/projects/stw/view.png"]
      },
      {
        title:"데이터 중심 아이템·인벤토리 시스템",
        category:"구조",
        desc:"<br><strong>아이템의 식별자, 이미지, 표시 크기 데이터를 에셋으로 분리하고, 습득·선택·사용 흐름을 이벤트 기반으로 연결</strong><ul><li>아이템 데이터와 화면 표시 로직을 분리해 새 아이템 추가 시 코드 수정 범위를 줄임</li></ul>",
        images:["assets/projects/stw/item.png"]
      },
      {
        title:"미니게임 공통 프레임워크와 개별 게임 구현",
        category:"게임플레이",
        desc:"<br><strong>여러 미니게임의 시작 안내, 플레이 상태, 종료 연출, 결과 텍스트, 보상 지급, 메인 씬 복귀 흐름을 공통화</strong><ul><li>공통 흐름을 기준으로 각 미니게임은 자신만의 조작·판정·난이도 로직에 집중하도록 분리</li></ul>",
        images:["assets/projects/stw/mini.png"]
      },
      {
        title:"Shader Graph 기반 비주얼 연출",
        category:"셰이더",
        desc:"<br><strong>스토리 분위기와 회상 장면의 감정선을 강화하기 위해 픽셀 렌더링, 물 반사, CRT, 툰 셰이딩, 풀스크린 이펙트를 구현</strong><ul><li>픽셀 전용 카메라와 RenderTexture를 활용하여 픽셀 렌더링 구현</li><li>RenderTexture와 노이즈 기반 UV 왜곡을 활용해 물 반사 구현</li></ul>",
        images:["assets/projects/stw/shader.png"]
      },
      {
        title:"CSV 기반 대화와 회상 시퀀스 연출",
        category:"구조",
        desc:"<br><strong>대사 데이터를 CSV로 분리하고, 발화자·초상화·배경 전환·타이핑 연출을 하나의 회상 시퀀스로 연결</strong><ul><li>발화자 정보에 따라 좌우 캐릭터 이미지를 갱신하고, 시퀀스 전환 시 배경과 음악을 함께 교체해 회상 장면의 흐름 강화</li></ul>",
        images:["assets/projects/stw/csv.png"]
      },
    ],
    troubleshooting:[
      {
        title:"진행 상태 저장·불러오기 구조가 하드코딩되는 문제",
        problem:"아이템 습득, 미니게임 클리어, 오브젝트 상태처럼 저장되어야 할 대상이 많고 흩어져 있어 저장·복원 코드가 하드코딩되고 추적이 어려워짐",
        cause:"각 시스템이 저장 로직을 개별적으로 처리하면서 의존성이 늘어남",
        solution:"ISavable 인터페이스로 저장 가능한 대상을 공통 계약으로 묶고, 구독 시스템을 통해 각 시스템이 저장·복원 흐름에 참여하도록 구조화",
        result:"저장 시스템과 개별 오브젝트의 의존성을 줄이고, 저장 대상 추가 및 재진입 복원 흐름의 코드 추적성을 개선"
      },
      {
        title:"창 모드 화면비율과 레터박스 UI 렌더링 문제",
        problem:"Unity가 고정 비율 창 모드를 직접 지원하지 않아 창 크기 변경 시 화면비가 깨지고, 기존 Screen Overlay UI가 레터박스 위에 렌더링되는 문제가 발생",
        cause:"게임 화면과 UI가 같은 출력 흐름에 묶여 있어 레터박스 영역을 만들더라도 UI가 그 위에 그려졌고, 창 크기 변화에 맞춰 표시 영역을 분리하기 어려웠음",
        solution:"창 크기 변경 시 목표 화면비에 맞춰 레터박스를 생성하고, 카메라 스택을 활용해 게임용 카메라와 UI용 카메라를 분리",
        result:"창 모드에서도 고정된 화면비를 유지하고, UI가 레터박스 영역을 침범하지 않도록 표시 구조를 안정화"
      }
    ],
    /*
    technicalDecisions:[
      {
        q:"왜 방을 면 단위로 나누어 관리했나요?",
        a:"한 방 안에서 시선을 돌리며 단서를 찾는 경험이 핵심이었기 때문에, 방을 독립 씬으로 나누기보다 면 단위로 상호작용 묶음을 활성화하는 방식이 더 적합했습니다. 이를 통해 한 공간 안에 있다는 느낌을 유지하면서도 각 면의 오브젝트와 퍼즐을 독립적으로 관리할 수 있었습니다."
      },
      {
        q:"왜 아이템 정보를 데이터 에셋으로 분리했나요?",
        a:"아이템마다 식별자, 이미지, 표시 크기, 사용 대상이 달랐기 때문에 이를 코드에 직접 작성하면 확장성이 떨어졌습니다. 데이터와 동작을 분리해 아이템 추가·수정 비용을 줄이고, 인벤토리 UI와 사용 판정은 같은 구조를 재사용하도록 설계했습니다."
      },
      {
        q:"왜 미니게임 공통 매니저를 두었나요?",
        a:"미니게임마다 조작 방식은 달랐지만 안내 표시, 플레이 시작, 종료 텍스트, 클리어 이벤트, 메인 씬 복귀는 반복되었습니다. 공통 흐름을 하나로 묶어 중복 구현을 줄이고, 개별 미니게임은 고유 규칙과 난이도 조절에 집중하도록 분리했습니다."
      },
      {
        q:"왜 CSV 기반 대화 시스템을 사용했나요?",
        a:"스토리 중심 프로젝트라 대사 수정이 잦을 수밖에 없었습니다. 대사 데이터를 코드에서 분리하면 문장 수정, 순서 변경, 발화자 변경을 더 빠르게 반영할 수 있고, 초상화·배경·타이핑 연출은 같은 런타임 로직을 재사용할 수 있었습니다."
      }
    ],
    */
    optimizations:[
      {
        title:"반복 연출의 Tween 시퀀스화",
        category:"최적화",
        desc:"<br><strong>아이템 드롭, 카메라 클로즈업, 페이드, 배경 전환처럼 반복되는 연출을 Tween 시퀀스로 구성해 코드 흐름을 단순화</strong><ul><li>시간 기반 애니메이션을 직접 Update에서 관리하지 않고 시퀀스로 묶어 연출 흐름을 명확하게 표현</li><li>입력 제한, 카메라 이동, 보상 활성화 같은 후속 동작을 완료 콜백에 연결해 비동기 연출 중 상태 충돌을 줄임</li><li>미니게임 재시작과 대화 전환에서도 페이드 흐름을 재사용해 장면 전환 품질을 일정하게 유지</li></ul>",
        images:[]
      }
    ],
    retrospective:{
      good:"공통 상호작용 구조와 미니게임 프레임워크를 먼저 잡아두면서, 기획·아트 변경에도 같은 흐름 위에서 기능을 확장할 수 있었습니다. 팀원들과 연출 의도와 구현 가능 범위를 조율하며, 6·25 유공자분들의 실제 이야기를 게임 경험으로 옮기는 데 집중했습니다.",
      bad:"실제 유공자분들의 이야기를 바탕으로 한 프로젝트였기 때문에, 역사적 무게감과 게임적 재미 사이의 균형을 잡는 것이 가장 어려웠습니다. 이후에는 스토리 중심 게임일수록 모든 의미를 설명하기보다, 상호작용과 장면 전환 속에서 자연스럽게 느끼게 만드는 설계가 중요하다는 점을 배웠습니다.",
      images:["assets/projects/stw/625.jpg"]
    },
    feedback:null,
    other_contributions:null,
    links:[
      { label: "GitHub", url:"https://github.com/1Seong/SaveTheWorld"},
      { label: "Game Build", url:"https://drive.google.com/drive/u/0/folders/1U_Dh2vRMxM6RLzvLdlB24sk-XuiHqxuw"},
      { label: "Google Drive", url:"https://drive.google.com/drive/u/0/folders/1R1nXdQBDilDXkxfdgRZK6MDpsjeSJuxS"}
    ],
  
    detail: {
      coreContributionCount:3,
      techStack:["Unity", "C#", "Shader Graph"],
      linkMap:{ Documentation:"Google Drive", GitHub:"GitHub", "Game Build":"Game Build" },
      optimizations:[
        {
          measurement:"아이템 드롭, 카메라 클로즈업, 페이드, 배경 전환처럼 반복되는 시간 기반 연출을 점검",
          cause:"Update 기반 직접 제어가 늘어나면서 연출 전환의 품질이 떨어짐",
          improvement:"반복 연출을 Tween 시퀀스로 묶고 완료 콜백에 후속 동작을 연결",
          result:"연출 코드 흐름을 짧게 만들고 장면 전환 품질을 일정하게 유지"
        }
      ]
    },
  },

  necromancer_survivors: {
    id:"necromancer_survivors",
    title:"Necromancer Survivors",
    subtitle:"뱀서라이크",
    meta:{ engine:"Unity", platform:"PC(Windows)", team:"3인 팀", year:"2024.07 ~ 2024.09"},
    tags:[],
    badges:[
      { text:"Game System", type:"primary" },
      { text:"Exhibited", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/nec/demo.mp4", thumbnail: "assets/projects/nec/1.png",label:"Demo" },
      { type:"image", src:"assets/projects/nec/1.png", label:"1" },
      { type:"image", src:"assets/projects/nec/2.png", label:"2" },
      { type:"image", src:"assets/projects/nec/3.png", label:"3" },
    ],
    summary:"Vampire Survivors-like 장르 게임. 스테이지별 최종 보스, 맵 곳곳의 함정 랜덤 배치로 차별화된 게임플레이를 제공.",
    role:[
        { name:"클라이언트 프로그래밍", icon:"ti-code", desc:"무기, 스테이지, 보스 구현" },
        { name:"기획", icon:"ti-pencil", desc:"보스, 스테이지, 함정 기믹 기획." },
      ],
    activities:["교내 게임개발동아리 창립제 전시"],
    goal:"대량의 적이 지속적으로 몰려오는 뱀서라이크 전투에서 스폰, 무기, 보스 패턴, 함정을 안정적으로 연결한 3스테이지 생존 루프 구현",

    keyChallenges:[
      "대량 전투 성능",
      "전투 판정 분리",
      "보스 패턴 구조화",
      "유효 위치 탐색",
      "전투 가독성 확보"
    ],

    contributions:[
      {
        title:"충돌 채널 분리 기반 전투 판정",
        category:"물리",
        desc:"<br><strong>몸 접촉, 투사체 피격, 장판 피해, 흡인 필드처럼 서로 다른 전투 판정을 충돌 채널별로 분리해 처리</strong><ul><li>적과의 지속 충돌은 물리 충돌로, 투사체와 장판 피해는 트리거 진입·유지로 분리해 판정 유형을 명확히 구분</li></ul>",
        images:[]
      },
      {
        title:"보스 패턴의 컴포넌트 분리와 공격 시퀀스",
        category:"구조",
        desc:"<br><strong>3종 보스의 고유 공격을 독립된 패턴 단위로 분리하고, 코루틴과 방향 계산을 활용해 공격 시퀀스를 제어</strong><ul><li>빔 계열 공격은 플레이어 방향 벡터와 arctangent 계산으로 조준 각도를 산출하고, 보스 방향에 따라 각도 범위를 제한</li><li>방사형 폭발은 45도 간격의 8방향 배치를 링 단위로 확장해 N단계 광역 패턴으로 구성</li></ul>",
        images:[]
      },
      {
        title:"유효 위치 검증 기반 스폰·순간이동 처리",
        category:"물리",
        desc:"<br><strong>적 스폰과 보스 순간이동 시 벽, 플레이어 주변 금지 영역, 충돌 위험 위치를 검사해 비정상 위치 생성을 방지</strong><ul><li>스폰 포인트가 금지 영역과 겹치면 후보에서 제외하고, 유효한 지점이 나올 때까지 다시 선택</li><li>보스 순간이동은 플레이어 주변의 임의 후보 위치를 샘플링한 뒤 벽 레이어와 겹치지 않는 지점만 채택</li></ul>",
        images:[]
      },
      {
        title:"전투 가독성 UI",
        category:"기믹",
        desc:"<br><strong>함정별 상태 전이와 화면 밖 타겟 인디케이터를 구현해 전투 상황을 예측 가능하게 정리</strong><ul><li>가시 발판과 포탑은 애니메이션 상태와 공격 태그를 동기화해 피해 판정이 시각 연출과 맞물리도록 구성</li><li>보스처럼 중요한 대상은 월드 좌표를 뷰포트 좌표로 변환하고, 화면 가장자리 인디케이터가 실제 방향을 가리키도록 처리</li></ul>",
        images:[]
      }
    ],
    /*
    technicalDecisions:[
      {
        q:"왜 객체 풀 패턴을 사용했나요?",
        a:"뱀서라이크 장르는 적과 투사체가 짧은 시간에 반복적으로 생성·비활성화됩니다. 매번 생성과 파괴를 반복하면 GC와 프레임 드롭 위험이 커지기 때문에, 프리팹 타입별 풀을 두고 비활성 오브젝트를 재사용하는 방식이 적합했습니다."
      },
      {
        q:"왜 보스 공격을 독립 패턴 단위로 분리했나요?",
        a:"보스마다 이동 정지, 예고, 조준, 공격, 복귀 흐름은 유사하지만 실제 공격 방식은 달랐습니다. 패턴을 독립 컴포넌트와 코루틴으로 분리하면 각 보스의 고유 공격을 따로 조정하면서도 공통 전투 흐름은 유지할 수 있었습니다."
      },
      {
        q:"왜 전투 판정을 충돌 유형별로 나누었나요?",
        a:"몸 접촉 피해, 투사체 피격, 장판 지속 피해, 함정 효과는 적용 방식과 주기가 다릅니다. 이를 하나의 충돌 처리로 묶으면 예외가 많아지기 때문에, 물리 충돌과 트리거 진입·유지·이탈을 나누어 판정 안정성과 확장성을 높였습니다."
      }
    ],
    */
    optimizations:[
      {
        title:"객체 풀링 기반 대량 스폰 최적화",
        category:"최적화",
        desc:"<br><strong>적, 보스, 투사체, 이펙트를 프리팹 타입별 풀에서 재사용해 대량 전투 상황의 생성·파괴 비용을 줄임</strong><ul><li>프리팹 인덱스별 리스트를 두고 비활성 오브젝트를 우선 재사용</li><li>풀에 남은 오브젝트가 없을 때만 새로 생성해 초기 구현의 유연성도 유지</li><li>스폰, 무기 발사, 보스 탄막 모두 같은 풀 접근 흐름을 사용해 반복 생성 비용을 완화</li></ul>",
        images:[]
      },
      {
        title:"스폰·타겟 표시 갱신 범위 축소",
        category:"최적화",
        desc:"<br><strong>스테이지 데이터와 대상별 매핑 구조를 활용해 필요한 오브젝트만 생성·갱신되도록 처리</strong><ul><li>스테이지 번호에 따라 스폰 주기, 체력, 속도, 피해량, 스프라이트 타입을 선택해 같은 스폰 로직을 재사용</li><li>보스 등장 시에만 화면 밖 인디케이터를 추가하고, 타겟과 인디케이터를 딕셔너리로 묶어 개별 갱신</li><li>뷰포트 좌표를 기준으로 화면 밖 여부와 가장자리 위치를 계산해 전투 UI 갱신 로직을 단순화</li></ul>",
        images:[]
      }
    ],

    retrospective:{
      good:"첫 팀 게임 프로젝트에서 객체 풀, 상태 기반 함정, 충돌 판정 분리 같은 게임 아키텍처를 실제 전투 시스템에 적용했습니다. 대량 스폰과 보스 탄막처럼 성능과 가독성이 동시에 필요한 구조를 구현하며, 재사용 가능한 전투 흐름을 설계하는 경험을 얻었습니다.",
      bad:"가장 어려웠던 점은 전투 난이도와 공정함의 균형이었습니다. 적 수, 함정, 보스 탄막을 늘리면 긴장감은 올라갔지만, 예고 연출이나 스폰 위치 검증이 부족하면 플레이어가 납득하기 어려운 피해로 느껴졌습니다. 이후에는 액션 게임에서 성능 최적화만큼이나 공격 예고, 판정 범위, 회피 가능성을 함께 설계해야 한다는 점을 배웠습니다."
    },
    feedback:null,
    other_contributions:null,
    links:[
      { label:"GitHub", url:"https://github.com/roxasventus/CIEN-tutorial-project-team2" },
      { label:"Game Build", url:"https://con.cien.or.kr/pages/viewpage.action?pageId=186843195" },
          
    ],
    detail: {
      coreContributionCount:3,
      techStack:["Unity", "C#"],
      linkMap:{ Documentation:"Google Drive", GitHub:"GitHub", "Game Build":"Game Build" },
      optimizations:[
        
      ]
    },
  },

  omakhase: {
    id:"omakhase",
    title:"오,막하세!",
    subtitle:"포인트 앤 클릭 식당 경영 시뮬레이션",
    meta:{ engine:"Unity", platform:"PC(Windows)", team:"5인 팀", year:"2025.02 ~ 2026.06"},
    tags:[],
    badges:[
      { text:"UI Structure", type:"primary" },
      { text:"Data-driven", type:"sub" },
      { text:"Exhibited", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/omak/trailer.mkv", thumbnail:"assets/projects/omak/thumbnail.png",label:"Trailer" },
      { type:"image", src:"assets/projects/omak/ingame.png", label:"1" },
      { type:"image", src:"assets/projects/omak/book.png", label:"2" },
      { type:"image", src:"assets/projects/omak/tutorial.png", label:"3" },
    ],
    summary:"포인트 앤 클릭 식당 경영 게임. 조리법·메인재료·서브재료 카테고리 분류로 다양한 레시피 조합을 유도하고 멀티엔딩을 제공합니다.",
    role:[
        { name:"클라이언트 프로그래밍", icon:"ti-code", desc:"게임 구조 설계, 전체 UI 구현, 레시피북 시스템 구현." },
      ],
    activities:["PlayX4 IndieSeed"],
    goal:"재료 조합, 조리법, 손님 요구 조건, 레시피북 해금을 연결해 새로운 레시피를 발견하는 식당 경영 루프 구현",

    keyChallenges:[
      "레시피 조합 데이터 확장",
      "손님 조건 판정",
      "해금 상태와 UI 동기화",
      "레시피북 실시간 갱신",
      "기획 변경에 강한 구조"
    ],

    contributions:[
      {
        title:"Type Object 패턴 기반 레시피 데이터 시스템",
        category:"구조",
        desc:"<br><strong>레시피, 카테고리, 재료 조합을 ScriptableObject 데이터로 분리하는 Type Object 패턴을 적용해 코드 수정 없이 메뉴를 확장 가능한 구조로 설계</strong><ul><li>공통 레시피 베이스 위에서 확장해 이름, 설명, 맛 수치, 스프라이트 등 정보를 함께 관리</li></ul>",
        images:[]
      },
      {
        title:"튜플 키 기반 레시피 조회와 조리 결과 판정",
        category:"게임플레이",
        desc:"<br><strong>선택된 재료·조리법 조합을 튜플 키로 변환해 레시피를 빠르게 조회하고, 손님 요구 조건과 맛 수치에 따라 결과를 판정</strong><ul><li>게임 시작 시 레시피 목록을 딕셔너리로 변환해 조합 탐색을 반복 순회가 아닌 키 조회 방식으로 처리</li></ul>",
        images:[]
      },
      {
        title:"Observer 패턴 기반 해금·UI 동기화 시스템",
        category:"구조",
        desc:"<br><strong>재료와 레시피의 해금 상태 변경을 이벤트로 발행하고, 각 UI가 이를 구독해 필요한 부분만 갱신하는 구조 구현</strong><ul><li>재료 종류별 해금 상태를 저장하고, 해금 발생 시 인덱스와 카테고리 정보를 이벤트로 전달</li></ul>",
        images:[]
      },
      {
        title:"MVC 흐름 기반 레시피북 UI",
        category:"UI",
        desc:"<br><strong>선택 상태를 Model에서 관리하고, 레시피 조회 결과를 View에 반영하는 MVC 흐름으로 레시피북 UI 구현</strong><ul><li>레시피 조회 로직, 해금 상태 판정, 화면 표시를 분리해 UI 수정과 데이터 확장이 서로 영향을 덜 주도록 구성</li></ul>",
        images:[]
      },
      {
        title:"인터페이스·상속 기반 선택 버튼 UI 공통화",
        category:"UI",
        desc:"<br><strong>재료 종류별 선택 버튼과 해금 버튼이 공통 인터페이스와 상속 구조 위에서 동작하도록 구성해 중복 구현을 줄임</strong><ul><li>해금 버튼 그룹은 공통 동작을 재사용하되, 레시피북처럼 예외가 필요한 UI는 일부 동작만 확장해 처리</li></ul>",
        images:[]
      }
    ],
    /*
    technicalDecisions:[
      {
        q:"왜 Type Object 패턴으로 레시피 데이터를 분리했나요?",
        a:"레시피와 재료 조합이 계속 늘어나는 구조였기 때문에, 조합 정보를 코드에 직접 작성하면 기획 변경 때마다 로직 수정이 필요했습니다. 레시피와 카테고리를 데이터 에셋으로 분리해 새 메뉴, 맛 수치, 표시 이미지를 데이터 추가만으로 확장할 수 있도록 했습니다."
      },
      {
        q:"왜 레시피 조회에 튜플 키 딕셔너리를 사용했나요?",
        a:"재료 조합이 많아질수록 매번 전체 레시피 목록을 순회하는 방식은 불필요한 비용이 커집니다. 기본 재료, 조리법, 주재료, 부재료를 하나의 키로 묶어 딕셔너리에 저장하면 선택 조합에 해당하는 레시피를 즉시 조회할 수 있어 조리와 레시피북 갱신 흐름이 단순해집니다."
      },
      {
        q:"왜 해금 시스템을 Observer 패턴으로 구성했나요?",
        a:"재료 해금은 조리 시스템, 저장 데이터, 버튼 UI, 레시피북에 동시에 영향을 줍니다. 해금 로직이 UI를 직접 제어하면 결합도가 높아지므로, 해금 발생 사실만 이벤트로 알리고 각 UI가 자신에게 필요한 변경만 처리하도록 구성했습니다."
      },
      {
        q:"왜 레시피북 UI를 MVC 흐름으로 나누었나요?",
        a:"레시피북은 여러 재료 버튼의 선택 조합을 즉시 반영해야 했습니다. 선택 상태, 레시피 조회, 화면 표시를 분리하면 버튼별로 별도 갱신 로직을 작성하지 않아도 UI가 현재 조합 상태를 일관되게 반영할 수 있습니다."
      }
    ],
    */
    optimizations:[
      {
        title:"딕셔너리 기반 레시피 조회 최적화",
        category:"최적화",
        desc:"<br><strong>레시피 목록을 조합 키 기반 딕셔너리로 변환해 조리와 레시피북 조회 비용을 줄임</strong><ul><li>게임 시작 시 레시피 데이터를 한 번만 순회해 조회 테이블을 구성</li><li>조리 시점과 레시피북 갱신 시점에는 전체 목록 순회 없이 선택 조합으로 바로 레시피를 조회</li><li>레시피 수가 늘어나도 조회 로직의 복잡도가 증가하지 않도록 구성</li></ul>",
        images:[]
      },
    ],

    retrospective:{
      good:"데이터 중심 레시피 구조, 이벤트 UI를 구현하며 기획 변경에 대응하기 쉬운 구조를 설계할 수 있었습니다. PlayX4 전시를 하며 실제 사용자 플레이 피드백을 받은 점도 의미 있었습니다.",
      bad:"초기에는 조리 규칙과 UI 흐름이 동시에 바뀌면서 레시피 데이터 구조와 화면 표현 방식이 여러 번 흔들렸습니다. 이 과정에서 기능 구현보다 먼저 용어, 데이터 기준, 해금 조건을 더 명확히 합의해야 한다는 점을 배웠습니다. 이후에는 기획 변경이 예상되는 시스템일수록 데이터 스키마와 UI 상태 흐름을 먼저 고정하고 개발을 시작하려고 합니다."
      ,images:["assets/projects/omak/x4.jpg"]
    },
    feedback:{
      quotes:[
        {text:"응답자의 65.4%가 2,000원 이상 지불 의향 (중앙값 2,000~4,000원, 응답 26명)"},
        {text:"잘한 점: 대사의 재미(12명), 다양한 레시피와 자율성(10명), 아트(9명)가 주요 긍정 요소로 언급됨"},
        {text:"개선점: 반복성(15명)과 가이드 부족(13명)이 가장 많이 지적됨"},
      ]
    },
    other_contributions:null,
    links:[
      { label:"GitHub", url:"https://github.com/1Seong/OMakHase" },
      { label: "Game Build", url:"https://drive.google.com/drive/u/0/folders/1zsLRjDbIwuwMQWg2RsX3LpfD9MK6QiTr"},
      { label: "Google Drive", url:"https://drive.google.com/drive/u/0/folders/1kuZ1A9s4I4U6mIoMt-8Pci-bre_BDi60"},
      { label: "QA Log", url:"https://docs.google.com/spreadsheets/d/1CyKeg_Cr30TLalOE0hPUM9Apbv2lUUP71TEpSsHxYsY/edit?usp=sharing"}
    ],
  
    detail: {
      coreContributionCount:3,
      techStack:["Unity", "C#"],
      linkMap:{ Document:"Google Drive", GitHub:"GitHub", "Game Build":"Game Build" },
      optimizations:[
        {
          measurement:"조리 결과와 레시피북 갱신 시 전체 레시피 목록을 반복 순회하는 비용을 점검",
          cause:"재료, 조리법, 주재료, 부재료 조합이 늘어날수록 선형 탐색 비용과 분기 복잡도가 증가",
          improvement:"조합을 튜플 키로 묶고 게임 시작 시 딕셔너리 조회 테이블을 구성",
          result:"조리와 레시피북 조회를 즉시 조회 방식으로 바꾸고 레시피 확장 비용을 낮춤"
        }
      ],
      feedbackIterations:[
        { feedback:"레시피북의 조작 가이드가 부족해서 처음 사용 방법을 알기 어렵다", improvement:"레시피북 엔트리 페이지에 간단한 이용 설명 추가" },
        { feedback:"요리 완성시 만들어진 결과물을 바로 알 수가 없다", improvement:"팝업형 UI를 추가하여 완성된 요리에 대한 직관적인 안내 구현" }
      ]
    },
  },

  detective_ai: {
    id:"detective_ai",
    title:"Detective A&I",
    subtitle:"AI 형사 추리 게임",
    meta:{ engine:"Unity", platform:"WebGL", team:"3인 팀", year:"2026.07 ~ 2026.08" },
    tags:["OpenAI API","Supabase","WebGL"],
    badges:[
      { text:"OpenAI API", type:"primary" },
      { text:"Supabase", type:"sub" },
      { text:"WebGL", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/dai/demo.mp4", thumbnail: "assets/projects/dai/thumb.png", label:"Demo" },
      { type:"image", src:"assets/projects/dai/1.png", label:"1" },
      { type:"image", src:"assets/projects/dai/2.png", label:"2" },
      { type:"image", src:"assets/projects/dai/3.png", label:"3" },
    ],
    summary:"플레이어가 직접 추론을 작성하고, AI가 입력 검증,최종 추리,결과 평가를 수행하는 추리 게임.",
    role:[
      { name:"풀스택 프로그래밍", icon:"ti-cpu", desc:"OpenAI API 연동<br>AI 추리 파이프라인 설계<br>Supabase 서버 연동" },
    ],
    activities:null,
    goal:"플레이어가 직접 작성한 자연어 추론을 게임 진행과 결과 평가에 반영하는 AI 추리 경험 구현",
    contributions:[
      {
        title:"3단계 역할별 AI 추리 처리 파이프라인",
        category:"AI",
        desc:"<br><strong></strong><ul><li>입력 검증 AI는 플레이어 설명이 증거와 의미상 연결되는지 확인</li><li>형사 추리 AI는 제출한 증거와 플레이어 가설을 바탕으로 추리 대사와 구조화된 결론 생성</li><li>결과 평가 AI는 사건 정답과 추리 결과를 의미 기준으로 비교해 항목별 평가</li></ul>",
        images:[]
      },
      {
        title:"Supabase Edge Function 기반 OpenAI API 호출 구조",
        category:"백엔드",
        desc:"<br><strong>OpenAI API 키와 시스템 프롬프트를 클라이언트에 노출하지 않도록 서버 경유 호출 구조 구현</strong><ul><li>Unity 클라이언트가 Supabase 익명 세션을 발급받고 AI 요청을 전송</li><li>Edge Function에서 인증, 입력 형식, 요청 크기, 호출 한도를 검증한 뒤 고정된 모델·프롬프트·토큰 설정으로 OpenAI API 호출</li></ul>",
        images:[]
      },
      {
        title:"구조화된 JSON 응답 기반 게임 상태 반영",
        category:"구조",
        desc:"<br><strong>AI 응답을 게임 대사, 추리 결과, 점수에 안정적으로 연결하기 위해 JSON 포맷을 사용</strong><ul><li>수용된 플레이어 입력을 저장하고 최종 추리 요청 시 누적 증거 기록으로 전달</li><li>형사 추리 결과와 평가 결과를 구조화된 필드로 받아 UI에 반영</li></ul>",
        images:[]
      },
    ],
    optimizations:[],
    retrospective:{
      good:"규칙 기반 선택지로는 처리하기 어려운 플레이어의 자연어 추론을 AI 단계로 분리해 게임 진행에 연결했습니다. 특히 AI가 사건을 독자적으로 해결하는 것이 아니라, 플레이어가 제공한 증거 해석과 가설을 중심으로 결론을 구성하도록 제한한 점이 프로젝트의 핵심이었습니다.",
      bad:"AI 응답 품질은 프롬프트와 입력 데이터 구조에 크게 영향을 받기 때문에, 단순 API 호출보다 검증 가능한 JSON 포맷과 실패 대응 흐름을 먼저 설계하고 테스트하는 것이 중요하다는 점을 배웠습니다.",
    },
    feedback:null,
    other_contributions:null,
    links:[
      { label:"GitHub", url:"https://github.com/1Seong/DetectiveAI" },
      { label: "Game Build", url:"https://1seong.github.io/DetectiveAI/"},
      { label: "Google Drive", url:"https://drive.google.com/drive/folders/1g4Zq7pVE3tndqg9M5sD_Da310r3r3cpZ?usp=sharing"},
    ],
    detail:{
      coreContributionCount:3,
      techStack:["Unity", "C#", "OpenAI API", "Supabase"],
      linkMap:{ Document:"Google Drive", GitHub:"GitHub", "Game Build":"Game Build" },
    },
  },

  soulmate_system: {
    id:"soulmate_system",
    showMore:false,
    title:"Soulmate System",
    subtitle:"하우징 연계형 AI 동반자 프로토타입",
    meta:{ engine:"Unity", platform:"해당없음", team:"7인 팀", year:"2026.02", status:"완료", note:"넥슨 메토링 4기" },
    tags:["넥슨 메토링 4기"],
    badges:[
      { text:"넥슨 메토링 4기", type:"primary" },
      { text:"Prototype", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/soul/demo.mp4", thumbnail: "assets/projects/soul/thumbnail.png",label:"Demo" },
    ],
    summary:"메이플스토리 하우징 공간과 연계해, 플레이어와 대화하고 관계성을 형성하는 AI 동반자 콘텐츠 프로토타입.",
    role:"클라이언트 프로그래밍 — 무기 시스템, UI 구현 담당.",
    activities:["2025 UNIJAM 참가"],
    contributions:[
      { title:"무기 시스템 데이터·로직 분리 및 프로토타이핑 최적화", category:"구조", desc:"무기 데이터를 Scriptable Data로 분리하고 템플릿 메서드 패턴을 적용해 기능 로직과 데이터 정의를 명확히 분리. 데이터 교체만으로 다양한 무기를 빠르게 구현·검증 가능한 구조 설계. 운석, 화살비, 얼음창 등 추가 무기 구현.", images:[] },
    ],
    optimizations:[],
    retrospective:{
      good:"3일이라는 짧은 기간 안에 팀원들과 빠르게 역할을 분담하고 동작하는 게임을 완성할 수 있었음. 게임잼 특유의 긴장감 속에서 프로토타이핑 속도를 높이는 설계 방식을 익힐 수 있었음.",
      bad:"시간 제약으로 QA 시간이 부족했고, 일부 밸런스 이슈를 출품 전에 해결하지 못했음.",
    },
    feedback:null,
    other_contributions:null,
    links:[
    ],
  },

  hell_pit: {
    id:"hell_pit",
    title:"Hell Pit",
    subtitle:"1.44MB 제한 액션 게임",
    meta:{ engine:"Win32 API", platform:"PC(Windows)", team:"개인", year:"2026.08" },
    tags:["C++","Win32 API","Codex","Size-Limited"],
    badges:[
      { text:"1.44MB", type:"primary" },
      { text:"Codex", type:"sub" },
      { text:"C++", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/hellpit/demo.mp4", thumbnail: "assets/projects/hellpit/thumbnail.png", label:"Demo" },
      { type:"image", src:"assets/projects/hellpit/1.png", label:"1" },
    ],
    summary:"1.44MB 이하 C++ 기반 소형 후크 액션 게임.",
    role:[
      { name:"게임 전체 구현", icon:"ti-code", desc:"C++/Win32 기반<br>게임 루프 및 렌더링<br>Codex 활용 아트, 기능 개선" },
    ],
    goal:"1.44MB 용량 제약 안에서, 훅 액션을 중심으로 한 미니 액션 게임 구현",
    contributions:[
      {
        title:"Win32 기반 경량 게임 루프와 소프트웨어 렌더링",
        category:"구조",
        desc:"<br><strong>외부 엔진 없이 Win32 API와 C++ 코드만으로 입력, 업데이트, 렌더링, 오디오 흐름을 구성</strong><ul><li>320x180 내부 버퍼를 기준으로 픽셀 렌더링을 수행</li></ul>",
        images:[]
      },
      {
        title:"훅 기반 이동·전투 액션 시스템",
        category:"게임플레이",
        desc:"<br><strong></strong><ul><li>훅 대상에 따라 지형 이동, 적 처치, 오브젝트 상호작용, 상점 포탈 진입으로 동작을 분기</li><li>훅 실패 쿨타임, 대시 타이밍, 콤보 유지 규칙을 통해 반복 플레이의 긴장감을 구성</li></ul>",
        images:[]
      },
      {
        title:"용량 제약을 고려한 콘텐츠 구현",
        category:"최적화",
        desc:"<br><strong></strong><ul><li>벽 함정, 투사체, 아이템 등을 struct와 배열 중심 경량 데이터 구조로 관리</li><li>저장 데이터와 업적 상태를 ini 기반으로 기록해 별도 리소스 의존성을 줄임</li></ul>",
        images:[]
      },
      {
        title:"Codex 활용 개발 워크플로우",
        category:"AI",
        desc:"<br><strong>Codex를 기능 구현과 반복 개선 보조 도구로 활용해 제한된 기간 안에 플레이 가능한 빌드를 완성</strong><ul><li>게임 시스템 확장, 버그 수정, 코드 정리 과정에서 AI 제안을 검토하고 프로젝트 요구에 맞게 반영</li></ul>",
        images:[]
      },
    ],
    optimizations:[],
    retrospective:{
      good:"엔진 없이 C++와 Win32 API만으로 게임 루프, 렌더링, 입력, 오디오, 저장 흐름을 직접 다루며 작은 실행 파일 안에 완성된 플레이 루프를 구성했습니다. Codex를 활용해 구현 속도를 높이면서도 최종 구조와 동작은 직접 검토하며 조정했습니다.",
      bad:"용량 제약과 직접 구현 방식 때문에 기능을 빠르게 늘릴수록 코드가 한 파일에 집중되는 문제가 있었습니다. 이후에는 작은 프로젝트라도 시스템별 책임을 더 일찍 나누고, 구현 속도와 추적성을 함께 관리하는 구조를 먼저 잡아야 한다고 느꼈습니다.",
    },
    feedback:null,
    other_contributions:null,
    links:[
      { label:"GitHub", url:"https://github.com/1Seong/hell-pit" },
      { label:"Game Build", url:"https://drive.google.com/drive/folders/1vmqvg6U2zBy1egjWv0_asbO4EC4t2XEm?usp=sharing"}
    ],
    detail:{
      coreContributionCount:4,
      techStack:["C++", "Win32 API", "Codex"],
      linkMap:{ GitHub:"GitHub", "Game Build":"Game Build" }
    },
  },

  runepago: {
    id:"runepago",
    title:"RUNEpago",
    subtitle:"뱀서라이크 (게임잼)",
    meta:{ engine:"Unity", platform:"PC", team:"5인 팀", year:"2025", status:"완료", note:"2025 UNIJAM" },
    tags:["뱀서라이크","게임잼","팀 프로젝트","UNIJAM"],
    badges:[
      { text:"Game Jam", type:"primary" },
      { text:"Prototype", type:"sub" },
      { text:"Weapon System", type:"sub" },
    ],
    media:[
      { type:"image", src:"", label:"Screenshot 1" },
      { type:"image", src:"", label:"Screenshot 2" },
      { type:"image", src:"", label:"Screenshot 3" },
    ],
    summary:"'점입가경' 주제에 맞게 3일간 제작한 Vampire Survivor-like 게임. '양날의 검' 컨셉으로 득과 실이 동시에 존재하는 능력과 무기가 특징입니다.",
    role:"클라이언트 프로그래밍 — 무기 시스템, UI 구현 담당.",
    activities:["2025 UNIJAM 참가"],
    contributions:[
      { title:"무기 시스템 데이터·로직 분리 및 프로토타이핑 최적화", category:"구조", desc:"무기 데이터를 Scriptable Data로 분리하고 템플릿 메서드 패턴을 적용해 기능 로직과 데이터 정의를 명확히 분리. 데이터 교체만으로 다양한 무기를 빠르게 구현·검증 가능한 구조 설계. 운석, 화살비, 얼음창 등 추가 무기 구현.", images:[] },
    ],
    optimizations:[],
    retrospective:{
      good:"3일이라는 짧은 기간 안에 팀원들과 빠르게 역할을 분담하고 동작하는 게임을 완성할 수 있었음. 게임잼 특유의 긴장감 속에서 프로토타이핑 속도를 높이는 설계 방식을 익힐 수 있었음.",
      bad:"시간 제약으로 QA 시간이 부족했고, 일부 밸런스 이슈를 출품 전에 해결하지 못했음.",
    },
    feedback:null,
    other_contributions:null,
    links:[
      { label:"GitHub", url:"https://github.com/1Seong/unijam2025" },
    ],
  },
};

// Link slots shown in Project Overview. Missing links are hidden.
const DETAIL_LINK_SLOTS = ["Document", "GitHub", "Game Build", "QA Log"];
