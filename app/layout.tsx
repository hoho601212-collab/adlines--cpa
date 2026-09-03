import './globals.css';
import './insurance.css';
import './support.css';
import './inquiry.css';
import {site} from '@/lib/site';
import SiteHeader from '@/components/SiteHeader';

export const metadata = {
  metadataBase: new URL(site.baseUrl),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: { siteName: site.name, locale: 'ko_KR', type: 'website' }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="ko"><body>
    <SiteHeader/>
    {children}
    <footer className="footer"><div className="wrap">
      <b>올바른</b><p>생활에 필요한 비교와 상담 정보를 한 곳에서 확인할 수 있도록 돕는 정보 플랫폼입니다.</p>
      <p>보험 영역은 보험상품을 직접 판매하는 페이지가 아닌 정보 제공 및 제휴 상담 연결을 목적으로 합니다. 실제 상품·보장·보험료·인수 여부는 보험회사 및 상담 주체의 심사와 약관에 따라 달라질 수 있습니다.</p>
    </div></footer>
  </body></html>
}
