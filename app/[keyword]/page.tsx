import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getKeywordPage,keywordPages} from '@/lib/keyword-pages';
import KeywordGuidePage from '@/components/KeywordGuidePage';
import {site} from '@/lib/site';

type Props={params:Promise<{keyword:string}>};

export function generateStaticParams(){return keywordPages.filter(p=>p.slug!=='태아보험').map(p=>({keyword:p.slug}))}

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {keyword}=await params;const page=getKeywordPage(keyword);if(!page)return{};
 const allowIndexing=process.env.NEXT_PUBLIC_ALLOW_INDEXING==='true';
 return {title:page.title,description:page.description,alternates:{canonical:`/${page.slug}`},robots:{index:allowIndexing,follow:allowIndexing},openGraph:{title:page.title,description:page.description,url:`${site.baseUrl}/${page.slug}`,type:'article'}};
}

export default async function Page({params}:Props){const {keyword}=await params;const page=getKeywordPage(keyword);if(!page||page.slug==='태아보험')return notFound();return <KeywordGuidePage page={page}/>}
