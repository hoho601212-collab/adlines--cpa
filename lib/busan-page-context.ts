import type {BusanDistrict} from './busan-insurance';

export type BusanEvidenceState={tone:'district'|'guide'|'citywide';badge:string;summary:string};

export function getBusanEvidenceState(district:BusanDistrict):BusanEvidenceState{
 const sourceName=district.source?.name||'';
 if(sourceName.includes('부산광역시')&&!sourceName.includes(district.name))return{tone:'citywide',badge:'부산시 공통근거',summary:`${district.name} 자체 금액은 최신 구·군 공식자료에서 확인된 경우에만 표시하고, 현재 확인되지 않은 항목은 부산시 공통제도와 분리해 안내합니다.`};
 if(sourceName.includes('가이드북')||sourceName.includes('복지포털'))return{tone:'guide',badge:'구 공식 가이드 확인',summary:`${district.name} 공식 복지 가이드와 보건소 안내를 기준으로 확인하되, 개별 사업의 대상·금액·신청기한은 최신 공고에서 다시 확인해야 합니다.`};
 return{tone:'district',badge:'구·군 공식근거 확인',summary:`${district.name} 자체사업의 공식 근거를 확인해 보험정보와 공공지원 정보를 분리해 정리했습니다.`};
}

export function getBusanTopicFaq(district:BusanDistrict){
 const text=[district.theme,district.intro,...district.insuranceFocus,...district.localChecks].join(' ');
 if(/분할|회 지급|전출|계속 거주|거주요건/.test(text))return{q:`${district.name} 지원금을 나눠 받는 동안 이사하면 어떻게 되나요?`,a:`분할지급이나 계속 거주 조건이 있는 사업은 전출 시 다음 회차 지급이 중단될 수 있습니다. ${district.name} 지원금의 지급기준일·주민등록 요건을 확인하고, 보험계약의 주소변경은 별개의 계약관리 절차로 처리하세요.`};
 if(/오륙도페이|지역화폐|바우처|현물|기저귀|농산물|꾸러미/.test(text))return{q:`${district.name} 지역지원은 현금 보험금과 같은 방식인가요?`,a:'아닙니다. 지역화폐·바우처·현물지원은 사용처, 사용기한 또는 지급품목이 정해질 수 있습니다. 민간보험금은 약관의 지급사유를 충족할 때 지급되는 별도 계약이므로 금액을 단순 합산해 비교하지 않는 것이 좋습니다.'};
 if(/가입시기|임신 주수|주수/.test(text))return{q:`${district.name} 태아보험은 임신 몇 주에 준비하는 것이 좋나요?`,a:'모든 상품에 동일한 한 주수 기준이 있는 것은 아닙니다. 임신 주수와 검사·치료 이력에 따라 가입 가능 특약과 심사조건이 달라질 수 있으므로 현재 주수를 기준으로 실제 가입 가능조건을 확인하는 것이 중요합니다.'};
 if(/산모|산후|건강관리/.test(text))return{q:`${district.name} 산후지원과 산모특약은 같은 보장인가요?`,a:'공공 산후지원은 지자체 사업의 대상·신청조건을 따르고, 산모특약은 보험약관의 보장사유와 가입조건을 따릅니다. 같은 출산 시기에 이용하더라도 지급주체와 조건이 다르므로 각각 따로 확인해야 합니다.'};
 return{q:`${district.name}에서 여러 태아보험 설계안을 비교할 때 무엇을 맞춰야 하나요?`,a:'월 보험료만 비교하지 말고 가입금액, 보장기간, 납입기간, 갱신 여부, 면책·감액조건을 같은 기준으로 맞춰 보세요. 지역 공공지원은 보험상품 조건과 별도로 확인하는 것이 정확합니다.'};
}
