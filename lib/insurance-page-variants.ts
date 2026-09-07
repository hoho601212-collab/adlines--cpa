import type {Region,City} from './insurance-data';
import type {FaqItem} from './insurance-content';

function hash(text:string){let n=2166136261;for(let i=0;i<text.length;i++){n^=text.charCodeAt(i);n=Math.imul(n,16777619);}return n>>>0;}

const faqPools=[
 (label:string,region:string):FaqItem=>({question:`${label} 출산지원은 언제 신청 준비를 시작하는 게 좋나요?`,answer:`${label} 자체 지원은 출생신고 직후 신청하는 사업과 임신 중 미리 준비해야 하는 사업이 섞여 있습니다. ${region} 공통사업과 ${label} 자체사업의 신청기간을 따로 적어 두고, 출생 전에는 거주기간과 필요서류를 먼저 확인하는 편이 안전합니다.`}),
 (label:string):FaqItem=>({question:`${label}에서 이사 예정이면 출산지원 자격이 달라질 수 있나요?`,answer:`그럴 수 있습니다. 지자체 사업은 출생일·신청일·지급일 기준의 계속 거주를 요구하기도 합니다. 전입·전출 계획이 있다면 총액보다 각 회차의 주소 유지 조건을 먼저 확인하세요.`}),
 (label:string):FaqItem=>({question:`${label} 태아보험 상담 전에 준비하면 좋은 정보는 무엇인가요?`,answer:`현재 임신 주수, 예정일, 산모의 치료·검사 이력, 원하는 보장기간과 월 보험료 범위를 정리하면 상담이 수월합니다. 지역 출산지원은 보험과 별도 제도이므로 주민등록 주소지와 출생순위도 함께 확인하세요.`}),
 (label:string):FaqItem=>({question:`${label} 지역 지원이 많으면 태아보험 보장을 줄여도 되나요?`,answer:`두 제도는 목적이 다릅니다. 지자체 지원은 출산·양육 비용을 보조하는 공공정책이고 태아보험은 약관에 정한 위험을 보장하는 민간계약입니다. 지역지원 규모만으로 보험 특약을 늘리거나 줄이지 말고 필요한 보장과 제외조건을 따로 판단하세요.`}),
 (label:string):FaqItem=>({question:`${label} 출산지원 정보는 왜 공식 출처 확인이 필요한가요?`,answer:`지급액, 거주기간, 신청기한, 예산과 시행상태가 연도 중에도 달라질 수 있기 때문입니다. 페이지의 확인일과 출처를 참고하되 실제 신청 전에는 시청·구청·보건소·정부24 등 최신 공고를 다시 확인하세요.`}),
 (label:string):FaqItem=>({question:`${label} 출생신고와 지원 신청을 한 번에 할 수 있나요?`,answer:`일부 출산서비스는 행복출산 원스톱서비스로 함께 신청할 수 있지만 모든 지자체 사업이 자동 포함되는 것은 아닙니다. 출생신고 때 신청 가능한 항목과 별도 접수가 필요한 ${label} 사업을 나눠 확인하세요.`}),
 (label:string):FaqItem=>({question:`${label} 태아보험은 지역에 따라 보험료가 달라지나요?`,answer:`지역 지원정책과 보험계약은 별개입니다. 보험료와 가입 가능 여부는 상품, 보장내용, 가입시기, 피보험자 조건과 보험회사 심사기준 등에 따라 달라질 수 있으므로 지역 지원금과 보험료를 직접 연결하지 않는 것이 좋습니다.`}),
 (label:string):FaqItem=>({question:`${label} 지원사업은 첫째와 둘째 이상 조건이 같은가요?`,answer:`사업마다 다릅니다. 출생순위에 따라 금액·지급기간이 달라지기도 하고 모든 출생아에게 같은 기준을 적용하기도 합니다. ${label} 공식 공고에서 출생순위와 다태아 기준을 함께 확인하세요.`}),
 (label:string):FaqItem=>({question:`${label} 지원은 현금으로만 지급되나요?`,answer:`그렇지 않습니다. 현금, 지역화폐, 바우처, 서비스 이용권, 물품지원처럼 지급방식이 다양합니다. 총액만 보지 말고 사용처·유효기간·본인부담·분할지급 여부를 함께 확인해야 실제 활용 가능성을 판단할 수 있습니다.`}),
 (label:string):FaqItem=>({question:`${label} 출산지원과 첫만남이용권은 같은 제도인가요?`,answer:`아닙니다. 첫만남이용권은 전국 공통제도이고 ${label} 출산축하금·장려금 등은 지자체 자체사업일 수 있습니다. 지급주체·신청창구·자격요건을 따로 확인하세요.`}),
 (label:string):FaqItem=>({question:`${label} 공식 지원금액이 오래된 자료와 다르면 무엇을 기준으로 봐야 하나요?`,answer:`가장 최근의 지자체 시행공고·조례·정부 포털 안내를 우선하세요. 오래된 블로그나 과거 보도자료의 금액이 현재 기준과 다를 수 있으므로 게시일·수정일·사업연도를 함께 확인하는 것이 좋습니다.`})
];

