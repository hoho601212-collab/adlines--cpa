import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const files={
  data:read('lib/insurance-data.ts'),
  content:read('lib/insurance-content.ts'),
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
  sitemap:read('app/sitemap.ts')
};

const citySlugs=[...files.data.matchAll(/slug:\s*['"]([^'"]+태아보험)['"]/g)].map(m=>m[1]);
const unique=[...new Set(citySlugs)].filter(s=>!['서울태아보험','부산태아보험','대구태아보험','인천태아보험','광주태아보험','대전태아보험','울산태아보험','세종태아보험','경기태아보험','강원태아보험','충북태아보험','충남태아보험','전북태아보험','전남태아보험','경북태아보험','경남태아보험','제주태아보험'].includes(s));
const supportCorpus=[files.gyeonggi,files.central,files.south,files.east,files.gyeongnam,files.jeju,files.gangwon].join('\n');
const editorialBlock=files.content.split('const REGION_EDITORIAL')[0];
const missingSupport=unique.filter(s=>!supportCorpus.includes(`${s}:`));
const missingEditorial=unique.filter(s=>!editorialBlock.includes(`${s}:`));

const requiredPageTokens=['getLocalEditorial','getInsuranceSeo','localEditorial.checkpoints','localEditorial.supportNote','<InsuranceInquiryForm'];
const missingPageTokens=requiredPageTokens.filter(t=>!files.page.includes(t));
const requiredRouteTokens=['generateMetadata','canonical','getInsuranceSeo'];
const missingRouteTokens=requiredRouteTokens.filter(t=>!files.route.includes(t));
const sitemapOk=files.sitemap.includes('태아보험');

console.log('\n=== 보험 지역 페이지 품질 감사 ===');
console.log(`도시 URL 후보: ${unique.length}개`);
console.log(`도시별 지원 데이터 누락: ${missingSupport.length}개`);
if(missingSupport.length) console.log('  - '+missingSupport.join(', '));
console.log(`도시별 고유 편집문구 누락: ${missingEditorial.length}개`);
if(missingEditorial.length) console.log('  - '+missingEditorial.join(', '));
console.log(`InsurancePage 필수 연결 누락: ${missingPageTokens.length?missingPageTokens.join(', '):'없음'}`);
console.log(`메타데이터 라우트 필수 연결 누락: ${missingRouteTokens.length?missingRouteTokens.join(', '):'없음'}`);
console.log(`사이트맵 태아보험 경로: ${sitemapOk?'확인':'누락'}`);

if(missingSupport.length||missingEditorial.length||missingPageTokens.length||missingRouteTokens.length||!sitemapOk){
  console.log('\n감사 결과: 보완 필요');
  process.exitCode=1;
}else{
  console.log('\n감사 결과: 핵심 항목 통과');
}
