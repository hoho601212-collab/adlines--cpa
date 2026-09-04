import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const files=['lib/regional-support.ts','lib/city-support.ts','lib/city-support-central.ts','lib/city-support-south.ts','lib/city-support-east.ts','lib/city-support-gyeongnam.ts','lib/city-support-jeju.ts','lib/city-support-gangwon.ts'];
const corpus=files.map(f=>fs.readFileSync(path.join(root,f),'utf8')).join('\n');
const rows=[...corpus.matchAll(/title:'([^']+)'[\s\S]*?sourceName:'([^']+)'[\s\S]*?sourceUrl:'([^']+)'[\s\S]*?verifiedAt:'([^']+)'/g)].map(m=>({title:m[1],sourceName:m[2],url:m[3],verifiedAt:m[4]}));
const now=Date.now();
const day=86400000;
const invalid=rows.filter(r=>!/^2026-\d{2}-\d{2}$/.test(r.verifiedAt)||!/^https:\/\//.test(r.url));
const aged=rows.map(r=>({...r,days:Math.max(0,Math.floor((now-new Date(`${r.verifiedAt}T00:00:00+09:00`).getTime())/day))})).filter(r=>Number.isFinite(r.days)&&r.days>120).sort((a,b)=>b.days-a.days);
const planning=rows.filter(r=>/계획|예산|업무계획|방향/.test(`${r.title} ${r.sourceName}`));

console.log('\n=== 출산·육아 정책 최신성 감사 ===');
console.log(`정책 항목: ${rows.length}개`);
console.log(`형식 오류: ${invalid.length}개`);
console.log(`120일 초과 재확인 대상: ${aged.length}개`);
console.log(`계획·예산 근거 항목: ${planning.length}개`);
if(aged.length)console.log('재확인 우선: '+aged.slice(0,15).map(r=>`${r.title}(${r.days}일)`).join(', '));
if(planning.length)console.log('시행공고 확인 우선: '+planning.slice(0,15).map(r=>r.title).join(', '));
if(invalid.length){console.log('감사 결과: 형식 보완 필요');process.exitCode=1;}else console.log('감사 결과: 기본 형식 통과');
