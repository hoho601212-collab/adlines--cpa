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
const publicRobots={index:true,follow:true};
const regionHeroFolders:Record<string,string>={
 '서울태아보험':'seoul',
 '대구태아보험':'daegu',
 '인천태아보험':'incheon',
 '광주태아보험':'gwangju',
 '대전태아보험':'daejeon',
 '울산태아보험':'ulsan',
 '세종태아보험':'sejong'
};
const busanHeroFolders:Record<string,string>={
 '서구태아보험':'seo-gu','동구태아보험':'dong-gu','사상구태아보험':'sasang-gu','수영구태아보험':'suyeong-gu','금정구태아보험':'geumjeong-gu','강서구태아보험':'gangseo-gu','중구태아보험':'jung-gu','기장군태아보험':'gijang-gun','해운대구태아보험':'haeundae-gu','부산진구태아보험':'busanjin-gu','동래구태아보험':'dongnae-gu','연제구태아보험':'yeonje-gu','남구태아보험':'nam-gu','북구태아보험':'buk-gu','사하구태아보험':'saha-gu','영도구태아보험':'yeongdo-gu'
};
const busanHeroReady=new Set(['서구태아보험','동구태아보험','사상구태아보험','수영구태아보험','금정구태아보험','강서구태아보험','기장군태아보험','부산진구태아보험','동래구태아보험','연제구태아보험','남구태아보험','북구태아보험','사하구태아보험','영도구태아보험','중구태아보험','해운대구태아보험']);
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
 if(r.slug==='부산태아보험'&&slug[1]){const raw=findBusanDistrict(slug[1]);if(!raw)return{};const d=withBusanDistrictEvidence(raw);const seo=getBusanSeoCopy(d);const canonical=`/태아보험/부산태아보험/${d.slug}`;const folder=busanHeroFolders[d.slug];const image=folder&&busanHeroReady.has(d.slug)?`/images/insurance/busan-districts/${folder}/hero.webp`:undefined;return{title:seo.title,description:seo.description,alternates:{canonical},robots:publicRobots,openGraph:{title:seo.title,description:seo.description,url:canonical,type:'website',siteName:'올바른 보험',locale:'ko_KR',...(image?{images:[{url:image,alt:`부산 ${d.name} 태아보험 가이드`}]}:{})},twitter:{card:'summary_large_image',title:seo.title,description:seo.description,...(image?{images:[image]}:{})}};}
 const c=slug[1]?findCity(r,slug[1]):undefined;if(slug[1]&&!c)return{};const canonical=`/태아보험/${r.slug}${c?`/${c.slug}`:''}`;const seo=getLocalizedInsuranceSeo(r,c);
 const regionImage=!c&&regionHeroFolders[r.slug]?`/images/insurance/${regionHeroFolders[r.slug]}/hero.webp`:undefined;
 // Existing Naver-visible pages keep their metadata untouched above. Other completed
 // regional/city pages are now indexable so their differentiated local content can be discovered.
 const robots=publicRobots;
 return{title:seo.title,description:seo.description,alternates:{canonical},robots,openGraph:{title:seo.ogTitle,description:seo.ogDescription,url:canonical,type:'website',siteName:'올바른 보험',locale:'ko_KR',...(regionImage?{images:[{url:regionImage,alt:`${r.name} 태아보험 가이드`}]}:{})},twitter:{card:'summary_large_image',title:seo.ogTitle,description:seo.ogDescription,...(regionImage?{images:[regionImage]}:{})}};
}
export default async function Page({params}:Props){
 const{slug=[]}=await params;if(!slug.length)redirect('/');if(slug.length>2)return notFound();const region=findRegion(slug[0]);if(!region)return notFound();
 if(region.slug==='부산태아보험'&&slug[1]){const district=findBusanDistrict(slug[1]);if(!district)return notFound();return <BusanDistrictPage district={district}/>;}
 const city=slug[1]?findCity(region,slug[1]):undefined;if(slug[1]&&!city)return notFound();
 if(region.slug==='부산태아보험'&&!city)return <><InsurancePage region={region}/><BusanDistrictDirectory/></>;
 return <InsurancePage region={region} city={city}/>;
}
