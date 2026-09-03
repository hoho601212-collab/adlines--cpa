import './globals.css';
import Link from 'next/link';
import {site} from '@/lib/site';
export const metadata={title:{default:site.title,template:`%s | ${site.name}`},description:site.description};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body><header className="header"><div className="wrap nav"><Link href="/" className="logo"><b>생활</b>비교 가이드</Link><nav className="navlinks"><Link href="/태아보험">태아보험</Link><a href="#지원정보">출산·육아 지원</a><a href="#비교가이드">상담 전 체크</a></nav><a className="navcta" href={site.cpaUrl}>상담 알아보기</a></div></header>{children}<footer className="footer"><div className="wrap"><b>생활비교 가이드</b><p>본 사이트는 보험상품 판매가 아닌 정보 제공 및 제휴 상담 연결을 목적으로 합니다. 실제 상품·보장·보험료·인수 여부는 보험회사 및 상담 주체의 심사와 약관에 따라 달라질 수 있습니다.</p></div></footer><div className="sticky"><a href={site.cpaUrl}>태아보험 상담 알아보기</a></div></body></html>}
