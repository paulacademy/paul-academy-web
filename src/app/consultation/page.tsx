import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { ConsultationForm } from './ConsultationForm'

export const metadata: Metadata = {
  title: '무료 상담 신청',
  description:
    '폴아카데미 입시 전문 컨설턴트와 30분 무료 상담을 신청하세요. SKY·의치한·해외 명문대 입시 전략을 직접 확인하세요.',
}

const CONTACT_INFO = [
  { icon: '📞', label: '전화', value: '010-0000-0000', href: 'tel:+821000000000' },
  {
    icon: '✉️',
    label: '이메일',
    value: 'admin@paulacademy.net',
    href: 'mailto:admin@paulacademy.net',
  },
  { icon: '⏰', label: '운영시간', value: '평일 09:00–21:00 / 주말 10:00–18:00', href: null },
]

const CONTACT_PAGE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: '폴아카데미 무료 상담 신청',
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paulacademy.net'}/consultation`,
}

export default function ConsultationPage() {
  return (
    <>
      <JsonLd data={CONTACT_PAGE_JSON_LD} />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1
              className="text-4xl font-black mb-3"
              style={{ color: 'var(--color-primary)' }}
            >
              무료 상담 신청
            </h1>
            <p className="text-gray-600 text-lg">
              30분 무료 입시 상담으로 우리 아이의 가능성을 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">상담 신청서</h2>
              <ConsultationForm />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h2
                  className="text-lg font-bold mb-4"
                  style={{ color: 'var(--color-primary)' }}
                >
                  연락처
                </h2>
                <ul className="space-y-4">
                  {CONTACT_INFO.map(({ icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="text-xl">{icon}</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-semibold hover:underline"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-gray-800">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to expect */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
              >
                <h2 className="text-lg font-bold mb-4">상담에서 받을 수 있는 것</h2>
                <ul className="space-y-3 text-sm text-blue-100">
                  {[
                    '현재 성적 분석 및 목표 대학 가능성 진단',
                    '맞춤형 입시 로드맵 초안',
                    '수시·정시 전략 방향 제시',
                    '해외 대학 준비 타임라인',
                    '학원 프로그램 상세 안내',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
