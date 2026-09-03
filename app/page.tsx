import Link from 'next/link';

const services = [
  {name:'올바른 보험',desc:'태아보험·산모보험 상담 전 필요한 정보와 지역별 출산·육아 지원정책을 확인하세요.',href:'/태아보험',status:'서비스 이용',icon:'🛡️'},
  {name:'올바른 회생',desc:'개인회생·채무조정 관련 절차와 상담 전 확인할 내용을 정리합니다.',href:'#',status:'준비 중',icon:'⚖️'},
  {name:'올바른 웨딩',desc:'지역별 웨딩페어 일정과 결혼 준비 정보를 비교할 수 있도록 준비합니다.',href:'#',status:'준비 중',icon:'💍'},
  {name:'올바른 이사',desc:'이사 유형과 견적 비교 전 확인해야 할 정보를 제공합니다.',href:'#',status:'준비 중',icon:'📦'},
  {name:'올바른 청소',desc:'입주청소·이사청소 상담과 가격 비교 전 체크사항을 안내합니다.',href:'#',status:'준비 중',icon:'🧹'},
  {name:'올바른 인터넷',desc:'인터넷·결합상품 가입 전 요금과 조건을 확인할 수 있도록 준비합니다.',href:'#',status:'준비 중',icon:'🌐'},
  {name:'올바른 렌트카',desc:'장기렌트 및 렌트카 상담 전 비교해야 할 조건을 정리합니다.',href:'#',status:'준비 중',icon:'🚘'},
  {name:'올바른 렌탈',desc:'가전렌탈 품목별 상담과 계약 전 확인사항을 제공합니다.',href:'#',status:'준비 중',icon:'📺'},
  {name:'올바른 수리',desc:'화장실 등 생활 수리 비용을 알아보기 전 필요한 정보를 제공합니다.',href:'#',status:'준비 중',icon:'🔧'}
];

const steps=[
  {n:'01',icon:'🔎',title:'필요한 서비스를 선택',desc:'보험·회생·웨딩 등 지금 필요한 생활서비스를 선택합니다.'},
  {n:'02',icon:'📚',title:'상담 전 정보를 먼저 확인',desc:'가격이나 광고 문구보다 먼저 조건·절차·지원정보를 확인합니다.'},
  {n:'03',icon:'✅',title:'필요할 때 상담으로 연결',desc:'충분히 확인한 뒤 상담이 필요한 경우에만 제휴 상담을 이용합니다.'}
];

const principles=[
  {icon:'🧭',title:'정보와 광고를 구분합니다',desc:'콘텐츠 영역과 상담 연결 영역을 명확히 나누어 사용자가 무엇을 보고 있는지 알 수 있게 합니다.'},
  {icon:'📍',title:'지역별 차이를 반영합니다',desc:'지역명만 바꾸는 페이지가 아니라 지자체 지원, 생활권, 이용 조건을 확인해 지역별 정보를 구성합니다.'},
  {icon:'📅',title:'확인일을 관리합니다',desc:'바뀔 수 있는 정책과 지원정보는 공식 출처와 확인일을 함께 표시하는 것을 기본 원칙으로 합니다.'}
];

