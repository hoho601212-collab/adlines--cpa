import type {Metadata} from 'next';
import InsurancePage from '@/components/InsurancePage';

const title='태아보험 | 가입시기·보장·특약 비교 가이드 | 올바른 보험';
const description='태아보험 가입 전 확인해야 할 가입시기, 보장 범위, 특약, 보험료와 가입조건을 정리했습니다. 임신·출산 준비 과정에서 필요한 태아보험 비교 기준과 상담 전 체크사항을 확인하세요.';
const image='/images/insurance/hero-fetal-insurance-family.webp';

export const metadata:Metadata={
 title:{absolute:title},
 description,
 alternates:{canonical:'/'},
 robots:{index:true,follow:true},
 openGraph:{title,description,url:'/',type:'website',siteName:'올바른 보험',locale:'ko_KR',images:[{url:image,alt:'태아보험 가입시기·보장·특약 비교 가이드'}]},
 twitter:{card:'summary_large_image',title,description,images:[image]}
};

export default function Home(){
 return <div className="rootInsuranceLanding"><InsurancePage/></div>;
}
