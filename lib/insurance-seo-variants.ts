import type {Region,City} from './insurance-data';
import {getInsuranceSeo,getLocalEditorial,type InsuranceSeoCopy} from './insurance-content';

type SeoIntent={titleTail:string;h1Accent:string;ogTail:string};

function getSeoIntent(text:string):SeoIntent{
 if(/주거|주택|대출/.test(text))return {titleTail:'주거지원·가입시기·보장 비교',h1Accent:'주거지원과 가입조건을 함께 확인하세요',ogTail:'주거·출산지원 체크'};
 if(/교통/.test(text))return {titleTail:'교통지원·가입시기·보장 비교',h1Accent:'교통지원과 가입시기를 함께 확인하세요',ogTail:'교통·출산지원 체크'};
 if(/건강관리|산후조리|산후|보건소/.test(text))return {titleTail:'산후지원·가입시기·보장 비교',h1Accent:'산후지원과 보장조건을 함께 확인하세요',ogTail:'산후·출산지원 체크'};
 if(/바우처|지역화폐|여민전|꾸러미/.test(text))return {titleTail:'바우처·가입시기·보장 비교',h1Accent:'바우처 지원과 보장조건을 구분해 확인하세요',ogTail:'바우처·출산지원 체크'};
 if(/분할|회차|월별|장기|계속 거주/.test(text))return {titleTail:'분할지원·가입시기·보장 비교',h1Accent:'지급회차와 가입조건을 함께 확인하세요',ogTail:'분할·출산지원 체크'};
 if(/신청기한|신청기간|거주기간|거주요건|선행 거주/.test(text))return {titleTail:'거주요건·신청기한·보장 비교',h1Accent:'거주요건과 가입시기를 먼저 확인하세요',ogTail:'거주요건·출산지원 체크'};
 if(/출생순위|첫째|둘째|셋째|다자녀/.test(text))return {titleTail:'출생순위별 지원·가입시기·보장 비교',h1Accent:'출생순위별 지원과 보장을 함께 확인하세요',ogTail:'출생순위·지원 체크'};
 if(/재확인|시행기준|예산|최신 공고/.test(text))return {titleTail:'2026 지원확인·가입시기·보장 비교',h1Accent:'2026 시행정보와 가입조건을 확인하세요',ogTail:'2026 지원정보 체크'};
 return {titleTail:'2026 출산지원·가입시기·보장 비교',h1Accent:'지역 지원과 가입조건을 함께 확인하세요',ogTail:'2026 출산지원 체크'};
}

export function finalizeInsuranceSeoDescription(description:string){
 return description.replace(/태아보험 상담 전 (.+?)를 확인하세요\./,'태아보험 상담 전 확인할 항목: $1.');
}

export function getLocalizedInsuranceSeo(region?:Region,city?:City):InsuranceSeoCopy{
 const base=getInsuranceSeo(region,city);
 const description=finalizeInsuranceSeoDescription(base.description);
 if(!region)return {...base,description};
 const label=city?.name||region.name;
 const local=getLocalEditorial(region,city);
 const intent=getSeoIntent(local.checkpoints.join(' '));
 return {
  ...base,
  description,
  title:`${label} 태아보험 상담 | ${intent.titleTail}`,
  ogTitle:`${label} 태아보험 ${intent.ogTail} | 올바른 보험`,
  h1:`${label} 태아보험 상담`,
  h1Accent:intent.h1Accent
 };
}

export function getRotatingNearbyCities(region?:Region,city?:City,limit=6):City[]{
 if(!region||!city||region.cities.length<2)return [];
 const index=region.cities.findIndex(item=>item.slug===city.slug);
 if(index<0)return region.cities.filter(item=>item.slug!==city.slug).slice(0,limit);
 const result:City[]=[];
 for(let step=1;step<region.cities.length&&result.length<limit;step++){
  const candidate=region.cities[(index+step)%region.cities.length];
  if(candidate.slug!==city.slug)result.push(candidate);
 }
 return result;
}
