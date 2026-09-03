import Link from 'next/link';

const services = [
  ['올바른 보험','태아보험·산모보험 상담 전 필요한 정보와 지역별 출산·육아 지원정책을 확인하세요.','/태아보험','서비스 이용'],
  ['올바른 회생','개인회생·채무조정 관련 절차와 상담 전 확인할 내용을 정리합니다.','#','준비 중'],
  ['올바른 웨딩','지역별 웨딩페어 일정과 결혼 준비 정보를 비교할 수 있도록 준비합니다.','#','준비 중'],
  ['올바른 이사','이사 유형과 견적 비교 전 확인해야 할 정보를 제공합니다.','#','준비 중'],
  ['올바른 청소','입주청소·이사청소 상담과 가격 비교 전 체크사항을 안내합니다.','#','준비 중'],
  ['올바른 인터넷','인터넷·결합상품 가입 전 요금과 조건을 확인할 수 있도록 준비합니다.','#','준비 중'],
  ['올바른 렌트카','장기렌트 및 렌트카 상담 전 비교해야 할 조건을 정리합니다.','#','준비 중'],
  ['올바른 렌탈','가전렌탈 품목별 상담과 계약 전 확인사항을 제공합니다.','#','준비 중'],
  ['올바른 수리','화장실 등 생활 수리 비용을 알아보기 전 필요한 정보를 제공합니다.','#','준비 중']
];

export default function Home(){return <main>
  <section className="hero"><div className="wrap">
    <span className="eyebrow">생활에 필요한 선택을 더 올바르게</span>
    <h1>비교가 필요한 순간,<br/>올바른 정보를 먼저 확인하세요</h1>
    <p>보험부터 회생, 웨딩, 이사, 청소, 인터넷, 렌트카와 렌탈까지. 광고만 나열하는 대신 상담 전 알아야 할 정보와 지역별 자료를 함께 정리합니다.</p>
    <div className="heroActions"><Link className="btn btnPrimary" href="/태아보험">올바른 보험 시작하기</Link></div>
    <div className="trust"><div><strong>정보 먼저</strong><span>상담 신청 전 체크사항 정리</span></div><div><strong>지역별 정보</strong><span>지역 특성과 공공지원 자료 반영</span></div><div><strong>출처 중심</strong><span>공식 자료와 확인일을 명확히 표시</span></div></div>
  </div></section>
  <section className="section"><div className="wrap"><div className="sectionHead"><span className="eyebrow">OLBAREUN SERVICES</span><h2>생활서비스를 하나의 올바른 브랜드로</h2><p>각 분야는 독립적인 전문 정보 영역으로 운영하면서 올바른이라는 하나의 기준으로 연결합니다.</p></div>
  <div className="cards">{services.map(([name,desc,href,status])=><article className="card" key={name}><span className="eyebrow">{status}</span><h3>{name}</h3><p>{desc}</p>{href!=='#'?<Link href={href}>자세히 보기 →</Link>:<span>순차 오픈 예정</span>}</article>)}</div></div></section>
</main>}
