import Link from 'next/link';
import {busanDistricts} from '@/lib/busan-insurance';
import {busanHubGroups} from '@/lib/busan-hub-groups';

export default function BusanDistrictDirectory(){
 const districtMap=new Map(busanDistricts.map(d=>[d.slug,d]));
 return <aside className="section regionDirectory" aria-label="부산 16개 구군 태아보험"><div className="wrap">
  <div className="sectionHead"><span className="insuranceBadge">부산 16개 구·군 세부 가이드</span><h2>보험 관심사부터 고르고, 거주 구·군 정보를 이어서 확인하세요</h2><p>보험상품의 조건은 지역 때문에 달라지는 것이 아니지만 임신 주수, 보험료 설계, 약관 비교처럼 상담 전에 궁금한 주제는 다를 수 있습니다. 부산 허브에서는 관심사별로 구·군 페이지를 묶고, 각 페이지에서 해당 지역의 출산·육아 공공지원까지 별도로 확인할 수 있게 연결했습니다.</p></div>
  <div className="infoSplit"><div className="infoPanel"><span className="insuranceBadge">먼저 보험 기준</span><h3>가입조건·보장·보험료를 먼저 비교</h3><p>거주지역 자체가 보험사의 인수기준을 바꾸는 것은 아닙니다. 현재 임신 주수와 검사·치료 이력, 필요한 보장, 납입 가능한 보험료를 먼저 정리하세요.</p></div><div className="infoPanel infoPanelAccent"><span>📍</span><h3>그다음 지역 기준</h3><p>부산시 공통지원과 구·군 자체지원은 주민등록, 출생순위, 신청기한, 지급수단이 다를 수 있으므로 보험과 분리해서 확인합니다.</p></div></div>
  {busanHubGroups.map(group=><section key={group.title} className="sectionAlt" aria-label={group.title}><div className="sectionHead"><span className="insuranceBadge">{group.icon} 보험 관심사</span><h3>{group.title}</h3><p>{group.summary}</p></div><div className="grid">{group.districtSlugs.map(slug=>{const d=districtMap.get(slug);if(!d)return null;return <Link className="card regionCard" key={d.slug} href={`/태아보험/부산태아보험/${d.slug}`}><span className="pill">부산광역시 {d.name}</span><h3>{d.name} 태아보험</h3><p>{d.theme}</p><b>{group.title} 중심으로 보기 →</b></Link>})}</div></section>)}
  <div className="notice" role="note"><b>부산 지역페이지 이용 팁</b><br/>보험 가입조건은 상품설명서와 약관을 기준으로 확인하고, 출산지원은 실제 주민등록 주소지의 최신 구·군 공고를 기준으로 다시 확인하세요. 이사 예정이라면 현재 주소지와 출산 후 주소지의 신청요건을 각각 비교하는 것이 좋습니다.</div>
 </div></aside>
}
