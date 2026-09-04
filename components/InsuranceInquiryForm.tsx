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
 const sectionId=`보험상담-${position}`;
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

 return <section className={`inquirySection inquiry-${position}`} id={sectionId} aria-labelledby={`${sectionId}-title`}>
  <div className="wrap inquiryWrap">
   <div className="inquiryIntro">
    <span className="insuranceBadge">1:1 상담 신청</span>
    <h2 id={`${sectionId}-title`}>{label} 태아보험 무료상담</h2>
    <p>가입을 서두르기보다 현재 임신 주수와 필요한 보장을 먼저 정리한 뒤 상담을 받아보세요. 아래 신청서는 외부 제휴 상담 시스템을 통해 접수됩니다.</p>
    <div className="inquiryTrustRow" aria-label="상담 전 확인사항">
     <span>✓ 현재 임신 주수 확인</span><span>✓ 원하는 보장기간 정리</span><span>✓ 월 보험료 범위 생각하기</span>
    </div>
   </div>
   <div className="inquiryFrameShell">
    <div className="inquiryFrameNotice"><b>상담 신청 전 안내</b><span>입력한 정보는 상담 연결을 위해 제휴 상담처로 전달될 수 있습니다. 올바른 보험은 보험상품을 직접 판매하거나 가입을 확정하지 않습니다.</span></div>
    <iframe name="ifrm_icode" id={iframeId} scrolling="no" frameBorder="0" width="100%" src={FORM_SRC} title={`${label} 태아보험 상담 신청`} loading={position==='primary'?'eager':'lazy'} referrerPolicy="strict-origin-when-cross-origin" />
    <p className="inquiryDisclosure">실제 보험료, 가입 가능 여부, 보장 범위와 인수 조건은 보험회사·상담 주체의 심사 및 약관에 따라 달라질 수 있습니다.</p>
   </div>
   {position==='primary'&&<a className="mobileInquiryJump" href={`#${iframeId}`} aria-label="태아보험 상담 신청서로 이동">상담 신청서 바로 보기</a>}
  </div>
 </section>
}
