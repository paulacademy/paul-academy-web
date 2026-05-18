import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { FaqAccordion } from './FaqAccordion'

export const metadata: Metadata = {
  title: '자주 묻는 질문 (FAQ) | 폴아카데미',
  description:
    '재외국민 특례입학, SAT/AP, 해외대학 지원에 관한 학부모 자주 묻는 질문 20가지. 특례입학 자격, SAT 활용법, 입시 준비 과정까지 전문가가 답변합니다.',
}

const FAQ_SECTIONS = [
  {
    title: '특례입학 자격 관련',
    faqs: [
      {
        q: '아이가 외국에서 3년을 살았는데 3특 자격이 되나요?',
        a: '"3년 이상 해외 거주"만으로 자격이 되는 것은 아닙니다. 핵심은 ①부모의 해외 체류 증빙, ②학생 본인의 해외 학교 이수 기간, ③국내 체류 기간이 모두 기준을 충족해야 합니다. 대학마다 기준이 다르므로 전문가 진단을 받는 것이 중요합니다.',
      },
      {
        q: '방학 때 한국에 왔다 갔다 한 것이 해외 거주 기간에서 빠지나요?',
        a: '대학마다 다릅니다. 일부 대학은 방학 중 귀국 기간 전체를 빼고, 일부는 일정 기간(예: 연간 90일) 이하의 귀국은 인정하기도 합니다. 지원 전 대상 대학의 입시요강을 반드시 확인해야 합니다.',
      },
      {
        q: '12특은 초등학교부터 한 번도 한국 학교를 안 다녔어야 하나요?',
        a: '원칙적으로는 그렇습니다. 단, 일부 대학에서는 아주 짧은 기간(예: 3개월 이하) 국내 수학 경험이 있어도 인정하는 경우가 있습니다. 정확한 기준은 각 대학 입시요강 확인이 필수입니다.',
      },
      {
        q: '외국 국적을 취득하면 특례입학이 아니라 외국인 전형으로 지원해야 하나요?',
        a: '복수 국적자의 경우 대학마다 정책이 다릅니다. 일반적으로 한국 국적을 유지하고 있으면 재외국민 특별전형 지원이 가능하지만, 대학별로 확인이 필요합니다.',
      },
      {
        q: '부모 중 한 명만 해외에 있어도 3특 자격이 되나요?',
        a: '대부분의 대학에서 부모 중 1인 이상의 해외 체류 증빙이 있으면 가능합니다. 단, 부모 모두 해외에 있는 경우와 달리 추가 서류가 요구될 수 있습니다.',
      },
    ],
  },
  {
    title: 'SAT/AP 관련',
    faqs: [
      {
        q: 'SAT 없이도 한국 특례입학이 가능한가요?',
        a: '네, 가능합니다. 특히 3특 전형에서 SAT를 요구하지 않는 대학이 있습니다(서울대 포함). 단, SAT 점수가 있으면 유리한 경우가 많으며, 12특은 대부분 요구합니다.',
      },
      {
        q: 'SAT를 몇 번이나 봐야 하나요?',
        a: 'College Board는 Score Choice 정책으로 제출할 성적을 선택할 수 있습니다. 일반적으로 2-3회 응시하여 최고 점수를 제출하는 것이 권장됩니다. 많은 대학이 Superscore(섹션별 최고점 합산)를 인정합니다.',
      },
      {
        q: 'AP 점수가 낮으면(3점 이하) 안 내는 게 나은가요?',
        a: '일반적으로 AP 점수 제출은 선택사항입니다(College Board를 통해 선택적 제출 가능). 3점 이하의 점수는 제출하지 않는 것이 대부분의 경우 유리합니다.',
      },
      {
        q: '한국 대학 특례입학에서 AP 점수가 직접 반영되나요?',
        a: '대부분의 한국 대학에서 AP 성적을 직접 입시에 반영하지는 않습니다. 단, 학업 능력 증빙 자료로 활용될 수 있으며, 일부 대학에서는 SAT Subject Test(현재 폐지) 대신 AP를 참고 자료로 활용합니다.',
      },
      {
        q: 'PSAT와 SAT는 어떻게 다른가요?',
        a: 'PSAT는 SAT의 연습 시험으로, 10-11학년 학생들이 응시합니다. 점수는 대학 지원에 사용되지 않지만, National Merit Scholarship 선발 기준이 됩니다. SAT 실전 준비의 첫 단계로 권장됩니다.',
      },
    ],
  },
  {
    title: '미국/해외 대학 지원 관련',
    faqs: [
      {
        q: '미국 대학 지원 시 가장 중요한 요소가 무엇인가요?',
        a: '상위권 대학일수록 GPA(내신), SAT/ACT, 에세이, 과외활동, 추천서가 모두 중요하게 고려됩니다. 단, 지원 학교의 수준에 따라 각 요소의 비중이 다릅니다.',
      },
      {
        q: '영어 원어민이 아닌 학생은 TOEFL/IELTS도 제출해야 하나요?',
        a: '대부분의 미국 대학은 영어가 교육 언어가 아닌 나라 출신 학생에게 TOEFL 또는 IELTS 제출을 요구합니다. 단, 영어권 학교에서 일정 기간 이상 교육받은 경우 면제되는 경우도 있습니다.',
      },
      {
        q: '영국 대학은 SAT를 인정하나요?',
        a: '공식적으로는 A-Level, IB, 또는 동등 자격증이 주요 입학 기준입니다. SAT는 학업 능력을 보여주는 보조 자료로 활용될 수 있으나, 영국 대학마다 정책이 다릅니다.',
      },
      {
        q: 'Early Decision(ED)으로 지원하면 합격 가능성이 높아지나요?',
        a: '일반적으로 ED 전형의 합격률이 RD보다 높습니다(일부 대학에서 2-3배 차이). 단, ED는 합격 시 반드시 입학해야 하는 구속력 있는 약속이므로 신중하게 결정해야 합니다.',
      },
    ],
  },
  {
    title: '입시 준비 과정 관련',
    faqs: [
      {
        q: '몇 학년부터 특례입학 준비를 시작해야 하나요?',
        a: '빠를수록 좋습니다. 이상적으로는 9-10학년(고1-2 해당 나이)부터 준비하는 것이 권장됩니다. SAT 준비와 과외활동 기록 구성에 시간이 필요하기 때문입니다. 최소한 지원 1년 전부터는 시작해야 합니다.',
      },
      {
        q: '해외 학교 내신 성적도 중요한가요?',
        a: '매우 중요합니다. SAT 점수와 함께 학교 내신(GPA)이 가장 핵심적인 평가 요소입니다. 해외 학교의 성적 시스템이 달라도 대학에서는 환산하여 평가합니다.',
      },
      {
        q: '과외활동(Extracurricular)은 어떤 게 유리한가요?',
        a: '\'양\'보다 \'깊이와 연결성\'이 중요합니다. 지원하는 전공과 연결되는 활동, 리더십이 보이는 활동, 장기간 지속한 활동이 단순히 많은 활동 목록보다 더 인상적입니다.',
      },
      {
        q: '자기소개서(에세이)는 어떻게 써야 하나요?',
        a: 'Common App의 Main Essay는 650단어 내외로, 학생 개인의 고유한 이야기를 통해 인격과 가치관을 드러내야 합니다. 성적이나 수상 이력을 나열하는 것이 아니라, 입학사정관이 읽으면서 "이 학생을 만나고 싶다"고 느끼게 해야 합니다.',
      },
      {
        q: '폴아카데미는 어떤 서비스를 제공하나요?',
        a: '폴아카데미는 ①특례입학 자격 정밀 진단, ②개인 맞춤 입시 전략 수립, ③SAT/AP 점수 향상 집중 코칭, ④대학별 지원 서류 및 에세이 코칭, ⑤면접 준비 트레이닝, ⑥최종 합격까지의 1:1 동행 서비스를 제공합니다.',
      },
      {
        q: '상담은 어떻게 신청하나요?',
        a: '홈페이지 상담 신청 폼을 통해 무료 초기 진단 상담을 신청하실 수 있습니다. 첫 상담에서는 자격 요건 판단, 목표 대학 설정, 현재 수준 파악이 이루어지며, 이후 맞춤 컨설팅 계획을 제안드립니다.',
      },
    ],
  },
]

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={FAQ_JSON_LD} />

      {/* Hero */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            학부모 자주 묻는 질문
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
            입시 전문가가 답하는 FAQ
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            재외국민 특례입학, SAT/AP, 해외대학 지원까지 — 가장 많이 받는 질문 20가지
          </p>
        </div>
      </section>

      {/* FAQ Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion sections={FAQ_SECTIONS} />

          {/* CTA */}
          <div
            className="mt-16 p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f2944 100%)' }}
          >
            <p className="text-white font-bold text-xl mb-2">
              내 상황에 맞는 답이 없으셨나요?
            </p>
            <p className="text-blue-100 text-sm mb-6">
              전문 컨설턴트와 무료 상담으로 직접 확인하세요
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              무료 특례 자격 진단 신청하기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
