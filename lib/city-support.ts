import type {RegionalSupportItem} from './regional-support';

const GG_SOURCE='https://www.gg.go.kr/contents/contents.do?ciIdx=987110&menuId=266074';

const CITY_SUPPORT:Record<string,RegionalSupportItem[]>={
  수원태아보험:[
    {title:'수원시 출산지원금',summary:'2026년부터 첫째 지원이 신설되고 둘째 지원이 확대된 수원시 출산·입양 지원금입니다.',benefit:'첫째 50만원 · 둘째 100만원 · 셋째 200만원 · 넷째 500만원 · 다섯째 이상 1,000만원',eligibility:'수원시 거주 180일 이상인 첫째 이상 출산가정. 180일 미만이면 출산일 기준 180일 경과 후 신청 가능',apply:'주소지 관할 행정복지센터에서 신청. 2026년 1월 1일 이후 출생·입양아부터 개정 기준 적용',sourceName:'수원특례시 출산 후 지원',sourceUrl:'https://www.suwon.go.kr/sw-www/deptHome/dep_welfare/welfare07/welfare07-01/welfare07-01-02.jsp',verifiedAt:'2026-09-03'},
    {title:'수원 산후조리 한약할인',summary:'2026년 9월부터 첫째 이상 출산여성과 임신 16주 이상 유산·사산 임산부까지 대상이 확대됐습니다.',benefit:'25만원 이상 산후조리 한약 이용 시 10만원 할인',eligibility:'출생일 1개월 전부터 수원시에 주민등록을 두고 거주하는 첫째 이상 출산여성 등',apply:'출산일로부터 3개월 이내 주소지 행정복지센터 방문 신청',sourceName:'수원특례시 출산 후 지원',sourceUrl:'https://www.suwon.go.kr/sw-www/deptHome/dep_welfare/welfare07/welfare07-01/welfare07-01-02.jsp',verifiedAt:'2026-09-03'}
  ],
  성남태아보험:[
    {title:'성남시 출산장려금',summary:'성남시는 출생순위에 따라 출산장려금을 지급하고 셋째 이상 가정에는 별도 양육지원도 운영합니다.',benefit:'첫째 30만원 · 둘째 50만원 · 셋째 100만원 · 넷째 200만원 · 다섯째 이상 300만원',eligibility:'출산일 기준 부 또는 모가 성남시에 180일 이전부터 주민등록을 두고 계속 거주하며 자녀를 출생신고한 경우 등',apply:'출생신고일로부터 3년 이내 주민등록지 동 행정복지센터 신청',sourceName:'성남시 다자녀가정 출산장려지원',sourceUrl:'https://seongnam.go.kr/city/1000253/10154/contents.do',verifiedAt:'2026-09-03'},
    {title:'성남 다자녀 아동양육수당',summary:'셋째 이상 자녀가 있는 성남시 가정의 지속적인 양육비 부담을 지원합니다.',benefit:'셋째 이상 자녀 월 10만원',eligibility:'신청일 현재 부 또는 모와 셋째 이상 자녀가 성남시에 주민등록을 두고 거주',apply:'주민등록지 동 행정복지센터 신청',sourceName:'성남시 다자녀가정 출산장려지원',sourceUrl:'https://seongnam.go.kr/city/1000253/10154/contents.do',verifiedAt:'2026-09-03'}
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
    {title:'2026 부천시 출산지원금',summary:'2026년부터 첫째아까지 지원대상이 확대된 부천시 출산·입양 지원금입니다.',benefit:'첫째 100만원 · 둘째 100만원 · 셋째 200만원 · 넷째 이상 700만원',eligibility:'출산일 기준 부 또는 모가 1년 이전부터 부천시에 주민등록을 두고 계속 거주하는 경우 등',apply:'주민등록지 관할 행정복지센터에서 최신 신청기한 확인',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  화성태아보험:[
    {title:'화성특례시 출산지원금',summary:'화성시는 첫째부터 출생순위에 따라 출산지원금을 지급하고 넷째 이상은 분할 지급합니다.',benefit:'첫째 100만원 · 둘째 200만원 · 셋째 200만원 · 넷째 이상 300만원',eligibility:'부 또는 모가 출생일 180일 전부터 화성시에 주민등록을 두고 실제 거주. 180일 미만이면 출생 후 180일까지 계속 거주 시 지원',apply:'화성시 저출생대응과 또는 주소지 행정복지센터에서 신청기한·서류 확인',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  안산태아보험:[
    {title:'안산시 출생축하금',summary:'안산시는 첫째부터 출생순위별로 출생축하금을 지원합니다.',benefit:'첫째 100만원 · 둘째 300만원 · 셋째 이상 500만원',eligibility:'출생·입양 신고 후 안산시에 주민등록을 두고, 보호자가 출생일 현재 1년 이상 계속 거주했거나 출생 후 1년 이상 계속 거주한 경우',apply:'안산시 여성보육과 또는 동 행정복지센터에서 신청',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'},
    {title:'안산 다자녀 영유아 양육비',summary:'둘째 이상 영유아가 있는 안산시 다자녀 가정에 월 단위 양육비를 지원합니다.',benefit:'둘째 이상 자녀 월 3만원 · 만 0~5세',eligibility:'신청일 현재 부 또는 모와 함께 안산시에 주민등록을 두고 거주하는 다자녀 가정의 둘째 이상 자녀',apply:'주소지 동 행정복지센터에서 신청',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  남양주태아보험:[
    {title:'남양주시 출산축하금',summary:'남양주시는 출생순위와 관계없이 동일한 출산축하금을 지급합니다.',benefit:'첫째 이상 모두 100만원',eligibility:'부·모 또는 사실상 양육자가 출생신고일 기준 남양주시에 주민등록을 두고 신청일 현재 실제 거주. 별도 거주기간 제한 없음',apply:'남양주시 건강증진과 또는 주소지 행정복지센터에서 신청',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'},
    {title:'남양주 장애인가정 출산지원금',summary:'등록장애인 가정의 출산 부담을 줄이기 위한 별도 지원입니다.',benefit:'중증장애인 150만원 · 경증장애인 100만원',eligibility:'출생일 기준 신생아의 부 또는 모가 남양주시에 주민등록을 두고 실제 거주 중인 장애인 가정',apply:'남양주시 장애인복지과 또는 행정복지센터 확인',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  안양태아보험:[
    {title:'안양시 출산지원금',summary:'안양시는 첫째부터 출생순위에 따라 비교적 큰 폭의 출산지원금을 분할 지급합니다.',benefit:'첫째 200만원 · 둘째 400만원 · 셋째 이상 1,000만원',eligibility:'출산·입양일 기준 12개월 전부터 신청일까지 안양시에 계속 주민등록을 두고 출생아와 동일 세대인 부 또는 모. 12개월 미만이면 12개월 경과 후 지원',apply:'만안·동안구 보건소 또는 주소지 행정복지센터에서 분할 지급 일정 확인',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  평택태아보험:[
    {title:'평택시 출산축하금',summary:'평택시는 첫째부터 다섯째 이상까지 출생순위별로 출산축하금을 지급합니다.',benefit:'첫째 50만원 · 둘째 120만원 · 셋째 300만원 · 넷째 이상 500만원',eligibility:'출생·입양일 기준 1년 전부터 신청일까지 부모 중 1명이 평택시에 주민등록을 둔 가정. 1년 미만 거주자는 별도 경과요건 적용',apply:'평택시 건강증진과 또는 행정복지센터에서 신청',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'},
    {title:'평택 다자녀 양육지원금',summary:'셋째아가 있는 가정에 출생 후 초기 3년간 매월 양육지원금을 지급합니다.',benefit:'셋째아 가정 월 10만원 · 출생월부터 36개월',eligibility:'36개월 이하 셋째아 자녀가 있는 평택시 거주 가정',apply:'평택시 아동복지과 또는 주소지 행정복지센터 확인',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  시흥태아보험:[
    {title:'시흥시 출생축하금',summary:'시흥시는 첫째부터 출생순위에 따라 출생축하금을 지급하며 넷째 이상은 분할 지급합니다.',benefit:'첫째 50만원 · 둘째 100만원 · 셋째 200만원 · 넷째 이상 800만원',eligibility:'출생신고일 기준 부 또는 모가 시흥시에 180일 이전부터 주민등록을 두고 거주. 180일 미만이면 180일 경과 시까지 계속 거주 시 지원',apply:'시흥시 보건정책과 또는 행정복지센터에서 분할 지급 일정 확인',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  파주태아보험:[
    {title:'파주시 출생축하금',summary:'파주시는 출생순위에 따라 2회로 나눠 출생축하금을 지급합니다.',benefit:'첫째 100만원 · 둘째 200만원 · 셋째 이상 300만원',eligibility:'출생신고일 기준 출산자녀와 함께 파주시에 실제 거주하고 주민등록이 되어 있는 부 또는 모이며 2차 지급일까지 거주요건 유지',apply:'출생신고 시 1차 지급 후 1년 뒤 2차 지급. 여성가족과 또는 행정복지센터 확인',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  의정부태아보험:[
    {title:'의정부시 출산장려금',summary:'의정부시는 2025년 이후 첫째아까지 출산장려금 지원대상을 확대해 운영하고 있습니다.',benefit:'첫째 30만원 · 둘째 이상 100만원',eligibility:'출생신고일 현재 의정부시에 주민등록을 두고 거주하는 부 또는 모이며 대상자녀가 주민등록상 동일 세대원인 경우',apply:'의정부시 여성보육과 또는 주소지 행정복지센터에서 신청',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  김포태아보험:[
    {title:'김포시 출산축하금',summary:'김포시는 둘째아부터 출산축하금을 지급합니다.',benefit:'둘째 이상 자녀 100만원',eligibility:'출생일 기준 180일 이전부터 신청일까지 김포시에 주민등록을 두고 거주한 보호자와 동일 세대의 신생아. 180일 미만이면 출생 후 180일까지 계속 거주 시 신청 가능',apply:'요건 충족일로부터 6개월 이내 신청',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ],
  광주태아보험:[
    {title:'경기 광주시 출산장려금',summary:'경기 광주시는 출생순위와 관계없이 첫째 이상 자녀에게 동일한 출산장려금을 지급합니다.',benefit:'첫째 이상 모두 100만원',eligibility:'광주시에 출생신고한 아동 중 출생·입양일 기준 보호자가 180일 이전부터 광주시에 주민등록을 둔 경우. 180일 미만이면 180일 경과 시 지원',apply:'출생신고 후 1년 이내 신청',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'},
    {title:'경기 광주시 셋째 이상 자녀 양육비',summary:'셋째 이상 출생아에게 출생 후 1년 동안 매월 양육비를 지급합니다.',benefit:'셋째 이상 월 20만9천원 · 출생월부터 12개월',eligibility:'광주시에 출생신고하고 보호자의 180일 거주요건 등을 충족한 셋째 이상 자녀',apply:'광주시 아동보육과 또는 주소지 행정복지센터 확인',sourceName:'경기도청 2026 시군별 출산지원 현황',sourceUrl:GG_SOURCE,verifiedAt:'2026-09-03'}
  ]
};

export function getCitySupport(citySlug?:string){return citySlug?CITY_SUPPORT[citySlug]||[]:[];}
