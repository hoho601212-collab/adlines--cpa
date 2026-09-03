export type City={name:string;slug:string;note:string};
export type Region={name:string;fullName:string;slug:string;accent:string;summary:string;cities:City[]};
const city=(name:string,note='지역별 출산·육아 지원과 상담 전 확인사항을 함께 정리합니다.'):City=>({name,slug:`${name}태아보험`,note});
const cities=(names:string[])=>names.map(n=>city(n));
export const regions:Region[]=[
{name:'서울',fullName:'서울특별시',slug:'서울태아보험',accent:'도심형 의료·육아 인프라',summary:'자치구별 임신·출산 지원과 전국 공통 제도를 함께 확인합니다.',cities:[]},
{name:'부산',fullName:'부산광역시',slug:'부산태아보험',accent:'권역별 산모·육아 지원',summary:'부산시 공통 지원과 지역별 추가 사업을 구분해 확인합니다.',cities:[]},
{name:'대구',fullName:'대구광역시',slug:'대구태아보험',accent:'출산가정 생활지원',summary:'광역시 지원과 지역 출산·육아 사업을 함께 확인합니다.',cities:[]},
{name:'인천',fullName:'인천광역시',slug:'인천태아보험',accent:'신도시·생활권 맞춤 정보',summary:'생활권별 지원기관과 지역 사업을 함께 확인합니다.',cities:[]},
{name:'광주',fullName:'광주광역시',slug:'광주태아보험',accent:'양육친화 지원정책',summary:'임신기부터 영유아기까지 이어지는 지역 지원정보를 연결합니다.',cities:[]},
{name:'대전',fullName:'대전광역시',slug:'대전태아보험',accent:'생활권 중심 육아지원',summary:'광역·지역 지원을 분리해 실제 신청조건을 확인합니다.',cities:[]},
{name:'울산',fullName:'울산광역시',slug:'울산태아보험',accent:'출산가정 지원',summary:'지역별 임신·출산 지원과 보육 정보를 함께 확인합니다.',cities:[]},
{name:'세종',fullName:'세종특별자치시',slug:'세종태아보험',accent:'젊은 가족 중심 생활정보',summary:'임신·출산·육아 수요를 반영한 정책정보를 묶어 제공합니다.',cities:[]},
{name:'경기',fullName:'경기도',slug:'경기태아보험',accent:'도시별 지원차이 비교',summary:'시·군별 자체 지원사업 차이가 커 거주지역 기준 세부 확인이 중요합니다.',cities:cities(['수원','성남','용인','고양','화성','부천','남양주','안양','평택','안산','김포','파주','의정부','시흥','광주'])},
{name:'강원',fullName:'강원특별자치도',slug:'강원태아보험',accent:'의료 접근성과 지역지원',summary:'지역 간 이동거리와 의료·육아 인프라 접근성을 함께 고려합니다.',cities:cities(['원주','춘천','강릉','동해'])},
{name:'충북',fullName:'충청북도',slug:'충북태아보험',accent:'도시·군지역 지원 비교',summary:'시군별 출산장려 정책 차이를 확인할 수 있도록 구성합니다.',cities:cities(['청주','충주','제천'])},
{name:'충남',fullName:'충청남도',slug:'충남태아보험',accent:'생활권별 육아정보',summary:'주요 도시별 지원 차이를 비교하기 쉽도록 구성합니다.',cities:cities(['천안','아산','당진','서산','공주','논산'])},
{name:'전북',fullName:'전북특별자치도',slug:'전북태아보험',accent:'지자체 장려금 세부 비교',summary:'시군별 출산·양육 지원의 조건과 지급방식을 확인합니다.',cities:cities(['전주','익산','군산','정읍','김제'])},
{name:'전남',fullName:'전라남도',slug:'전남태아보험',accent:'시군별 출산지원 집중',summary:'지자체별 자체 지원정책의 최신 공고와 거주조건 확인이 핵심입니다.',cities:cities(['목포','여수','순천','광양','나주'])},
{name:'경북',fullName:'경상북도',slug:'경북태아보험',accent:'넓은 생활권·지역 장려정책',summary:'도시별 지원정책과 의료·육아 접근 정보를 함께 제공합니다.',cities:cities(['포항','구미','경산','경주','안동','김천'])},
{name:'경남',fullName:'경상남도',slug:'경남태아보험',accent:'도시별 생활권 맞춤',summary:'주요 도시별 육아환경과 지자체 지원을 각각 구분합니다.',cities:cities(['창원','김해','양산','진주','거제','통영','사천'])},
{name:'제주',fullName:'제주특별자치도',slug:'제주태아보험',accent:'섬 지역 생활·육아 정보',summary:'지역 이동성과 출산·육아 서비스 접근성을 함께 고려합니다.',cities:cities(['서귀포'])}
];
export type SupportProgram={title:string;category:'전국공통'|'지자체';summary:string;target:string;apply:string;sourceName:string;sourceUrl:string;verifiedAt:string};
export const nationalPrograms:SupportProgram[]=[
{title:'첫만남이용권',category:'전국공통',summary:'출생 초기 양육 부담을 줄이기 위한 이용권 제도입니다.',target:'출생아 기준 최신 세부 요건 확인',apply:'정부24·복지로 공식 안내에서 신청방법 확인',sourceName:'복지로',sourceUrl:'https://www.bokjiro.go.kr/',verifiedAt:'2026-09-03'},
{title:'부모급여',category:'전국공통',summary:'영아기 돌봄을 지원하는 전국 공통 제도입니다.',target:'아동 연령 및 보육 형태 등에 따른 기준 확인',apply:'정부24·복지로에서 최신 기준 확인',sourceName:'정부24',sourceUrl:'https://www.gov.kr/',verifiedAt:'2026-09-03'},
{title:'아동수당',category:'전국공통',summary:'아동 양육에 따른 경제적 부담을 줄이기 위한 지원입니다.',target:'아동 연령 등 법정 요건 확인',apply:'정부24·복지로에서 신청 및 상세요건 확인',sourceName:'복지로',sourceUrl:'https://www.bokjiro.go.kr/',verifiedAt:'2026-09-03'}];
export const findRegion=(slug:string)=>regions.find(r=>r.slug===slug);
export const findCity=(region:Region,slug:string)=>region.cities.find(c=>c.slug===slug);
