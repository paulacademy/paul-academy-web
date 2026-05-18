'use server'

import { z } from 'zod'
import { sendConsultationEmails } from '@/lib/email'

const ConsultationSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다').max(50),
  phone: z
    .string()
    .regex(/^01[0-9]{1}-?[0-9]{3,4}-?[0-9]{4}$/, '올바른 전화번호를 입력해 주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해 주세요').optional().or(z.literal('')),
  grade: z.enum(['중1', '중2', '중3', '고1', '고2', '고3', '졸업생', '기타']),
  targetType: z.enum(['국내', '해외', '국내+해외']),
  targetUniversity: z.string().max(200).optional(),
  targetMajor: z.string().max(200).optional(),
  message: z.string().max(1000).optional(),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: '개인정보 수집에 동의해 주세요' }),
  }),
})

export type ConsultationFormData = z.infer<typeof ConsultationSchema>

export type ConsultationResult =
  | { success: true; message: string }
  | { success: false; errors: Record<string, string[]> }

export async function submitConsultation(
  formData: FormData
): Promise<ConsultationResult> {
  const raw = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email') || undefined,
    grade: formData.get('grade'),
    targetType: formData.get('targetType'),
    targetUniversity: formData.get('targetUniversity') || undefined,
    targetMajor: formData.get('targetMajor') || undefined,
    message: formData.get('message') || undefined,
    privacyConsent: formData.get('privacyConsent') === 'true' ? true : undefined,
  }

  const parsed = ConsultationSchema.safeParse(raw)

  if (!parsed.success) {
    const errors: Record<string, string[]> = {}
    for (const [field, issues] of Object.entries(parsed.error.flatten().fieldErrors)) {
      errors[field] = issues ?? []
    }
    return { success: false, errors }
  }

  const { name, phone, email, grade, targetType, targetUniversity, targetMajor, message } =
    parsed.data

  // Fire emails without blocking the response — graceful degradation on failure
  sendConsultationEmails({
    name,
    phone,
    email: email || undefined,
    grade,
    targetType,
    targetUniversity,
    targetMajor,
    message,
    submittedAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
  }).catch((err) => {
    console.error('[consultation] Email send error (non-fatal):', err)
  })

  return {
    success: true,
    message: '상담 신청이 접수되었습니다. 1영업일 내에 연락드리겠습니다.',
  }
}
