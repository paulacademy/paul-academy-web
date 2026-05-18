'use server'

import { z } from 'zod'
import { sendSummerFormEmail } from '@/lib/email'

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

const SummerSchema = z.object({
  studentName: z.string().min(2, '이름은 2자 이상이어야 합니다').max(50),
  phone: z
    .string()
    .regex(/^01[0-9]{1}-?[0-9]{3,4}-?[0-9]{4}$/, '올바른 전화번호를 입력해 주세요'),
  school: z.string().min(1, '학교명을 입력해 주세요').max(100),
  grade: z.enum(GRADES),
  subjects: z
    .array(z.enum(SUBJECTS))
    .min(1, '수강 희망 과목을 1개 이상 선택해 주세요'),
  preferredTime: z.enum(PREFERRED_TIMES).optional(),
  message: z.string().max(1000).optional(),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: '개인정보 수집에 동의해 주세요' }),
  }),
})

export type SummerFormResult =
  | { success: true; message: string; grade: string; subjectCount: number }
  | { success: false; errors: Record<string, string[]> }

export async function submitSummerForm(
  formData: FormData
): Promise<SummerFormResult> {
  // Honeypot — bots fill this field; silently discard
  if (formData.get('website')) {
    return {
      success: true,
      message: '신청이 완료되었습니다.',
      grade: '',
      subjectCount: 0,
    }
  }

  const raw = {
    studentName: formData.get('studentName'),
    phone: formData.get('phone'),
    school: formData.get('school'),
    grade: formData.get('grade'),
    subjects: formData.getAll('subjects'),
    preferredTime: formData.get('preferredTime') || undefined,
    message: formData.get('message') || undefined,
    privacyConsent: formData.get('privacyConsent') === 'true' ? true : undefined,
  }

  const parsed = SummerSchema.safeParse(raw)

  if (!parsed.success) {
    const errors: Record<string, string[]> = {}
    for (const [field, issues] of Object.entries(parsed.error.flatten().fieldErrors)) {
      errors[field] = issues ?? []
    }
    return { success: false, errors }
  }

  const { studentName, phone, school, grade, subjects, preferredTime, message } = parsed.data

  sendSummerFormEmail({
    studentName,
    phone,
    school,
    grade,
    subjects,
    preferredTime,
    message,
    submittedAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
  }).catch((err) => {
    console.error('[summer-form] Email send error (non-fatal):', err)
  })

  return {
    success: true,
    message: '여름특강 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.',
    grade,
    subjectCount: subjects.length,
  }
}
