import type {RegionalSupportItem} from './regional-support';

const CITY_SUPPORT:Record<string,RegionalSupportItem[]>={
  수원태아보험:[
    {title:'수원시 출산지원금',summary:'2026년부터 첫째 지원이 신설되고 둘째 지원이 확대된 수원시 출산·입양 지원금입니다.',benefit:'첫째 50만원 · 둘째 100만원 · 셋째 200만원 · 넷째 500만원 · 다섯째 이상 1,000만원',eligibility:'수원시 거주 180일 이상인 첫째 이상 출산가정. 180일 미만이면 출산일 기준 180일 경과 후 신청 가능',apply:'주소지 관할 행정복지센터에서 신청. 2026년 1월 1일 이후 출생·입양아부터 개정 기준 적용',sourceName:'수원특례시 출산 후 지원',sourceUrl:'https://www.suwon.go.kr/sw-www/deptHome/dep_welfare/welfare07/welfare07-01/welfare07-01-02.jsp',verifiedAt:'2026-09-03'},
    {title:'수원 산후조리 한약할인',summary:'2026년 9월부터 첫째 이상 출산여성과 임신 16주 이상 유산·사산 임산부까지 대상이 확대됐습니다.',benefit:'25만원 이상 산후조리 한약 이용 시 10만원 할인',eligibility:'출생일 1개월 전부터 수원시에 주민등록을 두고 거주하는 첫째 이상 출산여성 등',apply:'출산일로부터 3개월 이내 주소지 행정복지센터 방문 신청',sourceName:'수원특례시 출산 후 지원',sourceUrl:'https://www.suwon.go.kr/sw-www/deptHome/dep_welfare/welfare07/welfare07-01/welfare07-01-02.jsp',verifiedAt:'2026-09-03'}
  ],
  성남태아보험:[
    {title:'성남시 출산장려금',summary:'성남시는 출생순위에 따라 출산장려금을 지급하고 셋째 이상 가정에는 별도 양육지원도 운영합니다.',benefit:'첫째 30만원 · 둘째 50만원 · 셋째 100만원 · 넷째 200만원 · 다섯째 이상 300만원',eligibility:'출산일 기준 부 또는 모가 성남시에 180일 이전부터 주민등록을 두고 계속 거주하며 자녀를 출생신고한 경우 등',apply:'출생신고일로부터 3년 이내 주민등록지 동 행정복지센터 신청',sourceName:'성남시 다자녀가정 출산장려지원',sourceUrl:'https://seongnam.go.kr/city/1000253/10154/contents.do',verifiedAt:'2026-09-03'},
    {title:'성남 다자녀 아동양육수당',summary:'셋째 이상 자녀가 있는 성남시 가정의 지속적인 양육비 부담을 지원합니다.',benefit:'셋째 이상 자녀 월 10만원 · 취학 전까지',eligibility:'신청일 현재 부 또는 모와 셋째 이상 자녀가 성남시에 주민등록을 두고 거주',apply:'주민등록지 동 행정복지센터 신청',sourceName:'성남시 다자녀가정 출산장려지원',sourceUrl:'https://seongnam.go.kr/city/1000253/10154/contents.do',verifiedAt:'2026-09-03'}
  ],
  용인태아보험:[
    {title:'용인시 출산지원금',summary:'용인시에 출생·입양 신고한 가정에 출생순위별로 지급하는 지원금입니다.',benefit:'첫째 30만원 · 둘째 50만원 · 셋째 100만원 · 넷째 200만원 · 다섯째 이상 300만원',eligibility:'출생일 기준 부 또는 모가 용인시에 180일 이상 계속 거주하고 출생아와 같은 세대로 주민등록된 경우 등',apply:'출생·입양일로부터 1년 이내 읍·면·동 행정복지센터 또는 정부24',sourceName:'용인특례시 출산지원금',sourceUrl:'https://www.yongin.go.kr/home/www/www18/www18_05/www18_05_02/www18_05_02_02.jsp',verifiedAt:'2026-09-03'},
    {title:'용인 산모·신생아 건강관리',summary:'건강관리사가 출산가정을 방문해 산후회복과 신생아 양육을 돕는 2026 바우처 사업입니다.',benefit:'태아유형·출산순위·소득구간·서비스기간에 따라 정부지원금 차등',eligibility:'용인시 출산가정 중 사업별 자격기준 충족 가정',apply:'보건소 공식 안내에 따라 신청, 바우처는 원칙적으로 출산일로부터 90일 이내 사용',sourceName:'용인시 보건소',sourceUrl:'https://www.yongin.go.kr/home/health/healthSvc/mcHealth/mcHealth09/mcHealth10.jsp',verifiedAt:'2026-09-03'}
  ],
  고양태아보험:[
    {title:'고양시 출산지원금',summary:'고양시는 첫째부터 출생순위에 따라 출산지원금을 차등 지급합니다.',benefit:'첫째 100만원 · 둘째 200만원 · 셋째 300만원 · 넷째 500만원 · 다섯째 이상 1,000만원',eligibility:'출생신고일 기준 1년 이전부터 고양시에 주민등록을 두고 계속 거주한 친권자 또는 후견인이 같은 세대에 출생신고한 경우 등',apply:'출생신고일부터 1년 이내 동 행정복지센터 또는 정부24 신청',sourceName:'고양특례시 출산·양육지원',sourceUrl:'https://www.goyang.go.kr/www/www03/www03_8/www03_8_6/www03_8_6_tab7.jsp',verifiedAt:'2026-09-03'},
    {title:'고양 탄생축하 쌀케이크',summary:'고양시에 출생신고한 모든 출산가정을 대상으로 지역 농산물을 활용한 탄생축하 지원을 운영합니다.',benefit:'케이크·쿠키류 13종 중 1개 + 고양 가와지쌀 150g',eligibility:'부 또는 모가 고양시에 주민등록되어 있고 아기를 고양시에 출생신고한 가정',apply:'출생신고일부터 3개월 이내 동 행정복지센터 또는 정부24 신청',sourceName:'고양특례시 출산·양육지원',sourceUrl:'https://www.goyang.go.kr/www/www03/www03_8/www03_8_6/www03_8_6_tab7.jsp',verifiedAt:'2026-09-03'}
  ],
  부천태아보험:[
    {title:'2026 부천시 출산지원금',summary:'2026년부터 첫째아까지 지원대상이 확대된 부천시 출산·입양 지원금입니다.',benefit:'첫째 100만원 · 둘째 100만원 · 셋째 200만원 · 넷째 이상 700만원',eligibility:'2026년 1월 1일 이후 출생·입양아로, 출생·입양일 기준 부 또는 모가 1년 이전부터 부천시에 주민등록을 두고 계속 거주하는 경우 등',apply:'출생·입양일로부터 1년 이내 주민등록지 관할 행정복지센터 방문 신청',sourceName:'부천시 아기환영부천',sourceUrl:'https://www.bucheon.go.kr/site/homepage/menu/viewMenu?menuid=148006003009005',verifiedAt:'2026-09-03'}
  ]
};

export function getCitySupport(citySlug?:string){return citySlug?CITY_SUPPORT[citySlug]||[]:[];}
