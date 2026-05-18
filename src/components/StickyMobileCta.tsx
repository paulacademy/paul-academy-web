'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY
      const pastHero = currentY > 300

      setVisible(pastHero && !scrollingDown)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe bg-white/90 backdrop-blur-sm border-t border-gray-100 shadow-lg transition-transform duration-200 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="px-4 py-3">
        <Link
          href="/consultation"
          tabIndex={visible ? 0 : -1}
          className="flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
          style={{ backgroundColor: 'var(--color-primary-800)' }}
        >
          무료 상담 신청하기 →
        </Link>
      </div>
    </div>
  )
}
