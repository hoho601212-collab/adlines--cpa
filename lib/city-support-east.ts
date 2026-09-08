import type {RegionalSupportItem} from './regional-support';
import {getGyeongnamCitySupport} from './city-support-gyeongnam';

const DATA:Record<string,RegionalSupportItem[]>={
  포항태아보험:[
    {title:'포항시 출산장려금',summary:'포항시는 현재 첫째부터 넷째 이상까지 출생순위에 따라 출산장려금을 지급하고 있습니다.',benefit:'첫째 50만원 일시금 · 둘째 월 10만원×24개월 · 셋째 월 15만원×24개월 · 넷째 이상 월 30만원×36개월 + 첫돌축하금 50만원',eligibility:'포항시에 출생신고 또는 전입한 아동과 보호자 등 현행 조례·공식 안내의 요건 충족 가정',apply:'출생신고일 또는 전입신고일로부터 90일 이내 읍면동 행정복지센터 또는 정부24 행복출산 신청',sourceName:'포항시 출산장려정책',sourceUrl:'https://pohang.go.kr/dept/contents.do?mid=0104282900',verifiedAt:'2026-09-08'},
    {title:'포항 출산장려금 확대 추진 현황',summary:'2026년 7월 포항시의회 회의에서 첫째 300만원, 둘째 이상 400만원 확대 계획이 언급됐지만 조례 개정과 예산 확보 전 단계입니다. 현재 신청에는 기존 지원기준을 적용해야 합니다.',benefit:'확대 계획안: 첫째 300만원 · 둘째 이상 400만원',eligibility:'계획 단계이며 확정 전입니다. 조례 개정·예산 확보·시행공고가 확인되기 전에는 현행 지원기준을 적용',apply:'실제 신청 전 포항시 최신 조례·예산·시행공고에서 확대안 시행 여부 확인',sourceName:'포항시의회 2026 회의록',sourceUrl:'https://council.pohang.go.kr/mnts/cnts/mnt/mntsViewer.php?schSn=6047',verifiedAt:'2026-09-08'}
  ],
  구미태아보험:[
    {title:'구미시 출산축하금',summary:'구미시는 출생순위에 따라 출생 시·돌·두 돌에 나누어 출산축하금을 지급합니다.',benefit:'첫째 150만원 · 둘째 200만원 · 셋째 300만원 · 넷째 400만원 · 다섯째 이상 500만원',eligibility:'출생일부터 지원일까지 부 또는 모와 대상자녀가 구미시에 주민등록을 두고 거주하는 가정',apply:'구미시 출산 장려 지원 사업 안내에 따라 주소지 행정복지센터 등에서 신청',sourceName:'구미시 보건소 출산 장려 지원 사업',sourceUrl:'https://www.gumi.go.kr/health/contents.do?mid=0315020000',verifiedAt:'2026-09-03'},
    {title:'구미 다자녀가정 이사비 지원',summary:'2026년부터 구미시 내 전입·이사한 두 자녀 이상 가정의 이사비 부담을 줄이는 신규 지원입니다.',benefit:'부동산 중개보수비·입주청소비 등 최대 40만원 실비',eligibility:'2026년 1월 이후 구미시로 전입하거나 구미시 내에서 이사 후 전입신고를 마친 두 자녀 이상 가정',apply:'정부24에서 주민등록서류·가족관계증명·지출증빙 등을 제출해 신청, 예산 소진 시까지',sourceName:'구미시 2026 다자녀 지원 확대',sourceUrl:'https://www.gumi.go.kr/portal/board/post/view.do?bcIdx=211&idx=833419&mid=0504020000',verifiedAt:'2026-09-03'}
  ],
  경산태아보험:[
    {title:'2026 경산시 출산축하금·출산장려금',summary:'복지로 2026년 지자체 복지서비스에서 경산시 출산축하금과 출생순위별 월 분할 출산장려금의 현재 기준을 확인했습니다.',benefit:'출산축하금 50만원 일시금 + 첫째 120만원(10만원×12개월) · 둘째 240만원(20만원×12개월) · 셋째 360만원(30만원×12개월) · 넷째 이상 1,200만원(50만원×24개월)',eligibility:'신생아 출생일 기준 부 또는 모가 경산시에 주민등록을 두고 거주하며 신생아를 경산시에 출생신고한 가정',apply:'출생신고 시 또는 출생신고 후 90일 이내 읍면동 행정복지센터 방문 또는 정부24 행복출산 원스톱서비스 신청',sourceName:'복지로 · 경산시 출산축하금 및 장려금 지원',sourceUrl:'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00002874&wlfareInfoReldBztpCd=02',verifiedAt:'2026-09-07'},
    {title:'2026 경산 둘째아 이상 건강보험료 지원',summary:'경산시는 둘째아 이상 출생아에게 별도의 건강보험료 지원도 운영하며, 민간 태아보험과는 다른 지자체 지원으로 구분해 확인해야 합니다.',benefit:'둘째아 이상 출생아 건강보험료 3년간 월 3만원 이하 지원',eligibility:'경산시 출산장려 지원 기준에 해당하는 둘째아 이상 출생가정',apply:'출생신고와 출산지원 신청 시 읍면동 행정복지센터에서 가입·지원절차 확인',sourceName:'복지로 · 경산시 출산장려 지원',sourceUrl:'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00005141&wlfareInfoReldBztpCd=02',verifiedAt:'2026-09-07'}
  ],
  경주태아보험:[
    {title:'경주시 출산축하금·출산장려금',summary:'경주시는 모든 출생아에게 축하금을 지급하고 출생순위별로 장려금을 장기간 분할 지원합니다.',benefit:'출산축하금 20만원 + 첫째 300만원 · 둘째 500만원 · 셋째 이상 1,800만원',eligibility:'출생신고를 경주시로 하고 출생일부터 지원일까지 부 또는 모가 대상자녀와 함께 경주시에 주민등록을 두고 거주하는 가정',apply:'출생일로부터 6개월 이내 읍면동 행정복지센터 또는 정부24 행복출산 신청',sourceName:'경주시보건소 2026 출산장려금',sourceUrl:'https://www.gyeongju.go.kr/health/page.do?mnu_uid=3111',verifiedAt:'2026-09-03'}
  ],
  안동태아보험:[
    {title:'안동시 출산장려금',summary:'안동시는 24개월 미만 출생아에게 출생순위별 월 정액 출산장려금을 2년간 지원합니다.',benefit:'첫째 월 10만원 · 둘째 월 20만원 · 셋째 이상 월 30만원 · 2년간',eligibility:'출생일·입양일 또는 전입일 기준 보호자가 안동시에 주소를 둔 24개월 미만 출생아',apply:'주소지 읍면동 행정복지센터 등 안동시 공식 안내 확인',sourceName:'안동시 임신·출산 인구정책',sourceUrl:'https://www.andong.go.kr/portal/contents.do?mId=0615030000',verifiedAt:'2026-09-03'},
    {title:'안동 출산축하금·돌축하금',summary:'출생 직후와 첫돌 시점에 별도 축하금을 지급하는 안동시 자체 지원입니다.',benefit:'출산축하금 50만원 + 돌축하금 50만원',eligibility:'출산축하금은 출생일 기준 대상자녀와 함께 안동시에 주소를 둔 가정, 돌축하금은 12개월 동안 계속 안동시에 주민등록을 둔 가정',apply:'읍면동 행정복지센터 또는 안동시 인구정책과 안내 확인',sourceName:'안동시 임신·출산 인구정책',sourceUrl:'https://www.andong.go.kr/portal/contents.do?mId=0615030000',verifiedAt:'2026-09-03'}
  ],
  김천태아보험:[
    {title:'김천시 임신 지원금 예산 편성 현황',summary:'2026년 김천시 건강증진과 예산서에 임신 지원금 예산이 편성된 사실을 확인했습니다. 예산 편성 자체가 신청 개시를 뜻하지 않으므로 실제 시행공고와 접수 여부를 다시 확인해야 합니다.',benefit:'예산상 산출기준: 임신부 1인당 30만원',eligibility:'예산상 대상 규모가 반영된 단계이며 실제 지원대상·거주요건은 시행지침 또는 공고 기준',apply:'김천시 보건소의 2026 시행공고·접수안내 확인 후 신청',sourceName:'김천시 2026 건강증진과 예산',sourceUrl:'https://www.gc.go.kr/download/main/sub01/yesan/2026/52.pdf',verifiedAt:'2026-09-08'},
    {title:'김천 산후조리비 지원 예산 편성 현황',summary:'2026년 김천시 예산서에 산후조리비 지원 예산이 편성돼 있습니다. 1인당 산출기준은 확인되지만 실제 신청 가능 여부·대상·접수기간은 별도 시행공고를 확인해야 합니다.',benefit:'예산상 산출기준: 1인당 100만원',eligibility:'예산 편성 단계의 산출기준이며 실제 거주·출산·소득 등 세부요건은 시행지침 또는 공고 기준',apply:'김천시 보건소 최신 사업공고에서 시행 여부·대상·신청기한 확인',sourceName:'김천시 2026 건강증진과 예산',sourceUrl:'https://www.gc.go.kr/download/main/sub01/yesan/2026/52.pdf',verifiedAt:'2026-09-08'},
    {title:'김천 임신부 가사서비스 예산 편성 현황',summary:'2026년 김천시 예산서에 임신부 가사서비스 지원 예산이 편성돼 있습니다. 예산 편성만으로 서비스 이용이 확정된 것으로 보지 않고 시행공고와 제공방식을 별도로 확인해야 합니다.',benefit:'예산상 산출기준: 1인당 50만원',eligibility:'예산 편성 단계이며 실제 지원대상·서비스 범위·거주요건은 시행지침 또는 공고 기준',apply:'김천시 보건소 시행공고에서 신청기간·서비스 제공방식 확인',sourceName:'김천시 2026 건강증진과 예산',sourceUrl:'https://www.gc.go.kr/download/main/sub01/yesan/2026/52.pdf',verifiedAt:'2026-09-08'}
  ]
};

export function getEastCitySupport(citySlug?:string){
  if(!citySlug)return [];
  const own=DATA[citySlug]||[];
  return own.length?own:getGyeongnamCitySupport(citySlug);
}
