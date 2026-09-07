import type {RegionalSupportItem} from '@/lib/regional-support';
import {getPolicyFreshness,getPolicyEvidence} from '@/lib/policy-freshness';
import RegionalSupportEmpty from './RegionalSupportEmpty';

function getSupportIcon(title:string){
 if(/교통|택시/.test(title))return '🚕';
 if(/주택|주거|대출|이사/.test(title))return '🏠';
 if(/의료|건강|산후|한약|시술/.test(title))return '🩺';
 if(/육아|양육|영양|분유|용품/.test(title))return '🍼';
 if(/축하|장려|지원금|수당|급여/.test(title))return '🎁';
 if(/임신|임산부/.test(title))return '🤰';
 return '💚';
}

function getScopeNotice(label:string,items:RegionalSupportItem[]){
 if(label==='통영')return {icon:'🍼',title:'2026 통영 확인 범위',body:'현재 통영 자체사업으로 확인된 항목은 출산가정 영양꾸러미 바우처입니다. 이 내용을 현금성 출산장려금이나 다른 복지사업까지 확대해 해석하지 않습니다.',tone:'fresh'};
 if(label==='김해')return {icon:'🕒',title:'김해 출산축하금 근거 주의',body:'현재 노출된 출산축하금은 이전 연도 김해시 공식자료를 바탕으로 확인한 내용입니다. 2026년 실제 신청 전 금액·거주요건·신청기한이 유지되는지 최신 시행공고를 다시 확인하세요.',tone:'watch'};
 const hasCaution=items.some(item=>getPolicyEvidence(item).tone!=='fresh');
 return hasCaution?{icon:'🔎',title:'근거 상태를 함께 확인하세요',body:'이 페이지에는 계획·예산자료 또는 이전 연도 공식자료를 근거로 한 항목이 포함될 수 있습니다. 카드 상단 근거 배지와 공식출처를 확인한 뒤 실제 시행공고 기준으로 신청하세요.',tone:'watch'}:null;
}

export default function RegionalSupport({items,label}:{items:RegionalSupportItem[];label:string}){
 if(!items.length)return <RegionalSupportEmpty label={label}/>;
 const snapshots=items.slice(0,Math.min(2,items.length));
 const scopeNotice=getScopeNotice(label,items);
 return <section className="section verifiedLocalSupport"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">📍 2026 지역 추가지원 · 공식자료 확인</span><h2>{label}에서 추가로 확인할 지원</h2><p>광역자치단체·시청·정부기관 등 공식 자료를 기준으로 요약했습니다. 지원금액만 보지 말고 대상·거주조건·신청기한·지급방식까지 함께 확인하면 실제 신청 때 놓치는 항목을 줄일 수 있습니다.</p></div>{scopeNotice&&<div className={`supportScopeNotice ${scopeNotice.tone}`} role="note"><span aria-hidden="true">{scopeNotice.icon}</span><p><b>{scopeNotice.title}</b><small>{scopeNotice.body}</small></p></div>}<div className="supportVerifiedSnapshot" aria-label={`${label} 현재 확인된 지원 핵심`}><div className="supportSnapshotLead"><span aria-hidden="true">✅</span><p><b>현재 페이지에서 공식자료로 확인한 핵심</b><small>아래 지원카드와 동일한 데이터에서 자동으로 요약합니다.</small></p></div><div className="supportSnapshotItems">{snapshots.map(item=><div key={item.title}><span aria-hidden="true">{getSupportIcon(item.title)}</span><p><b>{item.title}</b><small>{item.benefit}</small></p></div>)}</div></div><div className="supportReadingGuide" aria-label={`${label} 지원정보 읽는 순서`}><div><span>①</span><p><b>지원 내용</b><small>금액·지급방식 확인</small></p></div><div><span>②</span><p><b>대상 조건</b><small>출생순위·거주기간 확인</small></p></div><div><span>③</span><p><b>신청 시점</b><small>마감일·신청창구 확인</small></p></div><div><span>④</span><p><b>공식 근거</b><small>최종 공고 다시 확인</small></p></div></div><div className="verifiedSupportGrid">{items.map(item=>{const freshness=getPolicyFreshness(item.verifiedAt);const evidence=getPolicyEvidence(item);const icon=getSupportIcon(item.title);return <article className={`verifiedSupportCard freshness-${freshness.tone}`} key={item.title}><div className="verifiedSupportTop"><div className="supportBadges"><span className={`freshnessBadge ${freshness.tone}`}>🕒 {freshness.label}</span><span className={`evidenceBadge ${evidence.tone}`}>✓ {evidence.label}</span></div><small>{freshness.detail}</small></div><div className="verifiedSupportTitle"><span className="verifiedSupportIcon" aria-hidden="true">{icon}</span><div><small>LOCAL BENEFIT</small><h3>{item.title}</h3></div></div><p>{item.summary}</p><div className="supportBenefit"><span aria-hidden="true">💳</span><div><small>지원 내용</small><strong>{item.benefit}</strong></div></div><dl><div><dt><span aria-hidden="true">👨‍👩‍👧</span> 대상</dt><dd>{item.eligibility}</dd></div><div><dt><span aria-hidden="true">📝</span> 신청</dt><dd>{item.apply}</dd></div></dl><p className="evidenceNote"><span aria-hidden="true">🔎</span>{evidence.detail}</p><a className="verifiedSupportSource" href={item.sourceUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">🏛️</span>{item.sourceName} 공식자료 보기 →</a></article>})}</div><div className="verifiedSupportTip"><span aria-hidden="true">💡</span><p><b>{label} 지원정보 확인 팁</b><small>출생순위, 부모·아동의 주민등록 주소, 계속 거주기간, 신청 마감일은 사업마다 다릅니다. 출생신고 전후로 주소지 행정복지센터 또는 공식 온라인 신청창구에서 최종 자격을 다시 확인하세요.</small></p></div></div></section>
}
