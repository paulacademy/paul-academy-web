import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { BlogCard } from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: '입시 정보',
  description:
    '폴아카데미의 최신 입시 정보, 합격 전략, 대학별 분석을 확인하세요. SKY, 의치한, 해외 명문대 입시 트렌드.',
}

const BLOG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: '폴아카데미 입시 정보',
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paulacademy.net'}/blog`,
  description: '최신 입시 정보 및 합격 전략',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <JsonLd data={BLOG_JSON_LD} />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1
              className="text-4xl font-black mb-3"
              style={{ color: 'var(--color-primary)' }}
            >
              입시 정보
            </h1>
            <p className="text-gray-600 text-lg">
              최신 입시 트렌드와 합격 전략을 확인하세요
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">준비 중입니다. 곧 다양한 콘텐츠를 제공할 예정입니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
