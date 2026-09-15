'use client';
import {usePathname} from 'next/navigation';
import {isInsurancePath} from '@/components/SiteHeader';

export function InsuranceFooter(){
 return <footer className="footer"><div className="wrap">
  <a href="/태아보험" className="insuranceFooterLogo" aria-label="올바른 보험 홈" style={{display:'inline-flex',alignItems:'center',marginBottom:'12px'}}><img src="/images/insurance/olbareun-insurance-logo.webp" alt="올바른 보험" width="220" height="60" style={{display:'block',width:'clamp(165px,17vw,220px)',height:'auto',maxHeight:'60px',objectFit:'contain',objectPosition:'left center'}} /></a>
  <div style={{maxWidth:'880px'}}>
   <strong style={{display:'block',fontSize:'16px',marginBottom:'7px'}}>보험을 어렵지 않게, 필요한 보장을 이해하기 쉽게</strong>
   <p style={{margin:'0 0 14px'}}>올바른은 태아보험을 포함한 보험 정보를 이용자가 스스로 비교하고 상담 전에 확인할 수 있도록 보장 범위, 특약, 가입조건, 보험료 확인사항과 계약 전 체크포인트를 알기 쉽게 정리하는 보험 분석·비교 정보 플랫폼입니다.</p>
  </div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:'10px',margin:'18px 0'}}>
   <div style={{padding:'13px 15px',border:'1px solid rgba(148,163,184,.22)',borderRadius:'12px'}}><b>보장내용 확인</b><p style={{margin:'4px 0 0',fontSize:'13px'}}>보장 범위와 면책·감액기간 등 주요 계약조건을 확인하세요.</p></div>
   <div style={{padding:'13px 15px',border:'1px solid rgba(148,163,184,.22)',borderRadius:'12px'}}><b>특약 비교</b><p style={{margin:'4px 0 0',fontSize:'13px'}}>필요한 특약과 보장한도는 상품별 약관을 기준으로 비교하세요.</p></div>
   <div style={{padding:'13px 15px',border:'1px solid rgba(148,163,184,.22)',borderRadius:'12px'}}><b>보험료·가입조건 확인</b><p style={{margin:'4px 0 0',fontSize:'13px'}}>보험료와 인수조건은 가입자의 상황과 보험회사 심사에 따라 달라질 수 있습니다.</p></div>
  </div>
  <div style={{padding:'15px 17px',borderRadius:'12px',background:'rgba(148,163,184,.08)',lineHeight:1.75}}>
   <b>보험 이용 안내</b>
   <p style={{margin:'5px 0 0'}}>보험 영역은 보험상품을 직접 판매하는 페이지가 아닌 정보 제공 및 제휴 상담 연결을 목적으로 합니다. 본 사이트의 정보는 일반적인 비교·참고자료이며 특정 보험상품의 가입을 보장하거나 권유하는 확정적 설명이 아닙니다. 실제 상품명, 보장내용, 보험기간, 보험료, 가입 가능 여부 및 인수조건은 보험회사·상품·피보험자의 상황과 심사기준에 따라 달라질 수 있으므로 계약 전 해당 보험회사의 상품설명서와 약관을 반드시 확인하시기 바랍니다.</p>
  </div>
  <div className="insuranceBusinessInfo" style={{marginTop:'20px',paddingTop:'18px',borderTop:'1px solid rgba(148,163,184,.28)',lineHeight:1.8}}>
   <b>보험 분석 비교 플랫폼 [ 올바른 ]</b>
   <p style={{margin:'6px 0 0'}}>상호: 올바른 &nbsp; 대표자: 박자영 &nbsp; 사업자 번호: 808-66-00808</p>
   <p style={{margin:'2px 0 0'}}>Tel. 010-4780-1200 &nbsp; Fax. 0508-956-6109</p>
   <p style={{margin:'10px 0 0',fontSize:'12px',opacity:.72}}>© {new Date().getFullYear()} 올바른. All rights reserved.</p>
  </div>
 </div></footer>;
}

export default function SiteFooter(){
 const pathname=usePathname();
 const insurance=isInsurancePath(pathname);
 if(insurance)return <InsuranceFooter/>;
 return <footer className="footer"><div className="wrap">
  <b>올바른</b>
  <p>생활에 필요한 비교와 상담 정보를 한 곳에서 확인할 수 있도록 돕는 정보 플랫폼입니다.</p>
  <p>보험 영역은 보험상품을 직접 판매하는 페이지가 아닌 정보 제공 및 제휴 상담 연결을 목적으로 합니다. 실제 상품·보장·보험료·인수 여부는 보험회사 및 상담 주체의 심사와 약관에 따라 달라질 수 있습니다.</p>
 </div></footer>;
}
