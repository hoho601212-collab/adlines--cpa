import Link from 'next/link';
import {site} from '@/lib/site';
import {busanDistricts,type BusanDistrict} from '@/lib/busan-insurance';
import {withBusanDistrictEvidence} from '@/lib/busan-district-evidence';
import {getBusanEvidenceState,getBusanSeoIntent,getBusanTopicFaq} from '@/lib/busan-page-context';
import {getBusanSeoCopy} from '@/lib/busan-seo';
import {getBusanPageFlow} from '@/lib/busan-page-flow';
import {getBusanFocusNotes} from '@/lib/busan-focus-notes';
import {getBusanSupportNotes} from '@/lib/busan-support-notes';
import {getBusanDistrictFaqs} from '@/lib/busan-district-faqs';
import {getBusanRelatedDistricts} from '@/lib/busan-related-districts';
import InsuranceInquiryForm from './InsuranceInquiryForm';

export default function BusanDistrictPage({district:rawDistrict}:{district:BusanDistrict}){
 const district=withBusanDistrictEvidence(rawDistrict);
 const keyword=`${district.name} 태아보험`;
 const districtMap=new Map(busanDistricts.map(d=>[d.slug,d]));
 const relatedDistricts=getBusanRelatedDistricts(district.slug);
 const evidence=getBusanEvidenceState(district);
 const seoIntent=getBusanSeoIntent(district);
 const seo=getBusanSeoCopy(district);
 const flow=getBusanPageFlow(district);
 const focusNotes=getBusanFocusNotes(district);
 const supportNotes=getBusanSupportNotes(district);
 const topicFaq=getBusanTopicFaq(district);
 const faq=[topicFaq,...getBusanDistrictFaqs(district)];
 const canonical=`${site.baseUrl}/태아보험/부산태아보험/${district.slug}`;
 const webPageSchema={"@context":"https://schema.org","@type":"WebPage","@id":`${canonical}#webpage`,name:seo.schemaName,description:seo.description,url:canonical,isPartOf:{"@id":`${site.baseUrl}#website`},inLanguage:'ko-KR',dateModified:site.contentReviewedAt,about:['태아보험','부산 출산지원',`${district.name} 출산·육아 지원`,...seoIntent.related],publisher:{"@type":"Organization",name:site.insuranceName,url:site.baseUrl}};
 const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))};
 const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[['홈',site.baseUrl],['태아보험',`${site.baseUrl}/태아보험`],['부산 태아보험',`${site.baseUrl}/태아보험/부산태아보험`],[keyword,canonical]].map(([name,item],i)=>({"@type":"ListItem",position:i+1,name,item}))};
 return <main className="insurancePage">
  {[webPageSchema,faqSchema,breadcrumbSchema].map((schema,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}
  <section className="insuranceHero approvedHero"><div className="wrap"><span className="insuranceBadge">부산 16개 구·군 태아보험</span><h1>{district.name} 태아보험 상담<br/><em>{district.theme}</em></h1><p>{district.intro}</p><div className="heroActions"><a className="btn btnPrimary btnLift" href="#보험상담-primary">상담 전 내 조건 확인하기 →</a><a className="btn btnGhost" href="#지역체크">{district.name} 체크포인트 →</a></div></div></section>
  <div className="insuranceCrumb"><div className="wrap breadcrumbs"><Link href="/">⌂ 홈</Link><span>›</span><Link href="/태아보험">태아보험</Link><span>›</span><Link href="/태아보험/부산태아보험">부산 태아보험</Link><span>›</span><b>{district.name} 태아보험</b></div></div>
  <section className="section editorialGuide"><div className="wrap editorialGuideGrid"><div><span className="insuranceBadge">이 페이지의 보험 주제</span><h2>{district.name}에서는 ‘{district.theme}’를 중심으로 봅니다</h2></div><div><p>16개 구·군 페이지가 지역명만 바뀐 복제 페이지가 되지 않도록, 이 페이지는 <b>{district.theme}</b>을 독립적인 보험 비교 소재로 사용합니다. 공공지원은 보험상품과 분리해 공식자료 기준으로 확인합니다.</p><p><b>함께 보는 검색 주제:</b> {seoIntent.related.join(' · ')}</p></div></div></section>
  <InsuranceInquiryForm position="primary" label={district.name}/>
  <section className="section sectionAlt" id="보험체크"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">보험 상담 전 체크</span><h2>{flow.checkHeading}</h2><p>{seoIntent.descriptionLead}</p></div><div className="facts">{district.insuranceFocus.map((item,i)=><div className="fact" key={item}><span className="factIcon">{String(i+1).padStart(2,'0')}</span><b>{item}</b><p>{focusNotes[i]}</p></div>)}</div></div></section>
  <section className="section" id="지역체크"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">2026 부산 · {district.name}</span><h2>{flow.supportHeading}</h2><p>부산시 공통지원과 구·군 자체사업은 지급주체·신청기한이 다를 수 있습니다. 아래 항목은 보험 혜택이 아니라 별도로 확인해야 할 공공지원 체크리스트입니다.</p></div><div className="facts">{district.localChecks.map((item,i)=><div className="fact" key={item}><span className="factIcon">{['📍','🗓️','🏛️'][i]}</span><b>{item}</b><p>{supportNotes[i]}</p></div>)}</div><div className="notice" role="note" aria-label={`${district.name} 공공지원 근거 수준`}><span className="pill">{evidence.badge}</span><br/><b>공식자료 확인 기준 · {district.source?.verified}</b><br/>{evidence.summary}<br/>{district.source?.note}<br/><a className="source" href={district.source?.url} target="_blank" rel="noreferrer">{district.source?.name} 공식 안내 확인 →</a></div></div></section>
  <section className="section localInfo"><div className="wrap infoSplit"><div className="infoPanel"><span className="insuranceBadge">{district.name} 보험·지원 구분</span><h2>{flow.localHeading}</h2><p>태아보험 자체를 {district.name} 전용 상품처럼 설명하지 않습니다. 보험은 보험회사·상품·피보험자 상태에 따라 판단하고, 부산시와 {district.name}의 공공지원은 주민등록과 신청시점을 기준으로 별도 확인합니다.</p></div><div className="infoPanel infoPanelAccent"><span>💡</span><h3>{district.name} 페이지 고유 소재</h3><h2>{district.theme}</h2><p>{district.intro}</p></div></div></section>
  <section className="section nearbySection"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">관련 부산 지역 가이드</span><h2>{district.name}와 함께 비교할 부산 지역</h2><p>모든 구·군을 한꺼번에 나열하지 않고, 현재 페이지의 보험 주제·지원방식·거주조건과 연결되는 지역을 먼저 제안합니다.</p></div><div className="nearbyLinks">{relatedDistricts.map(item=>{const d=districtMap.get(item.slug);if(!d)return null;return <Link key={item.slug} href={`/태아보험/부산태아보험/${item.slug}`}><span><b>{d.name} 태아보험</b><small>{item.reason}</small></span><b>비교하기 →</b></Link>})}</div><div className="notice" role="note"><b>부산 16개 구·군 전체를 보려면</b><br/>관심사별로 정리한 부산 태아보험 허브에서 나머지 지역까지 확인할 수 있습니다. <Link className="source" href="/태아보험/부산태아보험">부산 16개 구·군 전체 보기 →</Link></div></div></section>
  <section className="section faqSection"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">FAQ</span><h2>{district.name} 태아보험 상담 전 자주 묻는 질문</h2></div><div className="faqList">{faq.map(x=><details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}</div></div></section>
  <InsuranceInquiryForm position="secondary" label={district.name}/>
  <section className="section finalCta"><div className="wrap"><h2>{flow.finalTitle}</h2><p>{flow.finalBody}</p><a className="btn ctaWhite" href="#보험상담-secondary">{flow.ctaLabel}</a></div></section>
 </main>
}
