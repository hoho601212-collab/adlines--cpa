export const site = {
  name: '올바른',
  insuranceName: '올바른 보험',
  title: '올바른 | 생활에 필요한 비교와 상담 정보',
  description: '보험, 회생, 웨딩, 이사, 청소, 인터넷, 렌트카, 렌탈 등 생활에 필요한 비교·상담 정보를 한 곳에서 확인하는 올바른 생활정보 플랫폼',
  cpaUrl: process.env.NEXT_PUBLIC_INSURANCE_CPA_URL || '#상담신청',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://adlines.co.kr',
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true',
  contentReviewedAt: '2026-09-05'
};

export const serviceBrands = {
  insurance: '올바른 보험',
  rehabilitation: '올바른 회생',
  wedding: '올바른 웨딩',
  moving: '올바른 이사',
  cleaning: '올바른 청소',
  internet: '올바른 인터넷',
  rentcar: '올바른 렌트카',
  rental: '올바른 렌탈',
  repair: '올바른 수리'
} as const;
