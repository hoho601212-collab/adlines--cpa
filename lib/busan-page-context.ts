import type {BusanDistrict} from './busan-insurance';

export type BusanEvidenceState={tone:'district'|'guide'|'citywide';badge:string;summary:string};
export type BusanSeoIntent={titleTail:string;descriptionLead:string;related:string[]};

const seoIntents:Record<string,BusanSeoIntent>={
 '해운대구태아보험':{titleTail:'가입시기·출생순위·산모특약',descriptionLead:'임신 주수별 가입 가능조건과 출생순위별 지역지원, 산모특약의 역할을 함께 정리합니다.',related:['해운대구 태아보험 가입시기','해운대구 산모특약','해운대구 출산지원']},
 '부산진구태아보험':{titleTail:'가입시기·신생아보장·계약전환',descriptionLead:'임신 초기·중기 가입시기와 신생아 입원·수술 보장, 출생 후 계약전환 절차를 중심으로 봅니다.',related:['부산진구 태아보험 가입시기','부산진구 신생아보장','부산진구 어린이보험 전환']},
 '동래구태아보험':{titleTail:'산모특약·가입주수·보장기간',descriptionLead:'산모특약과 태아 관련 특약의 가입 가능 주수, 출생 후 장기 보장기간을 구분해 확인합니다.',related:['동래구 산모특약','동래구 태아보험 가입주수','동래구 어린이보험 보장기간']},
 '수영구태아보험':{titleTail:'바우처·보험금·정액형보장',descriptionLead:'지역 바우처·현물성 지원과 정액형·실손형 보험금의 차이를 중심으로 비교합니다.',related:['수영구 태아보험 비교','수영구 임산부 바우처','수영구 정액형 보장']},
 '남구태아보험':{titleTail:'산후조리비·보장기간·보험료',descriptionLead:'산후조리 관련 공공지원과 장기 보장기간, 갱신 여부와 보험료 구조를 따로 점검합니다.',related:['남구 태아보험 보험료','남구 산후조리비','남구 태아보험 보장기간']},
 '연제구태아보험':{titleTail:'고지사항·심사조건·가입서류',descriptionLead:'임신 주수와 검사·치료 이력, 고지사항과 실제 청약 심사조건을 상담 전에 정리합니다.',related:['연제구 태아보험 고지사항','연제구 태아보험 심사','연제구 태아보험 준비서류']},
 '금정구태아보험':{titleTail:'산모특약·출산축하금·보장유지',descriptionLead:'출산축하금 같은 공공지원과 산모특약, 출생 후 어린이보험 보장 유지조건을 분리해 봅니다.',related:['금정구 태아보험 산모특약','금정구 출산축하금','금정구 어린이보험']},
 '북구태아보험':{titleTail:'보험료·분할지원·거주조건',descriptionLead:'장기 보험료 납입과 출산장려금 분할지급, 계속 거주조건을 서로 다른 기준으로 관리합니다.',related:['북구 태아보험 보험료','북구 출산장려금','북구 태아보험 비교']},
 '사하구태아보험':{titleTail:'필수보장·보험료예산·납입면제',descriptionLead:'출산 후 생활비까지 고려해 필수보장과 선택특약, 월 보험료와 납입면제 조건을 점검합니다.',related:['사하구 태아보험 필수보장','사하구 태아보험 보험료','사하구 납입면제']},
 '사상구태아보험':{titleTail:'보험비교·갱신조건·면책기간',descriptionLead:'여러 설계안을 같은 가입금액·보장기간·갱신조건·면책기간 기준으로 맞춰 비교합니다.',related:['사상구 태아보험 비교','사상구 태아보험 갱신형','사상구 태아보험 면책기간']},
 '강서구태아보험':{titleTail:'주소변경·거주조건·출생후등록',descriptionLead:'출산 전후 이사 예정 가정이 보험계약 주소변경과 공공지원 거주요건, 출생 후 자녀등록을 구분해 확인합니다.',related:['강서구 태아보험 주소변경','강서구 출산지원 거주요건','강서구 태아보험 자녀등록']},
 '기장군태아보험':{titleTail:'공공보험·민간보험·중복보장',descriptionLead:'지자체 안전보험과 개인 태아·어린이보험의 보장 목적, 중복 가능성과 약관 차이를 구분합니다.',related:['기장군 태아보험','기장군 군민안전보험','기장군 어린이보험 비교']},
 '서구태아보험':{titleTail:'신생아보장·선천성보장·청구서류',descriptionLead:'출생 직후 입원·수술, 선천성 관련 약관 범위와 보험금 청구서류를 중심으로 확인합니다.',related:['서구 신생아보험','서구 태아보험 선천성보장','서구 보험금 청구서류']},
 '동구태아보험':{titleTail:'보장공백·출생순위·납입면제',descriptionLead:'특약 개수보다 질병·상해·수술의 보장공백과 출생순위별 지원, 납입면제 조건을 먼저 봅니다.',related:['동구 태아보험 보장공백','동구 출산지원','동구 태아보험 납입면제']},
 '중구태아보험':{titleTail:'장기보험·분할지원·계속거주',descriptionLead:'7년 분할 공공지원과 장기 보험계약의 지급기간·유지조건을 서로 섞지 않고 비교합니다.',related:['중구 태아보험 장기보장','중구 출산축하금','중구 태아보험 보험료']},
 '영도구태아보험':{titleTail:'보험료·현물지원·보장기간',descriptionLead:'기저귀 같은 현물지원의 실제 가치와 장기 보험료, 보장기간·납입기간을 별도로 계산합니다.',related:['영도구 태아보험 보험료','영도구 출산축하용품','영도구 태아보험 보장기간']}
};

export function getBusanSeoIntent(district:BusanDistrict):BusanSeoIntent{
 return seoIntents[district.slug]||{titleTail:'가입시기·보장·출산지원',descriptionLead:`${district.theme}을 중심으로 가입조건과 지역지원 정보를 함께 확인합니다.`,related:[`${district.name} 태아보험`,`${district.name} 태아보험 상담`,`${district.name} 출산지원`]};
}

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