type HeadingMode='housing'|'transport'|'health'|'voucher'|'installment'|'evidence'|'cash';
const cityModes:Partial<Record<HeadingMode,string[]>>={
 housing:['창원태아보험','청주태아보험','제천태아보험'],
 transport:['충주태아보험'],
 health:['원주태아보험','춘천태아보험','강릉태아보험','양산태아보험'],
 voucher:['통영태아보험','나주태아보험','공주태아보험'],
 installment:['파주태아보험','안양태아보험','시흥태아보험','당진태아보험','서산태아보험','여수태아보험','광양태아보험','경주태아보험','안동태아보험','구미태아보험','진주태아보험','사천태아보험','서귀포태아보험'],
 evidence:['김해태아보험','동해태아보험','경산태아보험','익산태아보험','정읍태아보험','포항태아보험','김천태아보험']
};
function headingMode(region?:Region,city?:City):HeadingMode{
 if(city){for(const [mode,slugs] of Object.entries(cityModes) as [HeadingMode,string[]][])if(slugs.includes(city.slug))return mode;}
 if(region?.slug==='인천태아보험'||region?.slug==='대전태아보험'||region?.slug==='제주태아보험')return 'installment';
 if(region?.slug==='서울태아보험')return 'transport';
 if(region?.slug==='세종태아보험'||region?.slug==='충남태아보험')return 'voucher';
 return 'cash';
}

function modeFaq(mode:HeadingMode,label:string):FaqItem|null{
 if(mode==='housing')return {question:`${label} 주거지원은 출생만 하면 자동으로 받을 수 있나요?`,answer:`대부분 그렇지 않습니다. 소득·주택가격·면적·대출 실행일·거주기간 등 별도 요건이 붙을 수 있으므로 출산지원금과 같은 방식으로 보지 말고 해당 주거사업 공고를 따로 확인하세요.`};
 if(mode==='transport')return {question:`${label} 임산부 교통지원은 언제부터 사용할 수 있나요?`,answer:`사업마다 임신주수, 신청일 기준 거주기간, 사용 가능한 교통수단과 사용기한이 다릅니다. 출산지원금 총액과 합산하지 말고 신청 가능 시점과 사용기한을 따로 확인하세요.`};
 if(mode==='health')return {question:`${label} 건강관리 지원은 현금으로 받는 제도인가요?`,answer:`서비스 이용비나 본인부담금 지원 형태가 많아 현금성 출산장려금과 다릅니다. 지정기관 여부, 서비스 이용기간, 본인부담금과 신청기한을 확인하세요.`};
 if(mode==='voucher')return {question:`${label} 바우처·지역화폐 지원은 금액만 확인하면 되나요?`,answer:`사용처·유효기간·본인부담 여부·지급수단까지 확인해야 합니다. 표시 금액이 같아도 현금과 실제 활용범위가 다를 수 있으므로 현금성 장려금과 구분해서 보세요.`};
 if(mode==='installment')return {question:`${label} 분할지급형 지원은 최초 신청 후 자동으로 계속 받나요?`,answer:`사업마다 다릅니다. 후속 지급시점마다 계속 거주나 연령·출생순위 조건을 다시 확인하는 경우가 있으므로 첫 회차 금액보다 전체 지급일정과 유지조건을 함께 확인하세요.`};
 if(mode==='evidence')return {question:`${label} 페이지에 재확인 안내가 있는 금액은 그대로 신청 기준으로 보면 되나요?`,answer:`아닙니다. 이전 연도 공식자료나 계획·예산 자료를 근거로 한 항목은 2026년 실제 시행조건과 달라질 수 있습니다. 최신 시행공고에서 금액·대상·신청기간을 다시 확인하세요.`};
 return null;
}

