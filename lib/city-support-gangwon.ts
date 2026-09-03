import type {RegionalSupportItem} from './regional-support';

const DATA:Record<string,RegionalSupportItem[]>={
  원주태아보험:[
    {title:'원주시 산후 건강관리 지원',summary:'원주시는 출산 후 산모의 의료비와 약제비 부담을 줄이기 위해 출생순위별로 산후 건강관리 비용을 지원합니다.',benefit:'첫째 최대 15만원 · 둘째 최대 20만원 · 셋째 이상 최대 30만원',eligibility:'신청일 기준 강원특별자치도 내 6개월 이상 거주한 출산가정 등 사업요건 충족자',apply:'출산 후 6개월 이내 원주시보건소 모자보건실 방문 신청',sourceName:'원주시보건소 산후 건강관리 지원사업',sourceUrl:'https://www.wonju.go.kr/health/contents.do?key=3590',verifiedAt:'2026-09-03'},
    {title:'2026 원주 산모·신생아 건강관리 지원',summary:'출산가정에 건강관리사가 방문해 산모 회복과 신생아 돌봄을 지원하는 바우처 사업입니다.',benefit:'소득·출산유형·서비스기간에 따라 정부지원금 차등',eligibility:'기준중위소득 150% 이하 출산가정 및 희귀질환·장애·쌍생아·둘째 이상 등 예외지원 대상',apply:'출산예정일 40일 전부터 출산 후 60일 이내 신청',sourceName:'원주시보건소 산모·신생아 건강관리 지원사업',sourceUrl:'https://www.wonju.go.kr/health/contents.do?key=1718',verifiedAt:'2026-09-03'}
  ],
  춘천태아보험:[
    {title:'2026 춘천 임산부 친환경농산물 지원',summary:'춘천시는 임산부와 최근 출산 산모의 건강한 식생활을 돕기 위해 친환경농산물 구입비를 지원합니다.',benefit:'임산부 1인당 총 24만원 상당 · 자부담 4만8천원 포함',eligibility:'신청일 기준 춘천시 거주 임산부 또는 2025년 1월 1일 이후 출산한 산모',apply:'2026.6.17~6.30 에코이몰 온라인 또는 주소지 읍면동 행정복지센터 신청',sourceName:'춘천시 2026 임산부 친환경농산물 지원',sourceUrl:'https://www.chuncheon.go.kr/happiness/life-news/?bbsId=BBSMSTR_000000000294&flag=view&nttId=464791',verifiedAt:'2026-09-03'},
    {title:'춘천 산후 건강관리 지원',summary:'춘천시는 출산 후 의료비 부담을 줄이기 위해 출생순위에 따라 산후 건강관리 비용을 지원합니다.',benefit:'첫째 15만원 · 둘째 20만원 · 셋째 이상 30만원 한도',eligibility:'신청일 기준 강원특별자치도 내 6개월 이상 거주한 출산가정 등',apply:'춘천시보건소 임산부 지원사업 안내에 따라 신청',sourceName:'춘천시 복지포털 임신장려시책',sourceUrl:'https://www.chuncheon.go.kr/new-welfare/life/pregnancy-birth/encouragement-policy/',verifiedAt:'2026-09-03'},
    {title:'춘천 임산부 검진·영양·유축기 지원',summary:'춘천시는 임신기부터 출산 후까지 검진비 쿠폰, 엽산·철분제, 유축기 대여 등 보건소 기반 지원을 제공합니다.',benefit:'검진비 쿠폰 출생순위별 1~3장 · 엽산제·철분제 지급 · 유축기 최대 6주 대여',eligibility:'주민등록상 춘천시 거주 임산부',apply:'춘천시보건소 또는 맘편한 임신 통합서비스에서 세부 신청방법 확인',sourceName:'춘천시 복지포털 임신장려시책',sourceUrl:'https://www.chuncheon.go.kr/new-welfare/life/pregnancy-birth/encouragement-policy/',verifiedAt:'2026-09-03'}
  ]
};

export function getGangwonCitySupport(citySlug?:string){return citySlug?DATA[citySlug]||[]:[];}
