import type {Region,City} from './insurance-data';
import type {RegionalSupportItem} from './regional-support';
import {getPolicyEvidence} from './policy-freshness';

export type SupportContext={
 tone:'verified'|'caution'|'unverified';
 badge:string;
 title:string;
 summary:string;
 checklist:string[];
 faq:{question:string;answer:string};
 ctaNote:string;
};

export function getSupportContext(region:Region|undefined,city:City|undefined,items:RegionalSupportItem[],hasVerifiedCitySupport:boolean):SupportContext|null{
 if(!region)return null;
 const label=city?.name||region.name;
 if(city&&!hasVerifiedCitySupport){
  return {
   tone:'unverified',
   badge:'🔎 도시 자체사업 확인 필요',
   title:`${city.name} 지원은 광역지원과 나눠 확인하세요`,
   summary:`현재 페이지에서는 ${region.name} 공통지원과 ${city.name} 자체사업을 구분합니다. ${city.name}의 2026년 자체 지원금액을 최신 공식자료로 확정하지 못한 항목은 금액을 임의로 표시하지 않습니다.`,
   checklist:[`${city.name} 시청·보건소의 2026년 시행공고 확인`,`${region.name} 공통지원과 ${city.name} 자체사업 구분`,`출생일·신청일 기준 주민등록 주소와 신청기한 확인`],
   faq:{question:`${city.name} 출산지원 금액이 페이지에 바로 나오지 않는 이유는 무엇인가요?`,answer:`${city.name} 자체사업의 2026년 금액·시행 여부를 최신 공식자료로 충분히 확인하지 못한 항목은 과거 금액을 현재 제도처럼 표시하지 않기 때문입니다. ${region.name} 공통지원은 별도로 안내하며, 실제 신청 전 ${city.name} 시청·보건소·정부24 등 최신 공고를 확인하세요.`},
   ctaNote:`${city.name} 자체 지원은 최신 공고를 확인하고, 보험 상담은 지역지원과 별도로 가입시기·보장조건을 기준으로 비교하세요.`
  };
 }
 const caution=items.some(item=>getPolicyEvidence(item).tone==='watch');
 if(caution){
  return {
   tone:'caution',badge:'🟠 근거 연도·시행상태 확인',title:`${label} 지원은 공식자료의 기준연도까지 확인하세요`,
   summary:`공식 출처가 확인된 항목 중 이전 연도 자료 또는 계획·예산 성격의 자료가 포함될 수 있습니다. 카드의 근거 배지와 확인일을 보고 2026년 실제 시행조건을 다시 확인하세요.`,
   checklist:[`지원카드의 근거 배지와 자료연도 확인`,`2026년 시행공고에서 금액·대상·신청기간 재확인`,`계획자료와 실제 신청 가능한 사업을 구분`],
   faq:{question:`${label} 지원카드에 재확인 안내가 있으면 신청할 수 없는 제도인가요?`,answer:`반드시 그렇다는 뜻은 아닙니다. 공식자료가 이전 연도 기준이거나 계획·예산 자료인 경우 현재 시행조건과 달라질 가능성이 있어 별도 표시합니다. 실제 신청 가능 여부는 2026년 시행공고와 담당기관 안내를 최종 기준으로 확인하세요.`},
   ctaNote:`${label} 지원의 근거연도와 시행상태를 확인한 뒤, 태아보험은 공공지원과 별개로 필요한 보장과 가입조건을 비교하세요.`
  };
 }
 return {
  tone:'verified',badge:'✅ 공식자료 확인',title:`${label} 지원정보와 상담 준비를 함께 정리하세요`,
  summary:`현재 노출된 지역 추가지원은 공식기관 자료를 기준으로 정리했습니다. 지원금액만 보지 말고 대상·거주조건·신청기한을 함께 확인하세요.`,
  checklist:[`공식자료 확인일과 지원 대상 확인`,`거주기간·출생순위·신청기한 확인`,`지원 신청 일정과 보험 상담 일정을 별도로 정리`],
  faq:{question:`${label} 지원정보를 확인하면 태아보험 상담 준비에도 도움이 되나요?`,answer:`일정 정리에는 도움이 되지만 두 제도는 별개입니다. 지역지원은 주민등록 주소·출생순위·신청기한을 기준으로 확인하고, 태아보험은 가입시기·보장내용·보험료·심사조건 등을 따로 비교하세요.`},
  ctaNote:`${label} 지원 신청조건을 확인하고, 보험 상담에서는 현재 임신 주수와 필요한 보장·월 보험료 범위를 따로 정리해 전달하세요.`
 };
}
