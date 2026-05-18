import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: '오시는길 | 연락처',
  description:
    '폴아카데미 위치 안내 및 연락처. 전화·이메일로 문의하시거나 직접 방문하세요.',
}

const LOCATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '폴아카데미',
  description: '한국·해외대학 입시 전문학원',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paulacademy.net',
  telephone: '+821000000000',
  email: 'admin@paulacademy.net',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
}

const CONTACT_METHODS = [
  {
    icon: '📞',
    title: '전화 상담',
    value: '010-0000-0000',
    description: '평일 09:00–21:00, 주말 10:00–18:00',
    action: { label: '전화하기', href: 'tel:+821000000000' },
  },
  {
    icon: '✉️',
    title: '이메일 문의',
    value: 'admin@paulacademy.net',
    description: '24시간 접수 / 1영업일 내 회신',
    action: { label: '이메일 보내기', href: 'mailto:admin@paulacademy.net' },
  },
  {
    icon: '💬',
    title: '온라인 상담 신청',
    value: '무료 30분 상담',
    description: '온라인 폼 작성 후 담당자 연락',
    action: { label: '상담 신청하기', href: '/consultation' },
  },
]

const FAQS = [
  {
    q: '상담은 무료인가요?',
    a: '첫 상담(30분)은 무료로 진행됩니다. 현재 학업 상황을 파악하고 적합한 프로그램을 안내해 드립니다.',
  },
  {
    q: '어떤 학생이 등록할 수 있나요?',
    a: '중학교 1학년부터 고등학교 3학년, 재수생까지 모두 가능합니다. 학생의 목표와 현재 상황에 맞는 커리큘럼을 제공합니다.',
  },
  {
    q: '해외 대학 지원도 도와주나요?',
    a: '네, 미국·영국·캐나다·호주 등 주요 영어권 대학 지원을 전문적으로 지원합니다. SAT/ACT, TOEFL/IELTS 준비도 함께 진행합니다.',
  },
  {
    q: '상담 후 바로 등록해야 하나요?',
    a: '아닙니다. 상담은 정보 제공과 학생 분석이 목적입니다. 충분한 검토 후 결정하셔도 됩니다.',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={LOCATION_JSON_LD} />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1
              className="text-4xl font-black mb-3"
              style={{ color: 'var(--color-primary)' }}
            >
              연락처 / 오시는길
            </h1>
            <p className="text-gray-600 text-lg">언제든지 문의해 주세요</p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {CONTACT_METHODS.map(({ icon, title, value, description, action }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">{title}</h2>
                <p className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>
                  {value}
                </p>
                <p className="text-sm text-gray-500 mb-4">{description}</p>
                <Link
                  href={action.href}
                  className="inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {action.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-12">
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              오시는길
            </h2>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-4">
              <p className="text-gray-400 text-sm">지도 준비 중 (위치 확정 후 업데이트 예정)</p>
            </div>
            <address className="not-italic text-gray-600 text-sm space-y-1">
              <p>📍 주소: 서울특별시 (상세 주소 확정 후 업데이트)</p>
              <p>🚇 지하철: (역명 확정 후 업데이트)</p>
              <p>🚌 버스: (노선 확정 후 업데이트)</p>
              <p>🅿️ 주차: (주차 안내 확정 후 업데이트)</p>
            </address>
          </div>

          {/* FAQ */}
          <div>
            <h2
              className="text-2xl font-black mb-6"
              style={{ color: 'var(--color-primary)' }}
            >
              자주 묻는 질문
            </h2>
            <div className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    <span>{q}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
