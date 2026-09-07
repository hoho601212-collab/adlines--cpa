import type {RegionalSupportItem} from './regional-support';

export type PolicyFreshness={label:string;detail:string;tone:'fresh'|'watch'|'review';days:number|null};

const DAY=86_400_000;

export function getPolicyFreshness(verifiedAt:string,now=new Date()):PolicyFreshness{
 const parsed=new Date(`${verifiedAt}T00:00:00+09:00`);
 if(Number.isNaN(parsed.getTime()))return{label:'확인일 점검 필요',detail:'확인일 형식을 다시 확인하세요.',tone:'review',days:null};
 const days=Math.max(0,Math.floor((now.getTime()-parsed.getTime())/DAY));
 if(days<=45)return{label:'최근 공식 확인',detail:`${verifiedAt} 기준 공식자료 확인`,tone:'fresh',days};
 if(days<=120)return{label:'공식자료 확인',detail:`${verifiedAt} 확인 · 신청 전 최신 공고 재확인`,tone:'watch',days};
 return{label:'최신 공고 재확인 권장',detail:`마지막 확인 ${verifiedAt} · 변경 가능성 확인 필요`,tone:'review',days};
}

function getSourceYear(item:RegionalSupportItem){
 const matches=`${item.title} ${item.summary} ${item.sourceName} ${item.sourceUrl}`.match(/20(?:1\d|2\d)/g)||[];
 const years=matches.map(Number).filter(y=>y>=2015&&y<=2099);
 return years.length?Math.max(...years):null;
}

export function getPolicyEvidence(item:RegionalSupportItem,now=new Date()){
 const text=`${item.title} ${item.summary} ${item.sourceName}`;
 const planning=/계획|예산|업무계획|확대안|방향/.test(text);
 const sourceYear=getSourceYear(item);
 const currentYear=now.getFullYear();
 const explicitlyCurrent=text.includes(String(currentYear));
 if(planning)return{label:'계획·예산 자료 기준',detail:'실제 시행 여부와 세부조건은 별도 시행공고를 확인하세요.',tone:'watch' as const};
 if(sourceYear&&sourceYear<currentYear&&!explicitlyCurrent)return{label:'이전 연도 공식자료',detail:`${sourceYear}년 공식자료를 기준으로 확인했습니다. ${currentYear}년 실제 신청 전 최신 시행공고를 다시 확인하세요.`,tone:'watch' as const};
 return{label:'공식기관 자료',detail:'지자체·정부기관 등 공식 출처를 기준으로 요약했습니다.',tone:'fresh' as const};
}
