import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paulacademy.net'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '폴아카데미 | 한국·해외대학 입시 전문학원',
    template: '%s | 폴아카데미',
  },
  description:
    '폴아카데미는 한국 및 해외 명문대학 입시를 전문으로 하는 입시학원입니다. 개인 맞춤 컨설팅으로 최고의 결과를 만들어 드립니다.',
  keywords: [
    '입시학원',
    '해외대학',
    '미국대학',
    '대학입시',
    '입시컨설팅',
    '폴아카데미',
    '수시',
    '정시',
    'SAT',
    '토플',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: '폴아카데미',
    title: '폴아카데미 | 한국·해외대학 입시 전문학원',
    description:
      '개인 맞춤 입시 컨설팅으로 목표 대학 합격을 실현합니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '폴아카데미',
    description: '한국·해외대학 입시 전문학원',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
