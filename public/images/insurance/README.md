# 올바른 보험 이미지 폴더 규칙

각 태아보험 페이지는 고유 이미지 5장을 사용합니다.

## 폴더 구조
- 메인 허브: `/public/images/insurance/main/`
- 광역지역: `/public/images/insurance/{지역 slug}/`
- 시 페이지: `/public/images/insurance/{광역지역 slug}/{도시 slug}/`

예시:
- `/public/images/insurance/main/01.webp`
- `/public/images/insurance/부산태아보험/01.webp`
- `/public/images/insurance/경기태아보험/수원태아보험/01.webp`

## 파일명
각 폴더에 `01.webp` ~ `05.webp` 5장을 배치합니다.

## 이미지 규격
- WebP 권장
- 동일 페이지 안에서도 장면/구도/인물/배경이 반복되지 않게 제작
- 이미지 자체에 큰 SEO 문구를 넣기보다 하단 HTML 캡션으로 키워드 노출
- 페이지별 캡션은 지역명과 검색 의도에 맞춰 자동 생성

이미지가 아직 업로드되지 않은 경우 UI는 이미지 영역을 숨기고 캡션 데이터만 준비된 상태로 유지합니다.
