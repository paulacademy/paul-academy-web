import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { getPostBySlug, getAllPosts } from '@/lib/blog'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: '폴아카데미',
    },
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <div className="bg-white min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <Link
              href="/blog"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--color-primary)' }}
            >
              ← 입시 정보 목록
            </Link>
          </nav>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(30, 58, 95, 0.08)',
                    color: 'var(--color-primary)',
                  }}
                >
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.readingMinutes}분 읽기</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-4">{post.summary}</p>

              <time className="text-sm text-gray-400" dateTime={post.publishedAt}>
                {formattedDate}
              </time>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              {post.body.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* CTA */}
          <div
            className="mt-12 p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
          >
            <p className="text-white font-bold text-xl mb-2">입시 전략이 궁금하신가요?</p>
            <p className="text-blue-100 text-sm mb-6">전문 컨설턴트와 무료 상담을 예약하세요</p>
            <Link
              href="/consultation"
              className="inline-flex items-center px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              무료 상담 신청 →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
