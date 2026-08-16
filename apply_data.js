// 2027학년도 수시 직접 지원 대시보드 데이터
// 지원권 기준 (2026-08-16 확정): ①수도권 전체 ②수도권 인근 국공립 ③사립은 경기남부~천안(아산 조건부) ④논술은 약술형까지만 ⑤그 외 지방권 제외
// 합격가능성(chance): 26.8.16 생기부+모의고사(3·5·6·7월) 기반 입력 완료 (안정/적정/소신)
window.APPLY_DATA = {

  updated: "2026-08-16",
  student: { grade: "고3", track: "문과", year: "2027학년도" },

  // 주요 일정 (확정 전 항목은 estimated:true — 대교협/평가원 발표 후 갱신)
  timeline: [
    { name: "2027학년도 수시 모집요강 확인", date: "", date_note: "각 대학 입학처에 이미 게시 — 지원 후보 확정 시 개별 확인", estimated: false },
    { name: "9월 모의평가 (수능 최저 가늠 기준)", date: "2026-09-02", estimated: true },
    { name: "수시 원서접수 (전 대학 공통 기간)", date: "2026-09-11", date_end: "2026-09-15", estimated: true, note: "대교협 확정 발표 후 갱신. 대학별로 이 기간 중 3일 이상 접수" },
    { name: "약술형 논술고사 (대학별 상이)", date: "", date_note: "9월 말 ~ 11월 말, 수능 전/후 대학별 상이 — 요강 확인", estimated: true },
    { name: "2027학년도 수능", date: "2026-11-19", estimated: true },
    { name: "수시 최초 합격자 발표 마감", date: "2026-12-15", estimated: true },
  ],

  // 후보 대학 풀 — scope: 적합/조건부, types: 해당 대학에 있는 주요 전형 유형
  // chance: 26.8.16 입력 완료 — 내신·3/5/6/7월 모의고사 반영 (상세 근거는 로컬 자료). 9월 모평 후 재조정 예정
  universities: [

    // ── 약술형 논술 실시 대학 (2026학년도 기준 — 최우선 검토군, 2027 요강에서 실시 여부 재확인 필요) ──
    { name: "가천대", campus: "글로벌캠", region: "경기 성남", group: "약술논술", scope: "적합", types: ["교과","종합","약술논술"], essay: "약술형", priority: "high", chance: "소신", notes: "약술형 논술 대표 대학. 문과 모집단위 다양" },
    { name: "수원대", campus: "본교", region: "경기 화성", group: "약술논술", scope: "적합", types: ["교과","종합","약술논술"], essay: "약술형", priority: "high", chance: "적정", notes: "약술형 논술(교과논술) 실시" },
    { name: "을지대", campus: "성남·의정부", region: "경기 성남/의정부", group: "약술논술", scope: "적합", types: ["교과","종합","약술논술"], essay: "약술형", priority: "high", chance: "적정", notes: "보건계열 중심 — 문과 지원 가능 학과 요강 확인" },
    { name: "삼육대", campus: "본교", region: "서울 노원", group: "약술논술", scope: "적합", types: ["교과","종합","약술논술"], essay: "약술형", priority: "high", chance: "소신", notes: "인서울 + 약술형 논술" },
    { name: "한신대", campus: "본교", region: "경기 오산", group: "약술논술", scope: "적합", types: ["교과","종합","약술논술"], essay: "약술형", priority: "high", chance: "적정", notes: "인문사회 계열 강점" },
    { name: "서경대", campus: "본교", region: "서울 성북", group: "약술논술", scope: "적합", types: ["교과","종합","약술논술"], essay: "약술형", priority: "high", chance: "소신", notes: "인서울 + 약술형 논술" },
    { name: "상명대", campus: "서울캠", region: "서울 종로", group: "약술논술", scope: "적합", types: ["교과","종합","약술논술"], essay: "약술형", priority: "high", chance: "소신", notes: "천안캠도 지원권 내 — 캠퍼스별 모집단위 확인" },
    { name: "한국공학대", campus: "본교", region: "경기 시흥", group: "약술논술", scope: "적합", types: ["교과","종합","약술논술"], essay: "약술형", priority: "medium", chance: "적정", notes: "공학 중심 — 경영 등 일부 문과 모집단위만 해당" },

    // ── 인서울 (교과/종합) ──
    { name: "성신여대", campus: "본교", region: "서울 성북", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "여대. 문과 모집단위 다양" },
    { name: "서울여대", campus: "본교", region: "서울 노원", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "여대" },
    { name: "동덕여대", campus: "본교", region: "서울 성북", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "여대" },
    { name: "덕성여대", campus: "본교", region: "서울 도봉", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "여대" },
    { name: "한성대", campus: "본교", region: "서울 성북", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "" },
    { name: "성공회대", campus: "본교", region: "서울 구로", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "적정", notes: "인문사회 중심 소규모" },
    { name: "광운대", campus: "본교", region: "서울 노원", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "일반 논술도 있으나 지원권 기준상 교과/종합만 검토" },
    { name: "명지대", campus: "인문캠", region: "서울 서대문", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "인문계열은 서울캠" },
    { name: "세종대", campus: "본교", region: "서울 광진", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "일반 논술 제외, 교과/종합만 검토" },
    { name: "국민대", campus: "본교", region: "서울 성북", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "" },
    { name: "숭실대", campus: "본교", region: "서울 동작", group: "인서울", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "일반 논술 제외, 교과/종합만 검토" },

    // ── 경기·인천 ──
    { name: "단국대", campus: "죽전캠", region: "경기 용인", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "천안캠도 지원권 내" },
    { name: "아주대", campus: "본교", region: "경기 수원", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "일반 논술 제외, 교과/종합만 검토" },
    { name: "경기대", campus: "수원캠", region: "경기 수원", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "" },
    { name: "인하대", campus: "본교", region: "인천 미추홀", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "일반 논술 제외, 교과/종합만 검토" },
    { name: "인천대", campus: "송도캠", region: "인천 연수", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "국립대 — 등록금 부담 낮음" },
    { name: "가톨릭대", campus: "성심캠", region: "경기 부천", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "" },
    { name: "한국외대", campus: "글로벌캠", region: "경기 용인", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "어학 계열 강점. 일반 논술 제외" },
    { name: "경희대", campus: "국제캠", region: "경기 용인", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "소신", notes: "국제캠 문과 모집단위 제한적 — 요강 확인" },
    { name: "강남대", campus: "본교", region: "경기 용인", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "적정", notes: "사회복지 계열 전통 강점" },
    { name: "용인대", campus: "본교", region: "경기 용인", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "적정", notes: "" },
    { name: "한세대", campus: "본교", region: "경기 군포", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "" },
    { name: "성결대", campus: "본교", region: "경기 안양", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "" },
    { name: "안양대", campus: "본교", region: "경기 안양", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "" },
    { name: "협성대", campus: "본교", region: "경기 화성", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "" },
    { name: "평택대", campus: "본교", region: "경기 평택", group: "경기·인천", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "" },

    // ── 수도권 인근 국공립 ──
    { name: "강원대", campus: "춘천캠", region: "강원 춘천", group: "인근 국공립", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "거점국립 — ITX로 접근 용이" },
    { name: "충북대", campus: "본교", region: "충북 청주", group: "인근 국공립", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "거점국립" },
    { name: "공주대", campus: "본교", region: "충남 공주", group: "인근 국공립", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "소신", notes: "국립 — 사범계열 전통 강점" },
    { name: "한경국립대", campus: "본교", region: "경기 안성", group: "인근 국공립", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "적정", notes: "경기권 국립" },
    { name: "한국기술교육대(코리아텍)", campus: "본교", region: "충남 천안", group: "인근 국공립", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "소신", notes: "고용노동부 산하 — 공학 중심, 산업경영 등 일부만 문과" },
    { name: "충남대", campus: "본교", region: "대전 유성", group: "인근 국공립", scope: "조건부", types: ["교과","종합"], essay: null, priority: "low", chance: "소신", notes: "대전 소재 — 조건부(거리) 검토" },
    { name: "한밭대", campus: "본교", region: "대전 유성", group: "인근 국공립", scope: "조건부", types: ["교과","종합"], essay: null, priority: "low", chance: "적정", notes: "대전 소재 — 조건부(거리) 검토" },

    // ── 경기남부~천안 사립 ──
    { name: "단국대", campus: "천안캠", region: "충남 천안", group: "천안권 사립", scope: "적합", types: ["교과","종합"], essay: null, priority: "medium", chance: "적정", notes: "외국어 계열 등 문과 모집단위 확인" },
    { name: "백석대", campus: "본교", region: "충남 천안", group: "천안권 사립", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "" },
    { name: "남서울대", campus: "본교", region: "충남 천안", group: "천안권 사립", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "" },
    { name: "나사렛대", campus: "본교", region: "충남 천안", group: "천안권 사립", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "" },
    { name: "호서대", campus: "천안·아산캠", region: "충남 천안/아산", group: "천안권 사립", scope: "적합", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "천안캠은 적합, 아산캠 모집단위는 조건부" },
    { name: "순천향대", campus: "본교", region: "충남 아산", group: "천안권 사립", scope: "조건부", types: ["교과","종합"], essay: null, priority: "low", chance: "적정", notes: "아산 소재 — 조건부" },
    { name: "선문대", campus: "본교", region: "충남 아산", group: "천안권 사립", scope: "조건부", types: ["교과","종합"], essay: null, priority: "low", chance: "안정", notes: "아산 소재 — 조건부" },
  ],
};
