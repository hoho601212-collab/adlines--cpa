import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import {busanDistricts} from '@/lib/busan-insurance';



const indexReadyRegionSlugs=[
 '서울태아보험',
 '부산태아보험',
 '대구태아보험',
 '인천태아보험',
 '광주태아보험',
 '대전태아보험',
 '울산태아보험',
 '세종태아보험'
];

export default function sitemap():MetadataRoute.Sitemap{
 const reviewedAt=new Date(`${site.contentReviewedAt}T00:00:00+09:00`);
 return[
  {url:site.baseUrl,lastModified:reviewedAt,changeFrequency:'weekly',priority:1},
  ...indexReadyRegionSlugs.map(slug=>({
   url:`${site.baseUrl}/태아보험/${slug}`,
   lastModified:reviewedAt,
   changeFrequency:'weekly' as const,
   priority:.85
  })),
  ...busanDistricts.map(d=>({
   url:`${site.baseUrl}/태아보험/부산태아보험/${d.slug}`,
   lastModified:reviewedAt,
   changeFrequency:'weekly' as const,
   priority:.8
  }))
 ];
}
