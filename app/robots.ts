import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';

export default function robots():MetadataRoute.Robots{
  if(!site.allowIndexing){
    return {
      rules:{userAgent:'*',allow:'/태아보험',disallow:'/'},
      sitemap:`${site.baseUrl}/sitemap.xml`
    };
  }
  return {rules:{userAgent:'*',allow:'/'},sitemap:`${site.baseUrl}/sitemap.xml`};
}
