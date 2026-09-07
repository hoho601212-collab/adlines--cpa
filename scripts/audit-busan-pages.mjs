import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const flow=read('lib/busan-page-flow.ts');
const page=read('components/BusanDistrictPage.tsx');
const context=read('lib/busan-page-context.ts');
const focus=read('lib/busan-focus-notes.ts');

const slugs=[...flow.matchAll(/'([^']+(?:구|군)태아보험)':\{/g)].map(m=>m[1]);
const checkHeadings=[...flow.matchAll(/checkHeading:'([^']+)'/g)].map(m=>m[1]);
const supportHeadings=[...flow.matchAll(/supportHeading:'([^']+)'/g)].map(m=>m[1]);
const finalTitles=[...flow.matchAll(/finalTitle:'([^']+)'/g)].map(m=>m[1]);
const ctaLabels=[...flow.matchAll(/ctaLabel:'([^']+)'/g)].map(m=>m[1]);
const focusGroups=[...focus.matchAll(/^\s*'([^']+(?:구|군)태아보험)':\[(.*?)\],?\s*$/gm)].map(m=>({slug:m[1],body:m[2]}));
const focusNotes=focusGroups.flatMap(g=>[...g.body.matchAll(/'([^']+)'/g)].map(m=>m[1]));
const eachFocusGroupHasThree=focusGroups.every(g=>(g.body.match(/'[^']+'/g)||[]).length===3);

const checks={
 districtFlowCount:slugs.length===16&&new Set(slugs).size===16,
 uniqueCheckHeadings:checkHeadings.length===16&&new Set(checkHeadings).size===16,
 uniqueSupportHeadings:supportHeadings.length===16&&new Set(supportHeadings).size===16,
 uniqueFinalTitles:finalTitles.length===16&&new Set(finalTitles).size===16,
 uniqueCtaLabels:ctaLabels.length===17&&new Set(ctaLabels.slice(0,16)).size===16,
 flowMounted:page.includes("getBusanPageFlow")&&page.includes('flow.checkHeading')&&page.includes('flow.supportHeading')&&page.includes('flow.localHeading')&&page.includes('flow.finalTitle')&&page.includes('flow.ctaLabel'),
 seoAligned:page.includes('getBusanSeoIntent')&&page.includes('seoIntent.descriptionLead')&&page.includes('seoIntent.related'),
 topicFaqMounted:page.includes('getBusanTopicFaq')&&page.includes('topicFaq'),
 evidenceMounted:page.includes('getBusanEvidenceState')&&page.includes('evidence.badge'),
 seoIntentCoverage:(context.match(/titleTail:/g)||[]).length>=17,
 focusDistrictCoverage:focusGroups.length===16&&new Set(focusGroups.map(x=>x.slug)).size===16,
 focusNotesCount:focusNotes.length===48&&eachFocusGroupHasThree,
 focusNotesUnique:new Set(focusNotes).size===48,
 focusNotesMounted:page.includes("getBusanFocusNotes")&&page.includes('const focusNotes=')&&page.includes('<p>{focusNotes[i]}</p>'),
 genericFocusRemoved:!page.includes("i===0?'가입 전 현재 임신 주수와 심사조건을 확인하고")
};

const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
console.log('\n=== 부산 16개 구·군 태아보험 콘텐츠 차별화 감사 ===');
console.log(`구·군 흐름 데이터: ${checks.districtFlowCount?'16/16':'누락 또는 중복'}`);
console.log(`보험 H2 고유성: ${checks.uniqueCheckHeadings?'통과':'보완 필요'}`);
console.log(`지원 H2 고유성: ${checks.uniqueSupportHeadings?'통과':'보완 필요'}`);
console.log(`최종 CTA 제목 고유성: ${checks.uniqueFinalTitles?'통과':'보완 필요'}`);
console.log(`CTA 버튼 문구 고유성: ${checks.uniqueCtaLabels?'통과':'보완 필요'}`);
console.log(`보험 체크카드 설명: ${checks.focusDistrictCoverage&&checks.focusNotesCount&&checks.focusNotesUnique&&checks.focusNotesMounted&&checks.genericFocusRemoved?'16개 구·군 · 48개 고유 문장':'보완 필요'}`);
console.log(`SEO·FAQ·근거 상태 연결: ${checks.seoAligned&&checks.topicFaqMounted&&checks.evidenceMounted?'연결':'누락'}`);
if(failed.length){console.log(`실패 항목: ${failed.join(', ')}`);process.exitCode=1;}else console.log('감사 결과: 부산 16개 구·군 H2/H3·보험 체크문장·FAQ·CTA·SEO 문맥 차별화 통과');
