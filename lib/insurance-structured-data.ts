import type {Region,City} from './insurance-data';
import type {FaqItem} from './insurance-content';
import type {RelatedLink} from './insurance-page-variants';
import {site} from './site';

export function getInsuranceStructuredData({region,city,faqs,relatedLinks}:{region?:Region;city?:City;faqs:FaqItem[];relatedLinks:RelatedLink[]}){
  const label=city?.name||region?.name;
  const pagePath=!region?'/태아보험':`/태아보험/${region.slug}${city?`/${city.slug}`:''}`;
  const url=`${site.baseUrl}${pagePath}`;
  const title=label?`${label} 태아보험 상담`:'태아보험 상담 가이드';
  const description=label?`${label} 태아보험 가입 전 확인사항과 2026 출산·육아 지원정보를 함께 정리한 페이지입니다.`:'태아보험 가입시기와 보장내용, 지역별 출산·육아 지원정보를 함께 정리한 가이드입니다.';
  const breadcrumbItems=[
    {name:'올바른',item:site.baseUrl},
    {name:'태아보험',item:`${site.baseUrl}/태아보험`},
    ...(region?[{name:`${region.name} 태아보험`,item:`${site.baseUrl}/태아보험/${region.slug}`}]:[]),
    ...(city?[{name:`${city.name} 태아보험`,item:url}]:[])
  ];
  return {
    webpage:{'@context':'https://schema.org','@type':'WebPage','@id':`${url}#webpage`,url,name:title,description,isPartOf:{'@id':`${site.baseUrl}#website`},inLanguage:'ko-KR',about:{'@type':'Thing',name:'태아보험'}},
    faq:{'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))},
    breadcrumb:{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:breadcrumbItems.map((item,index)=>({'@type':'ListItem',position:index+1,name:item.name,item:item.item}))},
    related:{'@context':'https://schema.org','@type':'ItemList',name:`${label||'태아보험'} 관련 가이드`,itemListElement:relatedLinks.map((item,index)=>({'@type':'ListItem',position:index+1,url:`${site.baseUrl}${item.href}`,name:item.title}))}
  };
}
