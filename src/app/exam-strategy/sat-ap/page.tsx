import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'SAT/AP 시험 전략 완벽 가이드 | 폴아카데미',
  description:
    '디지털 SAT 구조, 섹션별 학습 전략, AP 과목 선택 방법, 학년별 수강 계획까지. 폴아카데미 전문 컨설턴트의 SAT/AP 완벽 전략 가이드.',
}

const ARTICLE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SAT/AP 시험 전략 완벽 가이드',
  description: '디지털 SAT 구조, 점수대별 학습 전략, AP 과목 선택 및 학년별 계획 완전 정리',
  datePublished: '2026-05-18',
  publisher: { '@type': 'Organization', name: '폴아카데미' },
}

const SAT_SCHEDULE = [
  { date: '2026년 3월 8일', deadline: '2026년 2월 24일' },
  { date: '2026년 5월 2일', deadline: '2026년 4월 21일' },
  { date: '2026년 6월 6일', deadline: '2026년 5월 26일' },
  { date: '2026년 8월 22일', deadline: '2026년 8월 11일' },
  { date: '2026년 10월 3일', deadline: '2026년 9월 22일' },
  { date: '2026년 11월 7일', deadline: '2026년 10월 27일' },
  { date: '2026년 12월 5일', deadline: '2026년 11월 24일' },
]

const RW_SCORES = [
  { current: '500-600', target: '650+', focus: '문법 기초, 핵심 어휘 300개' },
  { current: '600-700', target: '750+', focus: '수사학 분석, 어휘 확장' },
  { current: '700+', target: '800', focus: '어려운 추론 문제, 시간 관리' },
]

const MATH_SCORES = [
  { current: '500-600', target: '650+', focus: '대수학 기초, 기본 공식 암기' },
  { current: '600-700', target: '750+', focus: '고급 수학, 문장제 문제' },
  { current: '700+', target: '800', focus: '어려운 기하, 빠른 풀이 훈련' },
]

const AP_SUBJECTS = [
  { name: 'AP Calculus BC', difficulty: '★★★★☆', rate: '약 40%', core: '극한, 미분, 적분, 급수, 매개변수 방정식', tip: 'Calculus AB 내용 포함. AB 먼저 이해 후 BC 진행 권장' },
  { name: 'AP Physics C (Mech + E&M)', difficulty: '★★★★★', rate: '—', core: '두 과목 별도 시험, 미적분 기반 물리', tip: 'Calculus BC 선수학습 필수. MIT·Caltech·공대 지망생 필수' },
  { name: 'AP Chemistry', difficulty: '★★★★☆', rate: '약 18%', core: '원자 구조, 주기율, 화학결합, 열역학, 전기화학', tip: '수식 암기보다 개념 이해 중심, 실험 문항 대비 필수' },
  { name: 'AP Computer Science A', difficulty: '★★★☆☆', rate: '약 27%', core: 'Java 프로그래밍, 자료구조, 알고리즘 기초', tip: '실제 코딩 연습 필수. Free Response 섹션이 배점의 50%' },
  { name: 'AP English Literature', difficulty: '★★★☆☆', rate: '약 9%', core: '소설/시/드라마 분석, Literary Analysis Essay', tip: '에세이 작성 훈련이 핵심. 주요 문학 작품 사전 독서' },
  { name: 'AP Economics (Macro + Micro)', difficulty: '★★★☆☆', rate: '각 약 22%', core: '거시/미시 경제 이론', tip: '두 과목 함께 공부하면 효율적 (겹치는 개념 많음)' },
]

const STEM_PLAN = [
  { grade: '9학년', courses: 'Computer Science Principles (입문), Human Geography' },
  { grade: '10학년', courses: 'Chemistry, Computer Science A' },
  { grade: '11학년', courses: 'Calculus BC, Physics C: Mechanics, US History' },
  { grade: '12학년', courses: 'Physics C: E&M, Biology (의대 지망), Statistics' },
]

const HUMANITIES_PLAN = [
  { grade: '9학년', courses: 'World History: Modern' },
  { grade: '10학년', courses: 'US History, English Language' },
  { grade: '11학년', courses: 'European History, Psychology, Economics Macro' },
  { grade: '12학년', courses: 'English Literature, Government & Politics, Economics Micro' },
]

