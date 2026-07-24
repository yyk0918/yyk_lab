// 감탄스토어 제품 및 컨텐츠 데이터

export interface Product {
  id: number;
  image: string;
  tag: string;
  name: string;
  originalPrice: number;
  discountRate: number;
  salePrice: number;
  rating: number;
  reviewCount: number;
}

export interface Collection {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface Announcement {
  id: number;
  text: string;
  href: string;
}

// 카테고리별 slug 매핑 (한글 라벨 → URL slug)
export const categorySlugMap: Record<string, string> = {
  "5주년": "anniversary",
  베스트: "best",
  감탄브라: "gamtanbra",
  자세브라: "jasebra",
  오얏: "oyat",
  주니어: "junior",
  맨즈: "mens",
  스포츠: "sports",
  이벤트: "event",
  브라: "bra",
  팬티: "panty",
  라이프웨어: "lifewear",
};

export const announcements: Announcement[] = [
  {
    id: 1,
    text: "🎉 카카오톡 채널 추가하고 10% 쿠폰 받기!",
    href: "/category/event",
  },
  {
    id: 2,
    text: "🎂 감탄스토어 5주년 기념 최대 50% SALE",
    href: "/category/anniversary",
  },
  {
    id: 3,
    text: "⭐ 신규 멤버십 가입 시 3,000원 적립금 지급",
    href: "/category/event",
  },
  {
    id: 4,
    text: "🚚 전 상품 무료배송 / 무료 교환반품",
    href: "/category/best",
  },
];

export const navCategories = [
  { label: "5주년", href: "/category/anniversary", isNew: true },
  { label: "베스트", href: "/category/best" },
  { label: "감탄브라", href: "/category/gamtanbra" },
  { label: "자세브라", href: "/category/jasebra" },
  { label: "오얏", href: "/category/oyat" },
  { label: "주니어", href: "/category/junior" },
  { label: "맨즈", href: "/category/mens" },
  { label: "스포츠", href: "/category/sports" },
  { label: "이벤트", href: "/category/event" },
];

// 메가메뉴 서브 카테고리 (아이템을 URL slug와 함께)
export const megaMenuSubCategories = [
  {
    title: "브라",
    items: [
      { name: "감탄브라", slug: "gamtanbra" },
      { name: "자세브라", slug: "jasebra" },
      { name: "브라탑", slug: "bra" },
      { name: "스포츠브라", slug: "sports" },
      { name: "주니어브라", slug: "junior" },
      { name: "수유브라", slug: "bra" },
    ],
  },
  {
    title: "팬티",
    items: [
      { name: "감탄팬티", slug: "gamtanbra" },
      { name: "자세팬티", slug: "jasebra" },
      { name: "브리프", slug: "panty" },
      { name: "드로즈", slug: "mens" },
      { name: "보이쇼츠", slug: "panty" },
      { name: "삼각팬티", slug: "panty" },
    ],
  },
  {
    title: "라이프웨어",
    items: [
      { name: "캐미솔", slug: "lifewear" },
      { name: "슬립", slug: "lifewear" },
      { name: "레깅스", slug: "sports" },
      { name: "이너탑", slug: "lifewear" },
      { name: "홈웨어", slug: "lifewear" },
      { name: "파자마", slug: "lifewear" },
    ],
  },
  {
    title: "맨즈",
    items: [
      { name: "드로즈", slug: "mens" },
      { name: "트렁크", slug: "mens" },
      { name: "러닝셔츠", slug: "mens" },
      { name: "머슬핏", slug: "mens" },
      { name: "홈웨어", slug: "mens" },
      { name: "양말", slug: "mens" },
    ],
  },
];

export const products: Product[] = [
  {
    id: 1,
    image: "bg-gradient-to-br from-pink-100 to-rose-200",
    tag: "26SS",
    name: "26SS 감탄 인견쿨 스트랩 브라팬티 세트",
    originalPrice: 59000,
    discountRate: 32,
    salePrice: 40120,
    rating: 4.8,
    reviewCount: 11311,
  },
  {
    id: 2,
    image: "bg-gradient-to-br from-amber-50 to-orange-100",
    tag: "에어쿨",
    name: "에어쿨 메쉬 노와이어 감탄브라",
    originalPrice: 45000,
    discountRate: 28,
    salePrice: 32400,
    rating: 4.7,
    reviewCount: 8921,
  },
  {
    id: 3,
    image: "bg-gradient-to-br from-slate-100 to-gray-200",
    tag: "베스트",
    name: "시그니처 소프트 누디 브라팬티 세트",
    originalPrice: 52000,
    discountRate: 25,
    salePrice: 39000,
    rating: 4.9,
    reviewCount: 15234,
  },
  {
    id: 4,
    image: "bg-gradient-to-br from-purple-100 to-violet-200",
    tag: "뉴컬러",
    name: "라벤더 블루밍 자세브라",
    originalPrice: 48000,
    discountRate: 20,
    salePrice: 38400,
    rating: 4.6,
    reviewCount: 6543,
  },
  {
    id: 5,
    image: "bg-gradient-to-br from-green-50 to-emerald-100",
    tag: "써머",
    name: "쿨링 아이스 실크 감탄브라탑",
    originalPrice: 39000,
    discountRate: 35,
    salePrice: 25350,
    rating: 4.5,
    reviewCount: 4567,
  },
  {
    id: 6,
    image: "bg-gradient-to-br from-blue-50 to-sky-100",
    tag: "오얏",
    name: "오얏 코튼 모달 베이직 팬티 3매",
    originalPrice: 35000,
    discountRate: 30,
    salePrice: 24500,
    rating: 4.8,
    reviewCount: 9876,
  },
  {
    id: 7,
    image: "bg-gradient-to-br from-stone-100 to-warmGray-200",
    tag: "맨즈",
    name: "맨즈 소프트 터치 드로즈 5종 패키지",
    originalPrice: 65000,
    discountRate: 38,
    salePrice: 40300,
    rating: 4.7,
    reviewCount: 3210,
  },
  {
    id: 8,
    image: "bg-gradient-to-br from-rose-50 to-pink-100",
    tag: "주니어",
    name: "주니어 첫 브라 스타터 키트 2종",
    originalPrice: 42000,
    discountRate: 22,
    salePrice: 32760,
    rating: 4.9,
    reviewCount: 5432,
  },
];

export const collections: Collection[] = [
  {
    id: 1,
    title: "감탄브라",
    subtitle: "하루 종일 편안한 착용감",
    image: "bg-gradient-to-br from-brand-lighter to-brand-light",
    href: "/collection/gamtanbra",
  },
  {
    id: 2,
    title: "자세브라",
    subtitle: "바른 자세를 위한 설계",
    image: "bg-gradient-to-br from-amber-50 to-yellow-100",
    href: "/collection/jasebra",
  },
  {
    id: 3,
    title: "주니어",
    subtitle: "성장기 아이를 위한",
    image: "bg-gradient-to-br from-purple-50 to-lavender-200",
    href: "/collection/junior",
  },
  {
    id: 4,
    title: "맨즈",
    subtitle: "남성을 위한 편안함",
    image: "bg-gradient-to-br from-slate-100 to-gray-200",
    href: "/collection/mens",
  },
  {
    id: 5,
    title: "스포츠",
    subtitle: "액티브한 당신을 위해",
    image: "bg-gradient-to-br from-emerald-50 to-green-100",
    href: "/collection/sports",
  },
  {
    id: 6,
    title: "오얏",
    subtitle: "자연주의 소재 컬렉션",
    image: "bg-gradient-to-br from-lime-50 to-green-50",
    href: "/collection/oyat",
  },
];

export const guideCards = [
  {
    icon: "Ruler",
    title: "나에게 맞는 사이즈 찾기",
    description: "간단한 측정으로 완벽한 핏을 찾아보세요",
    href: "/category/gamtanbra",
  },
  {
    icon: "Shirt",
    title: "나에게 맞는 원단 고르기",
    description: "계절과 취향에 맞는 원단을 추천해드려요",
    href: "/category/best",
  },
  {
    icon: "Droplets",
    title: "세탁 및 관리하기",
    description: "오래 입을 수 있는 올바른 세탁법",
    href: "/category/lifewear",
  },
];

export const footerLinks = {
  company: [
    { label: "브랜드 스토리", href: "/collection/gamtanbra" },
    { label: "감탄스토어 소개", href: "/category/best" },
    { label: "채용정보", href: "/category/event" },
    { label: "입점문의", href: "/category/event" },
  ],
  help: [
    { label: "공지사항", href: "/category/event" },
    { label: "자주 묻는 질문", href: "/category/event" },
    { label: "1:1 문의", href: "/category/event" },
    { label: "교환/반품 안내", href: "/category/event" },
  ],
  policy: [
    { label: "이용약관", href: "/category/event" },
    { label: "개인정보처리방침", href: "/category/event", bold: true },
    { label: "청소년보호정책", href: "/category/event" },
    { label: "제휴문의", href: "/category/event" },
  ],
};

export const companyInfo = {
  csNumber: "1544-6101",
  csHours: "평일 10:00 - 17:00 / 점심 12:30 - 13:30",
  csWeekend: "주말 및 공휴일 휴무",
  companyName: "(주)감탄스토어",
  ceo: "대표이사: 김감탄",
  businessNumber: "사업자등록번호: 123-45-67890",
  salesReport: "통신판매업신고: 2024-서울강남-01234호",
  address: "서울특별시 강남구 테헤란로 123 감탄빌딩 5층",
  email: "help@gamtanstore.com",
};
