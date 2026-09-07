import type {BusanDistrict} from './busan-insurance';

export type BusanPageFlow={
 checkHeading:string;
 supportHeading:string;
 localHeading:string;
 finalTitle:string;
 finalBody:string;
 ctaLabel:string;
};

const flows:Record<string,BusanPageFlow>={
 '해운대구태아보험':{checkHeading:'가입 주수와 산모특약, 출생순위까지 한 번에 점검',supportHeading:'해운대구 출생순위별 지원과 산후 회복비용을 따로 확인',localHeading:'보험 준비와 산후지원의 역할을 구분하세요',finalTitle:'해운대구에서는 가입시기와 산모특약부터 정리해 상담하세요',finalBody:'현재 임신 주수와 산모 관련 특약, 출생 후 자녀보장을 먼저 정리한 뒤 공공지원은 별도 조건으로 확인하세요.',ctaLabel:'해운대구 가입조건 상담 신청 →'},
 '부산진구태아보험':{checkHeading:'임신 시기별 가입조건과 출생 직후 보장 연결',supportHeading:'부산진구 출산지원은 신청창구와 최신 공고를 먼저 확인',localHeading:'출생 후 계약전환까지 미리 준비하세요',finalTitle:'부산진구에서는 출생 전 가입과 출생 후 계약전환을 이어서 보세요',finalBody:'임신 주수, 신생아 입원·수술 보장, 출생 후 자녀정보 등록 절차를 순서대로 확인한 뒤 상담을 진행하세요.',ctaLabel:'부산진구 가입시기 상담 신청 →'},
 '동래구태아보험':{checkHeading:'산모특약과 태아보장, 장기 보장기간을 분리 비교',supportHeading:'동래구 출산장려금과 부산시 지원을 지급주체별로 확인',localHeading:'산모 보장과 아이 보장의 경계를 명확히 하세요',finalTitle:'동래구에서는 산모특약과 자녀 장기보장을 따로 비교하세요',finalBody:'산모특약의 보장범위, 태아 관련 특약의 가입 가능시기, 출생 후 어린이보험 유지조건을 각각 확인하세요.',ctaLabel:'동래구 보장구조 상담 신청 →'},
 '수영구태아보험':{checkHeading:'정액형·실손형 보장과 공공 바우처를 혼동하지 않기',supportHeading:'수영구 바우처·현물성 지원은 사용조건까지 확인',localHeading:'지원금의 형태와 보험금의 지급사유를 나눠 보세요',finalTitle:'수영구에서는 바우처와 보험금의 차이를 먼저 정리하세요',finalBody:'공공지원의 사용처·기한과 민간보험의 지급사유를 구분한 뒤 실제 필요한 보장만 남겨 비교하세요.',ctaLabel:'수영구 보험비교 상담 신청 →'},
 '남구태아보험':{checkHeading:'산후조리비와 장기 보험료를 별도 예산으로 설계',supportHeading:'남구 지역화폐 지원과 산후조리비는 지급방식을 확인',localHeading:'단기 출산비용과 장기 보장비용을 분리하세요',finalTitle:'남구에서는 산후지원과 장기 보험료를 따로 계산해 상담하세요',finalBody:'지역화폐·산후조리 지원은 생활비 보조로, 보험은 장기 위험보장으로 구분해 보장기간과 갱신구조를 확인하세요.',ctaLabel:'남구 보험료·보장 상담 신청 →'},
 '연제구태아보험':{checkHeading:'고지사항·검사이력·심사조건을 상담 전에 정리',supportHeading:'연제구 복지·보건사업은 최신 가이드와 공고를 함께 확인',localHeading:'정확한 고지가 가입 가능조건을 좌우할 수 있습니다',finalTitle:'연제구에서는 고지사항을 정리한 뒤 실제 심사조건을 확인하세요',finalBody:'임신 주수, 검사결과, 치료이력과 원하는 보장범위를 정리해 상담안과 실제 청약조건이 같은지 확인하세요.',ctaLabel:'연제구 심사조건 상담 신청 →'},
 '금정구태아보험':{checkHeading:'산모특약과 출생 후 보장유지 조건을 함께 점검',supportHeading:'금정구 출산축하금과 부산시 지원을 각각 확인',localHeading:'공공지원과 민간보험의 역할을 섞지 마세요',finalTitle:'금정구에서는 출산지원과 자녀 보장유지를 분리해 상담하세요',finalBody:'출산축하금은 공공지원으로, 산모특약과 출생 후 어린이보험은 계약조건으로 나눠 확인하세요.',ctaLabel:'금정구 산모·자녀보장 상담 신청 →'},
 '북구태아보험':{checkHeading:'장기 보험료와 분할지원의 현금흐름을 따로 관리',supportHeading:'북구 분할 출산장려금은 거주조건과 전출 여부까지 확인',localHeading:'장기 지원과 장기 보험은 유지조건이 서로 다릅니다',finalTitle:'북구에서는 장기 보험료와 분할지원 조건을 함께 점검하세요',finalBody:'보험 납입기간과 공공지원 지급회차를 각각 표로 정리하고, 전출 시 지원 중단 여부와 보험계약 유지조건을 따로 확인하세요.',ctaLabel:'북구 장기보험 상담 신청 →'},
 '사하구태아보험':{checkHeading:'필수보장·선택특약·월 보험료 예산의 균형 확인',supportHeading:'사하구 출산지원과 산후조리비는 신청기한을 먼저 확인',localHeading:'출산 직후 현금지원과 장기 보험료를 같은 예산으로 보지 마세요',finalTitle:'사하구에서는 필수보장 중심으로 월 보험료를 맞춰 상담하세요',finalBody:'필수보장과 선택특약을 구분하고 총 납입기간과 납입면제 조건까지 확인해 장기 유지 가능한 수준으로 비교하세요.',ctaLabel:'사하구 보험료예산 상담 신청 →'},
 '사상구태아보험':{checkHeading:'설계안별 가입금액·갱신·면책조건을 동일 기준으로 비교',supportHeading:'사상구 생활지원은 자부담과 사용기간까지 확인',localHeading:'비교표의 조건을 맞춰야 보험료 차이를 제대로 볼 수 있습니다',finalTitle:'사상구에서는 같은 조건의 설계안끼리 비교한 뒤 상담하세요',finalBody:'가입금액, 보장기간, 갱신주기, 면책·감액조건을 동일하게 맞춘 뒤 보험료 차이를 확인하세요.',ctaLabel:'사상구 설계안 비교 상담 신청 →'},
 '강서구태아보험':{checkHeading:'주소변경·출생 후 자녀등록·공공지원 거주요건을 구분',supportHeading:'강서구 출산지원은 출생일 기준 주민등록과 신청기한 확인',localHeading:'이사 예정이라면 보험 주소와 공공지원 주소를 따로 관리하세요',finalTitle:'강서구에서는 이사 계획과 출생 후 등록 절차까지 포함해 상담하세요',finalBody:'보험계약 주소변경, 출생 후 자녀등록, 강서구 지원의 주민등록 요건을 서로 다른 절차로 구분해 확인하세요.',ctaLabel:'강서구 주소변경 상담 신청 →'},
 '기장군태아보험':{checkHeading:'자동가입 공공보험과 개인 태아보험의 보장목적 비교',supportHeading:'기장군 안전보험과 출산지원은 적용대상과 기간을 확인',localHeading:'공공보험이 개인보험을 대신한다고 보지 마세요',finalTitle:'기장군에서는 공공보험과 민간보험의 보장 공백부터 확인하세요',finalBody:'군민안전보험·시민안전보험과 개인 태아·어린이보험의 보장사유, 가입금액, 면책조건을 나눠 비교하세요.',ctaLabel:'기장군 중복보장 상담 신청 →'},
 '서구태아보험':{checkHeading:'신생아 입원·수술·선천성 관련 약관범위를 먼저 확인',supportHeading:'서구 출산지원은 바우처와 현금지원의 지급형태를 구분',localHeading:'출생 직후 보장은 약관의 세부 지급사유가 핵심입니다',finalTitle:'서구에서는 신생아 보장과 청구서류를 중심으로 상담하세요',finalBody:'입원·수술·선천성 관련 보장의 약관 범위와 보험금 청구 시 필요한 서류를 미리 확인하세요.',ctaLabel:'서구 신생아보장 상담 신청 →'},
 '동구태아보험':{checkHeading:'특약 개수보다 질병·상해·수술의 보장공백을 먼저 점검',supportHeading:'동구 출생순위별 지원과 분할지급 조건을 확인',localHeading:'많은 특약보다 빠진 보장이 없는지가 중요합니다',finalTitle:'동구에서는 보장공백과 납입면제 조건을 중심으로 상담하세요',finalBody:'유사 특약의 중복을 줄이고 질병·상해·수술 영역의 공백과 납입면제 조건을 확인하세요.',ctaLabel:'동구 보장공백 상담 신청 →'},
 '중구태아보험':{checkHeading:'장기 보험계약과 7년 분할지원의 유지조건 비교',supportHeading:'중구 장기 출산축하금은 지급기준일과 계속 거주조건 확인',localHeading:'공공지원 지급기간과 보험 납입기간은 별개의 일정입니다',finalTitle:'중구에서는 장기보장과 계속거주 조건을 분리해 상담하세요',finalBody:'보험료 납입기간과 공공지원 지급기간을 각각 관리하고, 거주요건 변화가 공공지원에 미치는 영향도 확인하세요.',ctaLabel:'중구 장기보장 상담 신청 →'},
 '영도구태아보험':{checkHeading:'현물지원의 실제 가치와 장기 보험료·보장기간 비교',supportHeading:'영도구 출산축하용품은 주민등록과 신청절차를 확인',localHeading:'현물지원은 생활지원, 보험은 장기 위험보장으로 구분하세요',finalTitle:'영도구에서는 장기 유지 가능한 보험료를 기준으로 상담하세요',finalBody:'출산축하용품 같은 현물지원과 보험료 예산을 나눠 보고, 보장기간과 납입기간까지 장기 유지 가능한지 확인하세요.',ctaLabel:'영도구 장기보험료 상담 신청 →'}
};

export function getBusanPageFlow(district:BusanDistrict):BusanPageFlow{
 return flows[district.slug]||{
  checkHeading:`${district.name} 태아보험 핵심조건을 같은 기준으로 비교`,
  supportHeading:`${district.name} 출산·육아 지원은 보험과 별도로 확인`,
  localHeading:`보험조건과 지역지원 조건을 분리해 보세요`,
  finalTitle:`${district.name}에서 확인한 조건으로 상담하세요`,
  finalBody:'지역지원은 최신 공식자료에서 다시 확인하고 보험은 실제 가입 가능조건·보장범위·보험료를 비교해 결정하세요.',
  ctaLabel:'확인한 내용으로 상담 신청 →'
 };
}
