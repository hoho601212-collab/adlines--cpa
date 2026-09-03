import fs from 'node:fs';
import path from 'node:path';

const root=path.join(process.cwd(),'public','images','insurance');
const required=['01.webp','02.webp','03.webp','04.webp','05.webp'];

function walk(dir){
  if(!fs.existsSync(dir)) return [];
  const out=[];
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    const full=path.join(dir,entry.name);
    if(entry.isDirectory()) out.push(...walk(full));
    else if(entry.isFile()) out.push(full);
  }
  return out;
}

const files=walk(root);
const folders=new Set(files.map(f=>path.dirname(f)));
let missing=0;
for(const folder of folders){
  const names=new Set(files.filter(f=>path.dirname(f)===folder).map(f=>path.basename(f)));
  const absent=required.filter(name=>!names.has(name));
  if(absent.length){
    missing+=absent.length;
    console.log(`[이미지 미완성] ${path.relative(root,folder)}: ${absent.join(', ')}`);
  }
}
if(!folders.size) console.log('보험 이미지 폴더에 아직 실제 이미지가 없습니다.');
else if(!missing) console.log('모든 보험 이미지 폴더에 01.webp~05.webp가 준비되어 있습니다.');
