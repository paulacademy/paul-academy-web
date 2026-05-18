import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="text-center">
        <p
          className="text-8xl font-black mb-4"
          style={{ color: 'var(--color-primary)', opacity: 0.15 }}
        >
          404
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-gray-500 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            홈으로 돌아가기
          </Link>
          <Link
            href="/consultation"
            className="px-6 py-3 rounded-xl font-semibold border-2 transition-all hover:bg-gray-100"
            style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
          >
            상담 신청하기
          </Link>
        </div>
      </div>
    </div>
  )
}
