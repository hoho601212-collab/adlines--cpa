import type {Region,City} from './insurance-data';

export function getBalancedNearbyCities(region?:Region,city?:City,limit=6):City[]{
 if(!region||!city||region.cities.length<2)return [];
 const index=region.cities.findIndex(item=>item.slug===city.slug);
 if(index<0)return region.cities.filter(item=>item.slug!==city.slug).slice(0,limit);
 const result:City[]=[];
 for(let step=1;step<region.cities.length&&result.length<limit;step++){
  const candidate=region.cities[(index+step)%region.cities.length];
  if(candidate.slug!==city.slug)result.push(candidate);
 }
 return result;
}
