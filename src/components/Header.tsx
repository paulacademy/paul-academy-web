import Link from 'next/link'

const NAV_LINKS = [
  { href: '/#services', label: '서비스' },
  { href: '/#why-paul', label: '왜 폴아카데미' },
  { href: '/blog', label: '입시정보' },
  { href: '/contact', label: '오시는길' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl"
            style={{ color: 'var(--color-primary)' }}
            aria-label="폴아카데미 홈"
          >
            <span className="text-2xl font-black tracking-tight">폴</span>
            <span className="text-sm font-medium text-gray-500 hidden sm:block">아카데미</span>
          </Link>

          <nav aria-label="주요 메뉴" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/consultation"
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            무료 상담 신청
          </Link>
        </div>
      </div>
    </header>
  )
}
