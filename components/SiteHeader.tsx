'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {site} from '@/lib/site';

const insuranceKeywordPaths=['/현대해상태아보험','/태아보험가입시기','/태아보험비교사이트순위','/태아보험순위비교','/임신초기증상','/임신극초기증상','/임신5-14주차증상','/임산부선물'];

export default function SiteHeader(){
 const pathname=usePathname();
 const insurance=pathname.startsWith('/태아보험')||insuranceKeywordPaths.some(p=>pathname===p);
 if(insurance)return <header className="header insuranceTopHeader"><div className="wrap insuranceNav">
  <Link href="/태아보험" className="insuranceLogo"><strong><em>올바른</em> 보험</strong><small>태아보험·임신출산 정보</small></Link>
  <nav className="insuranceNavLinks"><Link href="/태아보험">태아보험 <span>⌄</span></Link><Link href="/태아보험가입시기">가입시기</Link><Link href="/태아보험순위비교">비교가이드</Link><Link href="/임신초기증상">임신정보</Link><Link href="/임산부선물">출산준비</Link></nav>
  <div className="insuranceHeaderActions"><div className="insurancePhone"><span>☎</span><small>상담 문의</small><b>무료 상담</b></div><a className="insuranceHeaderCta" href={site.cpaUrl}>무료 상담 신청</a></div>
 </div></header>;
 return <header className="header"><div className="wrap nav"><Link href="/" className="logo"><b>올바른</b></Link><nav className="navlinks"><Link href="/태아보험">올바른 보험</Link><span>올바른 회생</span><span>올바른 웨딩</span></nav><Link className="navcta" href="/태아보험">보험 알아보기</Link></div></header>;
}
