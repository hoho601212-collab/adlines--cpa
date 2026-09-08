import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const files=['lib/regional-support.ts','lib/city-support.ts','lib/city-support-central.ts','lib/city-support-south.ts','lib/city-support-east.ts','lib/city-support-gyeongnam.ts','lib/city-support-jeju.ts','lib/city-support-gangwon.ts'];
const sources=files.map(file=>({file,text:fs.readFileSync(path.join(root,file),'utf8')}));
const corpus=sources.map(s=>s.text).join('\n');
const constants=new Map();
for(const {text} of sources){
 for(const m of text.matchAll(/const\s+([A-Z][A-Z0-9_]*)\s*=\s*'([^']+)'/g))constants.set(m[1],m[2]);
}
const blocks=[...corpus.matchAll(/\{title:'[^']+'[\s\S]*?verifiedAt:'[^']+'\}/g)].map(m=>m[0]);
const pick=(block,key)=>block.match(new RegExp(`${key}:'([^']+)'`))?.[1]||'';
const pickUrl=(block)=>{
 const literal=pick(block,'sourceUrl');
 if(literal)return literal;
 const identifier=block.match(/sourceUrl:([A-Z][A-Z0-9_]*)/)?.[1];
 return identifier?constants.get(identifier)||'':'';
};
const rows=blocks.map(block=>({block,title:pick(block,'title'),sourceName:pick(block,'sourceName'),url:pickUrl(block),verifiedAt:pick(block,'verifiedAt')}));
const now=new Date();
const currentYear=now.getFullYear();
const day=86400000;
const invalid=rows.filter(r=>!/^2026-\d{2}-\d{2}$/.test(r.verifiedAt)||!/^https:\/\//.test(r.url));
const aged=rows.map(r=>({...r,days:Math.max(0,Math.floor((now.getTime()-new Date(`${r.verifiedAt}T00:00:00+09:00`).getTime())/day))})).filter(r=>Number.isFinite(r.days)&&r.days>120).sort((a,b)=>b.days-a.days);
const planning=rows.filter(r=>/계획|예산|업무계획|방향/.test(`${r.title} ${r.sourceName}`));
const planningDisclosure=/예산상|예산 편성|시행공고|시행 여부|계획 단계|계획 기준|확정 전|공고 확인|예산 확정|조례 개정|접수 여부|신청 개시|시행지침/;
const planningUnclear=planning.filter(r=>!planningDisclosure.test(r.block));
const legislative=rows.filter(r=>/조례|심사자료|의회/.test(r.sourceName));
const legislativeDisclosure=/조례안 기준|조례상|조례 기준|현행 조례|시행공고|시행 여부|공포|시행일|계획 단계|확정 전|공고 확인|예산 확정|최신 조례|조례 개정/;
const legislativeUnclear=legislative.filter(r=>!legislativeDisclosure.test(r.block));
const indirectPatterns=[
 ['복지로',/bokjiro\.go\.kr|복지로/],
 ['광역 통합자료',/경기도청 시군별|경남바로서비스|가치자람/],
 ['조례·법령 DB',/law\.go\.kr|조례/]
];
const indirect=rows.filter(r=>indirectPatterns.some(([,pattern])=>pattern.test(`${r.sourceName} ${r.url}`)));
const sourceYear=(row)=>{const m=`${row.title} ${row.sourceName} ${row.url}`.match(/20(?:1\d|2\d)/g)||[];const years=m.map(Number).filter(y=>y>=2015&&y<=2099);return years.length?Math.max(...years):null};
const legacy=rows.map(r=>({...r,sourceYear:sourceYear(r)})).filter(r=>r.sourceYear&&r.sourceYear<currentYear&&!`${r.title} ${r.sourceName}`.includes(String(currentYear)));

console.log('\n=== 출산·육아 정책 최신성 감사 ===');
console.log(`정책 항목: ${rows.length}개`);
console.log(`형식 오류: ${invalid.length}개`);
console.log(`120일 초과 재확인 대상: ${aged.length}개`);
console.log(`계획·예산 근거 항목: ${planning.length}개`);
console.log(`계획·예산 시행상태 고지 누락: ${planningUnclear.length}개`);
console.log(`조례·의회 근거 항목: ${legislative.length}개`);
console.log(`조례 시행상태 고지 누락: ${legislativeUnclear.length}개`);
console.log(`간접·통합 출처 의존 항목: ${indirect.length}개`);
console.log(`이전 연도 근거 후보: ${legacy.length}개`);
if(invalid.length)console.log('형식 오류 상세: '+invalid.map(r=>`${r.title}[url=${r.url||'EMPTY'}, verifiedAt=${r.verifiedAt||'EMPTY'}]`).join(' | '));
if(aged.length)console.log('재확인 우선: '+aged.slice(0,15).map(r=>`${r.title}(${r.days}일)`).join(', '));
if(planning.length)console.log('계획·예산 근거 확인: '+planning.slice(0,15).map(r=>r.title).join(', '));
if(planningUnclear.length)console.log('계획·예산 시행상태 보완 우선: '+planningUnclear.slice(0,15).map(r=>r.title).join(', '));
if(legislativeUnclear.length)console.log('조례 시행상태 보완 우선: '+legislativeUnclear.slice(0,15).map(r=>r.title).join(', '));
if(indirect.length)console.log('직접 지자체 출처 승격 후보: '+indirect.slice(0,20).map(r=>`${r.title}(${r.sourceName})`).join(', '));
if(legacy.length)console.log('최신 연도 공고 확인 우선: '+legacy.slice(0,15).map(r=>`${r.title}(${r.sourceYear})`).join(', '));
if(invalid.length||planningUnclear.length||legislativeUnclear.length){console.log('감사 결과: 근거 표현 보완 필요');process.exitCode=1;}else console.log('감사 결과: 기본 형식 통과 · 조례/계획/예산 근거는 시행상태를 별도 표시');
