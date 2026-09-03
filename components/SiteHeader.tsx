'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {site} from '@/lib/site';

export default function SiteHeader(){
 const pathname=usePathname();
 const insurance=pathname.startsWith('/태아보험');
 if(insurance)return <header className="header insuranceTopHeader"><div className="wrap insuranceNav">
  <Link href="/태아보험" className="insuranceLogo"><strong><em>올바른</em> 보험</strong><small>태아보험 전문 상담</small></Link>
  <nav className="insuranceNavLinks"><Link href="/태아보험">태아보험 <span>⌄</span></Link><span>어린이보험</span><span>산모보험</span><span>보험가이드</span><span>지역별보험</span><span>고객센터</span></nav>
  <div className="insuranceHeaderActions"><div className="insurancePhone"><span>☎</span><small>상담 문의</small><b>무료 상담</b></div><a className="insuranceHeaderCta" href={site.cpaUrl}>무료 상담 신청</a></div>
 </div></header>;
 return <header className="header"><div className="wrap nav"><Link href="/" className="logo"><b>올바른</b></Link><nav className="navlinks"><Link href="/태아보험">올바른 보험</Link><span>올바른 회생</span><span>올바른 웨딩</span></nav><Link className="navcta" href="/태아보험">보험 알아보기</Link></div></header>;
}
