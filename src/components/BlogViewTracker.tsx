'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

interface BlogViewTrackerProps {
  slug: string
  category: string
}

export function BlogViewTracker({ slug, category }: BlogViewTrackerProps) {
  useEffect(() => {
    trackEvent('blog_page_view', { post_slug: slug, category })
  }, [slug, category])

  return null
}
