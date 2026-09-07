import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import InsurancePage from '@/components/InsurancePage';
import BusanDistrictPage from '@/components/BusanDistrictPage';
import BusanDistrictDirectory from '@/components/BusanDistrictDirectory';
import {regions,findRegion,findCity} from '@/lib/insurance-data';
import {findBusanDistrict,busanDistricts} from '@/lib/busan-insurance';
import {withBusanDistrictEvidence} from '@/lib/busan-district-evidence';
import {getInsuranceSeo} from '@/lib/insurance-content';
import {site} from '@/lib/site';

type Props={params:Promise<{slug?:string[]}>};
export function generateStaticParams(){return [{slug:[]},...regions.map(r=>({slug:[r.slug]})),...regions.flatMap(r=>r.cities.map(c=>({slug:[r.slug,c.slug]}))),...busanDistricts.map(d=>({slug:['부산태아보험',d.slug]}))]}
const robots=site.allowIndexing?{index:true,follow:true}:{index:false,follow:false,nocache:true};
const polishSeoDescription=(description:string)=>description.replace(/태아보험 상담 전 (.+?)를 확인하세요\./,'태아보험 상담 전 확인할 항목: $1.');
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const{slug=[]}=await params;
 if(!slug.length){const seo=getInsuranceSeo();return{title:seo.title,description:polishSeoDescription(seo.description),alternates:{canonical:'/태아보험'},robots,openGraph:{title:seo.ogTitle,description:seo.ogDescription,url:'/태아보험',type:'website'},twitter:{card:'summary_large_image',title:seo.ogTitle,description:seo.ogDescription}};}
 const r=findRegion(slug[0]);if(!r)return{};
 if(r.slug==='부산태아보험'&&slug[1]){const raw=findBusanDistrict(slug[1]);if(!raw)return{};const d=withBusanDistrictEvidence(raw);const title=`${d.name} 태아보험 상담 | 가입시기·보장·부산 출산지원`;const description=`${d.name} 태아보험 상담 전 ${d.theme}을 중심으로 가입시기와 보장조건을 확인하고, 2026 부산시 공통지원과 ${d.name} 출산·육아 체크사항을 구분해 살펴보세요.`;const canonical=`/태아보험/부산태아보험/${d.slug}`;return{title,description,alternates:{canonical},robots,openGraph:{title,description,url:canonical,type:'website'},twitter:{card:'summary_large_image',title,description}};}
 const c=slug[1]?findCity(r,slug[1]):undefined;if(slug[1]&&!c)return{};const canonical=`/태아보험/${r.slug}${c?`/${c.slug}`:''}`;const seo=getInsuranceSeo(r,c);return{title:seo.title,description:polishSeoDescription(seo.description),alternates:{canonical},robots,openGraph:{title:seo.ogTitle,description:seo.ogDescription,url:canonical,type:'website'},twitter:{card:'summary_large_image',title:seo.ogTitle,description:seo.ogDescription}};
}
export default async function Page({params}:Props){
 const{slug=[]}=await params;if(!slug.length)return <InsurancePage/>;if(slug.length>2)return notFound();const region=findRegion(slug[0]);if(!region)return notFound();
 if(region.slug==='부산태아보험'&&slug[1]){const district=findBusanDistrict(slug[1]);if(!district)return notFound();return <BusanDistrictPage district={district}/>;}
 const city=slug[1]?findCity(region,slug[1]):undefined;if(slug[1]&&!city)return notFound();
 if(region.slug==='부산태아보험'&&!city)return <><InsurancePage region={region}/><BusanDistrictDirectory/></>;
 return <InsurancePage region={region} city={city}/>;
}
