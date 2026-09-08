import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const content=read('lib/insurance-content.ts');
const seoVariants=read('lib/insurance-seo-variants.ts');
const structured=read('lib/insurance-structured-data.ts');
const page=read('components/InsurancePage.tsx');

const cityEntries=[...content.matchAll(/^\s*'([^']+태아보험\/[^']+태아보험)':\{intro:'([^']+)',checks:\[([^\]]+)\],note:'([^']+)'\},?$/gm)].map(m=>({
 key:m[1],intro:m[2],checks:[...m[3].matchAll(/'([^']+)'/g)].map(x=>x[1]),note:m[4]
}));
const regionEntries=[...content.matchAll(/^\s*([가-힣]+태아보험):\{intro:'([^']+)',checks:\[([^\]]+)\],note:'([^']+)'\},?$/gm)].map(m=>({
 key:m[1],intro:m[2],checks:[...m[3].matchAll(/'([^']+)'/g)].map(x=>x[1]),note:m[4]
}));

function labelFromSlug(slug){return slug.replace(/태아보험$/,'');}
function polishedDescription(regionSlug,citySlug,checks){
 const region=labelFromSlug(regionSlug);
 const city=citySlug?labelFromSlug(citySlug):'';
 const place=city?`${region} ${city}`:region;
 const focus=checks.slice(0,2).join(' · ');
 return `${place} 태아보험 상담 전 확인할 항목: ${focus}. 가입 가능시기, 보장·특약과 2026 지역 출산·육아 지원을 공식 출처 기준으로 정리했습니다.`;
}
function keywordCount(text,keyword){return (text.match(new RegExp(keyword,'g'))||[]).length;}

const outputs=[
 ...regionEntries.map(entry=>({key:entry.key,description:polishedDescription(entry.key,undefined,entry.checks)})),
 ...cityEntries.map(entry=>{const[region,city]=entry.key.split('/');return{key:entry.key,description:polishedDescription(region,city,entry.checks)}})
];
const badLengths=outputs.filter(x=>x.description.length<70||x.description.length>180);
const keywordHeavy=outputs.filter(x=>keywordCount(x.description,'태아보험')>2);
const duplicateDescriptions=outputs.length-new Set(outputs.map(x=>x.description)).size;
const intentTails=[...seoVariants.matchAll(/titleTail:'([^']+)'/g)].map(m=>m[1]);
const uniqueIntentTails=new Set(intentTails);
const h1SchemaAligned=structured.includes('getLocalizedInsuranceSeo')&&structured.includes('const seo=getLocalizedInsuranceSeo(region,city)')&&structured.includes('name:`${seo.h1} ${seo.h1Accent}`')&&page.includes('<h1>{seo.h1}<br/><em>{seo.h1Accent}</em></h1>');
const schemaDescriptionAligned=structured.includes('description:seo.description');
const linkRotation=seoVariants.includes('(index+step)%region.cities.length')&&page.includes('getRotatingNearbyCities(region,city)')&&!page.includes('region.cities.filter(c=>c.slug!==city.slug).slice(0,6)');

const checks={
 profileCoverage:regionEntries.length===17&&cityEntries.length===52,
 descriptionLength:badLengths.length===0,
 keywordModeration:keywordHeavy.length===0,
 descriptionUniqueness:duplicateDescriptions===0,
 intentDiversity:uniqueIntentTails.size>=8,
 h1SchemaAligned,
 schemaDescriptionAligned,
 linkRotation
};
const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
console.log('\n=== 지역 태아보험 SEO 출력 감사 ===');
console.log(`프로필: 광역 ${regionEntries.length}/17 · 도시 ${cityEntries.length}/52`);
console.log(`메타 설명 길이: ${badLengths.length?'보완 '+badLengths.map(x=>`${x.key}(${x.description.length})`).join(', '):'69개 기준 통과'}`);
console.log(`태아보험 키워드 반복: ${keywordHeavy.length?'보완 '+keywordHeavy.map(x=>x.key).join(', '):'과다 반복 없음'}`);
console.log(`설명문 중복: ${duplicateDescriptions===0?'없음':`${duplicateDescriptions}건`}`);
console.log(`SEO 의도 문구 다양성: ${uniqueIntentTails.size}종`);
console.log(`화면 H1 ↔ WebPage Schema: ${h1SchemaAligned?'일치':'보완 필요'}`);
console.log(`메타 설명 ↔ Schema 설명: ${schemaDescriptionAligned?'동일 소스':'보완 필요'}`);
console.log(`도시 내부링크 순환분산: ${linkRotation?'확인':'보완 필요'}`);
if(failed.length){console.log(`실패 항목: ${failed.join(', ')}`);process.exitCode=1;}else console.log('SEO 출력 감사 결과: 통과');
