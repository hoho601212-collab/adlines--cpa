import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const structured=read('lib/insurance-structured-data.ts');
const page=read('components/InsurancePage.tsx');
const busanPage=read('components/BusanDistrictPage.tsx');
const busanSeo=read('lib/busan-seo.ts');
const route=read('app/태아보험/[[...slug]]/page.tsx');
const seoVariants=read('lib/insurance-seo-variants.ts');
const site=read('lib/site.ts');

const checks={
 localizedSeoSource:structured.includes("import {getLocalizedInsuranceSeo} from './insurance-seo-variants'"),
 structuredSeoUsage:structured.includes('const seo=getLocalizedInsuranceSeo(region,city)'),
 h1NameAlignment:structured.includes('name:`${seo.h1} ${seo.h1Accent}`')&&page.includes('<h1>{seo.h1}<br/><em>{seo.h1Accent}</em></h1>'),
 sharedDescription:seoVariants.includes('finalizeInsuranceSeoDescription')&&structured.includes('description:seo.description')&&route.includes('description:seo.description')&&!route.includes('polishSeoDescription'),
 busanSharedSeo:route.includes("getBusanSeoCopy")&&busanPage.includes("getBusanSeoCopy")&&busanSeo.includes('schemaName:`${district.name} 태아보험 상담 ${district.theme}`'),
 busanDescriptionAlignment:route.includes('description:seo.description')&&busanPage.includes('description:seo.description')&&busanPage.includes('name:seo.schemaName'),
 busanCanonicalEntity:busanPage.includes('"@id":`${canonical}#webpage`')&&busanPage.includes('isPartOf:{"@id":`${site.baseUrl}#website`}'),
 reviewedDate:structured.includes('dateModified:site.contentReviewedAt')&&busanPage.includes('dateModified:site.contentReviewedAt'),
 canonicalEntity:structured.includes("'@id':`${url}#webpage`")&&structured.includes('url,name:`${seo.h1} ${seo.h1Accent}`'),
 canonicalHost:site.includes("baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adlines.co.kr'")
};
const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
console.log('\n=== 태아보험 Schema 정합성 감사 ===');
console.log(`지역별 SEO 소스: ${checks.localizedSeoSource&&checks.structuredSeoUsage?'연결':'보완 필요'}`);
console.log(`화면 H1 ↔ WebPage.name: ${checks.h1NameAlignment?'일치':'보완 필요'}`);
console.log(`메타 ↔ Schema 설명 소스: ${checks.sharedDescription?'단일화':'보완 필요'}`);
console.log(`부산 16개 구·군 SEO 소스: ${checks.busanSharedSeo?'단일화':'보완 필요'}`);
console.log(`부산 메타 ↔ Schema 설명: ${checks.busanDescriptionAlignment?'일치':'보완 필요'}`);
console.log(`부산 WebPage canonical entity: ${checks.busanCanonicalEntity?'확인':'보완 필요'}`);
console.log(`검토일 ↔ dateModified: ${checks.reviewedDate?'연결':'보완 필요'}`);
console.log(`WebPage canonical entity: ${checks.canonicalEntity?'확인':'보완 필요'}`);
console.log(`canonical 기본 호스트: ${checks.canonicalHost?'www.adlines.co.kr':'보완 필요'}`);
if(failed.length){console.log(`실패 항목: ${failed.join(', ')}`);process.exitCode=1;}else console.log('Schema 정합성 감사 결과: 통과');
