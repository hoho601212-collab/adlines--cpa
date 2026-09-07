import fs from 'node:fs';import path from 'node:path';
const root=process.cwd(),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const flow=read('lib/busan-page-flow.ts'),page=read('components/BusanDistrictPage.tsx'),context=read('lib/busan-page-context.ts'),focus=read('lib/busan-focus-notes.ts'),support=read('lib/busan-support-notes.ts'),faqData=read('lib/busan-district-faqs.ts');
const slugs=[...flow.matchAll(/'([^']+(?:구|군)태아보험)':\{/g)].map(m=>m[1]),checkHeadings=[...flow.matchAll(/checkHeading:'([^']+)'/g)].map(m=>m[1]),supportHeadings=[...flow.matchAll(/supportHeading:'([^']+)'/g)].map(m=>m[1]),finalTitles=[...flow.matchAll(/finalTitle:'([^']+)'/g)].map(m=>m[1]),ctaLabels=[...flow.matchAll(/ctaLabel:'([^']+)'/g)].map(m=>m[1]);
const focusGroups=[...focus.matchAll(/^\s*'([^']+(?:구|군)태아보험)':\[(.*?)\],?\s*$/gm)].map(m=>({slug:m[1],body:m[2]})),focusNotes=focusGroups.flatMap(g=>[...g.body.matchAll(/'([^']+)'/g)].map(m=>m[1])),eachFocusGroupHasThree=focusGroups.every(g=>(g.body.match(/'[^']+'/g)||[]).length===3);
const faqGroups=[...faqData.matchAll(/^\s*'([^']+(?:구|군)태아보험)':\[(.*?)\n\s*\],?$/gms)].map(m=>({slug:m[1],body:m[2]}));
const faqQuestions=faqGroups.flatMap(g=>[...g.body.matchAll(/q:'([^']+)'/g)].map(m=>m[1]));
const eachFaqGroupHasTwo=faqGroups.every(g=>(g.body.match(/\{q:'/g)||[]).length===2);
const supportKinds=['deadline','residence','noncash','cash','service','channel','common'];
const checks={
 districtFlowCount:slugs.length===16&&new Set(slugs).size===16,
 uniqueCheckHeadings:checkHeadings.length===16&&new Set(checkHeadings).size===16,
 uniqueSupportHeadings:supportHeadings.length===16&&new Set(supportHeadings).size===16,
 uniqueFinalTitles:finalTitles.length===16&&new Set(finalTitles).size===16,
 uniqueCtaLabels:ctaLabels.length===17&&new Set(ctaLabels.slice(0,16)).size===16,
 flowMounted:page.includes('getBusanPageFlow')&&page.includes('flow.checkHeading')&&page.includes('flow.supportHeading')&&page.includes('flow.localHeading')&&page.includes('flow.finalTitle')&&page.includes('flow.ctaLabel'),
 seoAligned:page.includes('getBusanSeoIntent')&&page.includes('seoIntent.descriptionLead')&&page.includes('seoIntent.related'),
 topicFaqMounted:page.includes('getBusanTopicFaq')&&page.includes('topicFaq'),
 evidenceMounted:page.includes('getBusanEvidenceState')&&page.includes('evidence.badge'),
 seoIntentCoverage:(context.match(/titleTail:/g)||[]).length>=17,
 focusDistrictCoverage:focusGroups.length===16&&new Set(focusGroups.map(x=>x.slug)).size===16,
 focusNotesCount:focusNotes.length===48&&eachFocusGroupHasThree,
 focusNotesUnique:new Set(focusNotes).size===48,
 focusNotesMounted:page.includes('getBusanFocusNotes')&&page.includes('const focusNotes=getBusanFocusNotes(district);')&&page.includes('<p>{focusNotes[i]}</p>'),
 supportKindsCovered:supportKinds.every(k=>support.includes(`${k}:`)),
 supportNotesMounted:page.includes('getBusanSupportNotes')&&page.includes('const supportNotes=getBusanSupportNotes(district);')&&page.includes('<p>{supportNotes[i]}</p>'),
 genericSupportRemoved:!page.includes('대상, 주민등록·거주요건, 신청기간, 지급수단을 최신 공식 안내에서 확인하세요.'),
 districtFaqCoverage:faqGroups.length===16&&new Set(faqGroups.map(x=>x.slug)).size===16&&eachFaqGroupHasTwo,
 districtFaqQuestions:faqQuestions.length===32&&new Set(faqQuestions).size===32,
 districtFaqMounted:page.includes('getBusanDistrictFaqs')&&page.includes('const faq=[topicFaq,...getBusanDistrictFaqs(district)];'),
 genericFaqRemoved:!page.includes('에 살면 태아보험 보장내용이 달라지나요?')&&!page.includes('출산지원과 태아보험은 함께 받을 수 있나요?')
};
const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
console.log('\n=== 부산 16개 구·군 태아보험 콘텐츠 차별화 감사 ===');
console.log(`구·군 흐름 데이터: ${checks.districtFlowCount?'16/16':'누락 또는 중복'}`);
console.log(`보험 H2 고유성: ${checks.uniqueCheckHeadings?'통과':'보완 필요'}`);
console.log(`지원 H2 고유성: ${checks.uniqueSupportHeadings?'통과':'보완 필요'}`);
console.log(`최종 CTA 제목 고유성: ${checks.uniqueFinalTitles?'통과':'보완 필요'}`);
console.log(`보험 체크카드 설명: ${checks.focusDistrictCoverage&&checks.focusNotesCount&&checks.focusNotesUnique&&checks.focusNotesMounted?'16개 구·군 · 48개 고유 문장':'보완 필요'}`);
console.log(`지역지원 체크카드 설명: ${checks.supportKindsCovered&&checks.supportNotesMounted&&checks.genericSupportRemoved?'7개 정책유형 자동 분기':'보완 필요'}`);
console.log(`지역 FAQ 고유성: ${checks.districtFaqCoverage&&checks.districtFaqQuestions&&checks.districtFaqMounted&&checks.genericFaqRemoved?'16개 구·군 · 추가 32개 고유 질문':'보완 필요'}`);
console.log(`SEO·FAQ·근거 상태 연결: ${checks.seoAligned&&checks.topicFaqMounted&&checks.evidenceMounted?'연결':'누락'}`);
if(failed.length){console.log(`실패 항목: ${failed.join(', ')}`);process.exitCode=1;}else console.log('감사 결과: 부산 구·군 보험·지원 카드·지역 FAQ·CTA·SEO 문맥 차별화 통과');
