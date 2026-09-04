import type {RegionalSupportItem} from '@/lib/regional-support';
import {getPolicyFreshness,getPolicyEvidence} from '@/lib/policy-freshness';
import RegionalSupportEmpty from './RegionalSupportEmpty';

export default function RegionalSupport({items,label}:{items:RegionalSupportItem[];label:string}){
 if(!items.length)return <RegionalSupportEmpty label={label}/>;
 return <section className="section verifiedLocalSupport"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">2026 지역 추가지원 · 공식자료 확인</span><h2>{label}에서 추가로 확인할 지원</h2><p>광역자치단체·시청·정부기관 등 공식 자료를 기준으로 요약했습니다. 확인일이 오래됐거나 계획·예산 자료 기반인 항목은 상태표시를 보고 최신 시행공고를 다시 확인하세요.</p></div><div className="verifiedSupportGrid">{items.map(item=>{const freshness=getPolicyFreshness(item.verifiedAt);const evidence=getPolicyEvidence(item);return <article className={`verifiedSupportCard freshness-${freshness.tone}`} key={item.title}><div className="verifiedSupportTop"><div className="supportBadges"><span className={`freshnessBadge ${freshness.tone}`}>{freshness.label}</span><span className={`evidenceBadge ${evidence.tone}`}>{evidence.label}</span></div><small>{freshness.detail}</small></div><h3>{item.title}</h3><p>{item.summary}</p><div className="supportBenefit">{item.benefit}</div><dl><div><dt>대상</dt><dd>{item.eligibility}</dd></div><div><dt>신청</dt><dd>{item.apply}</dd></div></dl><p className="evidenceNote">{evidence.detail}</p><a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceName} 공식자료 보기 →</a></article>})}</div></div></section>
}
