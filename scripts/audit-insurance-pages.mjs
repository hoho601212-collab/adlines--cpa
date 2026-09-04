import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const files={
 data:read('lib/insurance-data.ts'),content:read('lib/insurance-content.ts'),variants:read('lib/insurance-page-variants.ts'),images:read('lib/insurance-images.ts'),region:read('lib/regional-support.ts'),gyeonggi:read('lib/city-support.ts'),central:read('lib/city-support-central.ts'),south:read('lib/city-support-south.ts'),east:read('lib/city-support-east.ts'),gyeongnam:read('lib/city-support-gyeongnam.ts'),jeju:read('lib/city-support-jeju.ts'),gangwon:read('lib/city-support-gangwon.ts'),page:read('components/InsurancePage.tsx'),route:read('app/태아보험/[[...slug]]/page.tsx'),sitemap:read('app/sitemap.ts'),site:read('lib/site.ts')
};

const REGION_SLUGS=['서울태아보험','부산태아보험','대구태아보험','인천태아보험','광주태아보험','대전태아보험','울산태아보험','세종태아보험','경기태아보험','강원태아보험','충북태아보험','충남태아보험','전북태아보험','전남태아보험','경북태아보험','경남태아보험','제주태아보험'];
const regionSlugs=[...new Set([...files.data.matchAll(/slug:'([^']+태아보험)'/g)].map(m=>m[1]).filter(s=>REGION_SLUGS.includes(s)))];
const cityEntries=[];
for(const line of files.data.split('\n')){
 const regionMatch=line.match(/slug:'([^']+태아보험)'/);
 const citiesMatch=line.match(/cities:cities\(\[([^\]]*)\]\)/);
 if(!regionMatch||!citiesMatch)continue;
 const names=[...citiesMatch[1].matchAll(/'([^']+)'/g)].map(m=>m[1]);
 for(const name of names)cityEntries.push({regionSlug:regionMatch[1],name,slug:`${name}태아보험`});
}
const supportCorpus=[files.gyeonggi,files.central,files.south,files.east,files.gyeongnam,files.jeju,files.gangwon].join('\n');
const missingRegions=REGION_SLUGS.filter(s=>!regionSlugs.includes(s));
const hasSupport=(slug)=>new RegExp(`(^|\\n)\\s*${slug.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')}:`).test(supportCorpus);
const missingSupport=cityEntries.filter(c=>!hasSupport(c.slug));
const missingEditorial=cityEntries.filter(c=>!files.content.includes(`'${c.regionSlug}/${c.slug}'`));
const missingRegionEditorial=REGION_SLUGS.filter(s=>!files.content.includes(`${s}:{intro:`));

