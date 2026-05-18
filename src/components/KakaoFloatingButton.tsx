'use client'

import { trackEvent } from '@/lib/analytics'

const KAKAO_URL = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? '#'

export function KakaoFloatingButton() {
  function handleClick() {
    trackEvent('kakao_consultation_click', {
      page_path: window.location.pathname,
    })
  }

  return (
    <a
      href={KAKAO_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="카카오톡 상담"
      className="group fixed right-4 bottom-20 md:bottom-4 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
      style={{ width: 56, height: 56, backgroundColor: '#FEE500' }}
    >
      {/* KakaoTalk speech bubble icon */}
      <svg width="30" height="28" viewBox="0 0 38 36" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 0C8.507 0 0 6.716 0 15.003c0 5.258 3.29 9.88 8.274 12.7L6.5 36l9.08-4.738C16.354 31.42 17.663 31.5 19 31.5c10.493 0 19-6.716 19-15.003C38 6.716 29.493 0 19 0z"
          fill="#3A1D1D"
        />
      </svg>
      {/* Desktop hover tooltip */}
      <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
        카카오톡 상담
      </span>
    </a>
  )
}
