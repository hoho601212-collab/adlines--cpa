'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {site} from '@/lib/site';

const insuranceKeywordPaths=['/현대해상태아보험','/태아보험가입시기','/태아보험비교사이트순위','/태아보험순위비교','/임신초기증상','/임신극초기증상','/임신5-14주차증상','/임산부선물'];

function normalizePathname(pathname:string){
 try{return decodeURIComponent(pathname)}catch{return pathname}
}

export function isInsurancePath(pathname:string){
 const normalized=normalizePathname(pathname);
 return normalized.startsWith('/태아보험')||insuranceKeywordPaths.some(p=>normalized===p);
}

export function InsuranceHeader(){
 const [mobileOpen,setMobileOpen]=useState(false);
 const closeMobile=()=>setMobileOpen(false);
 return <header className="header insuranceTopHeader">
  <div className="wrap insuranceNav">
   <Link href="/태아보험" className="insuranceLogo" aria-label="올바른 보험 홈" onClick={closeMobile} style={{display:'flex',alignItems:'center',justifyContent:'flex-start',flexShrink:0}}><img src="/images/insurance/olbareun-insurance-logo.webp" alt="올바른 보험" width="205" height="54" style={{display:'block',width:'clamp(155px,15vw,205px)',height:'auto',maxHeight:'54px',objectFit:'contain',objectPosition:'left center'}} /></Link>
   <nav className="insuranceNavLinks" aria-label="보험 주요 메뉴"><Link href="/태아보험">태아보험 <span>⌄</span></Link><Link href="/태아보험가입시기">가입시기</Link><Link href="/태아보험순위비교">비교가이드</Link><Link href="/임신초기증상">임신정보</Link><Link href="/임산부선물">출산준비</Link></nav>
   <div className="insuranceHeaderActions"><div className="insurancePhone"><span>☎</span><small>상담 문의</small><b>무료 상담</b></div><a className="insuranceHeaderCta" href={site.cpaUrl}>무료 상담 신청</a></div>
   <button className="insuranceMobileMenuButton" type="button" aria-label={mobileOpen?'보험 메뉴 닫기':'보험 메뉴 열기'} aria-expanded={mobileOpen} aria-controls="insurance-mobile-menu" onClick={()=>setMobileOpen(v=>!v)}><span></span><span></span><span></span></button>
  </div>
  <div id="insurance-mobile-menu" className={`insuranceMobileMenu${mobileOpen?' isOpen':''}`}>
   <nav className="wrap" aria-label="모바일 보험 메뉴">
    <Link href="/태아보험" onClick={closeMobile}><b>태아보험</b><small>보험 메인 · 지역별 정보</small></Link>
    <Link href="/태아보험가입시기" onClick={closeMobile}><b>가입시기</b><small>임신 주수별 확인사항</small></Link>
    <Link href="/태아보험순위비교" onClick={closeMobile}><b>비교가이드</b><small>보장·특약 비교 기준</small></Link>
    <Link href="/임신초기증상" onClick={closeMobile}><b>임신정보</b><small>임신 초기 참고정보</small></Link>
    <Link href="/임산부선물" onClick={closeMobile}><b>출산준비</b><small>임신·출산 준비 가이드</small></Link>
    <a className="insuranceMobileCta" href={site.cpaUrl} onClick={closeMobile}>무료 상담 신청 →</a>
   </nav>
  </div>
 </header>;
}

export default function SiteHeader(){
 const pathname=usePathname();
 const insurance=isInsurancePath(pathname);
 if(insurance)return <InsuranceHeader/>;
 return <header className="header"><div className="wrap nav"><Link href="/" className="logo"><b>올바른</b></Link><nav className="navlinks"><Link href="/태아보험">올바른 보험</Link><span>올바른 회생</span><span>올바른 웨딩</span></nav><Link className="navcta" href="/태아보험">보험 알아보기</Link></div></header>;
}
