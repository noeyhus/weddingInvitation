import { useEffect, useState, useMemo } from 'react'
import Calendar from './Calendar'

const Hero = () => {
  const weddingDate = useMemo(() => new Date('2026-10-24T11:00:00'), [])
  const [dDay, setDDay] = useState(0)

  useEffect(() => {
    const calculateDDay = () => {
      const today = new Date()
      const difference = weddingDate - today
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24))
      setDDay(days)
    }
    calculateDDay()
    const interval = setInterval(calculateDDay, 1000 * 60 * 60)
    return () => clearInterval(interval)
  }, [weddingDate])

  return (
    <section className="relative min-h-[100dvh] flex flex-col">
      {/* 모바일용 큰 배경화면 - 화면 전체 채움 */}
      <div className="absolute inset-0 min-h-[75vh] sm:min-h-[80vh]">
        <img
          src="/images/bg_section1.png"
          alt="Wedding Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* 상단 오버레이 텍스트 */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end pb-20 px-4 min-h-[75vh] sm:min-h-[80vh]">
        <p className="text-white/95 text-sm tracking-[0.2em] mb-2 drop-shadow-lg">우리 결혼합니다</p>
        <div className="flex items-center justify-center gap-4 my-2">
          <h1 className="text-2xl font-bold text-white drop-shadow-md">엄태성</h1>
          <span className="text-xl text-white/95">♥</span>
          <h1 className="text-2xl font-bold text-white drop-shadow-md">서지연</h1>
        </div>
        {/* 스크롤 힌트 */}
        <div className="mt-6 animate-bounce">
          <svg className="w-5 h-5 text-white/90 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* 카드 영역 - 달력 포함 */}
      <div className="relative z-20 -mt-6 px-4 pb-0">
        <div className="max-w-[26rem] mx-auto sm:max-w-[28rem] bg-white overflow-hidden" data-aos="fade-up">
          {/* 일시 & D-day */}
          <div className="pt-6 pb-4 px-6 text-center">
            <p className="text-lg font-medium text-gray-700">2026년 10월 24일 토요일</p>
            <p className="text-gray-600 mt-1">오전 11시</p>
            {dDay > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">결혼식까지</p>
                <p className="text-2xl font-bold text-primary mt-1">D-{dDay}</p>
              </div>
            )}
            {dDay === 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-base font-bold text-primary">오늘은 우리의 특별한 날!</p>
              </div>
            )}
          </div>

          {/* toourguest 스타일 달력 */}
          <div className="px-6 pb-6">
            <Calendar year={2026} month={10} highlightDay={24} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