export default function Home(){return <main>
  <section className="hero homeHero"><div className="wrap homeHeroGrid">
    <div className="homeHeroCopy">
      <span className="eyebrow">생활에 필요한 선택을 더 올바르게</span>
      <h1>비교가 필요한 순간,<br/><em>올바른 정보</em>를 먼저 확인하세요</h1>
      <p>보험부터 회생, 웨딩, 이사, 청소, 인터넷, 렌트카와 렌탈까지. 광고만 나열하는 대신 상담 전 알아야 할 정보와 지역별 자료를 함께 정리합니다.</p>
      <div className="heroActions"><Link className="btn btnPrimary btnLift" href="/태아보험"><span>올바른 보험 시작하기</span><b>→</b></Link><a className="btn btnSoft" href="#services">서비스 둘러보기</a></div>
      <div className="heroMini"><span>✓ 공식자료 중심</span><span>✓ 지역별 정보</span><span>✓ 모바일 최적화</span></div>
    </div>
    <div className="heroVisual" aria-label="올바른 서비스 안내">
      <div className="heroVisualGlow" />
      <div className="floatCard floatCardA"><span>🛡️</span><div><b>올바른 보험</b><small>태아보험 지역별 가이드</small></div><i>→</i></div>
      <div className="floatCard floatCardB"><span>⚖️</span><div><b>올바른 회생</b><small>절차·상담 전 체크</small></div><i>+</i></div>
      <div className="floatCard floatCardC"><span>💍</span><div><b>올바른 웨딩</b><small>지역별 일정·준비정보</small></div><i>+</i></div>
      <div className="heroBadge"><strong>9</strong><span>생활서비스<br/>통합 브랜드</span></div>
    </div>
  </div></section>

  <section className="quickTrust"><div className="wrap trust"><div><strong>정보 먼저</strong><span>상담 신청 전 체크사항 정리</span></div><div><strong>지역별 정보</strong><span>지역 특성과 공공지원 자료 반영</span></div><div><strong>출처 중심</strong><span>공식 자료와 확인일을 명확히 표시</span></div></div></section>

  <section className="section serviceSection" id="services"><div className="wrap"><div className="sectionHead"><span className="eyebrow">OLBAREUN SERVICES</span><h2>생활서비스를 하나의<br className="mobileBreak"/> 올바른 브랜드로</h2><p>각 분야는 독립적인 전문 정보 영역으로 운영하면서 ‘올바른’이라는 하나의 기준으로 연결합니다.</p></div>
  <div className="serviceCards">{services.map((service,index)=>{const content=<><div className="serviceCardTop"><span className="serviceIcon" aria-hidden="true">{service.icon}</span><span className="serviceStatus">{service.status}</span></div><h3>{service.name}</h3><p>{service.desc}</p><div className="serviceCardBottom"><span>{service.href!=='#'?'자세히 보기':'순차 오픈 예정'}</span><b>{service.href!=='#'?'→':'+'}</b></div></>;return service.href!=='#'?<Link href={service.href} className={`serviceCard serviceCardActive serviceTone${index%4}`} key={service.name}>{content}</Link>:<article className={`serviceCard serviceTone${index%4}`} key={service.name}>{content}</article>})}</div></div></section>

  <section className="section processSection"><div className="wrap"><div className="sectionHead centerHead"><span className="eyebrow">HOW IT WORKS</span><h2>상담부터 누르지 않아도 됩니다</h2><p>올바른은 사용자가 먼저 이해하고, 확인하고, 필요할 때 상담으로 이어지는 흐름을 지향합니다.</p></div><div className="processGrid">{steps.map(step=><article className="processCard" key={step.n}><span className="stepNo">{step.n}</span><div className="processIcon">{step.icon}</div><h3>{step.title}</h3><p>{step.desc}</p></article>)}</div></div></section>

  <section className="section principleSection"><div className="wrap principleGrid"><div className="principleIntro"><span className="eyebrow">OUR STANDARD</span><h2>‘올바른’이라는 이름에 맞게<br/>운영 기준도 분명하게</h2><p>생활서비스 비교 사이트에서 가장 중요한 것은 더 많은 광고가 아니라 사용자가 판단할 수 있는 정보라고 생각합니다.</p><Link className="textArrow" href="/태아보험">올바른 보험 먼저 보기 <b>→</b></Link></div><div className="principleList">{principles.map((item,i)=><article className="principleItem" key={item.title}><div className="principleIcon">{item.icon}</div><div><span>0{i+1}</span><h3>{item.title}</h3><p>{item.desc}</p></div></article>)}</div></div></section>

  <section className="section homeCtaSection"><div className="wrap"><div className="homeCta"><div><span className="eyebrow darkEyebrow">첫 번째 서비스</span><h2>올바른 보험부터 시작했습니다</h2><p>태아보험 가입 전 확인사항과 전국 지역별 출산·육아 지원정보를 함께 살펴보세요.</p></div><Link className="btn ctaWhite" href="/태아보험">태아보험 정보 보기 <b>→</b></Link></div></div></section>
</main>}
