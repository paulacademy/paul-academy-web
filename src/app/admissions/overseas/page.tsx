import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: '해외대학 진학 전략 가이드 | 폴아카데미',
  description:
    '미국·영국·캐나다·싱가포르 대학 SAT 점수 요건, 지원 전략, 일정, AP 과목 활용법까지. 해외 명문대 합격을 위한 폴아카데미 전략 가이드.',
}

const ARTICLE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '해외대학 진학 전략 가이드: SAT/AP를 활용한 미국·영국 대학 지원',
  description: '미국·영국·캐나다·싱가포르 상위 대학 SAT 요건, 지원 일정, AP 전략 완전 정리',
  datePublished: '2026-05-18',
  publisher: { '@type': 'Organization', name: '폴아카데미' },
}

const US_TOP_UNIVERSITIES = [
  { name: 'MIT', sat25: '1510', sat75: '1580', rate: '4%' },
  { name: 'Harvard University', sat25: '1460', sat75: '1580', rate: '4%' },
  { name: 'Stanford University', sat25: '1500', sat75: '1570', rate: '4%' },
  { name: 'Yale University', sat25: '1460', sat75: '1570', rate: '5%' },
  { name: 'Columbia University', sat25: '1470', sat75: '1580', rate: '4%' },
  { name: 'Princeton University', sat25: '1500', sat75: '1570', rate: '5%' },
  { name: 'UPenn (Wharton)', sat25: '1460', sat75: '1560', rate: '7%' },
  { name: 'Duke University', sat25: '1480', sat75: '1570', rate: '6%' },
  { name: 'Vanderbilt University', sat25: '1480', sat75: '1570', rate: '7%' },
  { name: 'Rice University', sat25: '1490', sat75: '1580', rate: '9%' },
  { name: 'Notre Dame', sat25: '1420', sat75: '1550', rate: '13%' },
  { name: 'Georgetown University', sat25: '1380', sat75: '1550', rate: '12%' },
  { name: 'UCLA', sat25: '1290', sat75: '1510', rate: '9%' },
  { name: 'UC Berkeley', sat25: '1310', sat75: '1540', rate: '11%' },
  { name: 'University of Michigan', sat25: '1330', sat75: '1530', rate: '17%' },
  { name: 'NYU', sat25: '1350', sat75: '1540', rate: '13%' },
  { name: 'Boston University', sat25: '1320', sat75: '1510', rate: '19%' },
  { name: 'USC', sat25: '1380', sat75: '1540', rate: '12%' },
]

const UK_UNIVERSITIES = [
  { name: 'University of Oxford', alevel: 'A*A*A ~ AAA', sat: 'SAT 1500+ (참고용)', ib: '38~40점' },
  { name: 'University of Cambridge', alevel: 'A*A*A ~ A*AA', sat: 'SAT 1500+ (참고용)', ib: '40~42점' },
  { name: 'Imperial College London', alevel: 'A*A*A ~ AAA', sat: 'SAT 참고', ib: '38~40점' },
  { name: 'UCL', alevel: 'A*AA ~ AAA', sat: 'SAT 참고', ib: '38~40점' },
  { name: 'LSE', alevel: 'A*A*A ~ AAA', sat: '—', ib: '38~40점' },
  { name: "King's College London", alevel: 'AAA ~ AAB', sat: '—', ib: '35~38점' },
]

const AP_MAJORS = [
  { major: '공학/CS', core: 'Calculus BC, Computer Science A, Physics C', extra: 'Statistics, Chemistry' },
  { major: '의예과', core: 'Biology, Chemistry, Physics C', extra: 'Calculus BC, Psychology' },
  { major: '경영/경제', core: 'Economics (Macro + Micro), Statistics', extra: 'Government, US History' },
  { major: '인문/사회', core: 'English Lit, US History, Psychology', extra: 'Government, Economics' },
  { major: '수학/물리', core: 'Calculus BC, Physics C (×2), Statistics', extra: 'Computer Science' },
]

