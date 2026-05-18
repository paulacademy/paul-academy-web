'use client'

import { useActionState, useEffect } from 'react'
import { submitSummerForm, type SummerFormResult } from './actions'
import { trackEvent } from '@/lib/analytics'

const INITIAL_STATE: SummerFormResult | null = null

const GRADES = ['중1', '중2', '중3', '고1', '고2', '고3'] as const
const SUBJECTS = [
  '수학', '영어', '국어', '과학', '사회',
  '대학 입시 컨설팅(국내)', '해외대학 입시 컨설팅',
  'SAT', 'AP', '기타',
] as const
const PREFERRED_TIMES = [
  '오전 (09:00–12:00)',
  '오후 (12:00–17:00)',
  '저녁 (17:00–20:00)',
  '주말',
] as const

const KAKAO_URL = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? '#'

function FieldError({ errors, field }: { errors?: Record<string, string[]>; field: string }) {
  const messages = errors?.[field]
  if (!messages?.length) return null
  return (
    <p role="alert" aria-live="polite" className="mt-1 text-sm text-red-600">
      {messages[0]}
    </p>
  )
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  if (digits.length <= 3) return digits
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`
}

export function SummerForm() {
  const [state, formAction, isPending] = useActionState(
    async (_prev: SummerFormResult | null, formData: FormData) => {
      return submitSummerForm(formData)
    },
    INITIAL_STATE
  )

  useEffect(() => {
    if (state?.success && state.grade) {
      trackEvent('summer_form_submit', {
        subject_count: state.subjectCount,
        grade: state.grade,
      })
    }
  }, [state])

  function handlePhoneInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = formatPhone(e.target.value)
  }

  if (state?.success) {
    return (
      <div className="text-center py-12 px-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: 'var(--color-primary-50)' }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M7 16l6 6 12-12"
              stroke="var(--color-success)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">신청 완료!</h2>
        <p className="text-gray-600 text-lg mb-2">{state.message}</p>
        <p className="text-gray-500 text-sm mb-8">
          <strong>1영업일 이내</strong>에 담당자가 연락드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-900 transition-all hover:opacity-90"
            style={{ backgroundColor: '#FEE500' }}
          >
            카카오톡으로 바로 문의
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            홈으로
          </a>
        </div>
      </div>
    )
  }

  const errors = !state?.success ? state?.errors : undefined

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot — hidden from users, traps bots */}
      <div aria-hidden="true" style={{ display: 'none' }}>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Student Name */}
      <div>
        <label htmlFor="studentName" className="block text-sm font-semibold text-gray-700 mb-1.5">
          학생 이름 <span className="text-red-500">*</span>
        </label>
        <input
          id="studentName"
          name="studentName"
          type="text"
          required
          autoComplete="name"
          placeholder="홍길동"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
        />
        <FieldError errors={errors} field="studentName" />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
          연락처 휴대폰 <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="numeric"
          placeholder="010-1234-5678"
          maxLength={13}
          onChange={handlePhoneInput}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
        />
        <FieldError errors={errors} field="phone" />
      </div>

      {/* School */}
      <div>
        <label htmlFor="school" className="block text-sm font-semibold text-gray-700 mb-1.5">
          학교명 <span className="text-red-500">*</span>
        </label>
        <input
          id="school"
          name="school"
          type="text"
          required
          placeholder="예: 강남중학교, 대치고등학교"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
        />
        <FieldError errors={errors} field="school" />
      </div>

      {/* Grade */}
      <div>
        <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 mb-1.5">
          학년 <span className="text-red-500">*</span>
        </label>
        <select
          id="grade"
          name="grade"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all bg-white"
        >
          <option value="">학년을 선택해 주세요</option>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <FieldError errors={errors} field="grade" />
      </div>

      {/* Subjects */}
      <fieldset>
        <legend className="block text-sm font-semibold text-gray-700 mb-2">
          수강 희망 과목 <span className="text-red-500">*</span>
          <span className="ml-1 text-xs font-normal text-gray-500">(복수 선택 가능)</span>
        </legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SUBJECTS.map((subject) => (
            <label
              key={subject}
              className="flex items-center gap-2 cursor-pointer px-3 py-2.5 rounded-lg border border-gray-200 has-[:checked]:border-[var(--color-primary)] has-[:checked]:bg-blue-50 transition-all text-sm"
            >
              <input
                type="checkbox"
                name="subjects"
                value={subject}
                className="accent-[var(--color-primary)] w-4 h-4 flex-shrink-0"
              />
              <span className="font-medium leading-tight">{subject}</span>
            </label>
          ))}
        </div>
        <FieldError errors={errors} field="subjects" />
      </fieldset>

      {/* Preferred Time */}
      <div>
        <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-1.5">
          선호 상담 시간대 <span className="text-xs font-normal text-gray-500">(선택)</span>
        </label>
        <select
          id="preferredTime"
          name="preferredTime"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all bg-white"
        >
          <option value="">선택하지 않음</option>
          {PREFERRED_TIMES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          문의사항 <span className="text-xs font-normal text-gray-500">(선택)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="궁금한 점이나 요청사항을 자유롭게 작성해 주세요."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* Privacy Consent */}
      <div className="p-4 bg-gray-50 rounded-xl">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            value="true"
            required
            className="mt-0.5 accent-[var(--color-primary)] w-4 h-4 flex-shrink-0"
          />
          <span className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">개인정보 수집·이용에 동의합니다.</span>{' '}
            수집된 정보는 상담 및 수강 안내 목적으로만 사용되며, 상담 종료 후 파기됩니다.{' '}
            <span className="text-red-500">*</span>
          </span>
        </label>
        <FieldError errors={errors} field="privacyConsent" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-xl text-base font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        {isPending ? '신청 중...' : '여름특강 신청하기'}
      </button>

      {/* Kakao link below form */}
      <div className="text-center pt-2">
        <p className="text-sm text-gray-500 mb-2">또는 카카오톡으로 바로 문의하세요</p>
        <a
          href={KAKAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-900 transition-all hover:opacity-80"
          style={{ backgroundColor: '#FEE500' }}
        >
          <svg width="20" height="19" viewBox="0 0 38 36" fill="none" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 0C8.507 0 0 6.716 0 15.003c0 5.258 3.29 9.88 8.274 12.7L6.5 36l9.08-4.738C16.354 31.42 17.663 31.5 19 31.5c10.493 0 19-6.716 19-15.003C38 6.716 29.493 0 19 0z"
              fill="#3A1D1D"
            />
          </svg>
          카카오톡 상담하기
        </a>
      </div>
    </form>
  )
}
