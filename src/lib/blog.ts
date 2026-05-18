export interface BlogPost {
  slug: string
  title: string
  summary: string
  category: string
  publishedAt: string
  readingMinutes: number
}

const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: '2025-수시-전략-총정리',
    title: '2025학년도 수시 전략 총정리 — SKY 합격을 위한 핵심 포인트',
    summary:
      '2025학년도 수시에서 서울대·연세대·고려대 합격을 위해 반드시 알아야 할 전략을 정리했습니다. 학생부 관리부터 자기소개서까지.',
    category: '수시전략',
    publishedAt: '2025-09-01',
    readingMinutes: 8,
  },
  {
    slug: '미국-대학-지원-타임라인',
    title: '미국 대학 지원 타임라인 — 고2부터 시작해야 하는 이유',
    summary:
      '미국 명문대 지원은 최소 2년의 준비가 필요합니다. 단계별 타임라인과 각 시기에 집중해야 할 항목을 안내합니다.',
    category: '해외입시',
    publishedAt: '2025-08-15',
    readingMinutes: 6,
  },
  {
    slug: '의대-입시-변화-2026',
    title: '2026학년도 의대 정원 확대 — 입시 전략 어떻게 달라지나?',
    summary:
      '의대 정원 확대로 인한 입시 환경 변화를 분석하고, 이에 맞는 수시·정시 전략을 제시합니다.',
    category: '의치한수',
    publishedAt: '2025-08-01',
    readingMinutes: 7,
  },
]

export async function getFeaturedPosts(count: number): Promise<BlogPost[]> {
  return SAMPLE_POSTS.slice(0, count)
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return SAMPLE_POSTS
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return SAMPLE_POSTS.find((p) => p.slug === slug) ?? null
}
