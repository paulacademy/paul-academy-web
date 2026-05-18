import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`} className="block p-6 hover:no-underline">
        <div className="flex items-center gap-2 mb-3">
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

        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 leading-snug hover:text-[var(--color-primary)] transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
          {post.summary}
        </p>

        <time className="text-xs text-gray-400" dateTime={post.publishedAt}>
          {formattedDate}
        </time>
      </Link>
    </article>
  )
}
