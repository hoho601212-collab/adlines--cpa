import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const data=read('lib/insurance-data.ts');
const variants=read('lib/insurance-page-variants.ts');
const busan=read('lib/busan-insurance.ts');
const busanRelated=read('lib/busan-related-districts.ts');
const sitemap=read('app/sitemap.ts');
const route=read('app/태아보험/[[...slug]]/page.tsx');
const page=read('components/InsurancePage.tsx');
const busanPage=read('components/BusanDistrictPage.tsx');
const busanDirectory=read('components/BusanDistrictDirectory.tsx');
const structured=read('lib/insurance-structured-data.ts');
const keywordPages=read('lib/keyword-pages.ts');
const regionalSupport=read('components/RegionalSupport.tsx');
const regionalSupportEmpty=read('components/RegionalSupportEmpty.tsx');
const timeline=read('components/InsuranceTimeline.tsx');
const inquiry=read('components/InsuranceInquiryForm.tsx');
const standards=read('components/InsuranceEditorialStandards.tsx');
const insuranceLayout=read('app/태아보험/layout.tsx');
const supportIcons=read('app/태아보험/support-icons.css');
const layout=read('app/layout.tsx');
const siteConfig=read('lib/site.ts');

const regionSlugs=[...data.matchAll(/slug:'([^']+태아보험)'/g)].map(m=>m[1]);
const keywordSlugs=[...keywordPages.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m=>m[1]);
const relatedHrefs=[...variants.matchAll(/href:'([^']+)'/g)].map(m=>m[1]);
const knownKeywordPaths=new Set(keywordSlugs.map(s=>`/${s}`));
const badRelated=relatedHrefs.filter(h=>h!=='/태아보험'&&!h.startsWith('/태아보험/')&&!knownKeywordPaths.has(h));
const busanDistrictSlugs=[...busan.matchAll(/slug:'([^']+(?:구|군)태아보험)'/g)].map(m=>m[1]);
const busanThemes=[...busan.matchAll(/theme:'([^']+)'/g)].map(m=>m[1]);
const busanVerified=[...busan.matchAll(/verified:'(\d{4}-\d{2}-\d{2})'/g)].map(m=>m[1]);
const relatedGroups=[...busanRelated.matchAll(/^\s*'([^']+(?:구|군)태아보험)':\[(.*?)\n\s*\],?$/gms)].map(m=>({slug:m[1],body:m[2]}));
const relatedTargets=relatedGroups.flatMap(g=>[...g.body.matchAll(/slug:'([^']+)'/g)].map(m=>({from:g.slug,to:m[1]})));

const checks={
 regionDirectory:page.includes('region.cities.map'),
 nearbyCities:page.includes('nearbyCities.map'),
 relatedGuides:page.includes('relatedLinks.map'),
 breadcrumbs:page.includes('breadcrumbs'),
 regionalCtaRouting:page.includes("const consultationHref=region?'#보험상담-primary':site.cpaUrl")&&(page.match(/href={consultationHref}/g)?.length||0)>=2,
 faqDeduplication:page.includes('normalizeFaqQuestion')&&page.includes('mergeUniqueFaqs')&&page.includes('const faqGroups='),
 faqEvidencePriority:page.includes("supportContext?.tone==='caution'||supportContext?.tone==='unverified'")&&page.includes('[supportFaqs,baseFaqs,contextualFaqs]'),
 finalCtaStage:page.includes('정보 확인 완료 · 상담 연결')&&page.includes("const finalCtaLabel=region?'확인한 내용으로 상담 신청 →':'무료 상담 알아보기 →'")&&page.includes("const finalConsultationHref=region?'#보험상담-secondary':site.cpaUrl")&&page.includes('href={finalConsultationHref}'),
 checklistSpecificity:variants.includes("if(/첫만남/.test(item))")&&variants.includes("if(/교통|택시|교통비/.test(item))")&&variants.includes("if(/건강관리|건강|의료|검사|진료|시술|난임|한약|산후|산모|신생아/.test(item))")&&variants.includes('return checklistMessage(item,place,index);')&&!variants.includes('return `${item}: ${checklistMessage(item,place,index)}`;'),
 supportContextA11y:page.includes('role="note"')&&page.includes('출산지원 근거 상태'),
 timelineIntegrated:page.includes('<InsuranceTimeline')&&page.includes("from './InsuranceTimeline'"),
 timelineStages:timeline.includes("period:'임신 확인 후'")&&timeline.includes("period:'출생신고 직후'")&&timeline.includes("period:'출산 후 1년까지'"),
 timelineCss:layout.includes("import './timeline.css'"),
 freshnessIntegrated:regionalSupport.includes('getPolicyFreshness')&&regionalSupport.includes('getPolicyEvidence')&&regionalSupport.includes('freshnessBadge'),
 verifiedSupportReadingGuide:regionalSupport.includes('supportReadingGuide')&&regionalSupport.includes('지원 내용')&&regionalSupport.includes('신청 시점'),
 emptySupportTrust:regionalSupportEmpty.includes('supportEmptyTrust')&&regionalSupportEmpty.includes('오래된 금액 임의 사용 안 함')&&regionalSupportEmpty.includes('supportEmptyChecklist')&&supportIcons.includes('.supportEmptyChecklist'),
 inquiryDisclosure:inquiry.includes('보험상품을 직접 판매하거나 가입을 확정하지 않습니다'),
 inquiryPreparation:inquiry.includes('inquiryTrustRow')&&inquiry.includes('현재 임신 주수 확인')&&inquiry.includes('원하는 보장기간 정리'),
 inquiryMobileJump:inquiry.includes('상담 신청서 바로 보기')&&inquiry.includes('mobileInquiryJump'),
 inquiryLazySecondary:inquiry.includes("loading={position==='primary'?'eager':'lazy'}")||inquiry.includes("loading={isPrimary?'eager':'lazy'}"),
 inquiryExternalForm:inquiry.includes('replyalba.com/intros/_frm/index.php?code=IOu2jC2SUJ'),
 editorialStandards:standards.includes('정보 작성 원칙')&&standards.includes('지역지원 정보 기준')&&standards.includes('상담·광고 구분'),
 editorialStandardsMounted:insuranceLayout.includes('<InsuranceEditorialStandards/>')&&insuranceLayout.includes("import './editorial-standards.css'")&&insuranceLayout.includes("import './support-icons.css'"),
 centralizedReviewDate:siteConfig.includes("contentReviewedAt:")&&structured.includes('dateModified:site.contentReviewedAt')&&standards.includes('site.contentReviewedAt'),
 itemListSchema:structured.includes("'@type':'ItemList'"),
 webPageSchema:structured.includes("'@type':'WebPage'"),
 faqSchema:structured.includes("'@type':'FAQPage'"),
 breadcrumbSchema:structured.includes("'@type':'BreadcrumbList'"),
 schemaModified:structured.includes('dateModified'),
 schemaPublisher:structured.includes("publisher:{'@type':'Organization'"),
 sitemapRegions:sitemap.includes('regions.flatMap'),
 sitemapKeywords:sitemap.includes('keywordPages'),
 busanDistrictCount:busanDistrictSlugs.length===16&&new Set(busanDistrictSlugs).size===16,
 busanUniqueThemes:busanThemes.length===16&&new Set(busanThemes).size===16,
 busanRouteGeneration:route.includes('busanDistricts.map')&&route.includes("['부산태아보험',d.slug]")&&route.includes("findBusanDistrict(slug[1])"),
 busanEncodedSlug:busan.includes('decodeURIComponent(slug)'),
 busanSitemap:sitemap.includes('busanDistricts.map')&&sitemap.includes('/태아보험/부산태아보험/${d.slug}'),
 busanDirectoryLinks:busanDirectory.includes('group.districtSlugs.map')&&busanDirectory.includes('/태아보험/부산태아보험/${d.slug}'),
 busanRelatedCoverage:relatedGroups.length===16&&relatedGroups.every(g=>(g.body.match(/slug:'/g)||[]).length===4)&&relatedTargets.every(x=>x.from!==x.to&&busanDistrictSlugs.includes(x.to)),
 busanRelatedMounted:busanPage.includes('getBusanRelatedDistricts')&&busanPage.includes('relatedDistricts.map')&&busanPage.includes('/태아보험/부산태아보험/${item.slug}')&&busanPage.includes('부산 16개 구·군 전체 보기'),
 busanInquiryStages:busanPage.includes('position="primary"')&&busanPage.includes('position="secondary"'),
 busanOfficialEvidence:busan.includes("source:{name:'해운대구청")&&busan.includes("source:{name:'동래구")&&busan.includes("source:{name:'사하구청")&&busan.includes("source:{name:'서구청")&&busan.includes("source:{name:'부산 동구")&&busan.includes("source:{name:'사상구")&&busanVerified.every(v=>/^2026-\d{2}-\d{2}$/.test(v))
};
const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
console.log('\n=== 보험 내부링크·Schema·신뢰요소 감사 ===');
console.log(`광역 slug 스캔: ${regionSlugs.length}개`);
console.log(`키워드 페이지 slug 스캔: ${keywordSlugs.length}개`);
console.log(`관련 가이드 링크: ${relatedHrefs.length}개`);
console.log(`유효하지 않은 관련 링크: ${badRelated.length?badRelated.join(', '):'없음'}`);
console.log(`지역 CTA 내부 신청서 연결: ${checks.regionalCtaRouting?'연결':'누락'}`);
console.log(`FAQ 중복 제거·근거 우선순위: ${checks.faqDeduplication&&checks.faqEvidencePriority?'연결':'누락'}`);
console.log(`하단 CTA 단계화: ${checks.finalCtaStage?'연결':'누락'}`);
console.log(`지역 체크리스트 유형별 설명: ${checks.checklistSpecificity?'연결':'누락'}`);
console.log(`지역 근거 상태 접근성: ${checks.supportContextA11y?'연결':'누락'}`);
console.log(`지역 정책 최신성 UI: ${checks.freshnessIntegrated?'연결':'누락'}`);
console.log(`지역 지원 읽기 가이드: ${checks.verifiedSupportReadingGuide?'연결':'누락'}`);
console.log(`미확인 지역 신뢰 안내: ${checks.emptySupportTrust?'연결':'누락'}`);
console.log(`출산 전후 일정표: ${checks.timelineIntegrated&&checks.timelineStages&&checks.timelineCss?'연결':'누락'}`);
console.log(`상담 신뢰·모바일 전환: ${checks.inquiryDisclosure&&checks.inquiryPreparation&&checks.inquiryMobileJump&&checks.inquiryLazySecondary&&checks.inquiryExternalForm?'연결':'누락'}`);
console.log(`정보 작성 원칙: ${checks.editorialStandards&&checks.editorialStandardsMounted?'연결':'누락'}`);
console.log(`편집 기준일 중앙관리: ${checks.centralizedReviewDate?'연결':'누락'}`);
console.log(`WebPage 최신성·발행주체 Schema: ${checks.schemaModified&&checks.schemaPublisher?'연결':'누락'}`);
console.log(`부산 16개 구·군 페이지: ${checks.busanDistrictCount?'16/16':'누락 또는 중복'}`);
console.log(`부산 구·군 고유 보험주제: ${checks.busanUniqueThemes?'16개 고유':'중복 있음'}`);
console.log(`부산 한글 route·sitemap·내부링크: ${checks.busanRouteGeneration&&checks.busanEncodedSlug&&checks.busanSitemap&&checks.busanDirectoryLinks&&checks.busanRelatedCoverage&&checks.busanRelatedMounted?'연결':'누락'}`);
console.log(`부산 관련지역 추천: ${checks.busanRelatedCoverage&&checks.busanRelatedMounted?'16개 페이지 × 4개 관련링크':'보완 필요'}`);
console.log(`부산 구·군 상담 2단계: ${checks.busanInquiryStages?'연결':'누락'}`);
console.log(`부산 공식 지역근거 확장: ${checks.busanOfficialEvidence?'확인':'보완 필요'}`);
console.log(`구조화데이터/내부링크 검사: ${failed.length?failed.join(', '):'통과'}`);
if(badRelated.length||failed.length){process.exitCode=1;console.log('감사 결과: 보완 필요');}else console.log('감사 결과: 내부링크·CTA·FAQ·Schema·정책표시·부산 16개 구군 구조 핵심 항목 통과');
