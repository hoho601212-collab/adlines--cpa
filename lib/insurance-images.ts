import type {Region,City} from './insurance-data';

export type InsuranceImageItem={src:string;keyword:string;alt:string;tags:string[]};

const hubKeywords=['태아보험 가입시기','태아보험 보장내용','태아보험 가입설계','태아보험 상담','산모보험 알아보기'];
const hubTags=[
 ['가입시기','적정시기','임신주수'],
 ['보장내용','특약안내','보장분석'],
 ['가입설계','맞춤설계','플랜비교'],
 ['보험상담','상담준비','체크리스트'],
 ['산모보험','임신중보장','출산준비']
];

const keywordSets=[
  ['태아보험 가입시기','출산 전 보험 준비','태아보험 보장 확인','산모특약 확인','태아보험 상담 준비'],
  ['태아보험 비교','신생아 보장 확인','임신 중 보험 준비','출산지원 정보','태아보험 가입 체크'],
  ['태아보험 보장내용','산모보험 정보','태아보험 특약 확인','출산가정 지원','보험 상담 전 체크'],
  ['태아보험 가입조건','임신 출산 보험정보','자녀보험 준비','지역 출산혜택','태아보험 상담'],
  ['태아보험 가입설계','태아보험 보장기간','산모특약 비교','육아지원 정보','출산 전 보험상담']
];

const sceneSets=[
 ['임신수첩과 달력으로 가입시기를 확인하는 장면','보장항목 체크리스트를 살펴보는 예비부모','상담 전 필요한 정보를 정리하는 장면','지역 출산지원 안내를 확인하는 임산부','출산 준비용품과 보험서류를 함께 준비하는 장면'],
 ['산부인과 일정표와 임신 주수 메모','신생아 보장을 비교하는 가족','보험 약관의 핵심조건을 확인하는 장면','거주지역 육아지원 정보를 찾는 장면','출산 전 상담 질문을 정리하는 장면'],
 ['임신 초기 건강수첩과 보장설계 메모','산모특약과 태아특약을 비교하는 장면','출산예정일 중심으로 준비일정을 정리하는 모습','지자체 지원 신청일을 표시한 달력','가족이 함께 보험상담 내용을 검토하는 장면']
];

const tagSets=[
 ['가입시기','임신주수','가입조건'],
 ['신생아보장','보장범위','특약확인'],
 ['맞춤설계','보장설계','보험비교'],
 ['출산지원','지역혜택','육아지원'],
 ['상담준비','계약조건','가입체크']
];

function hash(text:string){let n=0;for(let i=0;i<text.length;i++)n=(n*31+text.charCodeAt(i))>>>0;return n;}

export function getInsuranceImages(region?:Region,city?:City):InsuranceImageItem[]{
  const label=city?.name||region?.name;
  const folder=!region?'main':city?`${region.slug}/${city.slug}`:region.slug;
  const seed=hash(`${region?.slug||'main'}/${city?.slug||'hub'}`);
  const keywords=!label?hubKeywords:keywordSets[seed%keywordSets.length].map(k=>`${label} ${k}`);
  const scenes=sceneSets[seed%sceneSets.length];
  return keywords.map((keyword,index)=>({
    src:`/images/insurance/${folder}/${String(index+1).padStart(2,'0')}.webp`,
    keyword,
    alt:label?`${label} ${scenes[index]} - ${keyword}`:`${scenes[index]} - ${keyword}`,
    tags:!label?hubTags[index]:tagSets[(index+seed)%tagSets.length].map(t=>`${label} ${t}`)
  }));
}
