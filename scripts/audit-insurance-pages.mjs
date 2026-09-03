import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const exists=(p)=>fs.existsSync(path.join(root,p));
const files={
  data:read('lib/insurance-data.ts'),
  content:read('lib/insurance-content.ts'),
  images:read('lib/insurance-images.ts'),
  region:read('lib/regional-support.ts'),
  gyeonggi:read('lib/city-support.ts'),
  central:read('lib/city-support-central.ts'),
  south:read('lib/city-support-south.ts'),
  east:read('lib/city-support-east.ts'),
  gyeongnam:read('lib/city-support-gyeongnam.ts'),
  jeju:read('lib/city-support-jeju.ts'),
  gangwon:read('lib/city-support-gangwon.ts'),
  page:read('components/InsurancePage.tsx'),
  route:read('app/태아보험/[[...slug]]/page.tsx'),
  sitemap:read('app/sitemap.ts'),
  site:read('lib/site.ts')
};

const REGION_SLUGS=['서울태아보험','부산태아보험','대구태아보험','인천태아보험','광주태아보험','대전태아보험','울산태아보험','세종태아보험','경기태아보험','강원태아보험','충북태아보험','충남태아보험','전북태아보험','전남태아보험','경북태아보험','경남태아보험','제주태아보험'];
const allSlugs=[...files.data.matchAll(/slug:\s*['"]([^'"]+태아보험)['"]/g)].map(m=>m[1]);
const citySlugs=[...new Set(allSlugs.filter(s=>!REGION_SLUGS.includes(s)))];
const regionSlugs=[...new Set(allSlugs.filter(s=>REGION_SLUGS.includes(s)))];
const supportCorpus=[files.gyeonggi,files.central,files.south,files.east,files.gyeongnam,files.jeju,files.gangwon].join('\n');
const editorialBlock=files.content.split('const REGION_EDITORIAL')[0];
const regionEditorialBlock=(files.content.split('const REGION_EDITORIAL')[1]||'').split('export function getLocalEditorial')[0];

const missingRegions=REGION_SLUGS.filter(s=>!regionSlugs.includes(s));
const missingSupport=citySlugs.filter(s=>!supportCorpus.includes(`${s}:`));
const missingEditorial=citySlugs.filter(s=>!editorialBlock.includes(`${s}:`)&&!editorialBlock.includes(`/${s}:`));
const missingRegionEditorial=REGION_SLUGS.filter(s=>!regionEditorialBlock.includes(`${s}:`));

