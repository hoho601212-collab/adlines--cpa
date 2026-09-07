import type {BusanDistrict} from './busan-insurance';

type Override=Partial<Pick<BusanDistrict,'theme'|'intro'|'insuranceFocus'|'localChecks'|'source'>>;

const overrides:Record<string,Override>={
 '남구태아보험':{
  theme:'지역화폐 출산장려금과 산후조리비를 보험 보장과 구분',
  intro:'남구는 2026 복지로 공식자료에서 모든 출생아 대상 오륙도페이 50만원 출산장려금과 출산가정 산후조리비 지원을 안내합니다. 지역화폐·현금성 공공지원과 민간보험 보장은 지급조건이 다르므로 따로 확인해야 합니다.',
  insuranceFocus:['30세·100세 등 보장기간 차이','갱신형·비갱신형 구조와 장기 보험료 확인','공공 산후조리비와 산모·신생아 보험 보장의 역할 구분'],
  localChecks:['남구 거주 출생아 오륙도페이 50만원 지급','출생신고일로부터 1년 이내 신청·익월 10일 지역화폐 지급','2026 출생아 산후조리비 지원의 대상·신청기한 별도 확인'],
  source:{name:'복지로 · 부산 남구 출산장려금 지원',url:'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00002553&wlfareInfoReldBztpCd=02',verified:'2026-09-07',note:'복지로 지자체 복지서비스(최종 반영 2026-06-30)에서 남구 거주 출생아 오륙도페이 50만원, 출생신고일로부터 1년 이내 신청과 익월 10일 지급을 확인했습니다.'}
 },
 '영도구태아보험':{
  theme:'출산축하용품과 장기 보험료를 현물·보험으로 구분',
  intro:'영도구는 복지로 공식자료에서 출생신고일 현재 영도구에 주민등록을 둔 출산가정에 15만원 상당 기저귀를 현물로 지원하는 출산축하용품 사업을 안내합니다. 현물지원의 실제 사용가치와 장기 보험료는 별도로 계산하는 편이 정확합니다.',
  insuranceFocus:['장기 유지 가능한 월 보험료','보장기간과 납입기간의 차이','현물 공공지원과 보험금 지급조건의 구분'],
  localChecks:['영도구 모든 출산가정 대상 15만원 상당 기저귀 현물지원','출생신고일 현재 부 또는 모와 출생아의 영도구 주민등록 요건','출생신고 때 행정복지센터 출산서비스 통합처리 신청'],
  source:{name:'복지로 · 영도구 출산축하용품 지원사업',url:'https://www.bokjiro.go.kr/ssis-tbu/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000875',verified:'2026-09-07',note:'복지로 영도구 출산축하용품 공식 안내에서 모든 출산가정 대상 15만원 상당 기저귀 현물지원, 주민등록 요건과 출생신고 시 통합신청 절차를 확인했습니다.'}
 }
};

export function withBusanDistrictEvidence(district:BusanDistrict):BusanDistrict{
 const override=overrides[district.slug];
 return override?{...district,...override}:district;
}
