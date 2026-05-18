import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: '재외국민 특례입학 완벽 가이드 (3특/12특) | 폴아카데미',
  description:
    '재외국민 특별전형(3특/12특) 자격 요건, 주요 대학별 비교, SAT 점수별 지원 전략, 연간 일정 캘린더까지. 폴아카데미 전문 컨설턴트가 정리한 최신 가이드.',
}

const ARTICLE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '재외국민 특례입학 완벽 가이드: 3년 특례(3특) vs 12년 특례(12특)',
  description: '재외국민 특별전형 자격 요건, 대학별 비교, SAT 점수별 전략, 일정 캘린더 완전 정리',
  datePublished: '2026-05-18',
  publisher: { '@type': 'Organization', name: '폴아카데미' },
}

const COMPARISON_TABLE = [
  {
    label: '공식 명칭',
    three: '재외국민 특별전형 (부모 동반형)',
    twelve: '재외국민 특별전형 (12년 해외 이수형)',
  },
  {
    label: '자격 핵심',
    three: '부모 1인 이상 해외 근무/체류 + 학생 고교 과정 일정 기간 해외 이수',
    twelve: '초·중·고 전 교육과정(12년)을 해외에서 이수',
  },
  { label: '부모 조건', three: '해외 체류 증빙 필요', twelve: '무관 (학생 본인 기준)' },
  {
    label: '국내 학교 재학',
    three: '일부 기간 허용 (대학별 상이)',
    twelve: '불가 (원칙적으로 0)',
  },
  { label: 'SAT 요구', three: '일부 대학 요구, 일부 미요구', twelve: '대부분 요구' },
  { label: '경쟁률', three: '상대적으로 높음', twelve: '상대적으로 낮음 (자격자 수 적음)' },
]

const UNIVERSITY_DATA = [
  {
    name: '서울대학교',
    three: 'SAT 미요구, 전공별 구술면접, 내신 중심, 전형 경쟁률 매우 높음',
    twelve: 'SAT 미요구, 12년 증빙 엄격',
  },
  {
    name: '연세대학교',
    three: '일부 학과 SAT 요구 (1200+ 권장), 영어 면접',
    twelve: 'SAT 요구 (1200~1350 기준), 영어 능력 우대',
  },
  {
    name: '고려대학교',
    three: '일부 전형 SAT 요구, 교과 성적 비중 높음',
    twelve: 'SAT 요구, 국제화 역량 강조',
  },
  {
    name: 'KAIST',
    three: 'SAT Math 750+ 권장, TOEFL 100+ 또는 IELTS 7.0+, 영어 면접',
    twelve: '동일 기준 적용',
  },
  {
    name: '성균관대학교',
    three: 'SAT 1100점 이상',
    twelve: 'SAT 1200점 이상',
  },
  {
    name: '한양대학교',
    three: '전형별 상이',
    twelve: 'SAT 요구',
  },
]

const SAT_MAPPING = [
  {
    range: '1500+ / AP 5과목 4점+',
    schools: '서울대, 연세대, 고려대, KAIST, POSTECH',
  },
  {
    range: '1400-1500 / AP 3-4과목 4점+',
    schools: '성균관대, 한양대, 서강대, 이화여대, 중앙대',
  },
  {
    range: '1200-1400 / AP 2-3과목 3점+',
    schools: '경희대, 숙명여대, 건국대, 동국대, 세종대',
  },
  {
    range: '1000-1200 / AP 1-2과목 3점+',
    schools: '국민대, 단국대, 아주대, 가천대 등',
  },
]

const CALENDAR = [
  { period: '2026년 2-3월', event: '각 대학 수시/특례 모집요강 확인 (전년도 요강 사전 검토)' },
  { period: '2026년 3-4월', event: '특례입학 설명회 시즌 (대학별 입학처 개최)' },
  { period: '2026년 4-5월', event: 'SAT 시험 응시 (5월 시험) — 수시 제출 목표' },
  { period: '2026년 6월', event: 'SAT 6월 시험 응시 (최종 점수 확보)' },
  { period: '2026년 7-8월', event: '일부 대학 특례입학 원서 접수 시작 (학교별 상이)' },
  { period: '2026년 8-9월', event: '주요 대학 수시 원서 접수 (특례 포함)' },
  { period: '2026년 9-10월', event: '서류 제출 마감, 1차 합격자 발표' },
  { period: '2026년 10-11월', event: '면접 실시 (대학별 일정 상이)' },
  { period: '2026년 11-12월', event: '최종 합격자 발표' },
  { period: '2027년 2-3월', event: '등록 및 입학' },
]

