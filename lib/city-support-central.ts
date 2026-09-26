import type {RegionalSupportItem} from './regional-support';
import {getSouthCitySupport} from './city-support-south';
import {getEastCitySupport} from './city-support-east';

const DATA:Record<string,RegionalSupportItem[]>={
  원주태아보험:[
    {title:'원주시 산후조리비 지원',summary:'원주시에 출생등록한 신생아의 산모가 출산 후 사용한 산후조리 관련 비용을 실비로 지원받을 수 있는 사업입니다.',benefit:'산모 1인당 50만원 이내 실비 지원',eligibility:'신생아 출생일 기준 원주시에 주민등록을 두고 신생아를 원주시에 출생등록한 산모',apply:'출산 또는 사산한 날부터 12개월 이내 원주시보건소 방문 또는 정부24 온라인 신청',sourceName:'원주시보건소 산후조리비 지원',sourceUrl:'https://www.wonju.go.kr/health/contents.do?key=6405',verifiedAt:'2026-09-26'},
    {title:'원주 산후 건강관리 지원',summary:'강원도 내 거주요건을 충족한 산모의 출산 후 의료비와 약제비 부담을 지원합니다.',benefit:'첫째 15만원 · 둘째 20만원 · 셋째 이상 30만원 한도',eligibility:'강원도 내 6개월 이상 거주한 산모',apply:'출산 후 6개월 이내 모자보건실 방문 또는 정부24 보조금24 신청',sourceName:'원주시보건소 모자보건 지원',sourceUrl:'https://www.wonju.go.kr/health/contents.do?key=6160',verifiedAt:'2026-09-26'}
  ],
  춘천태아보험:[
    {title:'춘천 임산부 검진·영양·유축기 지원',summary:'춘천 거주 임산부에게 출생순위별 검진비 쿠폰과 엽산·철분제, 유축기 대여 등을 지원합니다.',benefit:'검진비 쿠폰 첫째 1장 · 둘째 2장 · 셋째 이상 3장, 엽산·철분제 지급, 유축기 대여',eligibility:'주민등록상 춘천 거주 임산부',apply:'신분증과 임신확인서를 준비해 보건소 등 공식 안내에 따라 신청',sourceName:'춘천시 복지포털 임신장려시책',sourceUrl:'https://www.chuncheon.go.kr/new-welfare/life/pregnancy-birth/encouragement-policy/',verifiedAt:'2026-09-26'},
    {title:'춘천 산후 건강관리 지원',summary:'강원도 내 거주요건을 충족한 춘천 산모의 산후 건강관리 비용을 출생순위에 따라 지원합니다.',benefit:'첫째 15만원 · 둘째 20만원 · 셋째 이상 30만원 한도',eligibility:'신청일 기준 강원도 내 6개월 이상 거주자',apply:'춘천시 임신장려시책의 최신 신청방법과 구비서류 확인 후 신청',sourceName:'춘천시 복지포털 임신장려시책',sourceUrl:'https://www.chuncheon.go.kr/new-welfare/life/pregnancy-birth/encouragement-policy/',verifiedAt:'2026-09-26'}
  ],
  강릉태아보험:[
    {title:'강릉시 산후조리비 지원',summary:'신생아 출생일 기준 강릉시에 계속 거주하고 출생등록한 가정의 산후조리 관련 업종 사용액을 강릉페이로 지원합니다.',benefit:'산후조리 관련 업종 사용액 50만원 한도 · 강릉페이 지급',eligibility:'신생아 출생일 기준 강릉시에 6개월 이상 계속 거주 중이며 신생아를 강릉시에 출생등록한 산모 등',apply:'신생아 출생일 기준 6개월 이내 서부건강생활지원센터 모자보건실 방문 신청',sourceName:'강릉시보건소 산후조리비지원',sourceUrl:'https://www.gn.go.kr/phc/contents.do?key=6784',verifiedAt:'2026-09-26'},
    {title:'강릉 산후 건강관리 의료비 지원',summary:'출산 후 산모에게 발생한 의료비와 처방 약제비를 출생순위에 따라 실비 지원합니다.',benefit:'첫째 최대 15만원 · 둘째 최대 20만원 · 셋째 이상 최대 30만원',eligibility:'신청일 기준 주민등록등본상 강원특별자치도 내 6개월 이상 거주한 산모',apply:'출산일로부터 6개월 이내 서부건강생활지원센터 모자보건실 방문 신청',sourceName:'강릉시보건소 산후 건강관리 지원',sourceUrl:'https://www.gn.go.kr/phc/contents.do?key=5967',verifiedAt:'2026-09-26'}
  ],
  동해태아보험:[
    {title:'동해시 출산장려금',summary:'동해시는 출산 또는 입양 당시 시내에 주민등록을 두고 거주하는 영아의 부 또는 모에게 출생순위별 장려금을 월 단위로 분할 지급합니다.',benefit:'첫째 60만원(10만원×6개월) · 둘째 120만원(10만원×12개월) · 셋째 이상 180만원(10만원×18개월)',eligibility:'출산일 또는 입양일 현재 동해시에 주민등록을 두고 거주하는 영아의 부 또는 모(법정대리인 포함)',apply:'10개 동 행정복지센터 방문 신청 · 월 10만원씩 매월 지급',sourceName:'복지로 동해시 출산장려금 지원',sourceUrl:'https://www.bokjiro.go.kr/ssis-tbu/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003777',verifiedAt:'2026-09-26'}
  ],
  청주태아보험:[
    {title:'청주 결혼·출산가정 주택자금 대출이자 지원',summary:'2026년 청주시가 결혼·출산가정의 주거비 부담을 줄이기 위해 운영하는 이자 지원입니다.',benefit:'연 최대 50만원 · 최대 5년간 총 250만원',eligibility:'주민등록상 청주시 거주 결혼·출산가정 중 기준중위소득 180% 이하 등 사업요건 충족 가정',apply:'2026년 5월 이후 공고에 따라 온라인 또는 오프라인 신청',sourceName:'청주시 2026 청년·가족정책',sourceUrl:'https://www.cheongju.go.kr/www/contents.do?key=22710',verifiedAt:'2026-09-03'},
    {title:'청주 다태아 조제분유 지원',summary:'쌍둥이 등 다태아 출산가정의 양육비 부담을 줄이기 위해 조제분유 구입비를 지원합니다.',benefit:'영아 1명당 월 최대 10만원 · 쌍둥이 연 최대 240만원',eligibility:'청주시에 주민등록을 둔 기준중위소득 120% 이하 다태아 출산가정의 12개월 이하 영아',apply:'충북 가치자람 온라인 또는 청주시 여성가족과 방문 신청',sourceName:'청주시 2026 가족정책',sourceUrl:'https://www.cheongju.go.kr/www/contents.do?key=22710',verifiedAt:'2026-09-03'}
  ],
  충주태아보험:[
    {title:'충주시 임산부 교통비 지원 조례 추진',summary:'2026년 충주시의회에서 임산부 이동 부담을 줄이기 위한 교통비 지원 조례안을 심사·의결했습니다. 실제 신청 가능 여부와 지급 개시일은 충주시 시행공고를 다시 확인해야 합니다.',benefit:'임산부 1인당 50만원 원칙(조례안 기준)',eligibility:'조례안 기준 신청일 현재 충주시에 1년 이상 주민등록·실거주하고 임신 16주 이상 또는 출산 후 6개월 이내인 임산부 등',apply:'충주시의 실제 시행공고·접수안내가 게시됐는지 확인 후 신청',sourceName:'충주시의회 2026 임산부 교통비 지원 조례안 심사자료',sourceUrl:'https://council.chungju.go.kr/minutes/svc/web/cms/mnts/SvcMntsViewer.php?mode=spkr1&schSn=4024&spkrCd=MBR9110',verifiedAt:'2026-09-08'}
  ],
  제천태아보험:[
    {title:'제천시 출생아 주택자금·출산자금 지원',summary:'제천시는 둘째 이상 출생가정에 주택자금 대출 여부에 따라 주택자금지원 또는 출산자금지원을 선택해 분할 지원합니다.',benefit:'둘째: 주택자금 최대 800만원 또는 출산자금 600만원 · 셋째: 주택자금 최대 3,800만원 또는 출산자금 3,000만원 · 넷째 이상: 출산자금 3,000만원',eligibility:'제천시에 출생신고한 출생아의 부모가 출생일 전후 거주요건을 충족하고, 자녀순위·주택자금 대출 여부 등 세부기준에 해당하는 가정',apply:'주소지 읍·면·동 행정복지센터에서 유형 선택, 분할지급 일정과 최신 적용기준 확인',sourceName:'제천시 복지다담 출생아 지원금 안내',sourceUrl:'https://www.jecheon.go.kr/bokjidadam/www/viewTnDspsnWlfareU.do?cpn=2&guid=0b0e8195-c794-4473-89cc-c7e4c9cfd2c6&key=3&rcpp=9&so1=UD&wlfareKey=296',verifiedAt:'2026-09-08'}
  ],
  천안태아보험:[
    {title:'천안시 출생축하금',summary:'천안시에 출생신고한 가정에 출생순위에 따라 지급하는 출생축하금입니다.',benefit:'첫째 30만원 · 둘째 50만원 · 셋째 이상 100만원',eligibility:'영아 출생월 기준 6개월 전부터 신청일까지 계속 천안시에 주민등록을 두고 거주하는 가정 등',apply:'주소지 행정복지센터 또는 복지로 신청',sourceName:'천안시 출산장려·다자녀 정책 안내',sourceUrl:'https://www.cheonan.go.kr/images/life/sub14/sub14_03_file.pdf',verifiedAt:'2026-09-03'}
  ],
  아산태아보험:[
    {title:'아산시 산후관리비',summary:'출산가정의 경제적 부담과 산모의 산후 회복을 지원하는 아산시 현금지원 사업입니다.',benefit:'일반가정 100만원 · 기초생활수급 가정 300만원',eligibility:'출산일 기준 6개월 전부터 신청일까지 부 또는 모가 아산시에 계속 주민등록을 두고, 아산시에 출생신고한 가정',apply:'출생일로부터 6개월 이내 신청',sourceName:'아산시 2026 산후관리비 안내',sourceUrl:'https://media.asan.go.kr/develop/m_news/?a_no=5&cate=news&m_mode=view&pds_no=2026060405545966126',verifiedAt:'2026-09-03'},
    {title:'아산시 임신·출산 종합지원',summary:'2026 신혼부부 종합지원 자료집에 임산부 100원 행복택시, 출생축하금, 산후관리비 등 임신·출산 정책을 묶어 안내합니다.',benefit:'사업별 차등',eligibility:'아산시 거주 임산부·출산가정 등 각 사업별 요건 적용',apply:'아산시 2026 신혼부부 종합지원 자료집에서 사업별 신청처 확인',sourceName:'아산시 2026 종합지원 자료집',sourceUrl:'https://www.asan.go.kr/main/cms/?PageNo=12&category=&m_mode=view&no=131&pds_no=2026032509504064900&tb_nm=city_news_notice',verifiedAt:'2026-09-03'}
  ],
  당진태아보험:[
    {title:'당진시 출생지원금',summary:'당진시는 출생순위에 따라 출생지원금을 지급하며 셋째 이상은 여러 회차로 나눠 지급합니다.',benefit:'첫째 50만원 · 둘째 100만원 · 셋째 500만원 · 넷째 이상 1,000만원',eligibility:'출생일 기준 보호자가 첫째·둘째는 1개월, 셋째 이상은 12개월 전부터 당진시에 계속 주민등록을 두고 거주하는 가정. 필요 거주기간 미충족 시 전입 후 해당 기간을 채우면 지원 가능',apply:'출생일로부터 1년 이내 출생신고와 함께 읍면동 주민센터 행복출산 원스톱서비스 신청',sourceName:'당진시 임신·출산·육아 지원안내',sourceUrl:'https://www.dangjin.go.kr/kor/sub05_04_02_01.do',verifiedAt:'2026-09-03'},
    {title:'당진 셋째 이상 출생지원금 분할지급',summary:'셋째 이상 출생지원금은 출생 시 일부를 먼저 지급하고 이후 계속 거주 여부를 확인해 후속 회차를 지급합니다.',benefit:'셋째: 출생 시 200만원 + 12개월마다 150만원씩 2회 · 넷째 이상: 출생 시 400만원 + 12개월마다 200만원씩 3회',eligibility:'후속 지급 시점까지 당진시에 계속 주민등록을 유지하는 지원대상 가정',apply:'최초 출생지원금 신청 후 시가 회차별 거주요건을 확인해 지급',sourceName:'당진시 임신·출산·육아 지원안내',sourceUrl:'https://www.dangjin.go.kr/kor/sub05_04_02_01.do',verifiedAt:'2026-09-03'}
  ],
  서산태아보험:[
    {title:'서산시 신생아 출산지원금',summary:'서산시는 첫째부터 출생순위에 따라 출산지원금을 차등 지급합니다.',benefit:'첫째 50만원 · 둘째 100만원 · 셋째 500만원 · 넷째 이상 1,000만원',eligibility:'첫째·둘째는 출산일 기준 1개월, 셋째 이상은 1년 전부터 서산시에 주민등록을 두고 실제 거주하는 보호자 등',apply:'출생일로부터 1년 이내 주소지 행정복지센터 또는 정부24 신청',sourceName:'서산시 복지넷',sourceUrl:'https://www.seosan.go.kr/welfare/contents.do?key=5350',verifiedAt:'2026-09-03'},
    {title:'서산 둘째 이후 영유아 양육비',summary:'둘째 이후 자녀가 있는 서산시 출산가정에 월 단위 양육비를 지원합니다.',benefit:'만 3세까지 월 10만원',eligibility:'서산시에서 태어난 둘째 이후 자녀로 관내 주민등록을 두고 실제 거주하는 가정',apply:'주소지 행정복지센터에서 신청',sourceName:'서산시 임신·출산·육아지원',sourceUrl:'https://www.seosan.go.kr/welfare/contents.do?key=8879',verifiedAt:'2026-09-03'}
  ],
  공주태아보험:[
    {title:'공주시 출산장려금',summary:'공주시는 첫째부터 셋째 이상까지 비교적 큰 규모의 출산장려금을 공주페이로 분할 지원합니다.',benefit:'첫째 300만원 · 둘째 500만원 · 셋째 이상 1,000만원',eligibility:'자녀를 공주시에 주민등록하고 출생일 기준 부 또는 모가 공주시에 1년 이상 계속 주민등록을 둔 경우 등',apply:'출생자 주민등록 주소지 읍·면·동에서 신청, 지급은 공주페이 분할 방식',sourceName:'공주시 출산장려금 안내',sourceUrl:'https://www.gongju.go.kr/kr/sub06_01_06_06.do',verifiedAt:'2026-09-03'}
  ],
  논산태아보험:[
    {title:'논산시 출산지원금',summary:'논산시는 첫째부터 다섯째 이상까지 출생순위별로 출산지원금을 지급합니다.',benefit:'첫째 100만원 · 둘째 200만원 · 셋째 300만원 · 넷째 400만원 · 다섯째 이상 700만원',eligibility:'신생아 출생일 기준 부 또는 모가 3개월 전부터 논산시에 계속 주소를 두고 출생신고 시 신생아 주소를 논산시로 하는 경우 등',apply:'읍·면·동 방문 출생신고 시 신청 또는 정부24 온라인 신청',sourceName:'논산시보건소 2026 출산지원금',sourceUrl:'https://tax.nonsan.go.kr/health/html/sub06/060102.html',verifiedAt:'2026-09-03'}
  ]
};

export function getCentralCitySupport(citySlug?:string){
  if(!citySlug)return [];
  const local=DATA[citySlug];
  if(local?.length)return local;
  const south=getSouthCitySupport(citySlug);
  if(south.length)return south;
  return getEastCitySupport(citySlug);
}
