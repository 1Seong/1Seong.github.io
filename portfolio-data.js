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
    { label: "공부 정리 노션",  icon: "notion",  url: "https://www.notion.so/9516adf7733d404ebc914550ff4af2a2" },
  ],
};
const MILESTONE_SUMMARY = [];
const SKILLS = [
  { category: "Main Stack", items: [{ name:"Unity 6 / URP", icon:"" }, { name:"C#", icon:"" }, { name:"C++", icon:"" }] },
  { category: "Sub Stack", items: [{ name:"PostgreSQL", icon:"" }] },
  { category: "Tools", items: [{ name:"Git", icon:"" }, { name:"Supabase", icon:"" }, { name:"Jira", icon:"" }] },
  { category: "AI Workflow", items: [{ name:"Claude Code", icon:"" }, { name:"Codex", icon:"" }, { name:"AI Agent Loop", icon:"" }] },
  { category: "Platform", items: [{ name:"Windows", icon:"" }, { name:"Android", icon:"" }] },
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
    // \u00a0(줄바꿈 없는 공백): 줄이 넘치면 "유엔군사령부" 앞에서만 줄바꿈되게 한다
    { date:"2023.10", title:"미군 합동근무 공로훈장 (JSCM)", org:"미국\u00a0국방부\u00a0· 유엔군사령부\u00a0카투사\u00a0근무" },
  ],
  대외활동: [
    { date:"2026.05.23 ~ 2026.09.04", title:"1.44MB 게임 개발 공모전 출품 — Hell Pit", org:"2P GAME ARCADE", url:"https://2pgarcade.com/contest-144mb.html" },
    { date:"2026.02", title:"2026 메토링 4기", org:"NEXON" },
    { date:"2025.11", title:"게임 전시(챌린저) - UNICON 2025", org:"UNIDEV" },
    { date:"2025.01", title:"UNIJAM", org:"UNIDEV" },
    { date:"2026.05", title:"게임 전시 - PlayX4 IndieSeed", org:"경기콘텐츠진흥원 외" },
    { date:"2026.11", title:"게임 전시 - 게임개발동아리 창립제", org:"중앙대학교" },
    { date:"2024.11", title:"게임 전시 - 게임개발동아리 창립제", org:"중앙대학교" },
    { date:"2026.03", title:"게임 전시 - 동아리박람회", org:"중앙대학교" },
    { date:"2026.08", title:"게임 전시 - UNICON 2026", org:"UNIDEV" },
  ],
  시험및자격증: [
    { date:"2026.05.16 ~ 2028.05.16", title:"TOPCIT 620점", org:"정보통신기획평가원", url:"https://www.topcit.or.kr/site/faq.do" },
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
const PROJECT_ORDER = ["unity_loop", "eulerian_aurora", "square_erauqs", "omakhase", "detective_ai", "save_the_world"];
// 표시하지 않는 프로젝트(데이터는 보존): necromancer_survivors, soulmate_system, runepago
// 프로젝트 순서 변경 시 배열 순서만 바꾸면 됩니다.
const MAIN_PROJECT_IDS = ["unity_loop", "eulerian_aurora", "square_erauqs", "omakhase"];
const SUB_PROJECT_IDS = PROJECT_ORDER.filter(id => !MAIN_PROJECT_IDS.includes(id));

const PROJECTS = {
  // 근거: 1Seong/UnityLoopInner (비공개) CLAUDE.md, docs/STATUS.md(2026-11-17), docs/DECISIONS.md, .claude/skills/issue/SKILL.md
  // 1Seong/UnityLoop(Agent SDK 아우터 루프)는 비용 문제로 중단했고 실제로 쓴 적이 없어 근거로 쓰지 않는다.
  // 공개 샘플 저장소: 1Seong/UnityLoop-Samples (원본 3968a7b 기준 발췌). 도식은 assets/projects/uloop/(architecture·guard·ci.svg).
  // 데모 영상·스크린샷은 학습 프로젝트 1Seong/unity-2d-game-analysis(비공개)의 U2D-2 실행(2026-11-18, PR #2 머지). 영상은 녹화 3개를 단계 자막과 함께 편집.
  // 서버(I5)는 보류, 비대화형 디스패처 실측도 보류(STATUS 2026-11-17).
  unity_loop: {
    id:"unity_loop",
    title:"UnityLoop",
    subtitle:"Jira–Unity AI 개발 파이프라인",
    meta:{ engine:"Claude Code", platform:"Windows · GitHub Actions", team:"개인", year:"2026.11 ~" },
    tags:[],
    badges:[
      { text:"1인 설계·구현", type:"primary" },
      { text:"서브에이전트 · 훅", type:"sub" },
      { text:"Jira · CI", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/uloop/demo.mp4", thumbnail:"assets/projects/uloop/demo-thumb.webp", label:"실행 흐름" },
      { type:"image", src:"assets/projects/uloop/reject.webp", label:"1차 수락 거절", alt:"1차 수락 게이트에서 사유와 함께 거절하는 /issue --reject 명령", fit:"contain" },
      { type:"image", src:"assets/projects/uloop/ci-run.webp", label:"재구현 뒤 CI 통과", alt:"재구현 뒤 GitHub Actions에서 Unity EditMode 테스트가 통과한 실행 화면", fit:"contain" },
      { type:"image", src:"assets/projects/uloop/pr.webp", label:"PR 머지", alt:"에이전트가 쓴 설계 메모가 담긴 U2D-2 PR이 머지된 화면", fit:"contain" },
      { type:"image", src:"assets/projects/uloop/jira-issue.webp", label:"재구현 뒤 Jira 완료", alt:"재구현 뒤 수락되어 완료 상태가 된 Jira U2D-2 이슈", fit:"contain" },
    ],
    summary:"사람이 고른 Jira 이슈 하나를 계획·구현·검증·PR·CI·수락·머지까지 잇는 에이전트 개발 루프. 학습용 Unity 프로젝트 이슈를 수락 거절·재구현을 거쳐 PR 머지와 Jira 완료까지 처리.",
    role:[
      { name:"파이프라인 설계·구현", icon:"ti-cpu", desc:"/issue 절차와 단계별 서브에이전트 설계<br>Jira·GitHub·CI 연동 스크립트<br>훅 기반 쓰기·셸 가드와 훅 판정 시험" },
    ],
    activities:null,
    goal:"이슈 구현은 에이전트가 맡고, 수락과 머지는 사람이 결정하는 개발 루프 구축",
    contributions:[],
    designCases:[
      {
        title:"이슈 단위 단계 흐름과 판정 분리",
        category:"구조",
        context:"에이전트 출력에 흔들리지 않고 이슈마다 같은 순서·기준으로 진행",
        decisions:[
          "단계 순서와 재시도 횟수는 state.py가 관리",
          "스크립트는 종료 코드, 평가는 evaluator 판정 파일로 넘기고 메인 세션은 직접 판정하지 않음",
          "실패 위치와 확인한 사실만 붙여 구현으로 되돌리고, 고치는 방법은 지시하지 않음",
        ],
        result:"샌드박스 이슈와 학습용 Unity 프로젝트 이슈(수락 거절 뒤 재구현)를 PR 머지·Jira 완료까지 처리",
        diagram:{ src:"assets/projects/uloop/architecture.svg", alt:"UnityLoop 이너 루프 전체 흐름: 사람의 이슈 선택, 이슈 읽기·계획·구현 검증·PR CI·머지 완료 단계와 모델 배치, 수락, 구현으로 되돌리는 경로, state.py 제어", size:"full" },
        codeUrl:"https://github.com/1Seong/UnityLoop-Samples/blob/main/portfolio/issue-flow/README.md",
      },
      {
        title:"훅 기반 쓰기 범위와 외부 쓰기 가드",
        category:"AI",
        context:"에이전트가 범위 밖 파일이나 외부 시스템을 바꾸는 사고 방지",
        decisions:[
          "서브에이전트별 쓰기 범위를 ownership.json으로 정하고, 훅 5종이 범위 밖 요청을 차단",
          "Jira·GitHub 쓰기는 자동으로 두되 서브에이전트에는 쓰기 도구를 주지 않고, 사람은 병합·워크플로 설치만 최종 승인",
          "에이전트가 쓰는 외부 스킬은 해시로 고정하고, 훅 판정 시험(하네스)에서 판정과 해시를 함께 검사",
        ],
        issue:{
          problem:"worktree 세션에서 discoverer의 산출물 쓰기가 훅에 막힘",
          cause:"절대 경로 전체에서 .claude 구간을 찾아 worktree 경로를 오판",
          fix:"저장소 안 경로는 루트 기준 상대 경로로 .claude 여부를 검사",
        },
        result:"실제 훅 입력으로 만든 판정 시험 474건 통과",
        diagram:{ src:"assets/projects/uloop/guard.svg", alt:"훅 가드 구조: 메인 세션과 서브에이전트 6종의 모든 호출이 Node.js 훅 5종 중 해당 훅을 거쳐 허용·사람 확인·차단으로 판정되고(사람 확인은 병합·워크플로 설치 같은 최종 승인만), 파이프라인의 Jira·GitHub 쓰기는 Python 스크립트가 자동 수행(서브에이전트에는 쓰기 도구 없음), 하네스가 판정을 시험", size:"full", caption:"모든 호출은 도구별 훅을 거쳐 허용·사람 확인·차단으로 판정" },
        codeUrl:"https://github.com/1Seong/UnityLoop-Samples/blob/main/portfolio/hook-guard/README.md",
      },
      {
        title:"CI 검증과 실패 원인 분류",
        category:"빌드",
        context:"사람 수락 전에 CI로 검증하고, 다시 구현해야 할 실패만 되돌림",
        decisions:[
          "프로필(TOML)로 GameCI EditMode 워크플로를 만들고, 액션은 커밋 SHA로 고정해 설치",
          "preflight가 PR 전에 워크플로·프로필 일치와 시크릿 이름을 점검",
          "pr.py가 실패 로그를 정규식으로만 대조해 코드 실패와 인프라 실패를 구분",
        ],
        issue:{
          problem:"디스크 부족·Unity 로그인 같은 인프라 실패도 구현으로 되돌려짐",
          cause:"CI 실패를 원인 구분 없이 모두 코드 실패로 처리하던 절차",
          fix:"인프라 원인이면 구현으로 되돌리지 않고 사람에게 넘김",
        },
        result:"실제 CI에서 받은 첫 실패 로그가 인프라 실패로 분류됨을 시험으로 확인",
        diagram:{ src:"assets/projects/uloop/ci.svg", alt:"CI 구조: 프로필에서 ci.py가 워크플로를 만들어 설치, PR마다 Changes 작업과 Unity 작업(디스크 정리·체크아웃·Library 캐시·GameCI EditMode·결과 업로드) 실행, pr.py가 wait·checks·로그 대조로 통과·인프라 실패·코드 실패를 나눔", size:"full", caption:"준비는 한 번, CI는 PR마다 실행, pr.py가 로그로 실패를 분류해 종료 코드로 전달" },
        codeUrl:"https://github.com/1Seong/UnityLoop-Samples/blob/main/portfolio/ci-classify/README.md",
      },
    ],
    troubleshooting:[],
    optimizations:[],
    retrospective:{
      good:"책으로 익힌 에이전틱 루프를 직접 구현·수정하고 CI까지 연결하며, 실제로 루프를 어떻게 구성해야 하는지 체득했습니다. 또한 AI에 맡기기만 하지 않고 이슈 선택·수락·머지는 사람이 결정하는 휴먼 온 더 루프 구조를 설계하며, AI 루프 안에서 사람이 판단해야 할 지점을 다시 정리할 수 있었습니다.",
      bad:"예상보다 시간과 AI 사용료가 모두 많이 들었고, 1인·학습용 프로젝트에서는 작은 이슈에도 계획·검증·CI 전 단계를 거치는 큰 루프가 오히려 진행을 늦춘다는 점을 깨달았습니다. 이후에는 작업 크기에 맞춰 루프 규모를 정하고, 상황에 따라 최소한의 하네스와 서브에이전트만 둔 가벼운 세션을 활용하면서 직접 구현하는 부분과 균형을 맞추려고 합니다.",
      images:[]
    },
    feedback:null,
    other_contributions:null,
    links:[
      { label:"GitHub", url:"https://github.com/1Seong/UnityLoop-Samples" },
    ],
    detail:{
      techStack:["Claude Code", "Python", "Jira", "GitHub Actions", "GameCI", "Unity CLI"],
      linkMap:{ GitHub:"GitHub" },
    },
  },
  eulerian_aurora: {
    id:"eulerian_aurora",
    title:"Eulerian Aurora",
    subtitle:"UGC 3D 퍼즐 게임",
    meta:{ engine:"Unity", platform:"PC(Windows)", team:"3인 팀", year:"2026.01 ~"},
    tags:null,
    badges:[
      { text:"풀스택", type:"primary" },
      { text:"Supabase · PostgreSQL", type:"sub" },
      { text:"맵 생성기 · 솔버", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/aurora/trailer.mp4", thumbnail: "assets/projects/aurora/trailerthumb.png", label:"Trailer" },
      { type:"video", src:"assets/projects/aurora/trailer.mp4", thumbnail: "assets/projects/aurora/demothumb.png", label:"Demo" },
      { type:"image", src:"assets/projects/aurora/editor.png", label:"1" },
      { type:"image", src:"assets/projects/aurora/usermap.png", label:"2" },
      { type:"image", src:"assets/projects/aurora/mymap.png", label:"3" },
    ],
    summary:"유저가 3D 퍼즐 맵을 제작·공유·플레이하는 UGC 3D 퍼즐 게임. 퍼즐 솔버로 116칸 맵의 해답 탐색 상태를 408,370개에서 145개로 줄이고, 클리어가 보장된 초안을 만드는 절차적 맵 생성기를 구현.",
    goal:"유저가 직접 3D 퍼즐 맵을 제작·공유하고, 다른 유저의 맵을 플레이할 수 있는 UGC 루프 구현",

    keyChallenges:[
      "레이어 회전 데이터 동기화",
      "맵 에디터와 플레이 데이터 공유",
      "온라인 맵 검색·정렬·필터링",
      "인증·RLS·Storage 연동"
    ],
    role:[
      { name:"풀스택 프로그래밍", icon:"ti-code", desc:"백엔드(Supabase),<br>클라이언트(Unity),<br>퍼즐 솔버·맵 생성기" },
      { name:"아트", icon:"ti-brush", desc:"Codex를 활용한<br>AI 그래픽 아트 구현" },
    ],
    activities:["2026 UNICON 전시"],
    contributions:[
      {
        title:"퍼즐 핵심 게임플레이 루프",
        category:"게임플레이",
        goal:"편집·플레이·업로드에서 일관된 퍼즐 상태 유지",
        solution:["3D 타일 배열을 기준으로 이동·색칠·클리어를 판정하고 표시 상태를 갱신", "Memento 방식으로 맵·플레이어·포탈·고스트/레이저 상태를 복사해 스택에 저장하고, Undo 시 함께 복원"],
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/gameplay/README.md",
        images:["assets/projects/aurora/tile.png"]
      },
      {
        title:"기믹 시스템과 상호작용",
        category:"게임플레이",
        goal:"6가지 기믹을 이동·타일 상태와 일관되게 연동",
        solution:["포탈 좌표 이동, 고스트 횟수 소모, 레이저 경로 반전, 대시 연속 이동을 타일 상태와 연동", "인버터는 맵 상태를 먼저 반전한 뒤 맨해튼 거리별 그룹을 순차 연출하고, 회전은 데이터·연출을 분리"],
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/gimmick-state/README.md",
        images:["assets/projects/aurora/gimmik.png"]
      },
      {
        title:"맵 에디터와 레벨 제작 파이프라인",
        category:"에디터",
        goal:"유저가 만든 맵을 바로 테스트하고 공유",
        solution:["표면·방향을 검사해 타일을 배치하고, 편집 전 맵·시작점을 저장해 되돌리기 지원", "테스트에는 편집 데이터의 복사본을 전달하고, 타일·포탈·회전 정보를 공통 포맷으로 직렬화해 저장·업로드"],
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/map-generation/README.md",
        images:["assets/projects/aurora/editor2.png"]
      },
      {
        title:"Supabase 기반 UGC 백엔드",
        category:"백엔드",
        goal:"이메일·외부 계정 인증을 하나의 세션 흐름으로 통합",
        solution:["싱글턴 SupabaseManager에 이메일·Google/Discord(PKCE) 인증·세션 복원을 모으고, SDK의 Observer 방식 상태 리스너와 연동", "회원가입·비밀번호 변경과 맵 생성·수정·게시·신고를 연동. 좋아요 RPC는 JWT의 사용자 ID로 처리"],
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/authentication/README.md",
        images:["assets/projects/aurora/supabase.png"]
      },
      {
        title:"UGC 맵 데이터베이스 구조 설계",
        category:"DB",
        goal:"맵 원본과 사용자별 활동 기록을 구분해 관리",
        solution:["초안·게시 맵·사용자 활동을 분리하고, 맵 ID·작성자 ID의 복합키와 외래키로 좋아요·클리어·신고 기록 연결", "RLS로 공개 맵 조회와 본인 데이터 수정을 구분하고, 트리거로 좋아요 수와 더 좋은 클리어 기록 반영"],
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/ugc-backend/README.md",
        codeLabel:"클라이언트·DB 샘플 · 서버 부분은 재구성 예시",
        images:["assets/projects/aurora/db.png"]
      },
    ],
    // System Design 근거: 1Seong/EulerianAurora(구 Capstone2) 55e9598, Drive "[AI용] 맵 생성/솔버 구현 위치"·"맵 생성 설정 가이드",
    // Notion "[Aurora] 절차적 퍼즐 맵 생성"·"[Aurora] 해밀턴 경로 문제"(탐색 상태·ms·밀집 비율 수치 출처).
    // 기존 contributions·troubleshooting은 지우지 않는다(designCases가 있으면 렌더하지 않음). 스텐실·AABB 트러블슈팅은 사례에서 뺐다.
    designCases:[
      {
        title:"맵 데이터와 UGC 백엔드 구조",
        category:"구조",
        context:"별도 서버 없이 맵 제작·공유·플레이를 하나의 형식과 계정으로 연결",
        decisions:[
          "맵을 char[,,] 타일 배열과 포탈 쌍·회전 설정으로 표현하고, 저장·업로드는 같은 문자열 인코딩으로 맵 행에 기록",
          "싱글턴 SupabaseManager에 이메일·Google/Discord(PKCE) 로그인과 세션 복원을 모으고, SDK 상태 리스너와 연동",
          "맵·활동 기록 테이블은 PostgREST 기반 RESTful API와 RPC로 조회·수정하고, 복합키와 RLS로 본인 데이터만 수정하게 제한",
        ],
        result:"팀원이 코드 없이 맵을 만들어 올리고, 유저가 내려받아 플레이하는 UGC 루프 완성",
        diagram:{ src:"assets/projects/aurora/architecture.svg", alt:"맵 데이터와 백엔드 구조: Unity 클라이언트의 초안 생성기·맵 에디터가 퍼즐 솔버로 검증하고, 에디터가 Supabase 맵 테이블(초안·게시·썸네일)에 저장·업로드, 플레이가 목록을 받아 좋아요·클리어를 기록, SupabaseManager가 Auth(이메일·Google·Discord)로 로그인. 맵은 char[,,] 타일·포탈 쌍·회전 설정을 문자열로 저장", size:"full" },
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/ugc-backend/README.md",
        codeLabel:"클라이언트·DB 샘플 · 서버 부분은 재구성 예시",
      },
      {
        title:"해밀턴 경로 기반 퍼즐 솔버",
        category:"알고리즘",
        context:"유저가 만든 맵이 모든 칸을 칠해 클리어 가능한지 에디터에서 자동 판정",
        decisions:[
          "모든 칸을 한 번씩 칠하는 해밀턴 경로 문제로 보고, 남은 칸이 적은 상태부터 꺼내는 우선순위 탐색과 상태 중복 제거를 결합",
          "기믹 맵은 플레이어 위치뿐 아니라 타일 배치·고스트 횟수·레이저·포탈 연결까지 담은 상태 그래프로 재구성하고, 층이 회전하는 맵은 회전 후 닿는 이웃 목록으로 가지치기",
          "찾은 해답은 부모 기록으로 입력열을 복원하고, 초기 맵에서 같은 전이 함수로 재생해 실제 클리어를 확인한 뒤 확정",
        ],
        issue:{
          problem:"모든 경로를 세는 DFS가 116칸 맵에서 40만 개 넘는 상태 탐색",
          cause:"풀 수 없는 분기도 끝까지 탐색하는 브루트포스",
          fix:"칠할 칸이 고립되거나 끝점이 2개 이상이면 분기를 즉시 버림",
        },
        result:"기믹 없는 116칸 맵 탐색 상태 408,370 → 145, 게임 수록 맵 14개 모두 중앙값 85ms 이내 풀이",
        media:[
          { type:"video", src:"assets/projects/aurora/solver-demo.mp4", thumbnail:"assets/projects/aurora/solver-demo-thumb.webp", caption:"자동 테스트로 해답을 찾아 미리 보고, 풀 수 없는 맵은 바로 판정" },
        ],
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/puzzle-solver/README.md",
      },
      {
        title:"클리어가 보장되는 절차적 맵 생성",
        category:"에디터",
        context:"난이도·기믹만 고르면 클리어가 보장된 퍼즐 초안으로 편집을 시작",
        decisions:[
          "맵을 만든 뒤 푸는 대신 타일 배치와 해답 입력을 함께 쌓고, 솔버의 상태 전이로 실행해 단계마다 검증",
          "재귀 대신 명시적 스택 DFS로 긴 경로의 스택 오버플로를 막고, 새 배치가 이전 입력 결과를 바꾸는지 처음부터 재생해 확인",
          "난이도별 예산 안에서 길·기믹마다 정한 비용을 차감하고 다음 배치는 가중치로 고르되, 필수 기믹 비용은 미리 예약해 반드시 배치",
        ],
        issue:{
          problem:"생성 맵의 길이 한곳에 뭉침(길 밀집 비율 88%, 직접 만든 맵은 31%)",
          cause:"다음 칸 후보를 모두 같은 확률로 선택",
          fix:"후보마다 큐브 27구역 중 이미 채워진 구역·기존 길 접촉·2×2 덩어리·긴 직진과 잦은 꺾임을 감점하고, 점수에 무작위 값을 더해 선택",
        },
        result:"길 밀집 비율 88% → 37%로, 직접 만든 맵(31%)과 비슷한 수준",
        media:[
          { type:"video", src:"assets/projects/aurora/mapgen-flow.mp4", thumbnail:"assets/projects/aurora/mapgen-flow-thumb.webp", caption:"기믹·난이도 선택 → 후보 생성 → 적용, 이어서 형태 점수 적용 뒤 연속 생성" },
        ],
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/procedural-map-generation/README.md",
      },
    ],
    troubleshooting: [
      {
        title: "레이어 회전 후 좌표 기준이 어긋나는 문제",
        problem: "레이어 회전 뒤 로컬 좌표와 데이터 좌표가 어긋남",
        cause: "회전 연출과 상태 갱신이 같은 Transform에 의존",
        solution: "단면 배열의 전치·역순으로 좌표를 재매핑하고, 연출 후 표시 오브젝트를 격자로 복원",
        result: "연속 회전에서도 데이터 좌표 기준 유지",
        codeUrl:"https://github.com/1Seong/EulerianAurora/blob/main/portfolio/layer-rotation/README.md"
      },
      {
        title: "중심 큐브 뒤의 기믹 이펙트가 완전히 가려지지 않는 문제",
        problem: "중심 큐브 뒤의 기믹 이펙트가 노출됨",
        cause: "스텐실만으로 큐브 볼륨 뒤쪽의 픽셀을 판별하기 어려움",
        solution: "광선-AABB 교차 판정을 더해 가려져야 할 픽셀 제거",
        result: "큐브 영역과 깊이에 맞게 이펙트 표시"
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
    // RPC 목록 조회 최적화는 사용자 요청으로 뺐다(2026-11-18). 문구는 git 기록에 있다.
    optimizations:[],

    retrospective:{
      good:"UGC 게임에 필요한 인증, DB, RPC, RLS를 Unity 클라이언트와 직접 연결하며 서버-클라이언트 전체 흐름을 구축했습니다. 맵 에디터와 온라인 공유 기능을 통해 팀원이 코드 작업 없이 맵을 제작하고, 유저가 이를 플레이하는 루프를 완성한 점이 가장 의미 있었습니다.",
      bad:"백엔드, 클라이언트, 그래픽의 기능 구현에 비해 문서화가 부족했습니다. 이후에는 API 흐름, 데이터 포맷처럼 협업에 필요한 기준을 구현과 함께 정리하려고 합니다.",
      images:["assets/projects/aurora/unicon.jpg", "assets/projects/aurora/uniconteam.jpg"]
    },
    
    feedback:null,
    other_contributions:null,
    links:[
      { label:"GitHub", url:"https://github.com/1Seong/EulerianAurora" },
      { label:"QA Log", url:"https://docs.google.com/spreadsheets/d/1m_KURQGTxd0x7m2Nlj68Ax_Qtp4aNc9YAAjlM2upWb4/edit?gid=0#gid=0" },
      { label:"Game Build", url:"https://drive.google.com/drive/u/0/folders/10mRU31GlTHey1yCcf1V_u7jEjr0QA4JT"},
      { label:"Google Drive", url:"https://drive.google.com/drive/u/0/folders/1IGMLGUreO3WDR3LEqzpbtfKZpKzZaxUQ"}
    ],
  
    detail: {
      coreContributionCount:5,
      techStack:["Unity", "C#", "Supabase", "PostgreSQL", "RESTful API"],
      linkMap:{ Document:"Google Drive", GitHub:"GitHub", "Game Build":"Game Build" },
      optimizations:[]
    },
  },
  
  square_erauqs: {
    id:"square_erauqs",
    title:"SQUARE::ERAUQS",
    subtitle:"2D 퍼즐 플랫포머",
    meta:{ engine:"Unity", platform:"PC(Windows/Mac) / Android", team:"5인 팀", year:"2025.01 ~ 2026.09"},
    tags:[],
    badges:[
      { text:"리드 프로그래머", type:"primary" },
      { text:"Steam 출시", type:"sub" },
      { text:"Android 이식", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/square/trailer.mp4", thumbnail: "assets/projects/square/1.png", label:"Trailer" },
      { type:"image", src:"assets/projects/square/mobile.png", label:"1" },
      { type:"image", src:"assets/projects/square/5.png", label:"2" },
      { type:"image", src:"assets/projects/square/3.png", label:"3" },
    ],
    summary:"두 캐릭터를 함께 조작하며 탑뷰·사이드뷰 전환으로 푸는 퍼즐 플랫포머. 시점 전환 이벤트와 물체별 중력을 설계하고, 맵툴 데이터 기반 스테이지 빌딩으로 스테이지를 2배로 늘리고, 입력 추상화로 Android에 이식.",
    role:[
        { name:"리드 프로그래머", icon:"ti-code", desc:"스테이지 및 퍼즐 기믹 구현<br>맵툴 데이터 기반 스테이지 빌딩<br>모바일 이식" },
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
        goal:"탑뷰·사이드뷰에서 달라지는 공간 규칙 연결",
        solution:["Observer 패턴으로 카메라·투영 벽·좌표 보정·중력을 전환 이벤트에 구독시켜 순차 호출하고, 후속 처리는 별도 이벤트로 분리", "점프·제한 구역·전환 중 입력을 거부해 전환 조건과 실행 순서를 일관되게 관리"],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/view-gravity/README.md",
        images:["assets/projects/square/view.png"]
      },
      {
        title:"커스텀 중력 및 물리 상태 제어",
        category:"물리",
        goal:"시점 전환·중력 반전에도 의도한 축으로 이동",
        solution:["기본·반전·사이드뷰 중력을 enum 상태로 관리하고, 방향별 가속도와 Rigidbody 고정 축을 함께 갱신", "시점 전환 이벤트를 구독해 중력을 바꾸되, 탑뷰 복귀 시 전환 전 중력 상태를 복원"],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/view-gravity/README.md",
        images:["assets/projects/square/gravity.png"]
      },
      {
        title:"추상화 기반 기믹 오브젝트 구조",
        category:"구조",
        goal:"공통 발동 규칙을 유지하며 새 기믹을 확장",
        solution:["Strategy 패턴으로 플레이어 색상 적용 정책을 교체하고, 공통 접촉 검사 뒤 해당 기믹의 효과를 호출", "소모형 기믹은 공통 검사를 재사용해 소모 처리를 확장. 공통 구조는 직접 설계하고 개별 효과는 팀원이 구현"],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/gimmick-structure/README.md",
        images:["assets/projects/square/gimmik.png"]
      },
      {
        title: "맵툴 데이터 기반 레벨 제작 파이프라인",
        category: "구조",
        goal:"맵툴 출력만으로 플레이 가능한 스테이지 생성",
        solution:["맵툴 출력의 두 시점 타일을 공통 벽·시점별 벽으로 가공해 게임 오브젝트와 제한 영역을 생성", "격자를 직사각형으로 병합해 충돌체를 배치. 맵툴 UI 자체가 아닌 출력 데이터의 빌딩 파이프라인을 담당"],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/map-generation/README.md"
        ,images:["assets/projects/square/editor.png"]
      },
      {
        title:"모바일 이식 — 입력 추상화 및 UI 대응",
        category:"플랫폼",
        goal:"기존 플레이 로직을 유지하며 Android로 이식",
        solution:["Adapter 역할의 InputWrapper로 키보드·터치 입력을 같은 API로 제공해 기존 플레이 로직 재사용", "드래그·버튼 해제 시 축 입력을 정리하고, Safe Area를 부모 UI 좌표로 변환해 화면 경계 대응"],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/mobile-ui/README.md",
        images:["assets/projects/square/mobile2.png"]
      },
      {
        title:"Unity Localization 기반 번역 지원",
        category:"UI",
        goal:"코드 수정 없이 한·영 문구와 언어별 연출 관리",
        solution:["공통 키·ID의 한·영 Localization 테이블로 문구를 관리하고, 한국어에서는 전용 Animator로 연출·레이아웃 대응"],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/mobile-ui/README.md",
        images:["assets/projects/square/hint.png"]
      }
    ],
    // System Design 근거: 1Seong/SQUARE-ERAUQS portfolio/(view-gravity·physics-stability·map-generation·mobile-ui), 원본 기준 커밋 0607414.
    // 기존 contributions·troubleshooting은 지우지 않는다(designCases가 있으면 렌더하지 않음). 기믹 공통 구조는 사례에서 뺐다. view-switch.svg의 썸네일은 view.png를 잘라 base64로 넣었다.
    designCases:[
      {
        title:"시점 전환 이벤트와 커스텀 중력",
        category:"게임플레이",
        context:"탑뷰·사이드뷰 전환 때 카메라·벽·중력이 같은 순서로 바뀌어야 하는 퍼즐 규칙",
        decisions:[
          "거부 조건을 Stage 한곳에 모아, 기능마다 따로 검사하지 않고 같은 기준으로 전환 허용",
          "기능을 직접 호출하지 않고 이벤트 구독으로 연결해, 전환 반응을 추가해도 Stage는 고치지 않음",
          "Unity 기본 중력 대신 CustomGravity로 물체마다 기본·반전·사이드뷰 중력 상태를 직접 관리하고, 상태별 방향·고정 축과 가속도를 함께 적용",
        ],
        issue:{
          problem:"벽에 붙은 스프링이 간헐적으로 미발동",
          cause:"착지 판정이 중력 방향을 보지 않아 겹친 벽을 바닥으로 오인",
          fix:"충돌면 normal과 중력 반대 방향의 내적으로 실제 착지만 인정",
        },
        result:"시점·중력이 바뀌어도 전환 순서와 바닥 판정이 같은 기준으로 동작",
        diagram:{ src:"assets/projects/square/view-switch.svg", alt:"시점 전환 이벤트 흐름: 키보드·모바일 버튼 입력이 Stage.ConvertButton에 도착해 점프 중·제한 구역·전환 연출 중이면 거부되고, 통과하면 카메라 회전·투영 벽 교체·좌표 보정·CustomGravity 구독자를 순서대로 호출한 뒤 convertEventLast로 후속 처리. CustomGravity는 탑뷰 기본·반전·사이드뷰 상태별 중력 방향과 고정 축을 바꾸고 복귀 시 이전 상태를 복원", size:"full" },
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/view-gravity/README.md",
      },
      {
        title:"빙판 위 벽 연결 상태 전파",
        category:"물리",
        context:"빙판에서 미끄러지는 스프링이 벽이나 벽에 붙은 물체에 닿으면 멈춰야 하는 규칙",
        decisions:[
          "WallConnection이 시점에 맞춘 좌우 BoxCast로 벽 또는 이미 벽에 연결된 이웃을 찾아 연결 상태를 갱신",
          "이웃이 나를 연결 대상으로 삼고 있으면 제외해, 두 물체가 서로를 근거로 고정되는 상호 참조를 차단",
          "연결되면 비트 연산으로 X축 고정만 켜고 꺼서 중력·회전 등 다른 Rigidbody 제약은 그대로 유지",
        ],
        issue:{
          problem:"빙판에 나란히 놓인 물체들이 틈 사이에서 서로 튕기는 연쇄 반동",
          cause:"벽에 직접 닿은 물체만 멈추고, 그 뒤에 이어진 물체는 계속 밀림",
          fix:"벽에 닿은 이웃을 거쳐 연결을 전파해 이어진 줄 전체를 함께 고정",
        },
        result:"벽에 이어지면 정지하고, 연결이 풀리면 다시 미끄러짐",
        media:[
          { type:"image", src:"assets/projects/square/gravity.png", caption:"빙판 구간의 플레이어와 스프링" },
        ],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/physics-stability/README.md",
      },
      {
        title:"맵툴 데이터 기반 스테이지 빌딩",
        category:"구조",
        context:"한 스테이지를 탑뷰·사이드뷰 두 장의 2D 타일로 그리면, 3D 스테이지를 자동으로 조립",
        decisions:[
          "맵툴이 내보낸 두 시점의 타일·제한 영역·아이템·포탈을 MapData로 받아 기존 스테이지 진입 흐름에 연결",
          "탑뷰 벽의 깊이는 사이드뷰의 같은 열에서 찾고, 사이드뷰에 없는 벽은 맨 뒤에 둬 두 화면이 같은 벽을 보이게 함",
          "충돌체 수를 줄이려고 충돌 칸을 직사각형으로 탐욕 병합. 오른쪽 최대 폭에서 시작해 아래 행으로 늘리고, 더 좁은 행을 만나면 폭을 줄여 빈 칸 제외",
        ],
        result:"기획이 맵툴로 맵을 만들고 고치는 흐름을 갖춰 스테이지 수를 2배로 확장",
        media:[
          { type:"image", src:"assets/projects/square/editor.png", caption:"맵툴에서 탑뷰·사이드뷰 타일을 나눠 배치한 화면" },
        ],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/map-generation/README.md",
        codeLabel:"출력 데이터 빌딩 샘플 · 맵툴 UI 제외",
      },
      {
        title:"Android 이식과 다국어 UI 대응",
        category:"플랫폼",
        context:"PC 기준으로 만든 플레이 로직은 그대로 두고 터치 조작과 한·영 UI를 지원",
        decisions:[
          "InputWrapper가 키보드 입력과 터치 버튼이 넣은 축 값·액션을 같은 API로 제공해 기존 플레이어·시점 전환 코드 재사용",
          "드래그·버튼 해제 시 축 입력을 정리해 이동이 남지 않게 하고, Safe Area를 부모 UI 좌표로 변환해 화면 경계 대응",
          "한·영 문구를 공통 키·ID의 Localization 테이블로 관리하고, 한국어 화면은 전용 Animator로 연출·레이아웃 대응",
        ],
        result:"플레이 로직을 유지한 채 Android 터치 조작과 한·영 전환 지원",
        media:[
          { type:"image", src:"assets/projects/square/mobile.png", caption:"Android 화면의 터치 이동·점프 버튼과 Safe Area 안쪽 UI" },
        ],
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/mobile-ui/README.md",
      },
    ],
    troubleshooting: [
      {
        title: "빙판 위 오브젝트가 미세한 틈에서 튕기는 문제",
        problem: "빙판의 인접 오브젝트가 틈 사이에서 연쇄 반동",
        cause: "접촉 여부만으로는 벽에 이어진 상태를 놓침",
        solution: "좌우 BoxCast로 이웃의 벽 연결 상태를 전파하고, 직접 상호 참조를 제외해 X축 제약 적용",
        result: "벽 연결 시 정지하고 연결 해제 시 다시 미끄러짐",
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/physics-stability/README.md"
      },
      {
        title: "벽에 붙은 스프링이 간헐적으로 동작하지 않는 문제",
        problem: "벽에 붙은 스프링이 간헐적으로 미발동",
        cause: "점프 BoxCast가 겹친 벽을 바닥으로 오인해 점프 상태 해제",
        solution: "충돌면 normal과 중력 반대 방향의 내적을 검사해 실제 바닥 착지만 인정",
        result: "벽 접촉 중에도 점프 상태와 스프링 발동 조건 유지",
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/physics-stability/README.md"
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
        title:"모바일 실기 프로파일링 및 렌더링 최적화",
        codeUrl:"https://github.com/1Seong/SQUARE-ERAUQS/blob/main/portfolio/mobile-rendering/README.md",
        codeLabel:"GitHub 렌더링 설정 발췌",
        category:"최적화",
        desc:"<br><strong>Android 실기에서 프레임 시간을 점검하고, 2D 타일맵 게임에 맞게 렌더링 설정을 경량화</strong><ul><li>모바일 기기를 노트북과 연결해 Unity Profiler로 실기 프레임과 렌더링 지표를 점검</li><li>게임이 2D 타일맵 중심으로 구성된 점을 고려해 불필요한 조명·그림자 렌더링을 비활성화</li><li>모바일 환경에서 화면 전환과 퍼즐 조작이 안정적으로 유지되도록 렌더링 설정과 UI 표시를 점검</li></ul>",
        images:[],
        // 전후 사진: src에 이미지 경로를 입력하면 해당 사진만 표시합니다.
        comparison: {
          before: {
            src:"assets/projects/square/profiler-before-cpu.webp",
            crop:{ width:1325, height:390 },
            alt:"최적화 전 모바일 실기 Unity Profiler CPU Usage: CPU 28.215ms 목표 프레임 시간 초과 경고, 프레임이 33ms(30FPS) 선에 분포",
            caption:"변경 전: 빨간 CPU 초과 표시와 33ms(30FPS) 선에 붙은 프레임."
          },
          after: {
            src:"assets/projects/square/profiler-after-cpu.webp",
            crop:{ width:1150, height:338 },
            alt:"최적화 후 모바일 실기 Unity Profiler CPU Usage: 프레임이 16ms(60FPS) 선 부근에 분포",
            caption:"변경 후: 16ms(60FPS) 선 부근으로 내려온 프레임."
          }
        }
      }
    ],
    retrospective:{
      good:"리드 프로그래머로서 시점 전환, 커스텀 물리, 기믹 구조, 모바일 이식까지 프로젝트의 핵심 기술 방향을 주도했습니다. 개발 시작부터 Steam 출시와 전시까지 이어지는 전체 사이클을 경험하며, 장기 프로젝트에서 구조 설계가 얼마나 중요한지 체감했습니다.",
      bad:"초기에는 기믹별 구현을 빠르게 붙이는 데 집중해 맵을 확장하는 데에 어려움을 겪었습니다. 이후에는 협업을 통해 맵툴과 스테이지 빌딩 파이프라인을 구현하여, 기획 사이드에서 맵 확장 및 수정을 쉽게 할 수 있게 개선하였습니다.",
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
      { label:"Steam", url:"https://store.steampowered.com/app/4331920/SQUAREERAUQS/" },
      { label:"GitHub", url:"https://github.com/1Seong/SQUARE-ERAUQS" },
      { label: "Google Drive", url:"https://drive.google.com/drive/u/0/folders/1CryMZz71U2earFqjluCkLWHVGd4bTEiC"},
      { label: "QA Log", url:"https://docs.google.com/spreadsheets/d/1-eGDIEAFwoTwJuYDjnPrFnmGSa9eE8IL7ZH3_mnJYps/edit?usp=sharing"}
    ],
  
    detail: {
      coreContributionCount:4,
      techStack:["Unity", "C#", "Localization", "Android"],
      linkMap:{ Document:"Google Drive" },
      optimizations:[
        {
          measurement:"Android 실기 Profiler에서 프레임이 약 33ms(30FPS)에 머물고, 선택 프레임 CPU 28.2ms로 목표 16.7ms 초과",
          cause:"2D 타일맵 화면에 불필요한 그림자·깊이/불투명 텍스처 처리가 포함된 렌더링 설정",
          improvement:"Render Scale 0.65, 그림자·깊이/불투명 텍스처 해제, SRP Batcher 사용",
          result:"프레임 시간 약 33ms(30FPS) → 약 16ms(60FPS), 실기 Profiler 캡처 기준(VSync 대기 포함)"
        }
      ],
      feedbackIterations:[
        // source / sourceUrl: 실제 피드백 출처를 입력한 경우에만 카드 우측 하단에 표시합니다.
        { feedback:"어려운 맵에서 진행을 보조해 줄 힌트가 있으면 좋겠다", improvement:"스테이지별 힌트 시스템 도입", source:"2025 UNICON 피드백 中", sourceUrl:"" },
        { feedback:"스테이지 수가 적어 플레이타임이 다소 아쉽다", improvement:"맵툴 데이터 기반 스테이지 빌딩으로 스테이지 수를 2배로 확장", source:"2025 UNICON 피드백 中", sourceUrl:"" }
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
      { text:"클라이언트 단독", type:"primary" },
      { text:"Shader Graph 연출", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/stw/trailer.mp4", thumbnail: "assets/projects/stw/thumbnail.jpg",label:"Trailer" },
      { type:"image", src:"assets/projects/stw/room.png", label:"1" },
      { type:"image", src:"assets/projects/stw/syringe.png", label:"2" },
      { type:"image", src:"assets/projects/stw/ending1.png", label:"3" },
      { type:"image", src:"assets/projects/stw/crutch.png", label:"4" },
    ],
    summary:"클라이언트를 단독으로 맡아 방 탐색·아이템·미니게임을 이벤트로 잇고 Shader Graph로 픽셀·반사를 연출한 6.25 회고 룸 이스케이프. 6.25 전쟁유공자의 삶을 포인트 앤 클릭 탐색과 미니게임으로 되짚는 게임.",
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
        goal:"방을 돌려 탐색할 때 카메라·입력 충돌 방지",
        solution:["벽면·천장·이전 시점을 나누어 회전과 UI 전환을 제어하고, 전환 중에는 중복 입력을 잠금", "DOTween 완료 시 카메라 각도를 확정하고 커서 추종 기준을 갱신한 뒤 입력 잠금 해제"],
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/room-navigation/README.md",
        images:["assets/projects/stw/view.png"]
      },
      {
        title:"데이터 중심 아이템·인벤토리 시스템",
        category:"구조",
        goal:"아이템 추가 시 인벤토리·상호작용 코드 변경 최소화",
        solution:["Type Object 방식으로 아이템 ID·이미지·표시 크기를 공유 에셋에 두고, 인벤토리 인스턴스와 분리", "사용 대상의 ID 일치 시 효과 실행·아이템 소비를 진행하고, Observer 방식의 습득·완료 이벤트로 인벤토리·보상·해금 연결"],
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/item-system/README.md",
        images:["assets/projects/stw/item.png"]
      },
      {
        title:"미니게임 공통 프레임워크와 개별 게임 구현",
        category:"게임플레이",
        goal:"서로 다른 미니게임의 진행·복귀 흐름 재사용",
        solution:["공통 매니저가 안내·시작·결과 연출·복귀 순서를 맡아 각 미니게임의 중복 흐름을 통합", "개별 게임은 타이밍 구간·보간 경로의 이탈을 판정하고, 성공 횟수별 회상 문구와 완료 보상을 연결"],
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/minigames/README.md",
        images:["assets/projects/stw/mini.png"]
      },
      {
        title:"Shader Graph 기반 비주얼 연출",
        category:"셰이더",
        goal:"회상 장면과 공간별 분위기를 시각적으로 구분",
        solution:["저해상도 색상 RT를 Point 샘플링하고, 별도 깊이 텍스처와 Scene Depth를 비교해 픽셀 오브젝트의 가림·경계를 보정", "카메라의 반사 화면 RT를 세로 반전한 UV로 읽고, 시간·노이즈·수면 텍스처로 UV를 왜곡해 물 반사 연출"],
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/shader-effects/README.md",
        codeLabel:"Shader Graph 샘플 · 픽셀 합성과 물 반사",
        images:["assets/projects/stw/shader.png"]
      },
      {
        title:"CSV 기반 대화와 회상 시퀀스 연출",
        category:"구조",
        goal:"대사를 수정해도 같은 회상 연출 흐름 재사용",
        solution:["따옴표로 묶인 CSV 필드를 파싱해 발화자·초상화·문장 데이터로 변환", "화자별 초상화 강조·스킵 가능한 타이핑과 배경·음악 전환을 연결해 회상 흐름 구성"],
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/dialogue-sequence/README.md",
        images:["assets/projects/stw/csv.png"]
      },
    ],
    troubleshooting:[
      {
        title:"진행 상태 저장·불러오기 구조가 하드코딩되는 문제",
        problem:"흩어진 진행 상태를 저장하는 코드가 하드코딩됨",
        cause:"저장 매니저가 개별 시스템의 내부 상태에 의존",
        solution:"ISaveable 구현체를 등록·해제하고, SaveKey별 JSON 변환은 각 시스템에 위임. 초기 등록 뒤 복원해 진행 조건도 재구성",
        result:"저장 대상 추가 시 매니저 수정 없이 확장",
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/save-system/README.md"
      },
      {
        title:"창 모드 화면비율과 레터박스 UI 렌더링 문제",
        problem:"창 크기 변경 시 화면비가 깨지고 UI가 레터박스를 침범",
        cause:"Overlay UI가 게임 카메라의 viewport 제한을 받지 않음",
        solution:"게임·UI 카메라 스택을 구성하고, 창 크기 변경 때 두 카메라의 rect를 같은 목표 비율로 동기화",
        result:"고정 화면비와 레터박스 안쪽 UI 표시 유지",
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/Assets/Scripts/AspectRatioKeeper.cs",
        codeLabel:"GitHub 원본 코드 · 카메라 스택은 씬 설정"
      }
    ],
    // System Design 근거: 1Seong/SaveTheWorld portfolio/(room-navigation·item-system·minigames·save-system·shader-effects), 원본 기준 커밋 8a05e42.
    // 사례 01의 issue는 기존 저장 트러블슈팅이다. CSV 대화·창 화면비 항목은 사례에서 뺐다(데이터는 남김).
    designCases:[
      {
        title:"방 탐색에서 미니게임까지 잇는 진행 구조",
        category:"구조",
        context:"방 탐색·아이템·노트·미니게임이 서로의 진행을 풀어 주는 흐름",
        decisions:[
          "아이템 사용·글자 완성·미니게임 완료를 이벤트로 알리고, 각 오브젝트는 자기 종류일 때만 잠금 해제·보상 공개",
          "아이템은 ItemData 에셋을 월드·인벤토리가 공유하고, 사용 대상은 아이템 ID가 맞을 때만 효과를 실행하고 소비",
          "방은 네 벽면과 천장의 면 단위로 회전하고, 회전 중에는 입력을 잠가 전환 도중의 오작동을 차단",
        ],
        issue:{
          problem:"저장 대상이 늘 때마다 저장 매니저 코드를 고쳐야 함",
          cause:"저장 매니저가 개별 시스템의 내부 상태에 의존",
          fix:"각 시스템이 ISaveable로 자기 상태를 JSON 변환하고, 매니저는 등록 대상만 순회",
        },
        result:"저장 대상을 추가해도 매니저 수정 없이 확장되고, 새 아이템·미니게임도 같은 진행 흐름을 재사용",
        diagram:{ src:"assets/projects/stw/progress-structure.svg", alt:"방 탐색에서 미니게임까지 진행 구조: 위쪽에 ① 방 탐색(연기에 가려진 잠긴 물건) ② 아이템 사용 ③ 노트에 글자 조각을 모아 단어 완성 → 해금 ④ 주사기 미니게임 화면이 순서대로 있고, 아래쪽에 각 화면을 맡는 StageManager, ItemData·ItemTarget, NoteManager, MiniGameManager와 이벤트를 받는 InteractiveObject, ISaveable 기반 SaveManager", size:"full" },
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/README.md",
        codeLabel:"샘플 코드 목록 (아이템·저장 등)",
      },
      {
        title:"미니게임 공통 흐름과 개별 판정",
        category:"게임플레이",
        context:"조작이 다른 미니게임마다 안내·결과·방 복귀를 반복 구현하지 않기",
        decisions:[
          "MiniGameManager가 안내·시작 예약, 결과 페이드·문구, 완료 이벤트, 방 복귀를 맡고, 중복 종료 요청은 한 번만 처리",
          "주사기 게임은 타이밍 바가 목표 구간 안에 있는지 판정하고, 살린 인원 수에 따라 회상 문구를 바꿈",
          "재봉틀 게임은 바늘이 바느질 경로의 폭을 벗어나면 실패로 판정하고, 곡선 경로는 Catmull-Rom으로 생성",
        ],
        result:"개별 게임은 판정 규칙만 구현하고, 안내·결과·복귀는 공통 흐름을 재사용",
        media:[
          { type:"image", src:"assets/projects/stw/syringe.png", caption:"주사기 미니게임: 움직이는 바가 목표 구간에 들어올 때 클릭" },
        ],
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/minigames/README.md",
      },
      {
        title:"Shader Graph 픽셀 합성과 물 반사",
        category:"셰이더",
        context:"3D로 만든 방을 픽셀 아트 톤으로 보여 주고, 엔딩 장면에 수면 반사 연출",
        decisions:[
          "3D 방을 352×198 렌더 텍스처에 그린 뒤 Point 필터로 확대해, 경계가 흐려지지 않는 픽셀 아트 화면 구성",
          "픽셀 화면과 3D 오브젝트의 앞뒤 가림이 어긋나지 않게, 별도 깊이 텍스처를 장면 깊이와 비교해 가려질 픽셀을 투명 처리",
          "반사 카메라 화면을 뒤집어 읽고, 시간·노이즈로 흐르는 수면 텍스처로 좌표를 흔들어 반사 연출",
        ],
        result:"3D 공간 배치는 유지한 채 픽셀 아트 화면과 엔딩의 수면 반사를 구현",
        media:[
          { type:"image", src:"assets/projects/stw/view.png", caption:"3D로 만든 방(왼쪽)을 픽셀 카메라로 렌더한 화면(오른쪽)" },
          { type:"image", src:"assets/projects/stw/ending1.png", caption:"엔딩 장면의 수면 반사" },
        ],
        codeUrl:"https://github.com/1Seong/SaveTheWorld/blob/main/portfolio/shader-effects/README.md",
        codeLabel:"Shader Graph 샘플 · 픽셀 합성과 물 반사",
      },
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
    optimizations:[],
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
      optimizations:[]
    },
  },

  necromancer_survivors: {
    id:"necromancer_survivors",
    title:"Necromancer Survivors",
    subtitle:"뱀서라이크",
    meta:{ engine:"Unity", platform:"PC(Windows)", team:"3인 팀", year:"2024.07 ~ 2024.09"},
    tags:[],
    badges:[
      { text:"뱀서라이크", type:"primary" },
      { text:"Unity · C#", type:"sub" },
      { text:"보스·함정", type:"sub" },
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
        title:"충돌·트리거 분리 기반 전투 판정",
        category:"물리",
        goal:"접촉·투사체·함정 피해의 적용 조건 구분",
        solution:["몸 접촉은 충돌, 투사체·지속 피해는 트리거·태그로 구분해 공통 전투 구조를 확장", "함정은 감지 → 예고 → 공격으로 나누고, 애니메이션 이벤트로 피해 판정 구간을 해제"],
        codeUrl:"https://github.com/roxasventus/CIEN-tutorial-project-team2/blob/main/portfolio/combat/README.md",
        images:[]
      },
      {
        title:"보스 패턴의 컴포넌트 분리와 공격 시퀀스",
        category:"구조",
        goal:"보스별 공격 예고와 실행 시점을 독립적으로 제어",
        solution:["Component 방식으로 보스 본체와 공격 로직을 나누고, 코루틴으로 조준 → 고정 → 발사 → 복구 제어", "방향 벡터·Atan2로 조준 각도를 제한하고, 공격 중 이동 잠금과 피해 판정 태그를 연출에 맞춰 변경"],
        codeUrl:"https://github.com/roxasventus/CIEN-tutorial-project-team2/blob/main/portfolio/boss-spawn/README.md",
        images:[]
      },
      {
        title:"유효 위치 검증 기반 스폰·순간이동 처리",
        category:"물리",
        goal:"벽이나 플레이어 주변 금지 영역에 생성되는 상황 방지",
        solution:["스폰 금지 트리거의 후보 상태를 확인하고, 순간이동은 주변 위치를 샘플링해 벽 레이어 검사 후 채택", "유효 위치를 찾을 때까지 재선택하는 구조로, 유효 후보가 존재한다는 맵 구성 전제를 사용"],
        codeUrl:"https://github.com/roxasventus/CIEN-tutorial-project-team2/blob/main/portfolio/boss-spawn/README.md",
        images:[]
      },
      {
        title:"전투 가독성 UI",
        category:"기믹",
        goal:"화면 밖 보스의 위치를 전투 중에도 파악",
        solution:["팀 공통 Object Pool에서 보스를 가져와 스테이지 데이터로 초기화하고, 표시 대상을 등록하는 흐름을 연결", "보스·인디케이터를 매핑해 등록 대상만 갱신하고, 뷰포트 경계 보정으로 화면 밖 방향 표시"],
        codeUrl:"https://github.com/roxasventus/CIEN-tutorial-project-team2/blob/main/portfolio/pool-indicator/README.md",
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
        images:[],
        // 전후 사진: src에 이미지 경로를 입력하면 해당 사진만 표시합니다.
        comparison: { before: { src:"", alt:"", caption:"" }, after: { src:"", alt:"", caption:"" } }
      },
      {
        title:"스폰·타겟 표시 갱신 범위 축소",
        category:"최적화",
        desc:"<br><strong>스테이지 데이터와 대상별 매핑 구조를 활용해 필요한 오브젝트만 생성·갱신되도록 처리</strong><ul><li>스테이지 번호에 따라 스폰 주기, 체력, 속도, 피해량, 스프라이트 타입을 선택해 같은 스폰 로직을 재사용</li><li>보스 등장 시에만 화면 밖 인디케이터를 추가하고, 타겟과 인디케이터를 딕셔너리로 묶어 개별 갱신</li><li>뷰포트 좌표를 기준으로 화면 밖 여부와 가장자리 위치를 계산해 전투 UI 갱신 로직을 단순화</li></ul>",
        images:[],
        // 전후 사진: src에 이미지 경로를 입력하면 해당 사진만 표시합니다.
        comparison: { before: { src:"", alt:"", caption:"" }, after: { src:"", alt:"", caption:"" } }
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
      { text:"구조 설계 · UI", type:"primary" },
      { text:"PlayX4 전시", type:"sub" },
    ],
    media:[
      { type:"video", src:"assets/projects/omak/trailer.mkv", thumbnail:"assets/projects/omak/thumbnail.png",label:"Trailer" },
      { type:"image", src:"assets/projects/omak/ingame.png", label:"1" },
      { type:"image", src:"assets/projects/omak/book.png", label:"2" },
      { type:"image", src:"assets/projects/omak/tutorial.png", label:"3" },
    ],
    summary:"재료·조리법을 조합해 손님 요리를 만드는 포인트 앤 클릭 식당 경영 게임. 레시피 데이터 구조와 해금·레시피북 UI를 설계해, 메뉴 추가를 코드 수정 없이 에셋 작업으로 처리하고 PlayX4 피드백을 레시피북에 반영.",
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
        goal:"메뉴 추가·밸런스 변경을 코드 수정 없이 처리",
        solution:["메뉴마다 클래스를 늘리는 대신, ScriptableObject 에셋에 조합·이름·맛·이미지 정의", "CategoryData·RecipeBase·RecipeData로 공통 분류와 결과 데이터를 나누어 메뉴 추가·수치 변경을 에셋에서 처리"],
        codeUrl:"https://github.com/1Seong/OMakHase/blob/main/portfolio/recipe-system/README.md",
        images:[]
      },
      {
        title:"튜플 키 기반 레시피 조합 조회",
        category:"게임플레이",
        goal:"조리·레시피북에서 같은 기준으로 조합 조회",
        solution:["시작 시 기본 재료·조리법·육류/생선·채소의 4개 enum을 튜플 키로 인덱싱해 딕셔너리 조회", "미등록 조합은 null로 반환해 UI가 구분하도록 처리. 조리 진행·평판 판정은 팀원 담당"],
        codeUrl:"https://github.com/1Seong/OMakHase/blob/main/portfolio/recipe-system/README.md",
        images:[]
      },
      {
        title:"Observer 패턴 기반 해금·UI 동기화 시스템",
        category:"구조",
        goal:"해금 로직이 각 UI를 직접 참조하지 않도록 분리",
        solution:["해금 분류·버튼 인덱스를 발행하고, 각 UI는 자기 분류만 갱신하며 생명주기에 맞춰 구독 해제", "재료·레시피 해금을 저장·복원하고, 직접 구현한 최초 발견 시 해금 호출과 업적 중복 알림 방지를 연결"],
        codeUrl:"https://github.com/1Seong/OMakHase/blob/main/portfolio/unlock-ui/README.md",
        images:[]
      },
      {
        title:"MVC 흐름 기반 레시피북 UI",
        category:"UI",
        goal:"선택 조합과 발견 상태를 레시피북에 즉시 반영",
        solution:["MVC 역할 분리를 참고해 버튼 입력 → RecipeManager 조회 → 화면 갱신으로 구분하되, 선택·표시는 BookController가 관리", "미등록·미발견·발견을 구분하고, 발견한 메뉴에만 이미지·이름·맛 수치를 공개"],
        codeUrl:"https://github.com/1Seong/OMakHase/blob/main/portfolio/recipe-book/README.md",
        images:[]
      },
      {
        title:"인터페이스·상속 기반 선택 버튼 UI 공통화",
        category:"UI",
        goal:"재료별 버튼의 중복 구현과 화면별 예외 최소화",
        solution:["ButtonBehavior로 재료·조리법 버튼의 선택 전달을 통일해 조회·표시 로직 중복 방지", "Template Method 패턴으로 ClearButton의 초기화 순서는 재사용하고, GetButtonCount만 재정의해 화면별 버튼 구성 대응"],
        codeUrl:"https://github.com/1Seong/OMakHase/blob/main/portfolio/unlock-ui/README.md",
        images:[]
      }
    ],
    // System Design 근거: 1Seong/OMakHase portfolio/(recipe-system·unlock-ui·recipe-book), 원본 기준 커밋 87c7ce2, CookManager.cs의 GetRecipe 호출.
    // 사례 03의 issue는 detail.feedbackIterations의 PlayX4 피드백(레시피북 이용 설명)이다. 기존 contributions는 지우지 않는다.
    designCases:[
      {
        title:"레시피 데이터와 조합 조회 구조",
        category:"구조",
        context:"메뉴와 맛 수치가 자주 바뀌는 기획에서, 코드 수정 없이 메뉴를 추가·조정",
        decisions:[
          "메뉴마다 클래스를 만들지 않고, 조합 조건은 RecipeBase에, 이름·맛·이미지는 RecipeData 에셋에 두어 Inspector에서 메뉴 추가",
          "시작 시 기본 재료·조리법·육류/생선·채소 4개 enum 튜플을 키로 딕셔너리를 한 번 만들어, 선택할 때마다 목록을 순회하지 않음",
          "조리 화면과 레시피북이 같은 GetRecipe를 쓰고, 등록되지 않은 조합은 null로 돌려 없는 조합을 구분",
        ],
        result:"요리 판정과 레시피북이 하나의 조합 기준을 공유하고, 메뉴 추가는 에셋 작업으로 처리",
        diagram:{ src:"assets/projects/omak/recipe-structure.svg", alt:"게임 흐름과 레시피 데이터 구조: 위쪽에 조리 화면의 재료 선택, 손님 반응, 레시피북 결과 페이지 화면이 순서대로 있고, 아래쪽 코드 구조에서 ScriptableObject인 RecipeBase(기본 재료·조리법·육류/생선·채소 조합 조건)를 RecipeData(이름·맛·이미지)가 상속하고, RecipeManager가 시작 시 (Base, Cook, MeatFish, Vege) 튜플 키 딕셔너리를 만들어 GetRecipe로 RecipeData 또는 null을 반환. 조리 화면(팀원 구현 판정, 처음 만든 메뉴 해금 호출)과 레시피북이 같은 조회를 쓰고, UnlockManager가 해금 상태를 저장", size:"full" },
        codeUrl:"https://github.com/1Seong/OMakHase/blob/main/portfolio/recipe-system/README.md",
      },
      {
        title:"해금 이벤트 기반 UI 동기화",
        category:"구조",
        context:"재료 해금이 조리 화면·레시피북 버튼과 저장 데이터에 함께 반영되어야 함",
        decisions:[
          "UnlockManager는 해금을 PlayerPrefs에 저장한 뒤 버튼 인덱스·분류만 정적 이벤트로 알리고, 각 패널은 자기 분류일 때만 버튼을 켬",
          "불러오기 때도 저장된 해금을 같은 이벤트로 다시 보내, 새 해금과 저장 복원이 하나의 UI 경로를 사용",
          "초기화 순서는 부모 클래스에 두고 버튼 개수만 재정의해, 재료 외 버튼이 섞인 조리 화면과 레시피북을 같은 코드로 처리",
        ],
        result:"해금 로직이 UI를 참조하지 않고, 새 해금과 저장 복원이 같은 경로로 화면에 반영",
        diagram:{ src:"assets/projects/omak/unlock-flow.svg", alt:"재료 해금 이벤트 흐름(게임 Day 표시와 조리 화면·레시피북의 재료 버튼 화면 포함): 날짜 진행과 게임 불러오기가 UnlockManager를 거쳐 PlayerPrefs에 저장되고 ButtonUnlockAction(버튼 인덱스, 분류) 이벤트로 조리 화면 패널 4종과 레시피북 패널에 전달, 각 패널은 자기 분류의 버튼만 켬", size:"side" },
        codeUrl:"https://github.com/1Seong/OMakHase/blob/main/portfolio/unlock-ui/README.md",
      },
      {
        title:"발견 상태를 반영하는 레시피북 UI",
        category:"UI",
        context:"고르는 대로 결과를 보여 주되, 아직 만들지 않은 메뉴는 정답을 숨겨 발견을 유도",
        decisions:[
          "재료·조리법 버튼은 ButtonBehavior로 선택값만 BookController에 넘기고, 조회·표시는 컨트롤러 한곳에서 처리",
          "선택값 프로퍼티가 바뀔 때마다 결과 페이지를 다시 그려, 버튼마다 갱신 코드를 두지 않음",
          "미등록·미발견·발견을 나눠, 발견한 메뉴에만 이미지·이름·맛 별점을 공개",
        ],
        issue:{
          problem:"레시피북 사용법을 처음에 알기 어렵다는 PlayX4 피드백",
          cause:"첫 화면에 조작 안내 없이 빈 결과 페이지만 표시",
          fix:"첫 페이지에 이용 설명을 두고, 조합을 고르면 결과로 교체",
        },
        result:"선택을 바꾸면 결과가 바로 갱신되고, 미발견 메뉴는 정보를 숨긴 채 존재만 표시",
        media:[
          { type:"image", src:"assets/projects/omak/book.png", caption:"분류·조리법·재료를 고르면 오른쪽 페이지에 결과와 맛 별점 표시" },
        ],
        codeUrl:"https://github.com/1Seong/OMakHase/blob/main/portfolio/recipe-book/README.md",
      },
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
    optimizations:[],

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
      optimizations:[],
      feedbackIterations:[
        { feedback:"레시피북의 조작 가이드가 부족해서 처음 사용 방법을 알기 어렵다", improvement:"레시피북 첫 페이지에 이용 설명 추가", source:"PlayX4 IndieSeed 피드백 中", sourceUrl:"" },
        { feedback:"요리 완성시 만들어진 결과물을 바로 알 수가 없다", improvement:"완성된 요리를 알리는 팝업 UI 추가", source:"PlayX4 IndieSeed 피드백 中", sourceUrl:"" }
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
      { text:"풀스택", type:"primary" },
      { text:"OpenAI API", type:"sub" },
      { text:"Supabase", type:"sub" },
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
        goal:"플레이어 가설을 반영하되 검증·추리·평가의 책임 구분",
        solution:["관련성 검증 → 플레이어 가설 중심 추리 → 정답과 항목별 평가로 책임을 분리하고, 추리 확인 뒤 평가 진행", "공통 통신 클라이언트를 생성자로 주입(DI)하고, 단계별 DTO로 입력·응답 형식을 구분"],
        codeUrl:"https://github.com/1Seong/DetectiveAI/blob/main/portfolio/ai-pipeline/README.md",
        images:[]
      },
      {
        title:"Supabase Edge Function 기반 OpenAI API 호출 구조",
        category:"백엔드",
        goal:"WebGL에 API 키를 노출하지 않고 AI 요청 처리",
        solution:["Facade 역할의 InvokeAsync<T>로 인증·HTTP·JSON 처리를 감추고, 익명 JWT로 키·프롬프트를 보관한 서버를 호출", "세마포어로 동시 세션 갱신을 직렬화해 토큰을 재사용하고, 401 응답은 인증 갱신 후 1회만 재시도"],
        codeUrl:"https://github.com/1Seong/DetectiveAI/blob/main/portfolio/edge-client/README.md",
        codeLabel:"클라이언트 인증·요청 샘플 · 서버 본문은 미포함",
        images:[]
      },
      {
        title:"구조화된 JSON 응답 기반 게임 상태 반영",
        category:"구조",
        goal:"수집한 증거·해석과 AI 결과를 게임 상태에 연결",
        solution:["사진·물건·소리의 사실 데이터와 플레이어 해석을 EvidenceRecord로 묶어 AI에 전달", "JSON 평가 필드에 항목별 가중치·함정 주장 감점을 적용하고, ResultData 에셋의 기준 점수로 대사·결과 이미지를 선택"],
        codeUrl:"https://github.com/1Seong/DetectiveAI/blob/main/portfolio/ai-pipeline/README.md",
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
      { text:"AI 동반자", type:"primary" },
      { text:"Unity · C#", type:"sub" },
      { text:"메토링 수상", type:"sub" },
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
      { text:"1인 개발", type:"primary" },
      { text:"공모전 출품", type:"sub" },
      { text:"C++ · Win32", type:"sub" },
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
        goal:"외부 엔진 없이 작은 실행 파일에 플레이 루프 구성",
        solution:["Game Loop 패턴의 시간 누적기로 입력·120Hz 고정 갱신·렌더링을 분리하고, 긴 프레임의 누적 시간을 제한", "CPU의 320×180 픽셀 버퍼를 StretchDIBits로 출력하고, 창 크기와 내부 해상도의 입력 좌표를 변환"],
        codeUrl:"https://github.com/1Seong/hell-pit/blob/main/portfolio/runtime/README.md",
        images:[]
      },
      {
        title:"훅 기반 이동·전투 액션 시스템",
        category:"게임플레이",
        goal:"같은 훅 조작으로 이동·전투·상호작용 연결",
        solution:["enum 기반 FSM으로 대기·비행·지형 당기기·전투 대시·포탈 진입을 나누고, 충돌 대상에 따라 상태 전환", "대시 시작·목표 좌표를 고정해 보간하고, 분리벽을 가로지르는 경로는 취소해 비정상 이동 방지"],
        codeUrl:"https://github.com/1Seong/hell-pit/blob/main/portfolio/hook-action/README.md",
        images:[]
      },
      {
        title:"용량 제약을 고려한 콘텐츠 구현",
        category:"최적화",
        goal:"1.44MB 제약 안에서 콘텐츠·진행 기록 관리",
        solution:["고정 용량 Object Pool 방식으로 struct 배열의 비활성 슬롯을 재사용하고, 화면 밖 지형을 회수해 다음 생성에 활용", "챕터별 방문 등의 bool 상태는 비트마스크로 묶어 INI에 저장하고, 옵션·업적·체크포인트도 함께 관리"],
        codeUrl:"https://github.com/1Seong/hell-pit/blob/main/portfolio/lightweight-data/README.md",
        images:[]
      },
      {
        title:"Codex 활용 개발 워크플로우",
        category:"AI",
        goal:"제한된 개발 기간 안에 플레이 가능한 빌드 완성",
        solution:["Codex로 구현 대안·수정안을 만들고, 직접 플레이하며 기능·버그·용량 제약을 검토해 반복 반영"],
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
const DETAIL_LINK_SLOTS = ["팀 문서", "GitHub", "Game Build", "Steam", "QA Log"];
