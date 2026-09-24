import type {Region,City} from './insurance-data';
import {getInsuranceSeo,getLocalEditorial,type InsuranceSeoCopy} from './insurance-content';

type SeoIntent={titleTail:string;h1Accent:string;ogTail:string};

const REGION_SEO_OVERRIDES:Record<string,{title:string;description:string;h1Accent:string;ogTitle:string}>={
 '서울태아보험':{
  title:'서울 태아보험 | 가입시기·산후조리경비·교통비 확인',
  description:'서울 태아보험 가입시기와 보장·특약을 확인하고, 서울시 산후조리경비·임산부 교통비와 자치구별 출산지원의 신청조건을 함께 정리했습니다.',
  h1Accent:'산후조리경비와 가입조건을 함께 확인하세요',
  ogTitle:'서울 태아보험 가입시기·출산지원 확인 | 올바른 보험'
 },
 '부산태아보험':{
  title:'부산 태아보험 | 구·군별 출산지원·가입조건 비교',
  description:'부산 태아보험 가입 전 보장·특약과 가입조건을 살펴보고, 해운대·부산진·동래 등 16개 구·군별 출산지원과 산모·신생아 지원 확인사항을 안내합니다.',
  h1Accent:'16개 구·군 지원과 가입조건을 확인하세요',
  ogTitle:'부산 태아보험 구·군별 출산지원 가이드 | 올바른 보험'
 },
 '대구태아보험':{
  title:'대구 태아보험 | 다자녀 지원·가입시기·특약 확인',
  description:'대구 태아보험 가입시기와 보장·특약을 확인하고, 출생순위에 따라 달라질 수 있는 다자녀 지원과 구·군별 임신·출산 사업을 함께 살펴보세요.',
  h1Accent:'다자녀 지원과 가입시기를 함께 확인하세요',
  ogTitle:'대구 태아보험 다자녀·출산지원 확인 | 올바른 보험'
 },
 '인천태아보험':{
  title:'인천 태아보험 | 천사지원금·임산부 교통비·가입시기',
  description:'인천 태아보험 가입조건과 보장·특약을 확인하고, 천사지원금의 거주요건과 임산부 교통비, 군·구별 출산지원 신청조건을 구분해 정리했습니다.',
  h1Accent:'천사지원금과 가입조건을 구분해 확인하세요',
  ogTitle:'인천 태아보험 천사지원금·교통비 확인 | 올바른 보험'
 },
 '광주태아보험':{
  title:'광주 태아보험 | 임신·출산 지원과 가입조건 확인',
  description:'광주 태아보험 가입시기와 보장·특약을 살펴보고, 광주광역시 임신·출산 지원과 직장맘·소상공인 대상 사업, 자치구 추가지원을 함께 확인하세요.',
  h1Accent:'임신·출산 지원과 가입조건을 확인하세요',
  ogTitle:'광주 태아보험 임신·출산 지원 가이드 | 올바른 보험'
 },
 '대전태아보험':{
  title:'대전 태아보험 | 양육 기본수당·가입시기·보장 확인',
  description:'대전 태아보험 가입시기와 보장·특약을 확인하고, 대전형 양육 기본수당의 연령·거주요건과 자치구별 출산·육아 지원을 함께 정리했습니다.',
  h1Accent:'양육 기본수당과 가입조건을 확인하세요',
  ogTitle:'대전 태아보험 양육지원·가입조건 확인 | 올바른 보험'
 },
 '울산태아보험':{
  title:'울산 태아보험 | 구·군별 출산지원·가입조건 확인',
  description:'울산 태아보험 가입시기와 보장·특약을 살펴보고, 중구·남구·동구·북구·울주군의 출생순위별 출산지원과 산후지원 차이를 함께 확인하세요.',
  h1Accent:'거주 구·군 지원과 가입조건을 확인하세요',
  ogTitle:'울산 태아보험 구·군별 출산지원 가이드 | 올바른 보험'
 },
 '세종태아보험':{
  title:'세종 태아보험 | 출산축하금·가입시기·보장 확인',
  description:'세종 태아보험 가입시기와 보장·특약을 확인하고, 세종시 출산축하금의 지급방식과 지역화폐 여부, 산모·신생아 건강관리 지원을 함께 살펴보세요.',
  h1Accent:'출산축하금과 가입조건을 함께 확인하세요',
  ogTitle:'세종 태아보험 출산축하금·가입조건 확인 | 올바른 보험'
 }
};

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
 const regionOverride=!city?REGION_SEO_OVERRIDES[region.slug]:undefined;
 if(regionOverride){
  return {
   ...base,
   title:regionOverride.title,
   description:regionOverride.description,
   ogTitle:regionOverride.ogTitle,
   ogDescription:regionOverride.description,
   h1:`${label} 태아보험`,
   h1Accent:regionOverride.h1Accent
  };
 }
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