const CANADA_UNIVERSITIES = [
  { name: 'University of Toronto', sat: '1350-1500', ielts: '6.5 이상', note: '한국인 지원자 증가 추세' },
  { name: 'McGill University', sat: '1380-1530', ielts: '6.5 이상', note: '캐나다 내 명문, 낮은 등록금' },
  { name: 'UBC', sat: '1350-1520', ielts: '6.5 이상', note: '서부 캐나다 최상위' },
  { name: 'Waterloo', sat: '1400-1550', ielts: '7.0 이상', note: 'CS/공학 특화' },
]

const APPLICATION_SCHEDULE = [
  { type: 'REA/ED (조기 단독)', deadline: '10월 15일~11월 1일', result: '12월 중순' },
  { type: 'ED II (2차 조기)', deadline: '1월 1일~15일', result: '2월 중순' },
  { type: 'RD (정규 지원)', deadline: '1월 1일~15일', result: '3월 말~4월 초' },
  { type: 'UC 지원', deadline: '11월 30일', result: '3월 말' },
]

export default function OverseasPage() {
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
            <span className="text-blue-200 text-sm">해외대학 가이드</span>
          </nav>
          <p
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            해외 명문대 진학 전략
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            해외대학 진학 전략 가이드
            <br />
            <span style={{ color: 'var(--color-accent-light)' }}>미국 · 영국 · 캐나다 · 싱가포르</span>
          </h1>
          <p className="text-blue-200 text-lg">
            SAT/AP 점수 활용법 · 대학별 요건 · 지원 일정 — 2026년 5월 최신 업데이트
          </p>
          <p className="text-blue-300 text-xs mt-3">
            ⚠️ 대학별 입학 요건은 매년 변경됩니다. 지원 전 반드시 각 대학 공식 웹사이트에서 최신 요건을 확인하세요.
          </p>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* 미국 지원 일정 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              1. 미국 대학 주요 지원 일정 (2026-2027 입시)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold">전형 유형</th>
                    <th className="text-left px-4 py-3 font-semibold">지원 마감</th>
                    <th className="text-left px-4 py-3 font-semibold">결과 발표</th>
                  </tr>
                </thead>
                <tbody>
                  {APPLICATION_SCHEDULE.map((row, idx) => (
                    <tr key={row.type} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.deadline}</td>
                      <td className="px-4 py-3 text-gray-600">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
              <strong>Test Mandatory 복귀:</strong> 하버드, 예일, 다트머스, MIT 등 2025년부터 SAT/ACT를 다시 필수 요구합니다. 국제 학생의 경우 영어 능력 증명으로 SAT가 더욱 중요합니다.
            </div>
          </section>

          {/* 미국 상위 대학 SAT */}
          <section>
            <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--color-primary)' }}>
              2. 미국 상위 대학 SAT 중간 점수
            </h2>
            <p className="text-xs text-gray-500 mb-6">출처: College Board, 각 대학 Common Data Set 2023-2024</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold">대학</th>
                    <th className="text-center px-4 py-3 font-semibold">SAT 25%</th>
                    <th className="text-center px-4 py-3 font-semibold">SAT 75%</th>
                    <th className="text-center px-4 py-3 font-semibold">합격률</th>
                  </tr>
                </thead>
                <tbody>
                  {US_TOP_UNIVERSITIES.map((u, idx) => (
                    <tr key={u.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2.5 font-medium text-gray-800">{u.name}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600">{u.sat25}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600">{u.sat75}</td>
                      <td className="px-4 py-2.5 text-center text-gray-600">{u.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* AP 전공별 추천 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              3. AP 과목 — 전공별 추천 조합
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold">희망 전공</th>
                    <th className="text-left px-4 py-3 font-semibold">핵심 AP 과목</th>
                    <th className="text-left px-4 py-3 font-semibold">추가 추천</th>
                  </tr>
                </thead>
                <tbody>
                  {AP_MAJORS.map((row, idx) => (
                    <tr key={row.major} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{row.major}</td>
                      <td className="px-4 py-3 text-gray-600">{row.core}</td>
                      <td className="px-4 py-3 text-gray-600">{row.extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 영국 대학 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              4. 영국 상위 대학 요건 (UCAS 지원)
            </h2>
            <div className="bg-blue-50 rounded-xl p-4 mb-6 text-sm text-blue-800">
              영국은 UCAS를 통해 최대 5개 대학 동시 지원. 옥스퍼드·캠브리지는 <strong>10월 15일</strong> 조기 마감, 일반 지원은 <strong>1월 31일</strong>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold">대학</th>
                    <th className="text-left px-4 py-3 font-semibold">A-Level 기준</th>
                    <th className="text-left px-4 py-3 font-semibold">SAT 대체</th>
                    <th className="text-left px-4 py-3 font-semibold">IB 기준</th>
                  </tr>
                </thead>
                <tbody>
                  {UK_UNIVERSITIES.map((u, idx) => (
                    <tr key={u.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-800">{u.name}</td>
                      <td className="px-4 py-3 text-gray-600">{u.alevel}</td>
                      <td className="px-4 py-3 text-gray-600">{u.sat}</td>
                      <td className="px-4 py-3 text-gray-600">{u.ib}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 캐나다 대학 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              5. 캐나다 상위 대학
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold">대학</th>
                    <th className="text-left px-4 py-3 font-semibold">SAT 중간 점수</th>
                    <th className="text-left px-4 py-3 font-semibold">IELTS</th>
                    <th className="text-left px-4 py-3 font-semibold">특이사항</th>
                  </tr>
                </thead>
                <tbody>
                  {CANADA_UNIVERSITIES.map((u, idx) => (
                    <tr key={u.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-800">{u.name}</td>
                      <td className="px-4 py-3 text-gray-600">{u.sat}</td>
                      <td className="px-4 py-3 text-gray-600">{u.ielts}</td>
                      <td className="px-4 py-3 text-gray-600">{u.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 싱가포르 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              6. 싱가포르 상위 대학 (아시아 명문)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">NUS (National University of Singapore)</h3>
                <p className="text-sm text-gray-600">SAT 1400+ 권장 · QS 아시아 1위권 · 아시아 최상위 연구 중심대학</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">NTU (Nanyang Technological University)</h3>
                <p className="text-sm text-gray-600">SAT 1350+ 권장 · 장학금 기회 풍부 · 공학/비즈니스 특화</p>
              </div>
            </div>
          </section>

          {/* 지원 포트폴리오 전략 */}
          <section>
            <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--color-primary)' }}>
              7. 지원 포트폴리오 구성 전략 (미국 기준)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: '안전권 (Safety)', desc: '합격 가능성 85%+', count: '3-4개', color: 'bg-green-50 border-green-200' },
                { label: '적정권 (Match)', desc: '합격 가능성 40-70%', count: '5-6개', color: 'bg-blue-50 border-blue-200' },
                { label: '도전권 (Reach)', desc: '합격 가능성 10-30%', count: '3-4개', color: 'bg-amber-50 border-amber-200' },
              ].map((tier) => (
                <div key={tier.label} className={`rounded-xl border p-5 ${tier.color}`}>
                  <p className="font-bold text-gray-900 mb-1">{tier.label}</p>
                  <p className="text-sm text-gray-600 mb-2">{tier.desc}</p>
                  <p className="text-2xl font-black" style={{ color: 'var(--color-primary)' }}>{tier.count}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">총 10-15개 학교 지원 권장</p>
          </section>

          {/* CTA */}
          <div
            className="p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
          >
            <p className="text-white font-bold text-xl mb-2">
              SAT 점수로 한국 + 미국 두 군데를 동시에 노리는 전략이 있습니다
            </p>
            <p className="text-blue-100 text-sm mb-6">무료 전략 상담으로 나에게 맞는 로드맵을 받아보세요</p>
            <Link
              href="/consultation"
              className="inline-flex items-center px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              무료 전략 상담 받기 →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
