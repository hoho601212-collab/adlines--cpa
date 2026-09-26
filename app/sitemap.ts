import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import {regions} from '@/lib/insurance-data';
import {busanDistricts} from '@/lib/busan-insurance';
import {isReviewedRegion,isReviewedCityRegion} from '@/lib/insurance-indexing';

export default function sitemap():MetadataRoute.Sitemap{
 const reviewedAt=new Date(`${site.contentReviewedAt}T00:00:00+09:00`);
 const regionPages=regions.filter(r=>isReviewedRegion(r.slug)).map(r=>({
  url:`${site.baseUrl}/태아보험/${r.slug}`,
  lastModified:reviewedAt,
  changeFrequency:'weekly' as const,
  priority:.85
 }));
 const cityPages=regions.filter(r=>isReviewedCityRegion(r.slug)).flatMap(r=>r.cities.map(c=>({
  url:`${site.baseUrl}/태아보험/${r.slug}/${c.slug}`,
  lastModified:reviewedAt,
  changeFrequency:'weekly' as const,
  priority:.8
 })));
 const busanPages=busanDistricts.map(d=>({
  url:`${site.baseUrl}/태아보험/부산태아보험/${d.slug}`,
  lastModified:reviewedAt,
  changeFrequency:'weekly' as const,
  priority:.8
 }));
 return[
  {url:site.baseUrl,lastModified:reviewedAt,changeFrequency:'weekly',priority:1},
  ...regionPages,
  ...cityPages,
  ...busanPages
 ];
}
