'use client';
import {usePathname} from 'next/navigation';
import {isInsurancePath} from '@/components/SiteHeader';

export default function SiteFooter(){
 const pathname=usePathname();
 const insurance=isInsurancePath(pathname);
 return <footer className="footer"><div className="wrap">
  {insurance?<a href="/태아보험" className="insuranceFooterLogo" aria-label="올바른 보험 홈" style={{display:'inline-flex',alignItems:'center',marginBottom:'10px'}}><img src="/images/insurance/olbareun-insurance-logo.webp" alt="올바른 보험" style={{display:'block',width:'clamp(165px,17vw,220px)',height:'auto',maxHeight:'60px',objectFit:'contain',objectPosition:'left center'}} /></a>:<b>올바른</b>}
  <p>생활에 필요한 비교와 상담 정보를 한 곳에서 확인할 수 있도록 돕는 정보 플랫폼입니다.</p>
  <p>보험 영역은 보험상품을 직접 판매하는 페이지가 아닌 정보 제공 및 제휴 상담 연결을 목적으로 합니다. 실제 상품·보장·보험료·인수 여부는 보험회사 및 상담 주체의 심사와 약관에 따라 달라질 수 있습니다.</p>
 </div></footer>;
}
