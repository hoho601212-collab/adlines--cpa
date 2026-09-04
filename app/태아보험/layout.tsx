import './editorial-standards.css';
import InsuranceEditorialStandards from '@/components/InsuranceEditorialStandards';

export default function InsuranceLayout({children}:{children:React.ReactNode}){
 return <>{children}<InsuranceEditorialStandards/></>;
}
