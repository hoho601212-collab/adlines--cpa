export default function RegionalSupportEmpty({label}:{label:string}){
 return <section className="section verifiedLocalSupport supportEmptyState"><div className="wrap"><div className="supportEmptyCard"><div><span className="insuranceBadge">지역 정책 확인 안내</span><h2>{label} 추가지원은 최신 공식공고를 확인하세요</h2><p>현재 이 페이지에는 {label} 자체 지원사업 중 최신 공식자료로 재확인된 항목만 별도 카드로 노출하고 있습니다. 오래된 금액이나 출처가 불분명한 내용은 임의로 표시하지 않습니다.</p></div><ul><li>시청·구청·보건소의 2026년 최신 공고 확인</li><li>거주기간·출생순위·신청기한을 함께 확인</li><li>전국 공통제도와 지역 자체사업을 구분해서 신청</li></ul></div></div></section>
}
