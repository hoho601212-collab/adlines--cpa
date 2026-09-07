import Link from 'next/link';
import {site} from '@/lib/site';
import {busanDistricts,type BusanDistrict} from '@/lib/busan-insurance';
import InsuranceInquiryForm from './InsuranceInquiryForm';

export default function BusanDistrictPage({district}:{district:BusanDistrict}){
 const keyword=`${district.name} 태아보험`;
 const canonical=`${site.baseUrl}/태아보험/부산태아보험/${district.slug}`;
 const siblings=busanDistricts.filter(d=>d.slug!==district.slug);
 const faq=[
  {q:`${district.name}에 살면 태아보험 보장내용이 달라지나요?`,a:'보험상품의 보장과 심사기준은 거주 구·군 때문에 달라지는 것이 아닙니다. 이 페이지의 지역 구분은 부산시·구군 공공지원과 신청창구를 함께 확인하기 위한 것이며 실제 보험조건은 상품설명서와 약관을 기준으로 확인해야 합니다.'},
  {q:`${district.name} 출산지원과 태아보험은 함께 받을 수 있나요?`,a:'공공 출산지원과 민간보험은 서로 다른 제도입니다. 각각의 대상조건과 보험금 지급사유를 충족하는지 별도로 확인해야 하며 공공지원 금액을 보험 보장금액처럼 합산해서 비교하지 않습니다.'},
  {q:'상담 전에 무엇을 준비하면 좋나요?',a:`현재 임신 주수, 예정일, 최근 검사·치료 이력, 원하는 보장기간과 월 보험료 범위를 정리해 두세요. ${district.name} 공공지원은 주민등록 주소지와 출생신고 시점도 함께 확인하면 좋습니다.`}
 ];
 const webpageSchema={'@context':'https://schema.org','@type':'WebPage',name:`${keyword} 상담 전 가이드`,description:district.intro,url:canonical,dateModified:site.contentReviewedAt,publisher:{'@type':'Organization',name:'올바른 보험',url:site.baseUrl},about:['태아보험','부산 출산지원',`${district.name} 출산·육아 지원`,district.theme]};
 const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(x=>({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}}))};
 const breadcrumbSchema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'홈',item:site.baseUrl},{'@type':'ListItem',position:2,name:'태아보험',item:`${site.baseUrl}/태아보험`},{'@type':'ListItem',position:3,name:'부산 태아보험',item:`${site.baseUrl}/태아보험/부산태아보험`},{'@type':'ListItem',position:4,name:keyword,item:canonical}]};
 return <main className="insurancePage">
  {[webpageSchema,faqSchema,breadcrumbSchema].map((schema,index)=><script key={index} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>)}
  <section className="insuranceHero approvedHero"><div className="wrap"><span className="insuranceBadge">부산 16개 구·군 태아보험</span><h1>{district.name} 태아보험 상담<br/><em>{district.theme}</em></h1><p>{district.intro}</p><div className="heroActions"><a className="btn btnPrimary btnLift" href="#보험상담-primary">상담 전 내 조건 확인하기 →</a><a className="btn btnGhost" href="#지역체크">{district.name} 체크포인트 →</a></div></div></section>
  <div className="insuranceCrumb"><div className="wrap breadcrumbs"><Link href="/">⌂ 홈</Link><span>›</span><Link href="/태아보험">태아보험</Link><span>›</span><Link href="/태아보험/부산태아보험">부산 태아보험</Link><span>›</span><b>{district.name} 태아보험</b></div></div>
  <section className="section editorialGuide"><div className="wrap editorialGuideGrid"><div><span className="insuranceBadge">이 페이지의 보험 주제</span><h2>{district.name}에서는 ‘{district.theme}’를 중심으로 봅니다</h2></div><p>16개 구·군 페이지가 지역명만 바뀐 복제 페이지가 되지 않도록, 이 페이지는 <b>{district.theme}</b>을 독립적인 보험 비교 소재로 사용합니다. 공공지원은 보험상품과 분리해 공식자료 기준으로 확인합니다.</p></div></section>
  <InsuranceInquiryForm position="primary" label={district.name}/>
  <section className="section sectionAlt" id="보험체크"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">보험 상담 전 체크</span><h2>{keyword}, 세 가지를 먼저 비교하세요</h2><p>보험료 한 숫자보다 가입 가능시기·보장범위·계약 유지조건을 같은 기준으로 비교하는 것이 중요합니다.</p></div><div className="facts">{district.insuranceFocus.map((item,i)=><div className="fact" key={item}><span className="factIcon">{String(i+1).padStart(2,'0')}</span><b>{item}</b><p>{i===0?'가입 전 현재 임신 주수와 심사조건을 확인하고, 가능한 보장과 제한되는 항목을 구분하세요.':i===1?'비슷해 보이는 특약도 지급사유·보장기간·면책조건이 다를 수 있으므로 약관 기준으로 비교하세요.':'출생 후에도 유지할 계약이라면 단기 혜택보다 장기 보험료와 보장구조를 함께 확인하세요.'}</p></div>)}</div></div></section>
  <section className="section" id="지역체크"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">2026 부산 · {district.name}</span><h2>보험과 별도로 확인할 {district.name} 출산·육아 정보</h2><p>부산시 공통지원과 구·군 자체사업은 지급주체·신청기한이 다를 수 있습니다. 아래 항목은 보험 혜택이 아니라 별도로 확인해야 할 공공지원 체크리스트입니다.</p></div><div className="facts">{district.localChecks.map((item,i)=><div className="fact" key={item}><span className="factIcon">{['📍','🗓️','🏛️'][i]}</span><b>{item}</b><p>대상, 주민등록·거주요건, 신청기간, 지급수단을 최신 공식 안내에서 확인하세요.</p></div>)}</div><div className="notice"><b>공식자료 확인 기준</b><br/>{district.source?.note}<br/><span className="meta">페이지 확인일 {district.source?.verified}</span><br/><a className="source" href={district.source?.url} target="_blank" rel="noreferrer">{district.source?.name} 공식 안내 확인 →</a></div></div></section>
  <section className="section localInfo"><div className="wrap infoSplit"><div className="infoPanel"><span className="insuranceBadge">왜 구·군 페이지를 나누나요?</span><h2>보험조건은 상품 기준, 지역지원은 주소지 기준입니다</h2><p>태아보험 자체를 {district.name} 전용 상품처럼 설명하지 않습니다. 보험은 보험회사·상품·피보험자 상태에 따라 판단하고, 부산시와 {district.name}의 공공지원은 주민등록과 신청시점을 기준으로 별도 확인합니다.</p></div><div className="infoPanel infoPanelAccent"><span>💡</span><h3>{district.name} 페이지 고유 소재</h3><h2>{district.theme}</h2><p>{district.intro}</p></div></div></section>
  <section className="section nearbySection"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">부산 16개 구·군 연결</span><h2>부산 다른 지역 태아보험 페이지</h2><p>이사 예정지나 가족의 실제 주민등록 주소지가 다른 경우 해당 구·군의 공공지원 조건도 비교해 보세요.</p></div><div className="nearbyLinks">{siblings.map(d=><Link key={d.slug} href={`/태아보험/부산태아보험/${d.slug}`}><span>{d.name}</span><b>태아보험 →</b></Link>)}</div></div></section>
  <section className="section faqSection"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">FAQ</span><h2>{district.name} 태아보험 상담 전 자주 묻는 질문</h2></div><div className="faqList">{faq.map(x=><details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}</div></div></section>
  <InsuranceInquiryForm position="secondary" label={district.name}/>
  <section className="section finalCta"><div className="wrap"><h2>{district.name}에서 확인한 조건을 기준으로 상담하세요</h2><p>지역지원은 공식기관에서 다시 확인하고, 보험은 실제 가입 가능조건·보장범위·보험료를 비교한 뒤 결정하세요.</p><a className="btn ctaWhite" href="#보험상담-secondary">확인한 내용으로 상담 신청 →</a></div></section>
 </main>
}
