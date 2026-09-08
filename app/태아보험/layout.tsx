import './editorial-standards.css';
import './support-icons.css';
import './regional-flow.css';
import './support-context.css';
import './regional-a11y.css';
import './release-polish.css';
import InsuranceEditorialStandards from '@/components/InsuranceEditorialStandards';
import {InsuranceHeader} from '@/components/SiteHeader';
import {InsuranceFooter} from '@/components/SiteFooter';

export default function InsuranceLayout({children}:{children:React.ReactNode}){
 return <div className="insuranceRouteShell">
  <InsuranceHeader/>
  {children}
  <InsuranceEditorialStandards/>
  <InsuranceFooter/>
 </div>;
}
