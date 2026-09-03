import type {MetadataRoute} from 'next';
import {regions} from '@/lib/insurance-data';
import {site} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{const now=new Date();return [{url:site.baseUrl,lastModified:now,priority:1},{url:`${site.baseUrl}/태아보험`,lastModified:now,priority:.95},...regions.flatMap(r=>[{url:`${site.baseUrl}/태아보험/${r.slug}`,lastModified:now,priority:.85},...r.cities.map(c=>({url:`${site.baseUrl}/태아보험/${r.slug}/${c.slug}`,lastModified:now,priority:.75}))])];}
