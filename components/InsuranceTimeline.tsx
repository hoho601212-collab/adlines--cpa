type Props={label:string;checkpoints:string[];supportCount:number;isCity:boolean};

type Stage={period:string;title:string;description:string;tasks:string[]};

export default function InsuranceTimeline({label,checkpoints,supportCount,isCity}:Props){
 const stages:Stage[]=[
  {period:'임신 확인 후',title:'보험·지역정보 첫 정리',description:`${label} 태아보험 가입 가능시기와 지역 지원을 서로 다른 일정으로 나눠 정리합니다.`,tasks:[checkpoints[0]||'가입 가능시기와 보장조건 확인','주민등록 주소지와 거주기간 조건 확인','공식 출처와 마지막 확인일 기록']},
  {period:'출산 예정일 전',title:'신청기한과 상담 질문 정리',description:'출산 전에 신청 가능한 건강관리·검사·교통비 등의 대상 여부를 확인하고 보험 상담 질문을 준비합니다.',tasks:[checkpoints[1]||'출산 전 신청 가능한 제도 확인','예정일 기준 신청 시작일 메모','보험 약관의 보장기간·면책·감액 조건 확인']},
  {period:'출생신고 직후',title:'현금·바우처·서비스 신청',description:`${isCity?`${label} 시 단위 사업과 상위 광역단체 사업`:'광역단체 사업과 거주지 세부사업'}을 함께 확인해 누락을 줄입니다.`,tasks:['출생신고와 행복출산 원스톱서비스 확인',supportCount?`현재 페이지에 정리된 지역 공식지원 ${supportCount}건 재확인`:'거주지 지자체 최신 출산지원 공고 확인','90일·180일·1년 등 사업별 신청기한을 각각 기록']},
  {period:'출산 후 1년까지',title:'분할지급·계속거주 조건 관리',description:'일시금만 확인하지 말고 월지급·연차지급·분할지급 사업의 다음 회차 요건도 관리합니다.',tasks:['주소 이전 전 계속거주 조건 재확인','다자녀·양육·돌 이후 추가지원 확인','정책 변경 여부와 공식 공고를 주기적으로 재확인']}
 ];
 return <section className="section insuranceTimeline"><div className="wrap"><div className="sectionHead"><span className="insuranceBadge">출산 전후 일정표</span><h2>{label} 태아보험·출산지원 준비 순서</h2><p>보험 가입 일정과 공공지원 신청 일정은 서로 다릅니다. 시기별로 나눠 확인하면 놓치는 항목을 줄일 수 있습니다.</p></div><div className="timelineGrid">{stages.map((stage,index)=><article className="timelineCard" key={stage.period}><div className="timelineNumber">{String(index+1).padStart(2,'0')}</div><span className="timelinePeriod">{stage.period}</span><h3>{stage.title}</h3><p>{stage.description}</p><ul>{stage.tasks.map(task=><li key={task}>{task}</li>)}</ul></article>)}</div><div className="timelineNotice">지원제도는 주소지·출생순위·소득·신청시점·예산 등에 따라 달라질 수 있습니다. 실제 신청 직전에는 해당 지자체·정부24·복지로 등 공식기관의 최신 공고를 다시 확인하세요.</div></div></section>
}