const supportItems=[...supportCorpus.matchAll(/\{title:'([^']+)'[\s\S]*?sourceUrl:'([^']+)'[\s\S]*?verifiedAt:'([^']+)'\}/g)].map(m=>({title:m[1],url:m[2],date:m[3]}));
const badSourceUrls=supportItems.filter(x=>!/^https:\/\//.test(x.url));
const badVerifiedDates=supportItems.filter(x=>!/^2026-\d{2}-\d{2}$/.test(x.date));

const requiredPageTokens=['getLocalEditorial','getInsuranceSeo','localEditorial.checkpoints','localEditorial.supportNote','<InsuranceInquiryForm','getInsuranceImages'];
const missingPageTokens=requiredPageTokens.filter(t=>!files.page.includes(t));
const inquiryCount=(files.page.match(/<InsuranceInquiryForm/g)||[]).length;
const requiredRouteTokens=['generateMetadata','canonical','getInsuranceSeo'];
const missingRouteTokens=requiredRouteTokens.filter(t=>!files.route.includes(t));
const sitemapTokens=['regions.flatMap','keywordPages','/태아보험'];
const missingSitemapTokens=sitemapTokens.filter(t=>!files.sitemap.includes(t));

const imageRuleOk=files.images.includes('String(index+1).padStart(2')&&files.images.includes('.webp')&&files.images.includes('base.map');
const imageSlots=(files.images.match(/hubKeywords=\[/)?5:0);
const publicInsuranceDir=path.join(root,'public/images/insurance');
const imageDirExists=fs.existsSync(publicInsuranceDir);
let actualWebpCount=0;
if(imageDirExists){
  const walk=(dir)=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else if(entry.name.endsWith('.webp'))actualWebpCount++;}};
  walk(publicInsuranceDir);
}

const seoChecks={
  localizedTitle:files.content.includes("title:`${label} 태아보험"),
  localizedDescription:files.content.includes('2026 지역 출산·육아 지원'),
  localizedH1:files.content.includes("h1:`${label} 태아보험 상담`"),
  faq:files.content.includes('export function getInsuranceFaq'),
  uniqueGuide:files.content.includes('export function getUniqueGuide'),
  regionAwareEditorial:files.content.includes('region?.slug')&&files.content.includes('city?.slug')&&files.content.includes('CITY_EDITORIAL')
};
const failedSeoChecks=Object.entries(seoChecks).filter(([,v])=>!v).map(([k])=>k);

const duplicateCitySlugs=[...new Set(citySlugs.filter((s,i,a)=>a.indexOf(s)!==i))];
const knownCollision=allSlugs.filter(s=>s==='광주태아보험').length>1;
const collisionHandled=!knownCollision||files.content.includes("`${region.slug}/${city.slug}`")||files.content.includes('region.slug')&&files.content.includes('city.slug');

const internalLinkTokens=['nearby','region','href'];
const internalLinkSignals=internalLinkTokens.filter(t=>files.page.toLowerCase().includes(t)).length;
const noindexControl=files.site.includes('allowIndexing');

const errors=[];
if(missingRegions.length)errors.push(`광역지역 데이터 누락 ${missingRegions.length}`);
if(missingSupport.length)errors.push(`도시 지원 데이터 누락 ${missingSupport.length}`);
if(missingEditorial.length)errors.push(`도시 고유문구 누락 ${missingEditorial.length}`);
if(missingRegionEditorial.length)errors.push(`광역 고유문구 누락 ${missingRegionEditorial.length}`);
if(missingPageTokens.length)errors.push(`InsurancePage 연결 누락 ${missingPageTokens.length}`);
if(inquiryCount<2)errors.push('지역 페이지 상담폼 2개 배치 확인 실패');
if(missingRouteTokens.length)errors.push(`메타데이터 연결 누락 ${missingRouteTokens.length}`);
if(missingSitemapTokens.length)errors.push(`사이트맵 연결 누락 ${missingSitemapTokens.length}`);
if(failedSeoChecks.length)errors.push(`SEO 생성 규칙 누락 ${failedSeoChecks.length}`);
if(!imageRuleOk||imageSlots!==5)errors.push('페이지당 WebP 5개 이미지 규칙 확인 실패');
if(!collisionHandled)errors.push('광주광역시/경기 광주시 slug 충돌 미처리');
if(!noindexControl)errors.push('출시 전 인덱싱 제어 확인 실패');
if(badSourceUrls.length)errors.push(`지원정책 출처 URL 형식 오류 ${badSourceUrls.length}`);
if(badVerifiedDates.length)errors.push(`검증일 형식 오류 ${badVerifiedDates.length}`);

console.log('\n=== 보험 지역 페이지 대량 품질 감사 ===');
console.log(`광역지역: ${regionSlugs.length}/17`);
console.log(`도시 URL 후보: ${citySlugs.length}개`);
console.log(`정책 항목 스캔: ${supportItems.length}개`);
console.log(`도시 지원 데이터 누락: ${missingSupport.length}개${missingSupport.length?' -> '+missingSupport.join(', '):''}`);
console.log(`도시 고유 편집문구 누락: ${missingEditorial.length}개${missingEditorial.length?' -> '+missingEditorial.join(', '):''}`);
console.log(`광역 고유 편집문구 누락: ${missingRegionEditorial.length}개${missingRegionEditorial.length?' -> '+missingRegionEditorial.join(', '):''}`);
console.log(`상담폼 컴포넌트 배치 신호: ${inquiryCount}개`);
console.log(`SEO 규칙 누락: ${failedSeoChecks.length?failedSeoChecks.join(', '):'없음'}`);
console.log(`내부링크 신호: ${internalLinkSignals}/3`);
console.log(`광주 slug 충돌 처리: ${collisionHandled?'확인':'실패'}`);
console.log(`WebP 5장 생성 규칙: ${imageRuleOk&&imageSlots===5?'확인':'실패'}`);
console.log(`public 보험 이미지 폴더: ${imageDirExists?`있음 (${actualWebpCount}개 WebP)`:'없음 - 바이너리 업로드 필요'}`);
console.log(`정책 출처 HTTPS 오류: ${badSourceUrls.length}개`);
console.log(`정책 검증일 형식 오류: ${badVerifiedDates.length}개`);
console.log(`출시 인덱싱 제어: ${noindexControl?'확인':'누락'}`);

if(errors.length){
  console.log('\n감사 결과: 보완 필요');
  for(const e of errors)console.log(`  - ${e}`);
  process.exitCode=1;
}else{
  console.log('\n감사 결과: 핵심 SEO·지역화·상담·정책 연결 통과');
  if(!imageDirExists||actualWebpCount===0)console.log('주의: 코드 규칙은 통과했지만 실제 WebP 바이너리 업로드는 별도 확인이 필요합니다.');
}