export function getContextualFaq(region?:Region,city?:City):FaqItem[]{
 if(!region)return [];
 const label=city?.name||region.name;const wanted=city?3:2;const result:FaqItem[]=[];
 const specific=modeFaq(headingMode(region,city),label);if(specific)result.push(specific);
 const seed=hash(`${region.slug}/${city?.slug||'hub'}`);const used=new Set<number>();
 for(let step=0;step<faqPools.length&&result.length<wanted;step++){
  const idx=(seed+step*5)%faqPools.length;if(used.has(idx))continue;used.add(idx);result.push(faqPools[idx](label,region.name));
 }
 return result;
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
 const seed=hash(`${region?.slug||'national'}/${city?.slug||'hub'}`);const picked:RelatedLink[]=[];
 for(let i=0;i<keywordLinks.length&&picked.length<3;i++){const item=keywordLinks[(seed+i*2)%keywordLinks.length];if(!picked.some(x=>x.href===item.href))picked.push(item);}
 if(region&&city)picked.unshift({href:`/태아보험/${region.slug}`,title:`${region.name} 태아보험 전체`,description:`${region.name} 공통 출산·육아 지원과 주요 도시 정보를 함께 봅니다.`});
 else if(region)picked.unshift({href:'/태아보험',title:'전국 태아보험 가이드',description:'전국 공통 가입정보와 17개 광역지역 정보를 확인합니다.'});
 return picked.slice(0,4);
}

const headingSets=[
 ['🛡️ 가입 전 먼저 볼 세 가지','🎁 출산·육아 제도와 보험 준비를 함께 확인하세요','📍 이 지역에서 놓치기 쉬운 확인사항'],
 ['📝 상담 전에 정리할 핵심 항목','🗓️ 공공지원은 조건과 신청시점을 같이 봐야 합니다','🏠 거주지 기준으로 다시 확인할 내용'],
 ['🤰 임신 중 미리 확인할 준비사항','🏛️ 2026 지원제도는 전국 공통과 지역사업을 나눠 봅니다','🍼 출산 전후로 챙길 지역 정보'],
 ['⚖️ 보험과 출산지원을 따로 비교하세요','⏰ 신청기한까지 확인해야 실제 혜택을 판단할 수 있습니다','✅ 우리 지역 출산·육아 체크포인트'],
 ['🔎 상담 전 우선순위를 정리하세요','💳 지원금액보다 대상·지급방식을 함께 확인하세요','📌 주소지에 따라 달라지는 핵심 정보'],
 ['🧭 임신·출산 준비 순서를 잡아보세요','👨‍👩‍👧 전국 공통제도와 지역 추가지원을 함께 확인하세요','🗂️ 신청 전에 정리해 둘 지역 체크리스트']
] as const;
const modeHeadings:Record<HeadingMode,{check:string;support:string;local:string}>={
 housing:{check:'🏠 주거지원과 보험 준비를 나눠 확인하세요',support:'🏡 주택·대출 요건은 출산지원과 별도입니다',local:'📋 소득·주택·대출 조건부터 확인할 내용'},
 transport:{check:'🚕 임신 중 교통지원과 가입시기를 같이 정리하세요',support:'🗓️ 교통비는 신청시점과 사용기한이 핵심입니다',local:'📍 거주기간·사용지역을 확인할 내용'},
 health:{check:'🩺 건강관리 서비스와 보험 보장을 구분하세요',support:'🏥 의료·산후지원은 이용조건까지 확인해야 합니다',local:'🤰 임신·산후 서비스 이용 전 체크포인트'},
 voucher:{check:'🎫 바우처·지역화폐와 현금지원을 구분하세요',support:'💳 금액보다 지급수단·사용처를 함께 확인하세요',local:'🧾 사용기한·자부담까지 확인할 내용'},
 installment:{check:'🗓️ 분할지급 일정과 계속 거주조건을 확인하세요',support:'⏳ 첫 지급액보다 전체 회차를 함께 봐야 합니다',local:'🏠 후속 회차까지 놓치지 않을 체크포인트'},
 evidence:{check:'🔎 2026 시행 여부와 근거연도를 먼저 확인하세요',support:'🏛️ 이전 자료와 최신 시행공고를 구분해 봅니다',local:'📌 확정된 정보와 재확인 항목을 나눠 보세요'},
 cash:{check:'🎁 출생순위·거주기간·신청기한을 확인하세요',support:'💰 현금성 지원은 총액보다 지급조건이 중요합니다',local:'✅ 실제 수령 전에 확인할 지역 조건'}
};
export function getSectionHeadings(region?:Region,city?:City){
 const label=city?.name||region?.name||'태아보험';
 if(region){const set=modeHeadings[headingMode(region,city)];return {checkTitle:`${label} ${set.check}`,supportTitle:`${label}, ${set.support}`,localTitle:`${label} ${set.local}`,faqTitle:`❓ ${label}에서 자주 확인하는 질문`};}
 const set=headingSets[hash('national:hub:headings')%headingSets.length];
 return {checkTitle:`${label} ${set[0]}`,supportTitle:`${label}, ${set[1]}`,localTitle:`${label} ${set[2]}`,faqTitle:`❓ ${label}에서 자주 확인하는 질문`};
}