const sourceUrls=[...supportCorpus.matchAll(/sourceUrl:'([^']+)'/g)].map(m=>m[1]);
const verifiedDates=[...supportCorpus.matchAll(/verifiedAt:'([^']+)'/g)].map(m=>m[1]);
const badSourceUrls=sourceUrls.filter(url=>!/^https:\/\//.test(url));
const badVerifiedDates=verifiedDates.filter(date=>!/^2026-\d{2}-\d{2}$/.test(date));
const requiredPageTokens=['getLocalEditorial','getInsuranceSeo','getContextualFaq','getRelatedLinks','getChecklistDetail','getSectionHeadings','<InsuranceInquiryForm','getInsuranceImages','relatedGuideSection'];
const missingPageTokens=requiredPageTokens.filter(t=>!files.page.includes(t));
const inquiryCount=(files.page.match(/<InsuranceInquiryForm/g)||[]).length;
const missingRouteTokens=['generateMetadata','canonical','getInsuranceSeo'].filter(t=>!files.route.includes(t));
const missingSitemapTokens=['regions.flatMap','keywordPages','/태아보험'].filter(t=>!files.sitemap.includes(t));
const imageChecks={webp:files.images.includes(".webp`"),fiveSlots:files.images.includes("padStart(2,'0')")&&files.images.includes('hubKeywords'),localSceneAlt:files.images.includes('sceneSets')&&files.images.includes('scenes[index]'),regionFolder:files.images.includes('${region.slug}/${city.slug}')};
const failedImageChecks=Object.entries(imageChecks).filter(([,v])=>!v).map(([k])=>k);
const seoChecks={localizedTitle:files.content.includes('태아보험 상담 | 가입시기·출산지원·보장 비교'),localizedDescription:files.content.includes('2026 지역 출산·육아 지원'),localizedH1:files.content.includes('태아보험 상담`'),baseFaq:files.content.includes('export function getInsuranceFaq'),contextualFaq:files.variants.includes('export function getContextualFaq'),relatedLinks:files.variants.includes('export function getRelatedLinks'),sectionHeadings:files.variants.includes('export function getSectionHeadings'),regionAwareEditorial:files.content.includes('CITY_PROFILES')&&files.content.includes('REGION_PROFILES')&&files.content.includes('cityKey')};
const failedSeoChecks=Object.entries(seoChecks).filter(([,v])=>!v).map(([k])=>k);
const collisionHandled=files.content.includes("'경기태아보험/광주태아보험'");
const noindexControl=files.site.includes('allowIndexing');
const contextualFaqCount=(files.variants.match(/question:/g)||[]).length;
const keywordLinkCount=(files.variants.match(/href:'\//g)||[]).length;
const publicInsuranceDir=path.join(root,'public/images/insurance');let actualWebpCount=0;if(fs.existsSync(publicInsuranceDir)){const walk=(dir)=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else if(entry.name.endsWith('.webp'))actualWebpCount++;}};walk(publicInsuranceDir);}
const errors=[];
if(missingRegions.length)errors.push(`광역지역 데이터 누락 ${missingRegions.length}`);
if(cityEntries.length===0)errors.push('도시 데이터 파싱 실패');
if(missingEditorial.length)errors.push(`도시 고유문구 누락 ${missingEditorial.length}`);
if(missingRegionEditorial.length)errors.push(`광역 고유문구 누락 ${missingRegionEditorial.length}`);
if(missingPageTokens.length)errors.push(`InsurancePage 연결 누락 ${missingPageTokens.length}`);
if(inquiryCount<2)errors.push('지역 페이지 상담폼 2개 배치 확인 실패');
if(missingRouteTokens.length)errors.push(`메타데이터 연결 누락 ${missingRouteTokens.length}`);
if(missingSitemapTokens.length)errors.push(`사이트맵 연결 누락 ${missingSitemapTokens.length}`);
if(failedSeoChecks.length)errors.push(`SEO 생성 규칙 누락 ${failedSeoChecks.length}`);
if(failedImageChecks.length)errors.push(`이미지 규칙 누락 ${failedImageChecks.length}`);
if(!collisionHandled)errors.push('광주광역시/경기 광주시 slug 충돌 미처리');
if(!noindexControl)errors.push('출시 전 인덱싱 제어 확인 실패');
if(badSourceUrls.length)errors.push(`지원정책 출처 URL 형식 오류 ${badSourceUrls.length}`);
if(badVerifiedDates.length)errors.push(`검증일 형식 오류 ${badVerifiedDates.length}`);
if(contextualFaqCount<8)errors.push('지역별 FAQ 변형 풀 부족');
if(keywordLinkCount<5)errors.push('관련 가이드 내부링크 풀 부족');
console.log('\n=== 보험 지역 페이지 대량 품질 감사 ===');
console.log(`광역지역: ${regionSlugs.length}/17`);console.log(`도시 URL 후보: ${cityEntries.length}개`);console.log(`도시 지원 데이터 미검증/누락: ${missingSupport.length}개${missingSupport.length?' -> '+missingSupport.map(c=>`${c.name}(${c.regionSlug})`).join(', '):''}`);console.log(`도시 고유 편집문구 누락: ${missingEditorial.length}개${missingEditorial.length?' -> '+missingEditorial.map(c=>`${c.regionSlug}/${c.slug}`).join(', '):''}`);console.log(`광역 고유 편집문구 누락: ${missingRegionEditorial.length}개`);console.log(`상담폼 배치 신호: ${inquiryCount}개`);console.log(`지역 FAQ 변형 풀: ${contextualFaqCount}개`);console.log(`관련 가이드 링크 풀: ${keywordLinkCount}개`);console.log(`이미지 규칙: ${failedImageChecks.length?'보완 '+failedImageChecks.join(', '):'통과'}`);console.log(`광주 slug 충돌 처리: ${collisionHandled?'확인':'실패'}`);console.log(`정책 출처 HTTPS 오류: ${badSourceUrls.length}개`);console.log(`정책 검증일 형식 오류: ${badVerifiedDates.length}개`);console.log(`실제 보험 WebP: ${actualWebpCount}개${actualWebpCount===0?' (바이너리 업로드 별도 필요)':''}`);console.log(`출시 인덱싱 제어: ${noindexControl?'확인':'누락'}`);
if(errors.length){console.log('\n감사 결과: 보완 필요');for(const e of errors)console.log(`  - ${e}`);process.exitCode=1;}else{console.log('\n감사 결과: 핵심 SEO·지역화·FAQ·내부링크·상담 구조 통과');if(missingSupport.length)console.log('주의: 공식 최신 지원금이 충분히 검증되지 않은 도시는 금액을 추정하지 않고 최신 공고 재확인 안내를 노출합니다.');if(actualWebpCount===0)console.log('주의: 이미지 경로/ALT 규칙은 준비됐지만 실제 WebP 바이너리 업로드는 별도 단계입니다.');}
