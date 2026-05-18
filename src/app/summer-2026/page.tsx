import type { Metadata } from 'next'
import { SummerForm } from './SummerForm'

export const metadata: Metadata = {
  title: '2026 여름특강 신청',
  description:
    '폴아카데미 2026 여름특강 — 수학, 영어, 국어, 과학, 사회, 대입 컨설팅, SAT/AP. 지금 신청하고 여름을 알차게 보내세요.',
  alternates: { canonical: '/summer-2026' },
  openGraph: {
    title: '2026 여름특강 신청 | 폴아카데미',
    description: '개인 맞춤 여름특강으로 실력을 한 단계 높이세요.',
  },
}

export default function SummerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16 px-4 text-white text-center"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-800) 0%, #0f2944 100%)',
        }}
      >
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 opacity-80">
          2026 Summer Intensive
        </p>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
          폴아카데미
          <br />
          <span style={{ color: 'var(--color-accent-300)' }}>여름특강</span>
        </h1>
        <p className="text-blue-100 text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
          수학·영어·국어·과학·사회부터 대입 컨설팅, SAT, AP까지
          <br className="hidden sm:block" />
          개인 맞춤 집중 커리큘럼으로 실력을 한 단계 높이세요.
        </p>

        {/* Key points */}
        <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
          {['중1 ~ 고3 전 학년', '소그룹·1:1 선택', '국내·해외대 입시 대비', '강남 직영 캠퍼스'].map(
            (point) => (
              <span
                key={point}
                className="px-3 py-1.5 rounded-full font-medium"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                ✓ {point}
              </span>
            )
          )}
        </div>
      </section>

      {/* Form section */}
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">여름특강 신청하기</h2>
            <p className="text-gray-500 text-sm">
              신청 후 <strong>1영업일 이내</strong> 담당 선생님이 연락드립니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100">
            <SummerForm />
          </div>

          {/* Trust signals */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
            <div>
              <p className="text-xl font-bold text-gray-900 mb-1">15년+</p>
              <p>입시 전문 경력</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 mb-1">98%</p>
              <p>목표대학 합격률</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 mb-1">1:1</p>
              <p>개인 맞춤 컨설팅</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
