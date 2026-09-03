import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import InsurancePage from '@/components/InsurancePage';
import {regions,findRegion,findCity} from '@/lib/insurance-data';
type Props={params:Promise<{slug?:string[]}>};
export function generateStaticParams(){return [{slug:[]},...regions.map(r=>({slug:[r.slug]})),...regions.flatMap(r=>r.cities.map(c=>({slug:[r.slug,c.slug]})))]}
export async function generateMetadata({params}:Props):Promise<Metadata>{const{slug=[]}=await params;if(!slug.length)return{title:'태아보험 상담 | 지역별 출산·육아 지원정보',description:'태아보험 가입 전 체크사항과 전국 17개 광역지역의 출산·육아 지원정보를 함께 확인하세요.',alternates:{canonical:'/태아보험'}};const r=findRegion(slug[0]);if(!r)return{};const c=slug[1]?findCity(r,slug[1]):undefined;const n=c?.name||r.name;return{title:`${n} 태아보험 상담 | 가입시기·산모특약·지원정보`,description:`${n} 태아보험을 알아보기 전 가입시기, 보장·특약 확인사항과 ${n} 출산지원금·육아지원 정보를 함께 확인하세요.`,alternates:{canonical:`/태아보험/${r.slug}${c?`/${c.slug}`:''}`}}}
export default async function Page({params}:Props){const{slug=[]}=await params;if(!slug.length)return <InsurancePage/>;if(slug.length>2)return notFound();const region=findRegion(slug[0]);if(!region)return notFound();const city=slug[1]?findCity(region,slug[1]):undefined;if(slug[1]&&!city)return notFound();return <InsurancePage region={region} city={city}/>}
