'use server'

import { z } from 'zod'

const ConsultationSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다').max(50),
  phone: z
    .string()
    .regex(/^01[0-9]{1}-?[0-9]{3,4}-?[0-9]{4}$/, '올바른 전화번호를 입력해 주세요'),
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

  // TODO: Replace with actual CRM/email integration
  // For now, log the submission (server-side only, safe)
  console.log('[Consultation submitted]', {
    name: parsed.data.name,
    grade: parsed.data.grade,
    targetType: parsed.data.targetType,
    submittedAt: new Date().toISOString(),
  })

  return {
    success: true,
    message:
      '상담 신청이 접수되었습니다. 1영업일 내에 연락드리겠습니다.',
  }
}
