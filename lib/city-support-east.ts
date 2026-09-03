import type {RegionalSupportItem} from './regional-support';
import {getGyeongnamCitySupport} from './city-support-gyeongnam';

const DATA:Record<string,RegionalSupportItem[]>={
  포항태아보험:[
    {title:'포항시 출산장려금',summary:'포항시는 현재 첫째부터 넷째 이상까지 출생순위에 따라 출산장려금을 지급하고 있습니다.',benefit:'첫째 50만원 일시금 · 둘째 월 10만원×24개월 · 셋째 월 15만원×24개월 · 넷째 이상 월 30만원×36개월 + 첫돌축하금 50만원',eligibility:'포항시에 출생신고 또는 전입한 아동과 보호자 등 현행 조례·공식 안내의 요건 충족 가정',apply:'출생신고일 또는 전입신고일로부터 90일 이내 읍면동 행정복지센터 또는 정부24 행복출산 신청',sourceName:'포항시 출산장려정책',sourceUrl:'https://pohang.go.kr/dept/contents.do?mid=0104282900',verifiedAt:'2026-09-03'},
    {title:'포항 출산장려금 확대 추진 현황',summary:'2026년 7월 포항시의회 회의에서 첫째 300만원, 둘째 이상 400만원 확대 계획이 언급됐지만 아직 조례·예산 확정 전 단계입니다.',benefit:'확대안: 첫째 300만원 · 둘째 이상 400만원',eligibility:'현재는 계획 단계이므로 확정 전에는 기존 지원기준 적용',apply:'실제 신청 전 포항시 최신 조례·예산 및 공고 확인',sourceName:'포항시의회 2026 회의록',sourceUrl:'https://council.pohang.go.kr/mnts/cnts/mnt/mntsViewer.php?schSn=6047',verifiedAt:'2026-09-03'}
  ],
  구미태아보험:[
    {title:'구미시 출산축하금',summary:'구미시는 출생순위에 따라 출생 시·돌·두 돌에 나누어 출산축하금을 지급합니다.',benefit:'첫째 150만원 · 둘째 200만원 · 셋째 300만원 · 넷째 400만원 · 다섯째 이상 500만원',eligibility:'출생일부터 지원일까지 부 또는 모와 대상자녀가 구미시에 주민등록을 두고 거주하는 가정',apply:'구미시 출산 장려 지원 사업 안내에 따라 주소지 행정복지센터 등에서 신청',sourceName:'구미시 보건소 출산 장려 지원 사업',sourceUrl:'https://www.gumi.go.kr/health/contents.do?mid=0315020000',verifiedAt:'2026-09-03'},
    {title:'구미 다자녀가정 이사비 지원',summary:'2026년부터 구미시 내 전입·이사한 두 자녀 이상 가정의 이사비 부담을 줄이는 신규 지원입니다.',benefit:'부동산 중개보수비·입주청소비 등 최대 40만원 실비',eligibility:'2026년 1월 이후 구미시로 전입하거나 구미시 내에서 이사 후 전입신고를 마친 두 자녀 이상 가정',apply:'정부24에서 주민등록서류·가족관계증명·지출증빙 등을 제출해 신청, 예산 소진 시까지',sourceName:'구미시 2026 다자녀 지원 확대',sourceUrl:'https://www.gumi.go.kr/portal/board/post/view.do?bcIdx=211&idx=833419&mid=0504020000',verifiedAt:'2026-09-03'}
  ],
  경주태아보험:[
    {title:'경주시 출산축하금·출산장려금',summary:'경주시는 모든 출생아에게 축하금을 지급하고 출생순위별로 장려금을 장기간 분할 지원합니다.',benefit:'출산축하금 20만원 + 첫째 300만원 · 둘째 500만원 · 셋째 이상 1,800만원',eligibility:'출생신고를 경주시로 하고 출생일부터 지원일까지 부 또는 모가 대상자녀와 함께 경주시에 주민등록을 두고 거주하는 가정',apply:'출생일로부터 6개월 이내 읍면동 행정복지센터 또는 정부24 행복출산 신청',sourceName:'경주시보건소 2026 출산장려금',sourceUrl:'https://www.gyeongju.go.kr/health/page.do?mnu_uid=3111',verifiedAt:'2026-09-03'}
  ],
  안동태아보험:[
    {title:'안동시 출산장려금',summary:'안동시는 24개월 미만 출생아에게 출생순위별 월 정액 출산장려금을 2년간 지원합니다.',benefit:'첫째 월 10만원 · 둘째 월 20만원 · 셋째 이상 월 30만원 · 2년간',eligibility:'출생일·입양일 또는 전입일 기준 보호자가 안동시에 주소를 둔 24개월 미만 출생아',apply:'주소지 읍면동 행정복지센터 등 안동시 공식 안내 확인',sourceName:'안동시 임신·출산 인구정책',sourceUrl:'https://www.andong.go.kr/portal/contents.do?mId=0615030000',verifiedAt:'2026-09-03'},
    {title:'안동 출산축하금·돌축하금',summary:'출생 직후와 첫돌 시점에 별도 축하금을 지급하는 안동시 자체 지원입니다.',benefit:'출산축하금 50만원 + 돌축하금 50만원',eligibility:'출산축하금은 출생일 기준 대상자녀와 함께 안동시에 주소를 둔 가정, 돌축하금은 12개월 동안 계속 안동시에 주민등록을 둔 가정',apply:'읍면동 행정복지센터 또는 안동시 인구정책과 안내 확인',sourceName:'안동시 임신·출산 인구정책',sourceUrl:'https://www.andong.go.kr/portal/contents.do?mId=0615030000',verifiedAt:'2026-09-03'}
  ],
  김천태아보험:[
    {title:'김천시 임신 지원금',summary:'2026년 김천시 예산에 반영된 임신가정 대상 자체 지원입니다.',benefit:'임신부 1인당 30만원 기준 예산 편성',eligibility:'김천시가 정한 임신·거주 등 세부 요건 충족 임신부',apply:'김천시 보건소 최신 시행공고에서 신청기간·방법 확인',sourceName:'김천시 2026 건강증진과 예산',sourceUrl:'https://www.gc.go.kr/download/main/sub01/yesan/2026/52.pdf',verifiedAt:'2026-09-03'},
    {title:'김천 산후조리비 지원',summary:'출산 후 회복비 부담을 줄이기 위해 2026년 시 예산에 산후조리비 지원이 편성됐습니다.',benefit:'1인당 100만원 기준 예산 편성',eligibility:'김천시 출산가정 중 시행지침의 거주·출산 등 요건 충족 가정',apply:'김천시 보건소 최신 사업공고에서 대상·신청기한 확인',sourceName:'김천시 2026 건강증진과 예산',sourceUrl:'https://www.gc.go.kr/download/main/sub01/yesan/2026/52.pdf',verifiedAt:'2026-09-03'},
    {title:'김천 임신부 가사서비스',summary:'임신 중 가사 부담을 줄이는 김천시 자체 돌봄 지원 예산이 2026년에 편성됐습니다.',benefit:'1인당 50만원 기준 예산 편성',eligibility:'김천시 임신부 중 사업별 신청요건 충족',apply:'김천시 보건소 시행공고 확인',sourceName:'김천시 2026 건강증진과 예산',sourceUrl:'https://www.gc.go.kr/download/main/sub01/yesan/2026/52.pdf',verifiedAt:'2026-09-03'}
  ]
};

export function getEastCitySupport(citySlug?:string){
  if(!citySlug)return [];
  const own=DATA[citySlug]||[];
  return own.length?own:getGyeongnamCitySupport(citySlug);
}
