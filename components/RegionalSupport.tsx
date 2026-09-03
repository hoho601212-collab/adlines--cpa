import type {RegionalSupportItem} from '@/lib/regional-support';

export default function RegionalSupport({items,label}:{items:RegionalSupportItem[];label:string}){
 if(!items.length)return null;
 return <section className="section verifiedLocalSupport"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">2026 지역 추가지원 · 검증완료</span><h2>{label}에서 추가로 확인할 지원</h2><p>광역자치단체·시청 등 공식 자료에서 확인한 내용을 요약했습니다. 실제 신청 전 최신 공고와 세부 자격을 다시 확인하세요.</p></div><div className="verifiedSupportGrid">{items.map(item=><article className="verifiedSupportCard" key={item.title}><div className="verifiedSupportTop"><span>공식 확인</span><small>{item.verifiedAt}</small></div><h3>{item.title}</h3><p>{item.summary}</p><div className="supportBenefit">{item.benefit}</div><dl><div><dt>대상</dt><dd>{item.eligibility}</dd></div><div><dt>신청</dt><dd>{item.apply}</dd></div></dl><a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceName} 공식자료 보기 →</a></article>)}</div></div></section>
}
