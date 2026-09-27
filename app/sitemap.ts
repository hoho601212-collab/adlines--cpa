import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import {regions} from '@/lib/insurance-data';
import {busanDistricts} from '@/lib/busan-insurance';
import {isReviewedRegion,isReviewedCityRegion} from '@/lib/insurance-indexing';

const pageLastModified:Record<string,string>={
 '/태아보험/경기태아보험/성남태아보험':'2026-09-26',
 '/태아보험/경기태아보험/용인태아보험':'2026-09-27'
};

function lastModified(path=''){
 const date=pageLastModified[path]||site.contentReviewedAt;
 return new Date(`${date}T00:00:00+09:00`);
}

export default function sitemap():MetadataRoute.Sitemap{
 const regionPages=regions.filter(r=>isReviewedRegion(r.slug)).map(r=>{
  const path=`/태아보험/${r.slug}`;
  return{
   url:`${site.baseUrl}${path}`,
   lastModified:lastModified(path),
   changeFrequency:'weekly' as const,
   priority:.85
  };
 });
 const cityPages=regions.filter(r=>isReviewedCityRegion(r.slug)).flatMap(r=>r.cities.map(c=>{
  const path=`/태아보험/${r.slug}/${c.slug}`;
  return{
   url:`${site.baseUrl}${path}`,
   lastModified:lastModified(path),
   changeFrequency:'weekly' as const,
   priority:.8
  };
 }));
 const busanPages=busanDistricts.map(d=>{
  const path=`/태아보험/부산태아보험/${d.slug}`;
  return{
   url:`${site.baseUrl}${path}`,
   lastModified:lastModified(path),
   changeFrequency:'weekly' as const,
   priority:.8
  };
 });
 return[
  {url:site.baseUrl,lastModified:lastModified(),changeFrequency:'weekly',priority:1},
  ...regionPages,
  ...cityPages,
  ...busanPages
 ];
}
