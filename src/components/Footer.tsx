import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-bold text-lg mb-3">폴아카데미</p>
            <p className="text-sm leading-relaxed">
              한국 및 해외 명문대학 입시 전문학원.<br />
              개인 맞춤 컨설팅으로 최고의 결과를 만듭니다.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">빠른 링크</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#services" className="hover:text-white transition-colors">서비스 안내</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">입시 정보</Link></li>
              <li><Link href="/consultation" className="hover:text-white transition-colors">상담 신청</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">오시는길</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">연락처</p>
            <address className="not-italic text-sm space-y-1">
              <p>전화: <a href="tel:+821000000000" className="hover:text-white transition-colors">010-0000-0000</a></p>
              <p>이메일: <a href="mailto:admin@paulacademy.net" className="hover:text-white transition-colors">admin@paulacademy.net</a></p>
              <p>운영시간: 평일 09:00–21:00</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {year} 폴아카데미. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
