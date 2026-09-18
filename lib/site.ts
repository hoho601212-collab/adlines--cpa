export const site = {
  name: '올바른 보험',
  insuranceName: '올바른 보험',
  title: '태아보험 | 가입시기·보장·특약 비교 가이드 | 올바른 보험',
  description: '태아보험 가입 전 확인해야 할 가입시기, 보장 범위, 특약, 보험료와 가입조건을 정리한 올바른 보험 정보 플랫폼',
  cpaUrl: process.env.NEXT_PUBLIC_INSURANCE_CPA_URL || '#상담신청',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adlines.co.kr',
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true',
  contentReviewedAt: '2026-09-08'
};

export const serviceBrands = {
  insurance: '올바른 보험'
} as const;
