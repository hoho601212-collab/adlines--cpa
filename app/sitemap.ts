import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import {busanDistricts} from '@/lib/busan-insurance';
import {regions} from '@/lib/insurance-data';



export default function sitemap():MetadataRoute.Sitemap{
 const reviewedAt=new Date(`${site.contentReviewedAt}T00:00:00+09:00`);
 return[
  {url:site.baseUrl,lastModified:reviewedAt,changeFrequency:'weekly',priority:1},
  ...regions.flatMap(region=>[
   {
    url:`${site.baseUrl}/태아보험/${region.slug}`,
    lastModified:reviewedAt,
    changeFrequency:'weekly' as const,
    priority:.85
   },
   ...region.cities.map(city=>({
    url:`${site.baseUrl}/태아보험/${region.slug}/${city.slug}`,
    lastModified:reviewedAt,
    changeFrequency:'weekly' as const,
    priority:.8
   }))
  ]),
  ...busanDistricts.map(d=>({
   url:`${site.baseUrl}/태아보험/부산태아보험/${d.slug}`,
   lastModified:reviewedAt,
   changeFrequency:'weekly' as const,
   priority:.8
  }))
 ];
}