export default function SatApPage() {
  return (
    <>
      <JsonLd data={ARTICLE_JSON_LD} />

      {/* Hero */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">홈</Link>
            <span className="text-blue-400 mx-2 text-sm">/</span>
            <span className="text-blue-200 text-sm">SAT/AP 전략</span>
          </nav>
          <p
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            시험 전략 가이드
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            SAT/AP 시험 전략
            <br />
            <span style={{ color: 'var(--color-accent-light)' }}>완벽 가이드</span>
          </h1>
          <p className="text-blue-200 text-lg">
            디지털 SAT 구조 · 섹션별 전략 · AP 과목 선택 · 학년별 계획 — 2026년 5월 최신
          </p>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* SAT 시험 구조 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              1. SAT 시험 구조 (2024 Digital SAT)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold">섹션</th>
                    <th className="text-center px-4 py-3 font-semibold">시간</th>
                    <th className="text-center px-4 py-3 font-semibold">문항 수</th>
                    <th className="text-center px-4 py-3 font-semibold">배점</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-800">Reading and Writing</td>
                    <td className="px-4 py-3 text-center text-gray-600">64분 (2모듈 각 32분)</td>
                    <td className="px-4 py-3 text-center text-gray-600">54문항</td>
                    <td className="px-4 py-3 text-center text-gray-600">200-800점</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">Math</td>
                    <td className="px-4 py-3 text-center text-gray-600">70분 (2모듈 각 35분)</td>
                    <td className="px-4 py-3 text-center text-gray-600">44문항</td>
                    <td className="px-4 py-3 text-center text-gray-600">200-800점</td>
                  </tr>
                  <tr className="bg-white font-bold" style={{ color: 'var(--color-primary)' }}>
                    <td className="px-4 py-3">총점</td>
                    <td className="px-4 py-3 text-center">134분</td>
                    <td className="px-4 py-3 text-center">98문항</td>
                    <td className="px-4 py-3 text-center">400-1600점</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Adaptive Testing: 1모듈 성과에 따라 2모듈 난이도 자동 조정',
                '계산기 허용: Math 전 섹션 (이전에는 일부만)',
                '문제 수 감소 (170 → 98문항), 시간 단축 (3시간+ → 2시간 14분)',
                '온라인 시험 (Bluebook App 사용)',
              ].map((item) => (
                <div key={item} className="flex gap-3 bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
                  <span className="flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SAT 시험 일정 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              2. 2025-2026 SAT 시험 일정
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold">시험일</th>
                    <th className="text-left px-4 py-3 font-semibold">등록 마감</th>
                  </tr>
                </thead>
                <tbody>
                  {SAT_SCHEDULE.map((row, idx) => (
                    <tr key={row.date} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2.5 font-medium text-gray-800">{row.date}</td>
                      <td className="px-4 py-2.5 text-gray-600">{row.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">해외(한국) 시험장: College Board 공식 사이트에서 한국 내 시험장 확인 필수</p>
          </section>

          {/* 섹션별 학습 전략 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              3. 섹션별 학습 전략
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">Reading and Writing — 점수대별 목표</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: 'rgba(30,58,95,0.08)', color: 'var(--color-primary)' }}>
                        <th className="text-left px-4 py-3 font-semibold">현재 점수</th>
                        <th className="text-left px-4 py-3 font-semibold">목표 점수</th>
                        <th className="text-left px-4 py-3 font-semibold">핵심 집중 영역</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RW_SCORES.map((row, idx) => (
                        <tr key={row.current} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-2.5 text-gray-700">{row.current}</td>
                          <td className="px-4 py-2.5 font-semibold" style={{ color: 'var(--color-primary)' }}>{row.target}</td>
                          <td className="px-4 py-2.5 text-gray-600">{row.focus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">Math — 점수대별 목표</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: 'rgba(30,58,95,0.08)', color: 'var(--color-primary)' }}>
                        <th className="text-left px-4 py-3 font-semibold">현재 점수</th>
                        <th className="text-left px-4 py-3 font-semibold">목표 점수</th>
                        <th className="text-left px-4 py-3 font-semibold">핵심 집중 영역</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MATH_SCORES.map((row, idx) => (
                        <tr key={row.current} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-2.5 text-gray-700">{row.current}</td>
                          <td className="px-4 py-2.5 font-semibold" style={{ color: 'var(--color-primary)' }}>{row.target}</td>
                          <td className="px-4 py-2.5 text-gray-600">{row.focus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* SAT 준비 타임라인 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              4. SAT 준비 타임라인
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">12개월 플랜 (목표: 1400+)</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  {[
                    ['D-12개월', '진단 테스트 → 현재 수준 파악'],
                    ['D-10개월', '기초 학습 (문법 규칙, 대수학 개념)'],
                    ['D-8개월', '섹션별 집중 훈련 시작'],
                    ['D-6개월', '첫 번째 SAT 응시 (실전 경험)'],
                    ['D-4개월', '약점 보강 집중'],
                    ['D-2개월', '모의고사 매주 1회, 실전 시뮬레이션'],
                    ['D-0', '시험 응시 (목표 점수 달성)'],
                  ].map(([period, desc]) => (
                    <div key={period} className="flex gap-3">
                      <span className="flex-shrink-0 font-semibold w-20" style={{ color: 'var(--color-primary)' }}>{period}</span>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">6개월 플랜 (목표: 1350+)</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  {[
                    ['Week 1-4', '진단 + 약점 파악 + 기본 개념 정리'],
                    ['Week 5-12', '섹션별 집중 훈련 (RW 4주 + Math 4주)'],
                    ['Week 13-16', '실전 모의고사 + 오답 분석'],
                    ['Week 17-22', '고득점 전략 심화 + 시간 관리 훈련'],
                    ['Week 23-24', '최종 점검 + 시험 응시'],
                  ].map(([period, desc]) => (
                    <div key={period} className="flex gap-3">
                      <span className="flex-shrink-0 font-semibold w-24" style={{ color: 'var(--color-primary)' }}>{period}</span>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* AP 과목별 전략 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              5. AP 주요 과목별 전략
            </h2>
            <div className="space-y-4">
              {AP_SUBJECTS.map((subject) => (
                <div key={subject.name} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-bold text-gray-900">{subject.name}</h3>
                    <span className="text-sm text-gray-500">난이도 {subject.difficulty}</span>
                    {subject.rate !== '—' && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                        5점 취득률 {subject.rate}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">핵심 내용:</span> {subject.core}</p>
                  <p className="text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                    💡 {subject.tip}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 학년별 수강 계획 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              6. 학년별 AP 수강 계획 예시
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-center py-2 rounded-lg bg-blue-50">이공계 지망 (공대/CS/의대)</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: 'rgba(30,58,95,0.08)', color: 'var(--color-primary)' }}>
                        <th className="text-left px-3 py-2 font-semibold">학년</th>
                        <th className="text-left px-3 py-2 font-semibold">추천 AP 과목</th>
                      </tr>
                    </thead>
                    <tbody>
                      {STEM_PLAN.map((row, idx) => (
                        <tr key={row.grade} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-3 py-2 font-semibold text-gray-700 w-20">{row.grade}</td>
                          <td className="px-3 py-2 text-gray-600">{row.courses}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-center py-2 rounded-lg bg-amber-50">인문/사회계 지망</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: 'rgba(30,58,95,0.08)', color: 'var(--color-primary)' }}>
                        <th className="text-left px-3 py-2 font-semibold">학년</th>
                        <th className="text-left px-3 py-2 font-semibold">추천 AP 과목</th>
                      </tr>
                    </thead>
                    <tbody>
                      {HUMANITIES_PLAN.map((row, idx) => (
                        <tr key={row.grade} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-3 py-2 font-semibold text-gray-700 w-20">{row.grade}</td>
                          <td className="px-3 py-2 text-gray-600">{row.courses}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* AP 과목 선택 원칙 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              7. AP 과목 선택 3원칙
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: '깊이 > 넓이', desc: '10개 과목에서 3점보다 5개 과목에서 4-5점이 더 인상적' },
                { title: '전공 연계', desc: '지원하는 전공과 AP 과목의 연결이 지원서의 일관성 강화' },
                { title: '현실적 일정', desc: '한 학기에 3과목 이상 AP 동시 수강은 번아웃 위험. 여름방학 활용 권장' },
              ].map((item, idx) => (
                <div key={item.title} className="rounded-xl border border-gray-200 p-5">
                  <div
                    className="text-2xl font-black mb-2"
                    style={{ color: 'var(--color-primary)', opacity: 0.2 }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            className="p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
          >
            <p className="text-white font-bold text-xl mb-2">
              내 전공 목표에 맞는 AP 조합과 SAT 로드맵을 설계받으세요
            </p>
            <p className="text-blue-100 text-sm mb-6">무료 진단 상담을 통해 현재 수준을 파악하고 목표 점수까지의 계획을 받아보세요</p>
            <Link
              href="/consultation"
              className="inline-flex items-center px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              무료 30분 초기 상담 예약 →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
