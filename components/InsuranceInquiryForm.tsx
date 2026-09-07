'use client';

import {useEffect} from 'react';

const FORM_SRC='https://replyalba.com/intros/_frm/index.php?code=IOu2jC2SUJ';

declare global {
  interface Window { jQuery?: any; $?: any; }
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
  script.id=id;script.src=src;script.async=true;
  script.onload=()=>{script.dataset.loaded='true';resolve()};
  script.onerror=()=>reject(new Error(`Failed to load ${src}`));
  document.body.appendChild(script);
 });
}

export default function InsuranceInquiryForm({position,label}:{position:'primary'|'secondary';label:string}){
 const iframeId=`ifrCCAl-${position}`;
 const sectionId=`보험상담-${position}`;
 const noticeId=`${sectionId}-notice`;
 const disclosureId=`${sectionId}-disclosure`;
 const isPrimary=position==='primary';
 const copy=isPrimary?{
  badge:'🔎 1:1 상담 신청',
  title:`${label} 태아보험 무료상담`,
  intro:'지역 지원정보와 별개로 태아보험의 가입시기·보장내용·보험료 범위를 확인하고 싶다면 현재 임신 주수를 먼저 정리해 상담을 신청하세요.',
  checks:['현재 임신 주수 확인','원하는 보장기간 정리','월 보험료 범위 생각하기'],
  noticeTitle:'상담 신청 전 안내',
  notice:'입력한 정보는 상담 연결을 위해 제휴 상담처로 전달될 수 있습니다. 올바른 보험은 보험상품을 직접 판매하거나 가입을 확정하지 않습니다.'
 }:{
  badge:'📝 확인 후 상담 신청',
  title:`${label}에서 확인한 내용을 바탕으로 상담하기`,
  intro:'위의 지역지원·가입시기·보장 체크 내용을 확인했다면 필요한 질문만 정리해 상담을 이어가세요. 같은 정보를 다시 읽기보다 실제 비교가 필요한 항목을 전달하는 단계입니다.',
  checks:['궁금한 보장 항목 정리','지역지원과 보험을 별도로 구분','상담 후 약관·조건 최종 확인'],
  noticeTitle:'마지막 확인',
  notice:'상담 신청은 보험 가입 확정이 아닙니다. 제휴 상담처의 안내를 받은 뒤 보험회사별 약관·보험료·인수조건을 직접 비교하고 결정하세요.'
 };

 useEffect(()=>{
  let cancelled=false;
  (async()=>{
   try{
    await loadScript('https://replyalba.com/js/jquery-1.11.0.min.js','replyalba-jquery');
    await loadScript('https://replyalba.com/js/iframeResizer.min.js','replyalba-resizer');
    if(cancelled)return;
    const jq=window.jQuery||window.$;const selector=`#${iframeId}`;
    if(jq&&jq(selector)?.iFrameResize){
     jq(selector).iFrameResize({autoResize:true,bodyBackground:null,bodyMargin:null,bodyMarginV1:0,bodyPadding:null,checkOrigin:true,enablePublicMethods:false,heightCalculationMethod:'offset',interval:32,log:false,maxHeight:Infinity,maxWidth:Infinity,minHeight:0,minWidth:0,scrolling:false,sizeHeight:true,sizeWidth:false,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){},callback:function(){return true;}});
    }
   }catch(e){console.error(e)}
  })();
  return()=>{cancelled=true};
 },[iframeId]);

 return <section className={`inquirySection inquiry-${position}`} id={sectionId} aria-labelledby={`${sectionId}-title`} tabIndex={-1} data-inquiry-stage={position}>
  <div className="wrap inquiryWrap">
   <div className="inquiryIntro">
    <span className="insuranceBadge">{copy.badge}</span>
    <h2 id={`${sectionId}-title`}>{copy.title}</h2>
    <p>{copy.intro}</p>
    <div className="inquiryTrustRow" aria-label={isPrimary?'상담 전 준비사항':'상담 전 최종 확인사항'}>{copy.checks.map(item=><span key={item}>✓ {item}</span>)}</div>
   </div>
   <div className="inquiryFrameShell">
    <div className="inquiryFrameNotice" id={noticeId}><b>{copy.noticeTitle}</b><span>{copy.notice}</span></div>
    <iframe name="ifrm_icode" id={iframeId} scrolling="no" frameBorder="0" width="100%" src={FORM_SRC} title={`${label} 태아보험 ${isPrimary?'상담 신청':'상담 신청 최종 단계'}`} loading={isPrimary?'eager':'lazy'} referrerPolicy="strict-origin-when-cross-origin" aria-describedby={`${noticeId} ${disclosureId}`} />
    <p className="inquiryDisclosure" id={disclosureId}>실제 보험료, 가입 가능 여부, 보장 범위와 인수 조건은 보험회사·상담 주체의 심사 및 약관에 따라 달라질 수 있습니다.</p>
   </div>
   {isPrimary&&<a className="mobileInquiryJump" href={`#${iframeId}`} aria-label="태아보험 상담 신청서로 이동">상담 신청서 바로 보기</a>}
  </div>
 </section>
}
