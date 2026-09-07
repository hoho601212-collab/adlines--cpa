import type {BusanDistrict} from './busan-insurance';

type SupportKind='deadline'|'residence'|'noncash'|'cash'|'service'|'channel'|'common';

function supportKind(item:string):SupportKind{
 if(/신청기한|개월 이내|신청기간|주문기간|사용기한/.test(item)) return 'deadline';
 if(/거주|전입|전출|주민등록|주소지/.test(item)) return 'residence';
 if(/자부담|바우처|농산물|꾸러미|지역화폐|상품권|물품|대여/.test(item)) return 'noncash';
 if(/만원|지원금|축하금|장려금|현금|일시금|분할/.test(item)) return 'cash';
 if(/보건소|건강관리|산후조리|프로그램|서비스|모자보건/.test(item)) return 'service';
 if(/행정복지센터|신청창구|구청|공고|가이드북/.test(item)) return 'channel';
 return 'common';
}

const notes:Record<SupportKind,(district:BusanDistrict,item:string)=>string>={
 deadline:(d,item)=>`${d.name}의 ‘${item}’은 금액보다 기준일을 먼저 봐야 합니다. 출생일·신청일·사용종료일이 서로 다를 수 있으므로 실제 접수 전 최신 공고의 날짜를 다시 확인하세요.`,
 residence:(d,item)=>`${d.name}의 ‘${item}’은 주민등록만으로 판단하지 말고 부모·출생아의 거주기간, 전입시점과 지급 중 전출 조건까지 함께 확인해야 합니다.`,
 noncash:(d,item)=>`${d.name}의 ‘${item}’은 현금성 출산지원금과 별개로 봅니다. 지원형태, 자부담, 사용처와 소진기한을 확인해야 실제 체감 혜택을 정확히 비교할 수 있습니다.`,
 cash:(d,item)=>`${d.name}의 ‘${item}’은 출생순위별 금액, 일시·분할 지급 여부와 부산시 공통지원 중복 가능성을 나눠 확인하세요. 보험금과 합산해 보장금액처럼 표시하지 않습니다.`,
 service:(d,item)=>`${d.name}의 ‘${item}’은 의료·돌봄·보건 서비스 성격을 먼저 확인합니다. 소득·임신주수·출산일 등 이용조건과 예약·신청창구를 보험 보장조건과 분리해 살펴보세요.`,
 channel:(d,item)=>`${d.name}의 ‘${item}’은 시행 여부와 접수창구 확인이 핵심입니다. 구청·보건소·행정복지센터 중 실제 담당기관과 최신 공고일을 확인한 뒤 신청하세요.`,
 common:(d,item)=>`${d.name}의 ‘${item}’은 부산시 공통제도와 구 자체사업 중 어느 쪽인지 먼저 구분하고, 대상·신청기간·지급방식은 최신 공식 안내를 기준으로 확인하세요.`
};

export function getBusanSupportNotes(district:BusanDistrict){
 return district.localChecks.map(item=>notes[supportKind(item)](district,item));
}
