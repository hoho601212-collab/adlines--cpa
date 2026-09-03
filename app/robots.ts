import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';

export default function robots():MetadataRoute.Robots{
  if(!site.allowIndexing){
    return {rules:{userAgent:'*',disallow:'/'}};
  }
  return {rules:{userAgent:'*',allow:'/'},sitemap:`${site.baseUrl}/sitemap.xml`};
}