export default function KoreaSpecialPage() {
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
            <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">
              홈
            </Link>
            <span className="text-blue-400 mx-2 text-sm">/</span>
            <span className="text-blue-200 text-sm">특례입학 가이드</span>
          </nav>
          <p
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            재외국민 특별전형
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            특례입학 완벽 가이드
            <br />
            <span style={{ color: 'var(--color-accent-light)' }}>3년 특례 vs 12년 특례</span>
          </h1>
          <p className="text-blue-200 text-lg">
            자격 요건 · 대학별 비교 · SAT 전략 · 연간 캘린더 — 2026년 5월 최신 업데이트
          </p>
          <p className="text-blue-300 text-xs mt-3">
            ⚠️ 입시 제도는 매년 변경됩니다. 반드시 해당 연도 각 대학 공식 입시요강을 확인하세요.
          </p>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section 1: 핵심 차이 비교 */}
          <section>
            <h2
              className="text-2xl font-black mb-6"
              style={{ color: 'var(--color-primary)' }}
            >
              1. 3특 vs 12특 핵심 차이
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold w-32">구분</th>
                    <th className="text-left px-4 py-3 font-semibold">3년 특례 (3특)</th>
                    <th className="text-left px-4 py-3 font-semibold">12년 특례 (12특)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE.map((row, idx) => (
                    <tr key={row.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-semibold text-gray-700">{row.label}</td>
                      <td className="px-4 py-3 text-gray-600">{row.three}</td>
                      <td className="px-4 py-3 text-gray-600">{row.twelve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: 3특 상세 */}
          <section>
            <h2
              className="text-2xl font-black mb-6"
              style={{ color: 'var(--color-primary)' }}
            >
              2. 3년 특례 (3특) 상세 요건
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">기본 자격</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">•</span>학생: 고교 재학 기간 중 해외에서 2년 이상 이수</li>
                  <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">•</span>부모: 해외 근무(주재원, 외교관, 공무원 파견 등) 또는 사업 목적 해외 체류</li>
                  <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">•</span>국내 체류: 대학에 따라 합산 6개월~1년 이내 제한</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">핵심 유의사항</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">⚠</span>부모가 해외에 있어도 학생이 국내에서 학교를 다닌 기간이 길면 자격 상실 가능</li>
                  <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">⚠</span>방학 중 일시 귀국 기간 포함 여부는 대학별로 다름</li>
                  <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">⚠</span>해외 이수 기간 계산: 입학일~졸업일 기준, 실질 체류 기간 증빙 필요</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">주요 제출 서류</h3>
              <ol className="space-y-1.5 text-sm text-gray-700 list-decimal list-inside">
                <li>재외공관(대사관/영사관) 발행 재외국민 확인서</li>
                <li>부모 해외 체류 증빙서류 (재직증명서, 비자, 여권 출입국 기록)</li>
                <li>해외 학교 성적증명서 및 재학증명서</li>
                <li>본인 여권 출입국 기록 (전체)</li>
                <li>학교생활기록부 또는 검정고시 성적 (국내 이수 기간 해당 시)</li>
              </ol>
            </div>
          </section>

          {/* Section 3: 12특 상세 */}
          <section>
            <h2
              className="text-2xl font-black mb-6"
              style={{ color: 'var(--color-primary)' }}
            >
              3. 12년 특례 (12특) 상세 요건
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">기본 자격</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">•</span>학생 본인: 초등(6년) + 중학(3년) + 고교(3년) = 전 과정 12년을 해외에서 이수</li>
                  <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">•</span>국내 학교 재학 기간: 원칙적으로 없어야 함</li>
                  <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">•</span>해외 학교 종류: 외국인학교, 국제학교(IB/AP), 현지 공립/사립학교 모두 해당</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">핵심 유의사항</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">⚠</span>한국어 능력 미흡한 학생도 지원 가능한 경우 많음</li>
                  <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">⚠</span>일부 대학은 국내 고교 과정 이수 0일 요구 (엄격)</li>
                  <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">⚠</span>SAT/AP 성적이 입시 당락에 큰 영향</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: 대학별 비교 */}
          <section>
            <h2
              className="text-2xl font-black mb-2"
              style={{ color: 'var(--color-primary)' }}
            >
              4. 주요 대학별 특례입학 요건 비교
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              ⚠️ 아래 내용은 정보 제공 목적이며, 실제 지원 전 반드시 해당 대학 공식 입시요강 확인 필수 (2025-2026 기준 참고)
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                    <th className="text-left px-4 py-3 font-semibold w-32">대학</th>
                    <th className="text-left px-4 py-3 font-semibold">3특 핵심 요건</th>
                    <th className="text-left px-4 py-3 font-semibold">12특 핵심 요건</th>
                  </tr>
                </thead>
                <tbody>
                  {UNIVERSITY_DATA.map((row, idx) => (
                    <tr key={row.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{row.name}</td>
                      <td className="px-4 py-3 text-gray-600">{row.three}</td>
                      <td className="px-4 py-3 text-gray-600">{row.twelve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: SAT 점수별 전략 */}
          <section>
            <h2
              className="text-2xl font-black mb-2"
              style={{ color: 'var(--color-primary)' }}
            >
              5. SAT 점수별 지원 가능 대학 (참고용)
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              ※ 국내 특례입학 전형 기준이며, 해외 대학 기준과 다름. AP 성적은 직접 입시 반영보다 학업 수준 증명 자료로 활용
            </p>
            <div className="space-y-3">
              {SAT_MAPPING.map((row) => (
                <div
                  key={row.range}
                  className="flex flex-col sm:flex-row gap-3 p-4 rounded-xl border border-gray-200"
                >
                  <div
                    className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg self-start"
                    style={{ backgroundColor: 'rgba(30,58,95,0.08)', color: 'var(--color-primary)' }}
                  >
                    {row.range}
                  </div>
                  <div className="text-sm text-gray-700 self-center">{row.schools}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: 연간 캘린더 */}
          <section>
            <h2
              className="text-2xl font-black mb-6"
              style={{ color: 'var(--color-primary)' }}
            >
              6. 연간 일정 캘린더 (2026-2027학년도 예상)
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              ⚠️ 실제 일정은 각 대학 입시요강 발표 후 확인 필수
            </p>
            <div className="space-y-3">
              {CALENDAR.map((item) => (
                <div key={item.period} className="flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg min-w-[110px] text-center"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                  >
                    {item.period}
                  </div>
                  <div className="text-sm text-gray-700 self-center">{item.event}</div>
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
              내 자격이 불확실하다면?
            </p>
            <p className="text-blue-100 text-sm mb-6">
              여권 출입국 기록 분석부터 각 대학 요건 대조까지 — 무료로 확인해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
              >
                무료 특례 자격 진단 신청하기 →
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white border-2 border-white/30 hover:border-white/60 transition-all"
              >
                자주 묻는 질문 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
