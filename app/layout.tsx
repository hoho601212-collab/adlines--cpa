import './globals.css';
import './home.css';
import './insurance.css';
import './support.css';
import './support-freshness.css';
import './timeline.css';
import './inquiry.css';
import './keyword.css';
import './related-guides.css';
import {site} from '@/lib/site';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

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
    <SiteFooter/>
  </body></html>
}
