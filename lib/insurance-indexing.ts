export const reviewedRegionSlugs=new Set([
 '서울태아보험','부산태아보험','대구태아보험','인천태아보험','광주태아보험','대전태아보험','울산태아보험','세종태아보험',
 '경기태아보험','강원태아보험','충북태아보험','충남태아보험','전북태아보험','전남태아보험','경북태아보험','경남태아보험','제주태아보험'
]);

export const reviewedCityRegionSlugs=new Set([
 '경기태아보험','강원태아보험','충북태아보험','충남태아보험','전북태아보험','전남태아보험','경북태아보험','경남태아보험','제주태아보험'
]);

export const isReviewedRegion=(slug:string)=>reviewedRegionSlugs.has(slug);
export const isReviewedCityRegion=(slug:string)=>reviewedCityRegionSlugs.has(slug);
