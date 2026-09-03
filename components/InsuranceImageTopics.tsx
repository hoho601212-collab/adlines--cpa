'use client';
import {useState} from 'react';
import type {InsuranceImageItem} from '@/lib/insurance-images';

export default function InsuranceImageTopics({items,title}:{items:InsuranceImageItem[];title:string}){
 const [failed,setFailed]=useState<Record<string,boolean>>({});
 return <section className="section imageTopicSection"><div className="wrap"><div className="topicHead"><span className="eyebrow">항목별 안내</span><h2>{title}</h2><p>상황에 따라 확인할 내용이 달라집니다. 관심 있는 항목부터 살펴보세요.</p></div><div className="imageTopicGrid">{items.map((item,index)=><article className="imageTopicCard" key={item.src}><div className="imageTopicMedia">{!failed[item.src]?<img src={item.src} alt={item.alt} loading={index<2?'eager':'lazy'} onError={()=>setFailed(v=>({...v,[item.src]:true}))}/>:<div className="imageTopicPlaceholder"><span>{String(index+1).padStart(2,'0')}</span><b>올바른 보험</b><small>이미지 준비 영역</small></div>}</div><div className="imageTopicCaption">{item.keyword}</div><div className="imageTopicTags">{item.tags.map(tag=><span key={tag}>#{tag}</span>)}</div></article>)}</div></div></section>
}
