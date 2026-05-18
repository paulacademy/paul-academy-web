'use client'

import { useActionState } from 'react'
import { submitConsultation, type ConsultationResult } from './actions'

const INITIAL_STATE: ConsultationResult | null = null

const GRADES = ['중1', '중2', '중3', '고1', '고2', '고3', '졸업생', '기타'] as const
const TARGET_TYPES = ['국내', '해외', '국내+해외'] as const

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

export function ConsultationForm() {
  const [state, formAction, isPending] = useActionState(
    async (_prev: ConsultationResult | null, formData: FormData) => {
      return submitConsultation(formData)
    },
    INITIAL_STATE
  )

  function handlePhoneInput(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value)
    e.target.value = formatted
  }

  if (state?.success) {
    return (
      <div className="text-center py-12 px-6 animate-scale-in">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'var(--color-primary-50)' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M7 16l6 6 12-12" stroke="var(--color-success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">신청 완료!</h2>
        <p className="text-gray-600 text-lg mb-2">{state.message}</p>
        <p className="text-gray-500 text-sm mb-8">
          <strong>1영업일 이내</strong>에 담당자가 연락드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all hover:bg-gray-50"
            style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
          >
            입시 정보 보기
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
    <form action={formAction} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
          이름 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="홍길동"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
        />
        <FieldError errors={errors} field="name" />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
          연락처 <span className="text-red-500">*</span>
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

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          이메일 (선택)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="example@gmail.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
        />
        <p className="mt-1 text-xs text-gray-500">입력 시 신청 확인 이메일을 발송해 드립니다.</p>
        <FieldError errors={errors} field="email" />
      </div>

      {/* Grade */}
      <div>
        <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 mb-1.5">
          현재 학년 <span className="text-red-500">*</span>
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

      {/* Target Type */}
      <div>
        <fieldset>
          <legend className="block text-sm font-semibold text-gray-700 mb-2">
            희망 진학 유형 <span className="text-red-500">*</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {TARGET_TYPES.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border border-gray-200 has-[:checked]:border-[var(--color-primary)] has-[:checked]:bg-blue-50 transition-all"
              >
                <input
                  type="radio"
                  name="targetType"
                  value={type}
                  className="accent-[var(--color-primary)]"
                />
                <span className="text-sm font-medium">{type}</span>
              </label>
            ))}
          </div>
          <FieldError errors={errors} field="targetType" />
        </fieldset>
      </div>

      {/* Target University */}
      <div>
        <label htmlFor="targetUniversity" className="block text-sm font-semibold text-gray-700 mb-1.5">
          희망 대학 (선택)
        </label>
        <input
          id="targetUniversity"
          name="targetUniversity"
          type="text"
          placeholder="예: 서울대, 연세대, Harvard 등"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
        />
      </div>

      {/* Target Major */}
      <div>
        <label htmlFor="targetMajor" className="block text-sm font-semibold text-gray-700 mb-1.5">
          희망 전공 (선택)
        </label>
        <input
          id="targetMajor"
          name="targetMajor"
          type="text"
          placeholder="예: 의학, 컴퓨터공학, 경영학 등"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          추가 문의사항 (선택)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="현재 학업 상황, 고민, 특별히 상담받고 싶은 내용을 자유롭게 작성해 주세요."
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
            수집된 정보는 상담 목적으로만 사용되며, 상담 종료 후 파기됩니다.{' '}
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
        {isPending ? '신청 중...' : '무료 상담 신청하기'}
      </button>
    </form>
  )
}
