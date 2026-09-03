import type {Region,City} from './insurance-data';

export type InsuranceImageItem={src:string;keyword:string;alt:string};

const hubKeywords=['태아보험 가입시기','태아보험 보장내용','태아보험 가입설계','태아보험 상담','산모보험 알아보기'];

const keywordSets=[
  ['태아보험 가입시기','출산 전 보험 준비','태아보험 보장 확인','산모특약 확인','태아보험 상담 준비'],
  ['태아보험 비교','신생아 보장 확인','임신 중 보험 준비','출산지원 정보','태아보험 가입 체크'],
  ['태아보험 보장내용','산모보험 정보','태아보험 특약 확인','출산가정 지원','보험 상담 전 체크'],
  ['태아보험 가입조건','임신 출산 보험정보','자녀보험 준비','지역 출산혜택','태아보험 상담'],
  ['태아보험 가입설계','태아보험 보장기간','산모특약 비교','육아지원 정보','출산 전 보험상담']
];

function hash(text:string){let n=0;for(let i=0;i<text.length;i++)n=(n*31+text.charCodeAt(i))>>>0;return n;}

export function getInsuranceImages(region?:Region,city?:City):InsuranceImageItem[]{
  const label=city?.name||region?.name;
  const folder=!region?'main':city?`${region.slug}/${city.slug}`:region.slug;
  const base=!label?hubKeywords:keywordSets[hash(label)%keywordSets.length].map((k,i)=>i===0?`${label} ${k}`:i===3?`${label} ${k}`:`${label} ${k}`);
  return base.map((keyword,index)=>({
    src:`/images/insurance/${folder}/${String(index+1).padStart(2,'0')}.webp`,
    keyword,
    alt:`${keyword} - 올바른 보험 정보 이미지`
  }));
}
