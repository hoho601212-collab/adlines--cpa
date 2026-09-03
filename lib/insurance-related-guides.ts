import type {Region,City} from './insurance-data';

export type RelatedGuide={href:string;title:string;description:string};

const guides:RelatedGuide[]=[
 {href:'/태아보험가입시기',title:'태아보험 가입시기',description:'임신 주수에 따라 언제부터 준비하면 좋은지 확인합니다.'},
 {href:'/태아보험순위비교',title:'태아보험 비교 기준',description:'순위 숫자보다 먼저 봐야 할 보장·기간·특약 기준을 정리했습니다.'},
 {href:'/현대해상태아보험',title:'현대해상 태아보험 정보',description:'특정 상품을 알아볼 때 확인해야 할 조건과 공식 정보를 살펴봅니다.'},
 {href:'/임신초기증상',title:'임신 초기 증상',description:'임신 초기에 흔히 궁금해하는 변화와 진료가 필요한 신호를 확인합니다.'},
 {href:'/임신5-14주차증상',title:'임신 5~14주차 정보',description:'초기 주수별 변화와 출산 준비 일정을 함께 살펴봅니다.'},
 {href:'/임산부선물',title:'임산부 선물 가이드',description:'임신·출산 준비 시 실용적으로 살펴볼 품목을 정리했습니다.'}
];

function hash(text:string){let n=0;for(let i=0;i<text.length;i++)n=(n*33+text.charCodeAt(i))>>>0;return n;}

export function getRelatedGuides(region?:Region,city?:City){
 const seed=hash(`${region?.slug||'main'}/${city?.slug||'hub'}`);
 return Array.from({length:3},(_,i)=>guides[(seed+i*2)%guides.length]);
}
