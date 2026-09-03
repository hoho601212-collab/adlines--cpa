export type RegionalSupportItem={
  title:string;
  summary:string;
  benefit:string;
  eligibility:string;
  apply:string;
  sourceName:string;
  sourceUrl:string;
  verifiedAt:string;
};

const DATA:Record<string,RegionalSupportItem[]>={
  서울태아보험:[
    {title:'서울형 산후조리경비',summary:'출산 후 산모 회복과 산후 건강관리를 위해 서울시가 바우처를 지원합니다.',benefit:'첫째 100만원 · 둘째 120만원 · 셋째 이상 150만원',eligibility:'산모와 출생자녀가 서울시에 거주하고 서울시에 출생신고한 경우 등 세부요건 확인',apply:'출산일로부터 180일 이내, 탄생육아 몽땅정보통 또는 동주민센터 등 공식 안내 확인',sourceName:'서울시 임신·출산 정보센터',sourceUrl:'https://seoul-agi.seoul.go.kr/postpartum-care',verifiedAt:'2026-09-03'},
    {title:'서울시 임산부 교통비',summary:'임신·출산 과정에서 필요한 이동 부담을 줄이기 위한 교통비 바우처입니다.',benefit:'첫째 70만원 · 둘째 80만원 · 셋째 이상 100만원',eligibility:'신청일 기준 서울시 3개월 이상 계속 거주하는 임산부 등 공식 세부요건 확인',apply:'임신 확인 후부터 출산 후 6개월 이내 신청, 탄생육아 몽땅정보통 및 주민센터',sourceName:'탄생육아 몽땅정보통',sourceUrl:'https://umppa.seoul.go.kr/hmpg/sprt/bzin/bzmgComtDetail.do?biz_mng_no=34B5EA8BEB354E2DB26136CFE52AEFF2',verifiedAt:'2026-09-03'}
  ],
  부산태아보험:[
    {title:'부산광역시 출산지원금',summary:'부산시는 2026년 출생아를 대상으로 첫만남이용권과 연계한 출산지원 제도를 운영합니다.',benefit:'첫째 첫만남이용권 200만원 · 둘째 이후 첫만남이용권 300만원 + 부산시 추가 100만원',eligibility:'2026년도 부산 출생아 대상, 지급 및 거주요건은 부산시 공식 안내 확인',apply:'읍·면·동 행정복지센터, 복지로 또는 정부24 등 공식 신청경로 확인',sourceName:'부산광역시 당신처럼 애지중지',sourceUrl:'https://www.busan.go.kr/childcare/childcare010101',verifiedAt:'2026-09-03'},
    {title:'부산 다자녀 교육지원포인트',summary:'다자녀 가정의 교육비 부담을 덜기 위해 부산시가 교육지원포인트를 운영합니다.',benefit:'2자녀 30만원 · 3자녀 이상 50만원',eligibility:'부산시 다자녀 가정 대상 세부 연령·거주·사용조건은 해당 연도 공고 확인',apply:'부산시 공식 공고 및 신청 안내에서 접수기간과 방법 확인',sourceName:'부산광역시 인구정책 브리핑',sourceUrl:'https://www.busan.go.kr/briefing/1737620',verifiedAt:'2026-09-03'}
  ],
  경기태아보험:[
    {title:'경기도 산후조리비',summary:'출산가정의 경제적 부담 완화와 산모·신생아 건강보호를 위한 경기도 지원사업입니다.',benefit:'출생아 1명당 50만원',eligibility:'경기도 출산가정 대상 세부 거주 및 신청요건은 시·군 및 경기도 공식 안내 확인',apply:'거주지 관할 행정복지센터 등 공식 신청경로 확인',sourceName:'경기도청 임신·출산 지원',sourceUrl:'https://web1.gg.go.kr/contents/contents.do?ciIdx=987173&menuId=266159',verifiedAt:'2026-09-03'},
    {title:'경기도 산모·신생아 건강관리',summary:'출산가정에 건강관리사를 파견해 산모의 산후회복과 신생아 양육을 돕는 사업입니다.',benefit:'태아유형·출산순위·서비스기간에 따라 정부지원금 차등',eligibility:'경기도 내 모든 출산가정',apply:'출산예정일 40일 전부터 출산일 후 30일까지 보건소 방문 또는 정부24 온라인 신청',sourceName:'경기도청 산모신생아 건강관리',sourceUrl:'https://web1.gg.go.kr/contents/contents.do?ciIdx=987174&menuId=266160',verifiedAt:'2026-09-03'}
  ],
  수원태아보험:[
    {title:'수원시 자녀출산·입양 지원금',summary:'수원시는 출산순위에 따라 자녀출산·입양 지원금을 차등 지원합니다.',benefit:'첫째 50만원 · 둘째 100만원 · 셋째 200만원 · 넷째 500만원 · 다섯째 이상 1,000만원(분할지급)',eligibility:'출산일 기준 신청인이 수원시에 180일 이상 연속 주민등록을 두고 거주하며 출생신고한 경우 등',apply:'수원시 및 관할 행정복지센터의 최신 신청기한·구비서류 확인',sourceName:'경기도청 시군별 출산장려금 현황',sourceUrl:'https://www.gg.go.kr/contents/contents.do?ciIdx=987110&menuId=266074',verifiedAt:'2026-09-03'}
  ]
};

export function getRegionalSupport(regionSlug?:string,citySlug?:string){
  if(citySlug&&DATA[citySlug]) return DATA[citySlug];
  if(regionSlug&&DATA[regionSlug]) return DATA[regionSlug];
  return [];
}
