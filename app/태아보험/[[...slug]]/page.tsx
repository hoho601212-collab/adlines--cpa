import type {Metadata} from 'next';
import {notFound,redirect} from 'next/navigation';
import InsurancePage from '@/components/InsurancePage';
import BusanDistrictPage from '@/components/BusanDistrictPage';
import BusanDistrictDirectory from '@/components/BusanDistrictDirectory';
import {regions,findRegion,findCity} from '@/lib/insurance-data';
import {findBusanDistrict,busanDistricts} from '@/lib/busan-insurance';
import {withBusanDistrictEvidence} from '@/lib/busan-district-evidence';
import {getBusanSeoCopy} from '@/lib/busan-seo';
import {getLocalizedInsuranceSeo} from '@/lib/insurance-seo-variants';
import {site} from '@/lib/site';

type Props={params:Promise<{slug?:string[]}>};
export function generateStaticParams(){return [{slug:[]},...regions.map(r=>({slug:[r.slug]})),...regions.flatMap(r=>r.cities.map(c=>({slug:[r.slug,c.slug]}))),...busanDistricts.map(d=>({slug:['부산태아보험',d.slug]}))]}
const privateRobots={index:false,follow:false,nocache:true};
const publicRobots={index:true,follow:true};
const indexReadyRegions=new Set(['서울태아보험','대구태아보험','인천태아보험','광주태아보험','대전태아보험','울산태아보험','세종태아보험']);
const regionHeroFolders:Record<string,string>={
 '서울태아보험':'seoul',
 '대구태아보험':'daegu',
 '인천태아보험':'incheon',
 '광주태아보험':'gwangju',
 '대전태아보험':'daejeon',
 '울산태아보험':'ulsan',
 '세종태아보험':'sejong'
};
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const{slug=[]}=await params;
 if(!slug.length){
  const title='태아보험 | 가입시기·보장·특약 비교 가이드 | 올바른 보험';
  const description='태아보험 가입 전 확인해야 할 가입시기, 보장 범위, 특약, 보험료와 가입조건을 정리했습니다. 임신·출산 준비 과정에서 필요한 태아보험 비교 기준과 상담 전 체크사항을 확인하세요.';
  const image='/images/insurance/hero-fetal-insurance-family.webp';
  return{
   title:{absolute:title},
   description,
   alternates:{canonical:'/'},
   robots:{index:true,follow:true},
   openGraph:{title,description,url:'/',type:'website',siteName:'올바른 보험',locale:'ko_KR',images:[{url:image,alt:'태아보험 가입시기·보장·특약 비교 가이드'}]},
   twitter:{card:'summary_large_image',title,description,images:[image]}
  };
 }
 const r=findRegion(slug[0]);if(!r)return{};
 if(r.slug==='부산태아보험'&&slug[1]){const raw=findBusanDistrict(slug[1]);if(!raw)return{};const d=withBusanDistrictEvidence(raw);const seo=getBusanSeoCopy(d);const canonical=`/태아보험/부산태아보험/${d.slug}`;return{title:seo.title,description:seo.description,alternates:{canonical},robots:privateRobots,openGraph:{title:seo.title,description:seo.description,url:canonical,type:'website'},twitter:{card:'summary_large_image',title:seo.title,description:seo.description}};}
 const c=slug[1]?findCity(r,slug[1]):undefined;if(slug[1]&&!c)return{};const canonical=`/태아보험/${r.slug}${c?`/${c.slug}`:''}`;const seo=getLocalizedInsuranceSeo(r,c);
 const regionImage=!c&&regionHeroFolders[r.slug]?`/images/insurance/${regionHeroFolders[r.slug]}/hero.webp`:undefined;
 const robots=!c&&indexReadyRegions.has(r.slug)?publicRobots:privateRobots;
 return{title:seo.title,description:seo.description,alternates:{canonical},robots,openGraph:{title:seo.ogTitle,description:seo.ogDescription,url:canonical,type:'website',siteName:'올바른 보험',locale:'ko_KR',...(regionImage?{images:[{url:regionImage,alt:`${r.name} 태아보험 가이드`}]}:{})},twitter:{card:'summary_large_image',title:seo.ogTitle,description:seo.ogDescription,...(regionImage?{images:[regionImage]}:{})}};
}
export default async function Page({params}:Props){
 const{slug=[]}=await params;if(!slug.length)redirect('/');if(slug.length>2)return notFound();const region=findRegion(slug[0]);if(!region)return notFound();
 if(region.slug==='부산태아보험'&&slug[1]){const district=findBusanDistrict(slug[1]);if(!district)return notFound();return <BusanDistrictPage district={district}/>;}
 const city=slug[1]?findCity(region,slug[1]):undefined;if(slug[1]&&!city)return notFound();
 if(region.slug==='부산태아보험'&&!city)return <><InsurancePage region={region}/><BusanDistrictDirectory/></>;
 return <InsurancePage region={region} city={city}/>;
}
