'use client';

import {useEffect} from 'react';

const FORM_SRC='https://replyalba.com/intros/_frm/index.php?code=IOu2jC2SUJ';

declare global {
  interface Window {
    jQuery?: any;
    $?: any;
  }
}

function loadScript(src:string,id:string){
 return new Promise<void>((resolve,reject)=>{
  const existing=document.getElementById(id) as HTMLScriptElement|null;
  if(existing){
   if(existing.dataset.loaded==='true') resolve();
   else existing.addEventListener('load',()=>resolve(),{once:true});
   return;
  }
  const script=document.createElement('script');
  script.id=id;
  script.src=src;
  script.async=true;
  script.onload=()=>{script.dataset.loaded='true';resolve()};
  script.onerror=()=>reject(new Error(`Failed to load ${src}`));
  document.body.appendChild(script);
 });
}

export default function InsuranceInquiryForm({position,label}:{position:'primary'|'secondary';label:string}){
 const iframeId=`ifrCCAl-${position}`;
 useEffect(()=>{
  let cancelled=false;
  (async()=>{
   try{
    await loadScript('https://replyalba.com/js/jquery-1.11.0.min.js','replyalba-jquery');
    await loadScript('https://replyalba.com/js/iframeResizer.min.js','replyalba-resizer');
    if(cancelled) return;
    const jq=window.jQuery||window.$;
    const selector=`#${iframeId}`;
    if(jq && jq(selector)?.iFrameResize){
     jq(selector).iFrameResize({
      autoResize:true,bodyBackground:null,bodyMargin:null,bodyMarginV1:0,bodyPadding:null,
      checkOrigin:true,enablePublicMethods:false,heightCalculationMethod:'offset',interval:32,
      log:false,maxHeight:Infinity,maxWidth:Infinity,minHeight:0,minWidth:0,scrolling:false,
      sizeHeight:true,sizeWidth:false,tolerance:0,
      closedCallback:function(){},initCallback:function(){},messageCallback:function(){},
      resizedCallback:function(){},callback:function(){return true;}
     });
    }
   }catch(e){console.error(e)}
  })();
  return()=>{cancelled=true};
 },[iframeId]);

 return <section className={`inquirySection inquiry-${position}`}>
  <div className="wrap inquiryWrap">
   <div className="inquiryIntro">
    <span className="insuranceBadge">1:1 상담 신청</span>
    <h2>{label} 태아보험 무료상담</h2>
    <p>아래 상담 신청서는 제휴 상담 시스템을 통해 접수됩니다. 입력한 정보는 상담 연결을 위해 해당 제휴 상담처로 전달될 수 있습니다.</p>
   </div>
   <div className="inquiryFrameShell">
    <iframe name="ifrm_icode" id={iframeId} scrolling="no" frameBorder="0" width="100%" src={FORM_SRC} title={`${label} 태아보험 상담 신청`} />
   </div>
  </div>
 </section>
}
