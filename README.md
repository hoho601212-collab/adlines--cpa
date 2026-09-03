# adlines-cpa

전국 생활서비스 비교·상담 플랫폼. 1차 구현은 태아보험 클러스터입니다.

- `/태아보험`
- 전국 17개 광역지역
- 주요 시 한글 SEO URL
- 지역별 출산·육아 지원 데이터 구조
- 중앙 CPA URL 환경변수
- metadata / canonical / sitemap / robots

## Vercel
Framework Preset: Next.js / Root Directory: ./ / Build & Output Settings: 기본값

환경변수는 실제 도메인·CPA 주소 확정 후 `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_INSURANCE_CPA_URL`을 설정합니다.
