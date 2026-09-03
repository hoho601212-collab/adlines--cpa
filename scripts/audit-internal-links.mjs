import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const data=read('lib/insurance-data.ts');
const variants=read('lib/insurance-page-variants.ts');
const sitemap=read('app/sitemap.ts');
const page=read('components/InsurancePage.tsx');
const structured=read('lib/insurance-structured-data.ts');
const keywordPages=read('lib/keyword-pages.ts');

const regionSlugs=[...data.matchAll(/slug:\s*['"]([^'"]+태아보험)['"]/g)].map(m=>m[1]);
const keywordSlugs=[...keywordPages.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m=>m[1]);
const relatedHrefs=[...variants.matchAll(/href:'([^']+)'/g)].map(m=>m[1]);
const knownKeywordPaths=new Set(keywordSlugs.map(s=>`/${s}`));
const badRelated=relatedHrefs.filter(h=>h!=='/태아보험'&&!h.startsWith('/태아보험/')&&!knownKeywordPaths.has(h));

const checks={
  regionDirectory:page.includes('region.cities.map'),
  nearbyCities:page.includes('nearbyCities.map'),
  relatedGuides:page.includes('relatedLinks.map'),
  breadcrumbs:page.includes('breadcrumbs'),
  itemListSchema:structured.includes("'@type':'ItemList'"),
  webPageSchema:structured.includes("'@type':'WebPage'"),
  faqSchema:structured.includes("'@type':'FAQPage'"),
  breadcrumbSchema:structured.includes("'@type':'BreadcrumbList'"),
  sitemapRegions:sitemap.includes('regions.flatMap'),
  sitemapKeywords:sitemap.includes('keywordPages')
};
const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);

console.log('\n=== 보험 내부링크·Schema 감사 ===');
console.log(`지역 slug 스캔: ${regionSlugs.length}개`);
console.log(`키워드 페이지 slug 스캔: ${keywordSlugs.length}개`);
console.log(`관련 가이드 링크: ${relatedHrefs.length}개`);
console.log(`유효하지 않은 관련 링크: ${badRelated.length?badRelated.join(', '):'없음'}`);
console.log(`구조화데이터/내부링크 검사: ${failed.length?failed.join(', '):'통과'}`);

if(badRelated.length||failed.length){process.exitCode=1;console.log('감사 결과: 보완 필요');}
else console.log('감사 결과: 내부링크·Schema 핵심 항목 통과');
