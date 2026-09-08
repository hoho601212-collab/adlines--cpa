import type {MetadataRoute} from 'next';
import {regions} from '@/lib/insurance-data';
import {busanDistricts} from '@/lib/busan-insurance';
import {keywordPages} from '@/lib/keyword-pages';
import {site} from '@/lib/site';

export default function sitemap():MetadataRoute.Sitemap{
 const reviewedAt=new Date(`${site.contentReviewedAt}T00:00:00+09:00`);
 return[
  {url:site.baseUrl,lastModified:reviewedAt,changeFrequency:'weekly',priority:1},
  {url:`${site.baseUrl}/태아보험`,lastModified:reviewedAt,changeFrequency:'weekly',priority:.95},
  ...keywordPages.filter(p=>p.slug!=='태아보험').map(p=>({url:`${site.baseUrl}/${p.slug}`,lastModified:reviewedAt,changeFrequency:'monthly' as const,priority:p.category==='insurance'?.82:.72})),
  ...regions.flatMap(r=>[{url:`${site.baseUrl}/태아보험/${r.slug}`,lastModified:reviewedAt,changeFrequency:'weekly' as const,priority:.85},...r.cities.map(c=>({url:`${site.baseUrl}/태아보험/${r.slug}/${c.slug}`,lastModified:reviewedAt,changeFrequency:'weekly' as const,priority:.75}))]),
  ...busanDistricts.map(d=>({url:`${site.baseUrl}/태아보험/부산태아보험/${d.slug}`,lastModified:reviewedAt,changeFrequency:'weekly' as const,priority:.8}))
 ];
}
