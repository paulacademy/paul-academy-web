import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { BlogCard } from '@/components/BlogCard'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { getFeaturedPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: '폴아카데미 | 한국·해외대학 입시 전문학원',
  description:
    '폴아카데미는 한국 및 해외 명문대학 입시를 전문으로 하는 입시학원입니다. 개인 맞춤 컨설팅으로 SKY, 의치한, 미국 아이비리그 합격을 실현합니다.',
}

const SERVICES = [
  {
    icon: '🎓',
    title: '국내 명문대 입시',
    description: 'SKY, 의치한, 포스텍 등 국내 최상위 대학 수시·정시 전략 설계 및 맞춤 관리',
  },
  {
    icon: '🌐',
    title: '해외 명문대 입시',
    description: '미국 아이비리그·탑스쿨, 영국 옥스브리지 등 해외 대학 지원 전략 및 에세이 컨설팅',
  },
  {
    icon: '📝',
    title: '내신·수능 관리',
    description: '체계적 학습 계획 수립과 개인별 취약점 분석으로 내신 및 수능 성적 극대화',
  },
  {
    icon: '💼',
    title: '비교과·스펙 설계',
    description: '대학별 평가 기준에 맞는 비교과 활동, 포트폴리오, 자기소개서 전략적 기획',
  },
]

const DIFFERENTIATORS = [
  {
    number: '01',
    title: '1:1 맞춤 컨설팅',
    description: '학생 개개인의 성적, 목표, 강점을 분석하여 최적의 입시 전략을 수립합니다. 일반화된 커리큘럼이 아닌 나만의 로드맵.',
  },
  {
    number: '02',
    title: '실적으로 증명',
    description: '누적 합격 실적과 데이터 기반 전략으로 합격률을 높입니다. 매년 SKY 및 의치한, 해외 명문대 합격생을 배출합니다.',
  },
  {
    number: '03',
    title: '전담 담임 시스템',
    description: '입학부터 합격까지 동일한 담임 선생님이 전 과정을 함께합니다. 학부모님과의 정기 상담으로 진행 상황을 투명하게 공유합니다.',
  },
  {
    number: '04',
    title: '국내외 입시 통합 전략',
    description: '국내 대학과 해외 대학을 동시에 준비할 수 있는 통합 전략으로 지원 가능성을 극대화합니다.',
  },
]

const STATS = [
  { value: '98%', label: '목표 대학 합격률' },
  { value: '200+', label: '연간 합격생' },
  { value: '15년+', label: '입시 전문 경력' },
  { value: '1:1', label: '개인 맞춤 컨설팅' },
]

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: '폴아카데미',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paulacademy.net',
  description: '한국 및 해외 명문대학 입시 전문학원',
  telephone: '+82-2-558-2715',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '삼성로 85길 32 3,4층',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-2-558-2715',
    contactType: 'customer service',
    availableLanguage: 'Korean',
    email: 'admin@paulacademy.net',
  },
}

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts(3)

  return (
    <>
      <JsonLd data={ORGANIZATION_JSON_LD} />
      <StickyMobileCta />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 sm:py-32"
        style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            한국·해외대학 입시 전문
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            목표 대학 합격,
            <br />
            <span style={{ color: 'var(--color-accent-light)' }}>폴아카데미</span>와 함께라면
            <br />
            가능합니다
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto mb-10">
            SKY·의치한부터 미국 아이비리그까지,
            개인 맞춤 1:1 컨설팅으로 합격의 문을 열어드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              무료 상담 신청하기 →
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 transition-all"
            >
              서비스 알아보기
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl sm:text-4xl font-black text-white">{value}</p>
                <p className="text-sm text-blue-200 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-black mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              서비스 안내
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              국내외 명문대 입시를 위한 모든 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Paul Academy Section */}
      <section id="why-paul" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-black mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              왜 폴아카데미인가요?
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              수많은 학원 중에서 폴아카데미를 선택해야 하는 이유
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIFFERENTIATORS.map(({ number, title, description }) => (
              <div
                key={number}
                className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div
                  className="flex-shrink-0 text-3xl font-black opacity-20 leading-none pt-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {number}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            지금 바로 무료 상담을 받아보세요
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            30분 무료 입시 상담으로 우리 아이의 가능성을 확인하세요
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center px-10 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            무료 상담 신청 →
          </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2
                  className="text-3xl sm:text-4xl font-black mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  입시 정보
                </h2>
                <p className="text-gray-600">최신 입시 트렌드와 합격 전략</p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                전체 보기 →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
