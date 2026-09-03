import type {RegionalSupportItem} from './regional-support';

const DATA:Record<string,RegionalSupportItem[]>={
  창원태아보험:[
    {title:'2026 창원 출산가구 주택구입 대출이자 지원',summary:'창원시는 2026년 출생일로부터 2년 이내 영아를 양육하는 출산가구의 주택구입 대출이자를 지원합니다.',benefit:'대출잔액 (5+자녀수)천만원 한도 이자 3% 이내 · 연 최대 150+(30×자녀수)만원 · 선정 시 최대 5년',eligibility:'창원시 내 주택을 구입해 거주하는 출산가구로 중위소득 180% 이하 등 공고 요건 충족 가구',apply:'2026.7.1~7.21 주소지 읍면동 방문 또는 경남바로서비스 온라인 신청',sourceName:'창원특례시 2026 출산가구 주택구입 대출이자 지원',sourceUrl:'https://www.changwon.go.kr/cwportal/10430.web?amode=view&gcode=1009&idx=878899',verifiedAt:'2026-09-03'}
  ],
  김해태아보험:[
    {title:'김해시 출산축하금',summary:'김해시는 출산·양육 부담을 줄이기 위해 출생순위에 따라 출산축하금을 지원합니다.',benefit:'첫째 50만원 · 둘째 이상 100만원',eligibility:'자녀 출생일 기준 부 또는 모가 김해시에 90일 이상 거주하는 가정 등 조례 요건',apply:'출생신고 후 주소지 읍면동에서 최신 신청기한과 구비서류 확인',sourceName:'김해시 출산축하금 제도 안내',sourceUrl:'https://www.gimhae.go.kr/_res/portal/data/pdf/p07760_data1_202301.pdf',verifiedAt:'2026-09-03'}
  ],
  양산태아보험:[
    {title:'양산시 출산장려금',summary:'양산시는 출생일부터 신청일까지 자녀와 보호자가 함께 관내에 주민등록을 두고 실제 거주하는 가정에 출산장려금을 지급합니다.',benefit:'첫째 50만원 · 둘째 100만원 · 셋째 이상 200만원',eligibility:'출생일 또는 입양일부터 신청일까지 자녀와 보호자가 함께 양산시에 주민등록을 두고 실제 거주하는 세대',apply:'출생신고일로부터 6개월 이내 주소지 읍면동에 출산서비스 통합처리 신청서 제출',sourceName:'양산시 복지포털 출산장려금',sourceUrl:'https://yangsan.go.kr/welfare/contents.do?mid=0101020200',verifiedAt:'2026-09-03'},
    {title:'2026 양산 출산가구 주택구입 대출이자 지원',summary:'출생일로부터 24개월 이내 영아를 양육하는 출산가구의 주거비 부담을 줄이는 2026년 사업입니다.',benefit:'대출잔액 (5+자녀수)천만원 한도 이자 3% · 연 최대 150+(30×자녀수)만원',eligibility:'양산시 주택을 구입해 거주하며 기준중위소득 180% 이하, 1주택·주택가격·면적 등 공고요건 충족 출산가구',apply:'2026.7.1~7.31 경남바로서비스 온라인 신청',sourceName:'양산시 고시 제2026-187호',sourceUrl:'https://www.yangsan.go.kr/portal/saeol/gosi/view.do?mid=0102010000&notAncmtMgtNo=77990',verifiedAt:'2026-09-03'},
    {title:'양산 산모·신생아 건강관리 본인부담금 지원',summary:'산모·신생아 건강관리 서비스를 이용한 출산가정의 본인부담금을 추가 지원합니다.',benefit:'본인부담금 90% · 출생아당 최대 15일',eligibility:'서비스 신청일 기준 산모 주소지가 양산시이며 기준중위소득 180% 이하인 출산가정 등',apply:'서비스 종료일로부터 90일 이내 양산시보건소 또는 웅상보건소 방문 신청',sourceName:'양산시보건소',sourceUrl:'https://yangsan.go.kr/health/contents.do?mid=0301040000',verifiedAt:'2026-09-03'}
  ],
  진주태아보험:[
    {title:'진주시 출산축하금',summary:'진주시는 첫째부터 출생순위에 따라 출산축하금을 지원하고 셋째 이상은 여러 해에 걸쳐 분할 지급합니다.',benefit:'첫째 100만원 · 둘째 200만원 · 셋째 이상 600만원(출생 시 200만원 + 생후 1~4년 연 100만원)',eligibility:'진주시에 출생신고하고 출생일 기준 90일 전부터 진주시에 주민등록을 두고 거주한 부 또는 모 등',apply:'출생일로부터 180일 이내 읍면사무소 또는 동 행정복지센터 신청',sourceName:'진주시 출산축하금 민원편람',sourceUrl:'https://www.jinju.go.kr/00131/00193/00185.web?amode=view&midx=449',verifiedAt:'2026-09-03'}
  ],
  거제태아보험:[
    {title:'2026 거제시 출산장려금',summary:'거제시는 2026년 예산에 출산가정의 경제적 부담 완화를 위한 출산장려금을 연례사업으로 편성했습니다.',benefit:'첫째 100만원 · 둘째 300만원 · 셋째 이상 800만원',eligibility:'거제시 출생가정 중 출생순위 및 조례상 거주·출생신고 요건 충족',apply:'출생신고 후 주소지 면·동에서 최신 지급회차와 신청요건 확인',sourceName:'거제시 2026 주민참여예산 사업정보',sourceUrl:'https://geoje.go.kr/index.geoje?dbiz_cd=5370000202430015&fis_year=2026&menuCd=DOM_000009308003002001',verifiedAt:'2026-09-03'}
  ]
};

export function getGyeongnamCitySupport(citySlug?:string){return citySlug?DATA[citySlug]||[]:[];}
