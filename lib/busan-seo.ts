import type {BusanDistrict} from './busan-insurance';
import {getBusanSeoIntent} from './busan-page-context';

export type BusanSeoCopy={title:string;description:string;schemaName:string};

export function getBusanSeoCopy(district:BusanDistrict):BusanSeoCopy{
 const intent=getBusanSeoIntent(district);
 return{
  title:`${district.name} 태아보험 상담 | ${intent.titleTail}`,
  description:`${district.name} 태아보험 상담 전 ${intent.descriptionLead} 2026 부산시·${district.name} 출산·육아 지원은 보험 보장과 구분해 공식자료 기준으로 확인하세요.`,
  schemaName:`${district.name} 태아보험 상담 ${district.theme}`
 };
}
