# adlines-cpa

전국 생활서비스 비교·상담 플랫폼. 1차 구현은 태아보험 클러스터입니다.

- `/태아보험`
- 전국 17개 광역지역 + 주요 시 한글 SEO URL
- 지역별 출산·육아 지원 데이터 구조
- 지역·도시별 고유 H1 / 메타 / 본문 / FAQ
- 지역 페이지당 상담폼 2개
- 페이지당 WebP 이미지 5장 경로 규칙
- metadata / canonical / sitemap / robots
- 중앙 CPA URL 환경변수

## 품질 감사

배포 전 지역 페이지 전체를 한 번에 검사합니다.

```bash
npm run audit:insurance
```

검사항목: 17개 광역지역, 주요 시 정책 데이터, 도시·광역 고유문구, SEO 생성규칙, canonical, sitemap, 상담폼 2개, 내부링크 신호, 광주광역시/경기 광주시 slug 충돌 처리, 정책 출처 URL·검증일, WebP 5장 규칙, 출시 전 인덱싱 제어.

감사 후 실제 Next.js 빌드까지 한 번에 실행하려면:

```bash
npm run audit:release
```

실제 지역별 WebP 바이너리는 `public/images/insurance/.../01.webp` ~ `05.webp` 구조를 따르며, 코드상 경로 규칙과 실제 파일 업로드 여부를 별도로 확인합니다.

## Vercel

Framework Preset: Next.js / Root Directory: ./ / Build & Output Settings: 기본값

환경변수는 `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_INSURANCE_CPA_URL`을 설정합니다. 사이트 공개 준비가 끝나기 전에는 프로젝트의 인덱싱 제어 설정을 유지하고, 최종 콘텐츠·이미지·상담링크 검수 후 공개 인덱싱으로 전환합니다.
