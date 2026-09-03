import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import InsurancePage from '@/components/InsurancePage';
import {regions,findRegion,findCity} from '@/lib/insurance-data';
import {getInsuranceSeo} from '@/lib/insurance-content';
import {site} from '@/lib/site';

type Props={params:Promise<{slug?:string[]}>};
export function generateStaticParams(){return [{slug:[]},...regions.map(r=>({slug:[r.slug]})),...regions.flatMap(r=>r.cities.map(c=>({slug:[r.slug,c.slug]})))]}

const robots=site.allowIndexing?{index:true,follow:true}:{index:false,follow:false,nocache:true};

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const{slug=[]}=await params;
 if(!slug.length){
  const seo=getInsuranceSeo();
  return{title:seo.title,description:seo.description,alternates:{canonical:'/태아보험'},robots,openGraph:{title:seo.ogTitle,description:seo.ogDescription,url:'/태아보험',type:'website'}};
 }
 const r=findRegion(slug[0]);if(!r)return{};
 const c=slug[1]?findCity(r,slug[1]):undefined;
 const canonical=`/태아보험/${r.slug}${c?`/${c.slug}`:''}`;
 const seo=getInsuranceSeo(r,c);
 return{title:seo.title,description:seo.description,alternates:{canonical},robots,openGraph:{title:seo.ogTitle,description:seo.ogDescription,url:canonical,type:'website'}};
}

export default async function Page({params}:Props){
 const{slug=[]}=await params;
 if(!slug.length)return <InsurancePage/>;
 if(slug.length>2)return notFound();
 const region=findRegion(slug[0]);if(!region)return notFound();
 const city=slug[1]?findCity(region,slug[1]):undefined;
 if(slug[1]&&!city)return notFound();
 return <InsurancePage region={region} city={city}/>;
}
