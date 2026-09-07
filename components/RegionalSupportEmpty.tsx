export default function RegionalSupportEmpty({label}:{label:string}){
 const checks=[
  {icon:'🏛️',title:'공식 공고',body:'시청·구청·보건소의 2026년 최신 공고와 사업 시행 여부를 먼저 확인하세요.'},
  {icon:'📍',title:'거주 조건',body:'부모와 아동의 주민등록 주소, 계속 거주기간, 출생순위 조건을 함께 확인하세요.'},
  {icon:'🗓️',title:'신청 기한',body:'출생신고 직후부터 수개월 이내처럼 신청창구가 짧은 사업이 있어 마감일 확인이 중요합니다.'},
  {icon:'🧾',title:'공통·지역 구분',body:'첫만남이용권 등 전국 공통제도와 지자체 자체사업을 구분해 중복·누락 없이 신청하세요.'}
 ];
 return <section className="section verifiedLocalSupport supportEmptyState"><div className="wrap"><div className="supportEmptyCard"><div className="supportEmptyIntro"><span className="insuranceBadge">🔎 지역 정책 확인 안내</span><h2>{label} 추가지원은 최신 공식공고를 확인하세요</h2><p>현재 이 페이지에는 {label} 자체 지원사업 가운데 최신 공식자료로 다시 확인된 항목만 별도 카드로 노출합니다. 오래된 지원금액이나 시행 여부가 불분명한 내용은 현재 제도처럼 표시하지 않습니다.</p><div className="supportEmptyTrust"><span>✓ 확인된 정보만 표시</span><span>✓ 오래된 금액 임의 사용 안 함</span><span>✓ 신청 전 공식기관 재확인</span></div></div><div className="supportEmptyChecklist">{checks.map(item=><article key={item.title}><span aria-hidden="true">{item.icon}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div><div className="supportEmptyTip"><span aria-hidden="true">💡</span><p><b>{label}에서 먼저 확인하면 좋은 순서</b><small>출생신고 예정 주소지 → 부모 거주기간 → 출생순위 → 신청기한 → 지급방식 순으로 확인하면 지원정보를 빠르게 정리할 수 있습니다.</small></p></div></div></div></section>
}
