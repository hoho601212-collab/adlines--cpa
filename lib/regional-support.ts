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
  대구태아보험:[
    {title:'대구 다자녀가정 고등학교 입학축하금',summary:'대구시는 다자녀가정의 교육비 부담을 덜기 위해 2026학년도 고등학교에 입학한 둘째 자녀 이상을 지원합니다.',benefit:'둘째 자녀 30만원 · 셋째 자녀 이상 50만원',eligibility:'2026년 대구 소재 고등학교 1학년에 입학한 둘째 자녀 이상 재학생이며 공고일 기준 부모 중 한 명이 대구시에 1년 이상 연속 거주하는 등 요건 확인',apply:'2026년 4월 1일~6월 2일 정부24 온라인 또는 주소지 보건소 등 지정 방문처 신청',sourceName:'대구광역시 출산보육과',sourceUrl:'https://daegu.go.kr/woman/index.do?bbsAttrbCode=BBSA03&bbsId=BBS_02266&bbsTyCode=BBST03&menu_id=00939880&menu_link=%2Ficms%2Fbbs%2FselectBoardArticle.do&nttId=789210',verifiedAt:'2026-09-03'}
  ],
  인천태아보험:[
    {title:'인천 천사지원금',summary:'인천형 출생정책 i+ 1억드림의 하나로 1세부터 7세까지 아동의 양육비 부담을 지원합니다.',benefit:'연 120만원씩 7년 · 총 840만원',eligibility:'2023년 1월 1일 이후 출생아 중 생일 기준 부 또는 모와 주민등록을 함께 두고 인천시에 1년 이상 계속 거주한 아동 등',apply:'정부24 또는 정부24 앱에서 신청. 2026년부터 신청기한이 120일로 확대되고 1회 신청 후 자동 지급 체계 적용',sourceName:'인천광역시 천사지원금 안내',sourceUrl:'https://www.incheon.go.kr/IC010205/view?repDt=2026-04-02&repSeq=DOM_0000000014462863',verifiedAt:'2026-09-03'},
    {title:'인천 임산부 교통비',summary:'임신·출산 과정의 이동 부담을 줄이기 위해 인천e음 교통비 포인트를 지원합니다.',benefit:'50만원',eligibility:'인천시 6개월 이상 주민등록 거주 중이며 임신 12주부터 출산일 후 90일까지의 임산부 등',apply:'인천시 공식 정책안내에서 신청방법과 구·군별 담당부서 확인',sourceName:'인천광역시 복지혜택',sourceUrl:'https://www.incheon.go.kr/jobs/main/support/welfare/view.do?wl_srvc_sn=52',verifiedAt:'2026-09-03'}
  ],
  광주태아보험:[
    {title:'광주 임산부 직장맘 고용유지 지원',summary:'출산휴가자가 발생한 관내 중소사업장의 부담을 덜고 임산부의 고용유지를 돕는 2026년 일·가정양립 지원사업입니다.',benefit:'출산 전후 휴가로 발생하는 사업주 부담금 100만원 지원',eligibility:'광주 관내 근로자 50인 미만 중소사업장 등 2026년 사업 세부요건 충족 시',apply:'광주광역시 직장맘지원센터에 신청서와 관련 서류 제출, 예산 소진 시까지',sourceName:'광주광역시 일가정양립지원본부',sourceUrl:'https://www.gwangju.go.kr/woman/contentsView.do?pageId=woman26',verifiedAt:'2026-09-03'},
    {title:'광주 임산부 친화환경 조성지원',summary:'임산부가 근무하는 지역 중소기업 등에 임산부 친화 물품과 관련 정보를 제공하는 사업입니다.',benefit:'맘편한 의자 · 직장생활 꾸러미 등 제공',eligibility:'임산부 또는 예비맘이 근무하는 광주 관내 300인 미만 중소기업 및 가족친화기업 등',apply:'2026년 2월~12월 예산 소진 시까지 직장맘지원센터 공식 안내에 따라 신청',sourceName:'광주광역시 일가정양립지원본부',sourceUrl:'https://www.gwangju.go.kr/woman/contentsView.do?pageId=woman26',verifiedAt:'2026-09-03'}
  ],
  대전태아보험:[
    {title:'대전형 양육 기본수당',summary:'대전시에 거주하는 영유아 가정의 양육 부담을 줄이기 위한 지역 양육지원입니다.',benefit:'매월 15만원 · 2세(24~35개월)는 15만원 추가 지원',eligibility:'0~2세 영유아를 보호 중이며 부 또는 모가 대전시에 6개월 이상 주민등록을 두고 거주하는 경우 등',apply:'주소지 행정복지센터 방문 신청',sourceName:'대전시 임신·출산 행복꾸러미',sourceUrl:'https://www.daejeon.go.kr/djbaby/contentsHtmlView.do?menuSeq=7398',verifiedAt:'2026-09-03'},
    {title:'우리대전 북스타트',summary:'출생신고를 마친 아기에게 책과 가방, 부모용 가이드북으로 구성된 독서 시작 꾸러미를 지원합니다.',benefit:'그림책 2권 · 북스타트 가방 · 가이드북 등',eligibility:'2026년 대전시에 출생신고한 모든 아기',apply:'행정복지센터에서 출생신고할 때 신청서 함께 제출',sourceName:'대전시 임신·출산 행복꾸러미',sourceUrl:'https://www.daejeon.go.kr/djbaby/contentsHtmlView.do?menuSeq=7429',verifiedAt:'2026-09-03'}
  ],
  울산태아보험:[
    {title:'울산 구·군 출산지원금',summary:'울산광역시는 2026년 출생가정에 대해 구·군별 출산지원금을 운영하며 출생순위와 거주지에 따라 금액이 달라집니다.',benefit:'중구 첫째 70만원·둘째 이상 100만원 / 남구·동구·북구 첫째 60만원·둘째 이상 100만원 / 울주군 첫째 70만원·둘째 250만원·셋째 이상 500만원',eligibility:'울산시에 출생등록하고 부모가 출생일 기준 1개월 전부터 울산시에 거주·주민등록 등재된 경우 등 구·군별 세부기준 확인',apply:'거주지 구·군 또는 행정복지센터에서 세부 신청방법 확인',sourceName:'울산광역시 출산지원',sourceUrl:'https://www.ulsan.go.kr/u/welfare/contents.ulsan?mId=001003002000000000',verifiedAt:'2026-09-03'},
    {title:'울산 산후조리비 지원',summary:'출산가정의 산후 회복 비용 부담을 줄이기 위해 울산시가 산후조리비 지원을 추진합니다.',benefit:'50만원',eligibility:'울산시 출산가정 대상. 출생일·거주기간 등 세부요건은 최신 공고 확인',apply:'울산시 또는 주소지 구·군의 최신 안내에서 신청기간과 방법 확인',sourceName:'울산광역시 2026 주요 보육사업 안내',sourceUrl:'https://ulsan.go.kr/u/rep/bbs/view.ulsan?bbsId=BBS_0000000000000027&dataId=177406&mId=001004003001000000',verifiedAt:'2026-09-03'}
  ],
  세종태아보험:[
    {title:'세종시 출산축하금',summary:'세종시에 출생신고한 가정의 출산을 축하하고 초기 양육비 부담을 덜기 위한 지역 지원입니다.',benefit:'출생아당 120만원 일시금 · 여민전 지급',eligibility:'출생일 기준 3개월 이전 또는 출생일을 포함해 이후 3개월 이상 세종시에 주민등록을 두고 거주하는 부 또는 모이며 신생아를 세종시에 출생신고한 경우',apply:'주소지 읍·면·동 주민센터에서 신청',sourceName:'세종시 공식 소식지',sourceUrl:'https://news.sejong.go.kr/news/articleView.html?idxno=4378',verifiedAt:'2026-09-03'},
    {title:'세종 산모·신생아 건강관리',summary:'출산가정에 건강관리사가 방문해 산모의 회복과 신생아 돌봄을 지원합니다.',benefit:'건강관리사 방문 서비스',eligibility:'세종시에 주소지를 둔 출산가정',apply:'남부통합보건지소 방문 또는 복지로 온라인 신청',sourceName:'세종시 공식 소식지',sourceUrl:'https://news.sejong.go.kr/news/articleView.html?idxno=4378',verifiedAt:'2026-09-03'}
  ],
  경기태아보험:[
    {title:'경기도 산후조리비',summary:'출산가정의 경제적 부담 완화와 산모·신생아 건강보호를 위한 경기도 지원사업입니다.',benefit:'출생아 1명당 50만원',eligibility:'경기도 출산가정 대상 세부 거주 및 신청요건은 시·군 및 경기도 공식 안내 확인',apply:'거주지 관할 행정복지센터 등 공식 신청경로 확인',sourceName:'경기도청 임신·출산 지원',sourceUrl:'https://web1.gg.go.kr/contents/contents.do?ciIdx=987173&menuId=266159',verifiedAt:'2026-09-03'},
    {title:'경기도 산모·신생아 건강관리',summary:'출산가정에 건강관리사를 파견해 산모의 산후회복과 신생아 양육을 돕는 사업입니다.',benefit:'태아유형·출산순위·서비스기간에 따라 정부지원금 차등',eligibility:'경기도 내 모든 출산가정',apply:'출산예정일 40일 전부터 출산일 후 30일까지 보건소 방문 또는 정부24 온라인 신청',sourceName:'경기도청 산모신생아 건강관리',sourceUrl:'https://web1.gg.go.kr/contents/contents.do?ciIdx=987174&menuId=266160',verifiedAt:'2026-09-03'}
  ],
  수원태아보험:[
    {title:'수원시 자녀출산·입양 지원금',summary:'수원시는 출산순위에 따라 자녀출산·입양 지원금을 차등 지원합니다.',benefit:'첫째 50만원 · 둘째 100만원 · 셋째 200만원 · 넷째 500만원 · 다섯째 이상 1,000만원(분할지급)',eligibility:'출산일 기준 신청인이 수원시에 180일 이상 연속 주민등록을 두고 거주하며 출생신고한 경우 등',apply:'수원시 및 관할 행정복지센터의 최신 신청기한·구비서류 확인',sourceName:'경기도청 시군별 출산장려금 현황',sourceUrl:'https://www.gg.go.kr/contents/contents.do?ciIdx=987110&menuId=266074',verifiedAt:'2026-09-03'}
  ],
  강원태아보험:[
    {title:'강원특별자치도 육아기본수당',summary:'강원특별자치도가 도내 아동 양육가정의 경제적 부담을 줄이기 위해 운영하는 대표적인 지역 양육지원입니다.',benefit:'연령 및 출생연도별 지급기준에 따라 육아기본수당 지원',eligibility:'강원특별자치도 내 거주 아동과 보호자 등 출생연도·거주요건에 따른 세부기준 확인',apply:'거주지 행정복지센터에서 최신 연령별 지급기준과 신청방법 확인',sourceName:'강원특별자치도 아동양육지원',sourceUrl:'https://state.gwd.go.kr/portal/partinfo/welfare/child/nurtureCare',verifiedAt:'2026-09-03'},
    {title:'강원 다자녀 대학등록금 지원',summary:'둘째 이상 자녀가 있는 도내 가정의 대학 교육비 부담을 줄이기 위한 지원입니다.',benefit:'등록금 100만원 한도 · 대학 재학기간 중 1회',eligibility:'보호자가 강원도 내 6개월 이상 거주하는 24세 이하 둘째아 이상 자녀, 둘째아는 2025년 신입생부터 적용 등',apply:'거주지 행정복지센터에서 신청서·가족관계증명서·등록금 납부영수증 등 제출',sourceName:'강원특별자치도 아동양육지원',sourceUrl:'https://state.gwd.go.kr/portal/partinfo/welfare/child/nurtureCare',verifiedAt:'2026-09-03'}
  ]
};

export function getRegionalSupport(regionSlug?:string,citySlug?:string){
  if(citySlug&&DATA[citySlug]) return DATA[citySlug];
  if(regionSlug&&DATA[regionSlug]) return DATA[regionSlug];
  return [];
}
