'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/#services', label: '서비스' },
  { href: '/#why-paul', label: '왜 폴아카데미' },
  { href: '/blog', label: '입시정보' },
  { href: '/contact', label: '오시는길' },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // 경로 변경 시 메뉴 닫기
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  // 바디 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="md:hidden">
      {/* 햄버거 버튼 */}
      <button
        type="button"
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-11 h-11 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
      >
        {open ? (
          /* X 아이콘 */
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          /* 햄버거 아이콘 */
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* 오버레이 */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 드로어 패널 */}
      <div
        id="mobile-menu-panel"
        ref={menuRef}
        role="dialog"
        aria-label="사이트 메뉴"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white shadow-xl flex flex-col transform transition-transform duration-250 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 패널 헤더 */}
        <div
          className="flex items-center justify-between px-6 h-16 border-b border-gray-100"
          style={{ color: 'var(--color-primary-800)' }}
        >
          <span className="font-black text-lg">폴아카데미</span>
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* 네비게이션 링크 */}
        <nav aria-label="모바일 메뉴" className="flex-1 overflow-y-auto py-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors border-b border-gray-50"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 하단 CTA */}
        <div className="p-6 border-t border-gray-100 pb-safe">
          <Link
            href="/consultation"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full px-6 py-4 rounded-xl text-base font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: 'var(--color-primary-800)' }}
          >
            무료 상담 신청
          </Link>
          <p className="mt-3 text-center text-xs text-gray-500">
            전화: <a href="tel:+8225582715" className="font-medium">02-558-2715</a>
          </p>
        </div>
      </div>
    </div>
  )
}
