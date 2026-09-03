import type {Region,City} from './insurance-data';

export type FaqItem={question:string;answer:string};

export function getInsuranceFaq(region?:Region,city?:City):FaqItem[]{
  const label=city?.name||region?.name;
  const prefix=label?`${label}에서 `:'';
  return [
    {question:`${label?`${label} `:''}태아보험은 언제 알아보는 것이 좋나요?`,answer:`가입 가능 시기와 인수 기준은 상품마다 다를 수 있습니다. ${prefix}태아보험을 알아본다면 임신 주수와 현재 건강상태를 기준으로 실제 가입 가능 여부를 확인하고, 보장 시작 시점과 제한사항을 함께 살펴보는 것이 좋습니다.`},
    {question:'태아보험과 어린이보험은 어떻게 연결되나요?',answer:'태아 시기에 가입한 계약이 출생 후 어린이보험 형태로 이어지는 구조가 많습니다. 다만 상품마다 보장기간과 특약 구조가 다르므로 출생 전후 보장 내용과 계약 조건을 약관에서 확인해야 합니다.'},
    {question:`${label?`${label} `:''}산모보험이나 산모특약도 함께 확인해야 하나요?`,answer:'산모 관련 보장이 필요한지는 개인 상황에 따라 다릅니다. 임신·출산 관련 보장 범위, 면책사항, 가입 가능 시점과 보험료를 별도로 확인한 뒤 필요한 특약만 선택하는 방식이 좋습니다.'},
    {question:`${label?`${label} `:''}출산지원금과 태아보험은 같은 제도인가요?`,answer:'아닙니다. 태아보험은 민간 보험상품이고 출산지원금·부모급여·첫만남이용권 등은 정부나 지자체가 운영하는 공공지원 제도입니다. 올바른 보험에서는 두 정보를 구분해 안내합니다.'},
    {question:'상담을 신청하면 바로 보험에 가입되는 건가요?',answer:'아닙니다. 상담 신청은 정보 확인과 제휴 상담 연결 단계입니다. 실제 가입 여부, 보험료, 보장 내용은 보험회사 심사와 상품설명서·약관 확인 후 결정됩니다.'}
  ];
}

export function getUniqueGuide(region?:Region,city?:City){
  const label=city?.name||region?.name;
  if(!label) return {
    title:'태아보험을 비교할 때 지역 정보도 함께 보는 이유',
    body:'보험 자체의 보장조건은 지역에 따라 달라지는 것이 아니지만, 임신·출산 과정에서 이용하는 보건소 서비스와 출산지원, 산모·신생아 건강관리 사업은 거주지역에 따라 달라질 수 있습니다. 보험 상담과 공공지원 정보를 따로 찾는 번거로움을 줄이기 위해 두 영역을 한 페이지에서 함께 확인할 수 있도록 구성했습니다.'
  };
  const cityText=city?`${city.name} 생활권`:region?.fullName;
  return {
    title:`${label} 태아보험 상담 전에 지역 정보를 같이 확인하세요`,
    body:`${cityText}에서 임신·출산을 준비한다면 보험 보장내용만 보는 것보다 거주지역의 출산지원, 보건소 서비스, 산모·신생아 건강관리 사업을 함께 확인하는 편이 실용적입니다. ${label} 페이지는 보험 가입시기와 특약 체크사항을 기본으로 제공하고, 확인 가능한 지역 지원정보는 공식 출처와 검증일을 표시해 별도로 정리합니다.`
  };
}