function checklistMessage(item:string,place:string,index:number){
 if(/첫만남/.test(item))return `🎁 첫만남이용권처럼 전국 공통제도와 ${place} 추가지원은 지급주체와 신청창구가 다를 수 있습니다. 같은 금액으로 합쳐 보지 말고 각각의 대상·사용기한·지급수단을 따로 확인하세요.`;
 if(/교통|택시|교통비/.test(item))return `🚕 교통비 지원은 임신주수, 신청일 기준 거주기간, 사용 가능한 교통수단과 사용지역 제한을 함께 확인하세요. 포인트·바우처의 사용기한도 실제 수령액만큼 중요합니다.`;
 if(/주거|주택|대출|이자|보금자리|이사/.test(item))return `🏠 주거지원은 혼인·출산 시점, 소득·주택요건, 대출 실행일과 거주기간 조건이 함께 붙을 수 있습니다. ${place} 공고의 대상주택과 지원기간을 보험 준비와 별도로 확인하세요.`;
 if(/건강관리|건강|의료|검사|진료|시술|난임|한약|산후|산모|신생아/.test(item))return `🩺 건강·의료 지원은 현금성 출산장려금과 성격이 다릅니다. 대상 임신주수·출산일, 지정기관 여부, 본인부담금, 신청 가능 기간과 서비스 이용기한을 ${place} 공식 안내에서 확인하세요.`;
 if(/바우처|상품권|지역화폐|이용권/.test(item))return `💳 바우처·지역화폐형 지원은 표시 금액뿐 아니라 사용처, 유효기간, 본인부담 여부와 분할지급 방식을 확인해야 실제 활용 가능한 혜택을 판단할 수 있습니다.`;
 if(/영양|꾸러미|분유|용품|물품|농산물/.test(item))return `🍼 물품·영양·육아용품 지원은 현금 지원과 구분해서 보세요. 신청대상, 수령방법, 자부담 여부, 공급기간과 품목 제한을 확인하면 실제 체감 혜택을 더 정확히 판단할 수 있습니다.`;
 if(/거주|주소|전입|주민등록/.test(item))return `📍 ${place} 지원은 출생일·신청일·지급일 중 어느 시점의 주소를 보는지 사업마다 다를 수 있습니다. 선행 거주기간과 후속 회차의 계속 거주조건을 함께 확인하세요.`;
 if(/신청|기한|기간|시기/.test(item))return `⏰ 신청기한을 넘기면 소급이 어려운 사업도 있습니다. 출산 전에는 필요서류를 준비하고 출생신고 직후 ${place} 담당기관의 접수기간을 다시 확인하세요.`;
 if(/가입|보험|보장|특약|갱신/.test(item))return `🛡️ 지역지원과 태아보험은 별개입니다. 임신 주수, 가입 가능시기, 보장기간, 특약의 보장범위와 면책·감액조건을 상품 설명서와 약관 기준으로 확인하세요.`;
 if(/출생|출산|다자녀|출생순위/.test(item))return `👨‍👩‍👧 출생순위와 다자녀 기준은 사업별로 다를 수 있습니다. 첫째·둘째·셋째 이상 금액과 다태아 산정방식, 후속 지급조건을 ${place} 공고에서 확인하세요.`;
 if(/지원|수당|장려|축하|급여/.test(item))return `🎁 현금성 지원은 총액보다 지급 횟수와 계속 거주조건을 먼저 확인하세요. 일시금인지 월·연차 분할인지, 다음 회차 지급 때도 ${place} 거주를 유지해야 하는지까지 살펴보는 것이 좋습니다.`;
 const fallback=[`📌 ${place} 공식자료의 대상·신청기한·지급방식을 함께 확인하세요.`,`🔎 보험 준비와 지역지원 신청조건은 서로 다른 기준으로 확인하는 것이 좋습니다.`,`🗂️ 출산 전후 일정에 맞춰 필요한 서류와 신청창구를 미리 정리하세요.`];return fallback[index%fallback.length];
}
export function getChecklistDetail(item:string,index:number,label?:string){const place=label||'거주 지역';return checklistMessage(item,place,index);}
