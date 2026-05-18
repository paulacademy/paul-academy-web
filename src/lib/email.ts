import { Resend } from 'resend'

export interface ConsultationEmailData {
  name: string
  phone: string
  email?: string
  grade: string
  targetType: string
  targetUniversity?: string
  targetMajor?: string
  message?: string
  submittedAt: string
}

export interface SummerFormEmailData {
  studentName: string
  phone: string
  school: string
  grade: string
  subjects: readonly string[]
  preferredTime?: string
  message?: string
  submittedAt: string
}

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[email] RESEND_API_KEY not set — emails disabled')
    return null
  }
  return new Resend(apiKey)
}

const ADMIN_EMAIL = process.env.NOTIFICATION_EMAIL ?? 'admin@paulacademy.net'
const FROM_EMAIL = 'noreply@paulacademy.net'
const SITE_NAME = '폴아카데미'

function tableRow(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;font-weight:600;background:#f5f5f5;border:1px solid #e0e0e0;white-space:nowrap">${label}</td><td style="padding:8px 12px;border:1px solid #e0e0e0">${value}</td></tr>`
}

// ── Consultation form emails ─────────────────────────────────────────────────

function adminNotificationHtml(data: ConsultationEmailData): string {
  const rows = [
    ['이름', data.name],
    ['연락처', data.phone],
    ['이메일', data.email ?? '미입력'],
    ['학년', data.grade],
    ['진학 유형', data.targetType],
    ['희망 대학', data.targetUniversity ?? '미입력'],
    ['희망 전공', data.targetMajor ?? '미입력'],
    ['추가 문의', data.message ?? '없음'],
    ['신청 시각', data.submittedAt],
  ]
    .map(([label, value]) => tableRow(label, value))
    .join('')

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1a56db">새 상담 신청이 접수되었습니다</h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
      <p style="color:#6b7280;font-size:12px;margin-top:24px">${SITE_NAME} 관리자 알림 시스템</p>
    </div>
  `
}

function applicantConfirmationHtml(data: ConsultationEmailData): string {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1a56db">${data.name}님, 상담 신청이 접수되었습니다!</h2>
      <p style="color:#374151">안녕하세요, <strong>${SITE_NAME}</strong>입니다.</p>
      <p style="color:#374151">
        상담 신청이 정상적으로 접수되었습니다.<br/>
        담당 선생님이 <strong>1영업일 이내</strong>에 연락드릴 예정입니다.
      </p>
      <div style="background:#f9fafb;border-radius:8px;padding:16px;margin:24px 0">
        <p style="margin:0 0 8px;font-weight:600;color:#111827">접수 정보</p>
        <ul style="margin:0;padding-left:20px;color:#374151">
          <li>학년: ${data.grade}</li>
          <li>진학 유형: ${data.targetType}</li>
          ${data.targetUniversity ? `<li>희망 대학: ${data.targetUniversity}</li>` : ''}
          ${data.targetMajor ? `<li>희망 전공: ${data.targetMajor}</li>` : ''}
        </ul>
      </div>
      <p style="color:#374151">
        문의사항은 <strong>admin@paulacademy.net</strong>으로 보내주세요.
      </p>
      <p style="color:#6b7280;font-size:12px;margin-top:24px">본 이메일은 발신 전용입니다. ${SITE_NAME}</p>
    </div>
  `
}

export async function sendConsultationEmails(data: ConsultationEmailData): Promise<void> {
  const resend = getResendClient()
  if (!resend) return

  const adminPromise = resend.emails.send({
    from: `${SITE_NAME} <${FROM_EMAIL}>`,
    to: [ADMIN_EMAIL],
    subject: `[${SITE_NAME}] 새 상담 신청 — ${data.name} (${data.grade})`,
    html: adminNotificationHtml(data),
  })

  const applicantPromise = data.email
    ? resend.emails.send({
        from: `${SITE_NAME} <${FROM_EMAIL}>`,
        to: [data.email],
        subject: `[${SITE_NAME}] 상담 신청이 접수되었습니다`,
        html: applicantConfirmationHtml(data),
      })
    : Promise.resolve(null)

  const [adminResult, applicantResult] = await Promise.allSettled([
    adminPromise,
    applicantPromise,
  ])

  if (adminResult.status === 'rejected') {
    console.error('[email] Admin notification failed:', adminResult.reason)
  } else if (adminResult.value?.error) {
    console.error('[email] Admin notification error:', adminResult.value.error)
  }

  if (applicantResult.status === 'rejected') {
    console.error('[email] Applicant confirmation failed:', applicantResult.reason)
  } else if (
    applicantResult.value &&
    'error' in applicantResult.value &&
    applicantResult.value.error
  ) {
    console.error('[email] Applicant confirmation error:', applicantResult.value.error)
  }
}

// ── Summer 2026 form email ────────────────────────────────────────────────────

function summerAdminHtml(data: SummerFormEmailData): string {
  const rows = [
    ['학생 이름', data.studentName],
    ['연락처', data.phone],
    ['학교명', data.school],
    ['학년', data.grade],
    ['수강 희망 과목', data.subjects.join(', ')],
    ['선호 상담 시간대', data.preferredTime ?? '미선택'],
    ['문의사항', data.message ?? '없음'],
    ['신청 시각', data.submittedAt],
  ]
    .map(([label, value]) => tableRow(label, value))
    .join('')

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1a56db">🌞 여름특강 신청이 접수되었습니다</h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
      <p style="color:#6b7280;font-size:12px;margin-top:24px">${SITE_NAME} 여름특강 알림 시스템</p>
    </div>
  `
}

export async function sendSummerFormEmail(data: SummerFormEmailData): Promise<void> {
  const resend = getResendClient()
  if (!resend) return

  const result = await resend.emails.send({
    from: `${SITE_NAME} <${FROM_EMAIL}>`,
    to: [ADMIN_EMAIL],
    subject: `[여름특강] 신청 — ${data.studentName} (${data.grade}, ${data.subjects.length}과목)`,
    html: summerAdminHtml(data),
  })

  if (result.error) {
    console.error('[email] Summer form admin notification error:', result.error)
  }
}
