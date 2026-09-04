import {site} from '@/lib/site';

export default function InsuranceEditorialStandards(){
 const standards=[
  {title:'보험정보 작성 기준',body:'가입시기·보장·특약은 일반적인 확인 항목을 중심으로 설명하며, 실제 가입 가능 여부와 보장 범위는 보험회사 심사와 약관을 우선합니다.'},
  {title:'지역지원 정보 기준',body:'지자체·정부기관·공식 포털 등 확인 가능한 출처를 우선 사용하고, 거주기간·출생순위·신청기한·신청방법을 금액과 함께 확인합니다.'},
  {title:'최신성 관리',body:'지원정책에는 공식자료 확인일을 함께 표시합니다. 확인일이 오래됐거나 계획·예산 자료인 경우 최신 시행공고 재확인을 별도로 안내합니다.'},
  {title:'상담·광고 구분',body:'올바른 보험은 정보 제공과 제휴 상담 연결을 목적으로 하며 보험상품을 직접 판매하거나 가입을 확정하지 않습니다.'}
 ];
 return <section className="editorialStandards" aria-labelledby="editorial-standards-title"><div className="wrap"><div className="editorialStandardsHead"><span>정보 작성 원칙</span><h2 id="editorial-standards-title">태아보험·출산지원 정보를 이렇게 확인합니다</h2><p>검색 편의를 위해 지역별로 정리하되, 숫자를 과장하거나 확인되지 않은 지원금액을 현재 기준처럼 표시하지 않습니다.</p></div><div className="editorialStandardsGrid">{standards.map((item,index)=><article key={item.title}><b>{String(index+1).padStart(2,'0')}</b><h3>{item.title}</h3><p>{item.body}</p></article>)}</div><div className="editorialStandardsFoot"><strong>마지막 편집 기준일 {site.contentReviewedAt}</strong><span>정책 신청 전에는 해당 지자체·정부기관의 최신 공고와 보험 약관을 다시 확인하세요.</span></div></div></section>
}
