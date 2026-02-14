import { useState } from 'react'

const Footer = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = '엄태성 ♥ 서지연의 결혼식에 초대합니다'
  const [linkCopied, setLinkCopied] = useState(false)

  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.Link) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: shareText,
          description: '2026년 10월 24일 토요일 오전 11시',
          imageUrl: window.location.origin + '/images/bg_section1.png',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      })
    } else {
      const text = `${shareText}\n${shareUrl}`
      if (navigator.share) {
        navigator.share({
          title: shareText,
          text,
          url: shareUrl,
        }).catch(() => {
          navigator.clipboard.writeText(text)
          alert('공유할 내용이 클립보드에 복사되었습니다.')
        })
      } else {
        navigator.clipboard.writeText(text)
        alert('공유할 내용이 클립보드에 복사되었습니다. 카카오톡에 붙여넣기 해주세요.')
      }
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    } catch {
      alert('링크 복사에 실패했습니다.')
    }
  }

  return (
    <footer className="section-container pb-[env(safe-area-inset-bottom)]">
      <div className="card-wrapper p-6" data-aos="fade-up"
        data-aos-delay="100">
        {/* toourguest 스타일: 카카오톡으로 청첩장 전하기 / 청첩장 주소 복사하기 */}
        <h3 className="section-title !mb-4">청첩장 공유하기</h3>
        
        <div className="space-y-3">
          <button
            onClick={handleKakaoShare}
            className="share-btn share-btn-kakao w-full flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
            </svg>
            카카오톡으로 청첩장 전하기
          </button>
          <button
            onClick={handleCopyLink}
            className="share-btn share-btn-copy w-full flex items-center justify-center gap-2"
          >
            {linkCopied ? (
              <>
                <span className="text-green-600">✓</span>
                복사되었습니다
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                청첩장 주소 복사하기
              </>
            )}
          </button>
        </div>

        {/* 꽃 심볼 구분선 */}
        <div className="flower-divider py-6">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22c-4.97 0-9-2.24-9-5 0-2.5 2.69-4.5 6-4.95V12c0-1.1.9-2 2-2s2 .9 2 2v.05c3.31.45 6 2.45 6 4.95 0 2.76-4.03 5-9 5z"/>
          </svg>
        </div>

        {/* 감사 문구 */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            참석해 주시는 모든 분들께 감사드립니다
          </p>
          <p className="text-gray-500 text-xs mt-1">
            엄태성 & 서지연 올림
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

