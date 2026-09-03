import type {Region,City} from './insurance-data';
import type {FaqItem} from './insurance-content';

function hash(text:string){let n=2166136261;for(let i=0;i<text.length;i++){n^=text.charCodeAt(i);n=Math.imul(n,16777619);}return n>>>0;}

const faqPools=[
  (label:string,region:string):FaqItem=>({question:`${label} 출산지원은 언제 신청 준비를 시작하는 게 좋나요?`,answer:`${label} 자체 지원은 출생신고 직후 신청하는 사업과 임신 중 미리 준비해야 하는 사업이 섞여 있습니다. ${region} 공통사업과 ${label} 자체사업의 신청기간을 따로 적어 두고, 출생 전에는 거주기간과 필요서류를 먼저 확인하는 편이 안전합니다.`}),
  (label:string):FaqItem=>({question:`${label}에서 이사 예정이면 출산지원 자격이 달라질 수 있나요?`,answer:`그럴 수 있습니다. 지자체 사업은 출생일·신청일·지급일을 기준으로 일정 기간 계속 거주를 요구하는 경우가 있습니다. 전입·전출 계획이 있다면 총 지원액보다 각 회차의 거주유지 조건을 먼저 확인하세요.`}),
  (label:string):FaqItem=>({question:`${label} 태아보험 상담 전에 준비하면 좋은 정보는 무엇인가요?`,answer:`현재 임신 주수, 예정일, 산모의 치료·검사 이력, 원하는 보장기간과 월 보험료 범위를 정리해 두면 상담이 수월합니다. 지역 출산지원은 보험 보장과 별도 제도이므로 주민등록 주소지와 출생순위도 함께 확인하세요.`}),
  (label:string):FaqItem=>({question:`${label} 지역 지원금이 많으면 태아보험 보장을 줄여도 되나요?`,answer:`두 제도는 목적이 다릅니다. 지자체 지원은 출산·양육 비용을 보조하는 공공정책이고 태아보험은 약관에 정한 위험을 보장하는 민간계약입니다. 지원금 규모만으로 보험 특약을 늘리거나 줄이기보다 필요한 보장과 제외조건을 따로 판단하세요.`}),
  (label:string):FaqItem=>({question:`${label} 출산지원 정보는 왜 공식 출처 확인이 필요한가요?`,answer:`지급액, 거주기간, 신청기한, 예산 소진 여부가 연도 중에도 바뀔 수 있기 때문입니다. 페이지의 확인일과 출처를 참고하되 실제 신청 전에는 시청·구청·보건소·정부24 등 최신 공고를 다시 확인하세요.`})
];

export function getContextualFaq(region?:Region,city?:City):FaqItem[]{
  if(!region)return [];
  const label=city?.name||region.name;
  const seed=hash(`${region.slug}/${city?.slug||'hub'}`);
  const picks=[seed%faqPools.length,(seed+2)%faqPools.length,(seed+4)%faqPools.length];
  const unique=[...new Set(picks)].slice(0,2);
  return unique.map(i=>faqPools[i](label,region.name));
}

export type RelatedLink={href:string;title:string;description:string};

const keywordLinks:RelatedLink[]=[
  {href:'/태아보험가입시기',title:'태아보험 가입시기',description:'임신 주수별로 먼저 확인할 가입 조건을 살펴보세요.'},
  {href:'/현대해상태아보험',title:'현대해상 태아보험 정보',description:'특정 상품을 독립적인 정보 관점에서 확인합니다.'},
  {href:'/태아보험순위비교',title:'태아보험 비교 기준',description:'순위를 단정하기보다 비교할 항목을 정리합니다.'},
  {href:'/임신5-14주차증상',title:'임신 5~14주차 정보',description:'초기 임신 시기에 참고할 일반적인 정보를 확인합니다.'},
  {href:'/임신초기증상',title:'임신 초기 정보',description:'초기 임신에 흔한 변화와 진료가 필요한 신호를 살펴봅니다.'},
  {href:'/임산부선물',title:'임산부 선물 가이드',description:'임신·출산 준비 과정에서 참고할 실용 정보를 살펴봅니다.'}
];

export function getRelatedLinks(region?:Region,city?:City):RelatedLink[]{
  const seed=hash(`${region?.slug||'national'}/${city?.slug||'hub'}`);
  const picked:RelatedLink[]=[];
  for(let i=0;i<keywordLinks.length&&picked.length<3;i++){
    const item=keywordLinks[(seed+i*2)%keywordLinks.length];
    if(!picked.some(x=>x.href===item.href))picked.push(item);
  }
  if(region&&city){
    picked.unshift({href:`/태아보험/${region.slug}`,title:`${region.name} 태아보험 전체`,description:`${region.name} 공통 출산·육아 지원과 주요 도시 정보를 함께 봅니다.`});
  }else if(region){
    picked.unshift({href:'/태아보험',title:'전국 태아보험 가이드',description:'전국 공통 가입정보와 17개 광역지역 정보를 확인합니다.'});
  }
  return picked.slice(0,4);
}

export function getChecklistDetail(item:string,index:number,label?:string){
  const place=label||'해당 지역';
  const variants=[
    `${place} 공공지원은 주민등록 주소지, 출생순위, 거주기간과 신청기한을 함께 확인해야 실제 대상 여부를 판단할 수 있습니다.`,
    `임신 중 신청하는 제도와 출생 후 신청하는 제도의 시점이 다르므로 ${place} 지원 일정과 보험 준비 일정을 별도로 정리해 두는 것이 좋습니다.`,
    `보험은 상품설명서와 약관을 기준으로 가입 가능시기, 보장기간, 면책·감액 조건과 갱신 여부를 확인하세요.`
  ];
  return `${item}: ${variants[index%variants.length]}`;
}
