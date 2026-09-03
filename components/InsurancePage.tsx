import Link from 'next/link';
import {Region,City,regions,nationalPrograms} from '@/lib/insurance-data';
import {site} from '@/lib/site';
import {getInsuranceImages} from '@/lib/insurance-images';
import {getInsuranceFaq,getUniqueGuide} from '@/lib/insurance-content';
import {getRegionalSupport} from '@/lib/regional-support';
import {getCitySupport} from '@/lib/city-support';
import InsuranceImageTopics from './InsuranceImageTopics';
import RegionalSupport from './RegionalSupport';
import InsuranceInquiryForm from './InsuranceInquiryForm';

export default function InsurancePage({region,city}:{region?:Region;city?:City}){
 const label=city?.name||region?.name;
 const keyword=label?`${label} 태아보험`:'태아보험';
 const imageItems=getInsuranceImages(region,city);
 const lead=city?.note||region?.summary||'임신부터 출산까지 든든하게, 우리 아이의 첫 보험 준비. 보장과 지역별 출산·육아 지원정보를 한눈에 확인하세요.';
 const heroImage=imageItems[0]?.src;
 const faqs=getInsuranceFaq(region,city);
 const guide=getUniqueGuide(region,city);
 const citySupport=getCitySupport(city?.slug);
 const regionalSupport=citySupport.length?citySupport:getRegionalSupport(region?.slug,city?.slug);
 const nearbyCities=region&&city?region.cities.filter(c=>c.slug!==city.slug).slice(0,6):[];
 const pagePath=!region?'/태아보험':`/태아보험/${region.slug}${city?`/${city.slug}`:''}`;
 const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
 const breadcrumbItems=[{name:'올바른',item:site.baseUrl},{name:'태아보험',item:`${site.baseUrl}/태아보험`},...(region?[{name:`${region.name} 태아보험`,item:`${site.baseUrl}/태아보험/${region.slug}`}]:[]),...(city?[{name:`${city.name} 태아보험`,item:`${site.baseUrl}${pagePath}`}]:[])];
 const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:breadcrumbItems.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.name,item:item.item}))};
 return <main className="insurancePage">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
  <section className="insuranceHero approvedHero"><div className="wrap approvedHeroGrid"><div className="approvedHeroCopy"><span className="insuranceBadge">올바른 보험</span><h1>{label?`${label} 태아보험 상담`:'태아보험 상담 전'}<br/><em>{label?'맞춤 정보를 확인하세요':'꼭 알아야 할 정보'}</em></h1><p>{lead}</p><div className="approvedBenefitRow"><div><span>🛡️</span><p><b>보장 확인</b><small>가입 전 주요 조건 체크</small></p></div><div><span>🗓️</span><p><b>가입 정보</b><small>시기 · 기간 · 특약 확인</small></p></div><div><span>🎧</span><p><b>상담 연결</b><small>정보 확인 후 상담 신청</small></p></div></div><div className="heroActions"><a className="btn btnPrimary btnLift" href={site.cpaUrl}>무료 상담 알아보기 →</a><a className="btn btnGhost" href="#지원정보">출산지원 정보 보기 →</a></div></div><div className="approvedHeroPhoto" style={{backgroundImage:`linear-gradient(90deg,rgba(255,255,255,.05),rgba(255,255,255,.05)),url('${heroImage}')`}}><div className="photoFallback"><span>🤰</span><strong>엄마와 아이의 첫 준비</strong><small>올바른 보험</small></div></div></div></section>
  <div className="insuranceCrumb"><div className="wrap breadcrumbs"><Link href="/">⌂ 홈</Link><span>›</span><Link href="/태아보험">태아보험</Link>{region&&<><span>›</span><Link href={`/태아보험/${region.slug}`}>{region.name} 태아보험</Link></>}{city&&<><span>›</span><b>{city.name} 태아보험</b></>}</div></div>
  <InsuranceImageTopics items={imageItems} title={`${keyword}, 어떤 정보가 필요하세요?`}/>
  <section className="quickGuide"><div className="wrap quickGuideGrid"><article><span className="quickGuideIcon">🤰</span><div><h3>태아보험, 왜 중요할까요?</h3><p>예기치 못한 상황에 대비해 아이와 엄마를 든든하게 지켜주는 첫 보험입니다.</p><a href="#비교가이드">자세히 보기 →</a></div></article><article><span className="quickGuideIcon">🗓️</span><div><h3>언제 가입하는 게 좋을까요?</h3><p>임신 확인 후 가입 가능 시기와 보장 시작 조건을 확인하세요.</p><a href="#비교가이드">자세히 보기 →</a></div></article><article><span className="quickGuideIcon">🛡️</span><div><h3>어떤 보장을 준비해야 할까요?</h3><p>질병, 상해, 입원, 수술, 성장기 보장까지 필요한 항목을 살펴봅니다.</p><a href="#비교가이드">자세히 보기 →</a></div></article><article className="quickGuideConsult"><span className="quickGuideIcon">🎧</span><div><h3>전문 상담사와 1:1 상담</h3><p>우리 가족에게 맞는 보험을 상담으로 확인해 보세요.</p><a className="quickGuideCta" href={site.cpaUrl}>무료 상담 신청 →</a></div></article></div></section>
  <section className="section editorialGuide"><div className="wrap editorialGuideGrid"><div><span className="insuranceBadge">올바른 보험 가이드</span><h2>{guide.title}</h2></div><p>{guide.body}</p></div></section>
  {region&&<InsuranceInquiryForm position="primary" label={label||region.name}/>} 
  {!region&&<section className="section regionDirectory"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">지역별 태아보험</span><h2>우리 지역의 태아보험·출산정보 찾기</h2><p>전국 17개 광역지역별로 출산·육아 정책과 보험 상담 전 확인사항을 각각 정리합니다.</p></div><div className="grid">{regions.map(r=><Link className="card regionCard" key={r.slug} href={`/태아보험/${r.slug}`}><span className="pill">{r.fullName}</span><h3>{r.name} 태아보험</h3><p>{r.summary}</p><b>지역 정보 보기 →</b></Link>)}</div></div></section>}
  {region&&region.cities.length>0&&!city&&<section className="section regionDirectory"><div className="wrap"><span className="insuranceBadge">{region.fullName}</span><h2>{region.name} 주요 시 태아보험</h2><p className="muted">거주 도시를 선택하면 해당 지역의 태아보험 정보와 출산·육아 지원 내용을 확인할 수 있습니다.</p><div className="cityList">{region.cities.map(c=><Link className="cityChip" key={c.slug} href={`/태아보험/${region.slug}/${c.slug}`}>{c.name} 태아보험 <b>→</b></Link>)}</div></div></section>}
  <section className="section sectionAlt" id="비교가이드"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">상담 전 체크리스트</span><h2>{keyword} 가입 전 확인할 3가지</h2></div><div className="facts"><div className="fact"><span className="factIcon">01</span><b>가입 가능한 시기</b><p>임신 주수와 상품별 인수기준이 다를 수 있으므로 실제 가입 가능 여부와 조건을 확인합니다.</p></div><div className="fact"><span className="factIcon">02</span><b>보장기간과 특약</b><p>보장기간, 갱신 여부, 면책·감액 조건과 필요한 특약의 범위를 함께 확인합니다.</p></div><div className="fact"><span className="factIcon">03</span><b>보험료와 계약조건</b><p>보험료만 보지 않고 상품설명서와 약관, 보장 제외사항까지 함께 비교합니다.</p></div></div></div></section>
  <section className="section supportSection" id="지원정보"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">2026 전국 공통제도</span><h2>{label||'전국'} 출산·육아 지원정보</h2><p>보험과 별도로 받을 수 있는 공공지원도 함께 확인하세요. 전국 공통제도와 지자체 자체사업은 구분해서 안내합니다.</p></div><div className="supportGrid">{nationalPrograms.map(p=><article className="support" key={p.title}><div className="supportTop"><span className="pill">{p.category}</span><span className="meta">확인 {p.verifiedAt}</span></div><h3>{p.title}</h3><p>{p.summary}</p><p className="muted"><b>대상</b> {p.target}</p><p className="muted"><b>신청</b> {p.apply}</p><a className="source" href={p.sourceUrl} target="_blank" rel="noreferrer">공식 출처 확인 →</a></article>)}</div><div className="notice">지원사업은 거주기간, 출생순위, 소득기준, 신청시점 등에 따라 달라질 수 있습니다. 신청 전 해당 지자체와 공식기관의 최신 공고를 확인하세요.</div></div></section>
  <RegionalSupport items={regionalSupport} label={label||'지역'}/>
  {region&&<section className="section localInfo"><div className="wrap infoSplit"><div className="infoPanel"><span className="insuranceBadge">{label} 지역 고유 정보</span><h2>{label}에서 함께 확인하세요</h2><p>{city?.note||region.summary}</p><ul className="checks"><li>지역 출산지원 사업과 지급조건</li><li>거주기간·출생순위·신청기한</li><li>산모·신생아 건강관리와 보건소 지원</li><li>다자녀·보육·가족센터 연계 지원</li></ul></div><div className="infoPanel infoPanelAccent"><span>📍</span><h3>{region.fullName}</h3><h2>{region.accent}</h2><p>지역명만 바꾼 페이지가 아니라 실제 지역의 지원정책과 생활권 정보를 확인해 페이지별 고유 콘텐츠로 확장합니다.</p></div></div></section>}
  {region&&city&&nearbyCities.length>0&&<section className="section nearbySection"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">함께 보는 지역</span><h2>{region.name} 다른 지역 태아보험 정보</h2><p>{city.name} 인근 생활권이나 가족의 거주지가 다른 경우 관련 지역 페이지도 함께 확인해 보세요.</p></div><div className="nearbyLinks">{nearbyCities.map(c=><Link key={c.slug} href={`/태아보험/${region.slug}/${c.slug}`}><span>{c.name}</span><b>태아보험 →</b></Link>)}</div></div></section>}
  {region&&<InsuranceInquiryForm position="secondary" label={label||region.name}/>} 
  <section className="section faqSection"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">FAQ</span><h2>{keyword} 자주 묻는 질문</h2><p>상담 신청 전에 많이 확인하는 내용을 정리했습니다.</p></div><div className="faqList">{faqs.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></div></section>
  <section className="section"><div className="wrap"><div className="ctaBox insuranceCta"><div><span className="darkEyebrow">올바른 보험</span><h2>{keyword}, 충분히 알아본 뒤 상담하세요</h2><p>가입시기와 보장내용, 지역별 출산지원 정보를 확인한 후 상담을 진행할 수 있습니다.</p></div><a className="btn ctaWhite" href={site.cpaUrl}>무료 상담 알아보기 →</a></div></div></section>
 </main>
}
