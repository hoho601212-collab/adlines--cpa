import Link from 'next/link';
import type {KeywordPage} from '@/lib/keyword-pages';
import InsuranceImageTopics from './InsuranceImageTopics';
import InsuranceInquiryForm from './InsuranceInquiryForm';

function imageItems(page:KeywordPage){return Array.from({length:5},(_,i)=>({
 src:`/images/insurance/keywords/${page.slug}/${String(i+1).padStart(2,'0')}.webp`,
 keyword:[page.title.split('|')[0].trim(),...(page.sections.map(s=>s.title))][i]||page.slug,
 alt:`${page.slug} 정보 이미지 ${i+1}`,
 tags:[`#${page.slug}`,i===0?'#핵심정리':'#상세정보',page.category==='pregnancy'?'#임신정보':'#보험가이드']
}))}

export default function KeywordGuidePage({page}:{page:KeywordPage}){
 const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:page.faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))};
 const insurance=page.category==='insurance';
 return <main className="keywordPage">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  <section className={`keywordHero ${insurance?'keywordHeroInsurance':'keywordHeroPregnancy'}`}><div className="wrap keywordHeroInner"><div><span className="insuranceBadge">{insurance?'올바른 보험 가이드':'임신·출산 정보'}</span><h1>{page.title.split('|')[0].trim()}</h1><p>{page.intro}</p><div className="keywordHeroLinks"><Link href="/태아보험">태아보험 메인 보기 →</Link><a href="#핵심내용">핵심 내용 보기 ↓</a></div></div><div className="keywordHeroSide"><span>{insurance?'🛡️':'🤰'}</span><b>{insurance?'상담 전 먼저 확인':'증상은 개인차가 있습니다'}</b><small>{insurance?'보장·조건·약관 중심으로 정리합니다.':'일반 정보이며 진단을 대신하지 않습니다.'}</small></div></div></section>
  <div className="insuranceCrumb"><div className="wrap breadcrumbs"><Link href="/">⌂ 홈</Link><span>›</span><Link href="/태아보험">올바른 보험</Link><span>›</span><b>{page.slug}</b></div></div>
  <InsuranceImageTopics items={imageItems(page)} title={`${page.slug}, 무엇부터 확인할까요?`}/>
  {page.notice&&<section className="keywordNotice"><div className="wrap"><div><b>꼭 확인하세요</b><p>{page.notice}</p></div></div></section>}
  {insurance&&<InsuranceInquiryForm position="primary" label={page.slug}/>} 
  <section className="section keywordContent" id="핵심내용"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">핵심 가이드</span><h2>{page.slug} 핵심 내용을 정리했습니다</h2><p>검색어만 반복하지 않고 실제 판단에 필요한 내용을 기준별로 정리합니다.</p></div><div className="keywordSections">{page.sections.map((s,i)=><article key={s.title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{s.title}</h3><p>{s.body}</p>{s.bullets&&<ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</div></article>)}</div></div></section>
  {page.sources&&page.sources.length>0&&<section className="section keywordSources"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">공식·전문 출처</span><h2>내용 확인에 참고한 자료</h2></div><div className="sourceCards">{page.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer"><b>{s.name}</b><span>공식 자료 확인 ↗</span></a>)}</div></div></section>}
  <section className="section faqSection"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">FAQ</span><h2>{page.slug} 자주 묻는 질문</h2></div><div className="faqList">{page.faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
  {insurance&&<InsuranceInquiryForm position="secondary" label={page.slug}/>} 
  <section className="section relatedKeywordSection"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">함께 읽기</span><h2>관련 태아보험·임신 정보</h2></div><div className="relatedKeywordLinks"><Link href="/태아보험가입시기">태아보험가입시기 →</Link><Link href="/현대해상태아보험">현대해상태아보험 →</Link><Link href="/태아보험순위비교">태아보험 순위비교 →</Link><Link href="/임신초기증상">임신초기증상 →</Link><Link href="/임신극초기증상">임신극초기증상 →</Link><Link href="/임신5-14주차증상">임신 5~14주차 증상 →</Link><Link href="/임산부선물">임산부선물 →</Link></div></div></section>
 </main>
}
