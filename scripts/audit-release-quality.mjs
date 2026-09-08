import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const data=read('lib/insurance-data.ts');
const content=read('lib/insurance-content.ts');
const page=read('components/InsurancePage.tsx');
const route=read('app/태아보험/[[...slug]]/page.tsx');
const layout=read('app/태아보험/layout.tsx');
const a11y=read('app/태아보험/regional-a11y.css');
const releasePolish=read('app/태아보험/release-polish.css');
const supportContext=read('lib/support-context.ts');
const variants=read('lib/insurance-page-variants.ts');
const sitemap=read('app/sitemap.ts');
const site=read('lib/site.ts');

const REGION_SLUGS=['서울태아보험','부산태아보험','대구태아보험','인천태아보험','광주태아보험','대전태아보험','울산태아보험','세종태아보험','경기태아보험','강원태아보험','충북태아보험','충남태아보험','전북태아보험','전남태아보험','경북태아보험','경남태아보험','제주태아보험'];
const regionProfiles=[...content.matchAll(/^\s*([가-힣]+태아보험):\{intro:'([^']+)'/gm)].map(m=>({slug:m[1],intro:m[2]}));
const cityProfiles=[...content.matchAll(/^\s*'([^']+태아보험\/[^']+태아보험)':\{intro:'([^']+)'/gm)].map(m=>({key:m[1],intro:m[2]}));
const regionIntros=regionProfiles.map(x=>x.intro);
const cityIntros=cityProfiles.map(x=>x.intro);

const checks={
 regionProfiles:REGION_SLUGS.every(s=>regionProfiles.some(x=>x.slug===s))&&regionProfiles.length===17,
 uniqueRegionIntros:new Set(regionIntros).size===regionIntros.length,
 cityProfiles:cityProfiles.length===52,
 cityIntroDiversity:new Set(cityIntros).size>=50,
 localizedSeo:content.includes('태아보험 상담 | 가입시기·출산지원·보장 비교')&&content.includes('2026 지역 출산·육아 지원'),
 localizedH1:content.includes('태아보험 상담`'),
 canonicalRoute:route.includes('canonical')&&route.includes('generateMetadata'),
 encodedSlugRegression:data.includes('decodeURIComponent(slug)')&&route.includes('findRegion')&&route.includes('findCity'),
 supportContext:page.includes('getSupportContext')&&supportContext.includes("tone:'verified'|'caution'|'unverified'"),
 faqVariation:variants.includes('getContextualFaq')&&page.includes('mergeUniqueFaqs'),
 twoStageInquiry:(page.match(/<InsuranceInquiryForm/g)||[]).length>=2&&page.includes("#보험상담-primary")&&page.includes("#보험상담-secondary"),
 accessibilityImport:layout.includes("import './regional-a11y.css'")&&layout.includes("import './release-polish.css'"),
 focusVisible:a11y.includes(':focus-visible')&&releasePolish.includes('.nearbyLinks a:focus-visible')&&releasePolish.includes('.faqList summary:focus-visible')&&releasePolish.includes('.mobileInquiryJump:focus-visible'),
 reducedMotion:a11y.includes('prefers-reduced-motion:reduce')&&releasePolish.includes('@media(prefers-reduced-motion:reduce)')&&releasePolish.includes('transform:none!important'),
 mobileTapTargets:releasePolish.includes('.heroActions .btn{min-height:48px}')&&releasePolish.includes('.nearbyLinks a{')&&releasePolish.includes('min-height:72px'),
 relatedLinkMarkup:page.includes('<span>{c.name}</span><b>태아보험 →</b>'),
 relatedLinkReadability:releasePolish.includes('.nearbyLinks a>span')&&releasePolish.includes('.nearbyLinks a>b')&&releasePolish.includes('word-break:keep-all')&&releasePolish.includes('white-space:nowrap'),
 supportA11y:page.includes('role="note"')&&page.includes('출산지원 근거 상태'),
 sitemapCoverage:sitemap.includes('regions.flatMap')&&sitemap.includes('busanDistricts.map')&&sitemap.includes('keywordPages'),
 sitemapStableModified:sitemap.includes('site.contentReviewedAt')&&!sitemap.includes('const now=new Date()'),
 sitemapCadence:sitemap.includes("changeFrequency:'weekly'")&&sitemap.includes("changeFrequency:'monthly'"),
 reviewDateSource:site.includes("contentReviewedAt: '2026-09-07'")
};

const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
console.log('\n=== 태아보험 출시 전 품질 감사 ===');
console.log(`광역 고유 프로필: ${checks.regionProfiles&&checks.uniqueRegionIntros?'17/17 고유':'보완 필요'}`);
console.log(`도시 고유 프로필: ${cityProfiles.length}개 · 고유 intro ${new Set(cityIntros).size}개`);
console.log(`메타·H1·canonical: ${checks.localizedSeo&&checks.localizedH1&&checks.canonicalRoute?'연결':'보완 필요'}`);
console.log(`한글 URL 회귀 방지: ${checks.encodedSlugRegression?'확인':'보완 필요'}`);
console.log(`지역지원 근거 상태: ${checks.supportContext?'연결':'보완 필요'}`);
console.log(`FAQ·상담 2단계: ${checks.faqVariation&&checks.twoStageInquiry?'연결':'보완 필요'}`);
console.log(`접근성 focus/reduced-motion: ${checks.accessibilityImport&&checks.focusVisible&&checks.reducedMotion&&checks.supportA11y?'통과':'보완 필요'}`);
console.log(`모바일 탭·관련링크 가독성: ${checks.mobileTapTargets&&checks.relatedLinkMarkup&&checks.relatedLinkReadability?'통과':'보완 필요'}`);
console.log(`사이트맵 커버리지: ${checks.sitemapCoverage?'확인':'보완 필요'}`);
console.log(`사이트맵 수정일·갱신주기: ${checks.sitemapStableModified&&checks.sitemapCadence&&checks.reviewDateSource?'안정화':'보완 필요'}`);
if(failed.length){console.log(`실패 항목: ${failed.join(', ')}`);process.exitCode=1;}else console.log('감사 결과: 이미지 제외 태아보험 출시 전 핵심 품질 기준 통과');
