import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const robots=read('app/robots.ts');
const sitemap=read('app/sitemap.ts');
const site=read('lib/site.ts');
const route=read('app/태아보험/[[...slug]]/page.tsx');

const checks={
 canonicalHost:site.includes("baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adlines.co.kr'"),
 indexingFlag:site.includes("allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'"),
 robotsGate:robots.includes('if(!site.allowIndexing)')&&robots.includes("disallow:'/'")&&robots.includes("allow:'/'"),
 robotsSitemap:robots.includes('sitemap:`${site.baseUrl}/sitemap.xml`'),
 sitemapHost:sitemap.includes('url:site.baseUrl')&&sitemap.includes('`${site.baseUrl}/태아보험`'),
 stableLastmod:sitemap.includes('site.contentReviewedAt')&&!sitemap.includes('new Date()'),
 invalidRoutes404:route.includes('if(slug.length>2)return notFound()')&&route.includes('if(!region)return notFound()')&&route.includes('if(slug[1]&&!city)return notFound()')
};
const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
console.log('\n=== 검색 인덱싱 준비 감사 ===');
console.log(`canonical 기본 호스트: ${checks.canonicalHost?'www.adlines.co.kr':'보완 필요'}`);
console.log(`환경변수 인덱싱 게이트: ${checks.indexingFlag?'확인':'보완 필요'}`);
console.log(`robots 인덱싱 전/후 전환: ${checks.robotsGate?'확인':'보완 필요'}`);
console.log(`robots sitemap 연결: ${checks.robotsSitemap?'확인':'보완 필요'}`);
console.log(`sitemap canonical 호스트: ${checks.sitemapHost?'확인':'보완 필요'}`);
console.log(`sitemap lastmod 안정화: ${checks.stableLastmod?'확인':'보완 필요'}`);
console.log(`잘못된 지역 경로 404 처리: ${checks.invalidRoutes404?'확인':'보완 필요'}`);
if(failed.length){console.log(`실패 항목: ${failed.join(', ')}`);process.exitCode=1;}else console.log('인덱싱 준비 감사 결과: 통과');
