import type {RegionalSupportItem} from './regional-support';
import {getGangwonCitySupport} from './city-support-gangwon';

const DATA:Record<string,RegionalSupportItem[]>={
  서귀포태아보험:[
    {title:'제주특별자치도 산후조리비 지원',summary:'서귀포시를 포함한 제주도 출산가정이 도내 산후조리원을 이용한 경우 이용비 일부를 지원하는 제도입니다.',benefit:'도내 산후조리원 이용비용 최대 40만원',eligibility:'부 또는 모가 영아 출생일 기준 제주도에 6개월 이상 주민등록을 두고 신청일 현재 거주하며, 영아도 제주도에 주민등록을 두고 거주하는 등 공식 요건 충족 가정',apply:'영아 출생 후 12개월 이내 신청 · 주소지 보건소에 제출서류를 사전 확인 후 신청',sourceName:'제주인구정책 통합플랫폼 산후조리비 지원',sourceUrl:'https://jeju.go.kr/lifecycle/policy/list.htm?act=view&page=3&seq=39',verifiedAt:'2026-09-26'},
    {title:'제주 해피아이 육아지원금',summary:'서귀포시를 포함한 제주특별자치도 출생가정에 출생순위에 따라 장기간 분할 지급하는 제주형 육아지원입니다.',benefit:'첫째 총 500만원(5년 분할) · 둘째 이상 총 1,000만원(9년 분할)',eligibility:'자녀 출생일 기준 첫째는 6개월, 둘째 이상은 12개월 이전부터 계속 제주도에 주민등록상 주소를 둔 부 또는 모로서 제주도에 출생·입양 신고되고 부모 주민등록표에 등재된 자녀',apply:'주민등록 주소지 읍면동 방문 또는 정부24 행복출산 온라인 신청',sourceName:'제주인구정책 통합플랫폼 해피아이 육아지원금',sourceUrl:'https://jeju.go.kr/lifecycle/policy/list.htm?act=view&page=4&seq=49',verifiedAt:'2026-09-03'},
    {title:'제주 1인 여성 소상공인 출산급여',summary:'서귀포시에 사업장을 둔 대상자를 포함해 제주도 내 1인 여성 소상공인의 출산 후 소득단절 부담을 줄이는 2026 지원입니다.',benefit:'월 최대 30만원 × 3개월 · 총 최대 90만원',eligibility:'당해연도 출산한 1인 여성 소상공인으로 제주에 사업장 주소를 두고 출산일 기준 6개월 이상 사업 운영, 최근 3개월 내 매출 발생 등 요건 충족자',apply:'신청서와 소상공인확인서·주민등록등본·매출증빙 등을 갖춰 주소지 읍면동 방문 신청',sourceName:'제주인구정책 통합플랫폼 2026 소상공인 출산급여',sourceUrl:'https://www.jeju.go.kr/lifecycle/policy/list.htm?act=view&seq=2',verifiedAt:'2026-09-03'},
    {title:'제주 출산여성 한약 지원',summary:'출산 후 산모의 건강회복을 돕기 위해 제주도와 한의사회가 산후조리용 한약 비용을 지원합니다.',benefit:'산후조리용 한약제 15만원 할인 · 제주도 10만원 + 한의사회 5만원',eligibility:'제주특별자치도 출산여성 중 사업 세부요건 충족자',apply:'제주인구정책 통합플랫폼에서 참여기관과 최신 신청방법 확인',sourceName:'제주인구정책 통합플랫폼',sourceUrl:'https://jeju.go.kr/lifecycle/policy/list.htm?page=4',verifiedAt:'2026-09-03'}
  ]
};

export function getJejuCitySupport(citySlug?:string){
  if(!citySlug)return [];
  const own=DATA[citySlug]||[];
  return own.length?own:getGangwonCitySupport(citySlug);
}
