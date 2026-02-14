import { useEffect } from 'react'

const Location = () => {
  const venueInfo = {
    name: '이비스 앰배서더 수원',
    address: '경기 수원시 팔달구 권광로 132',
    floor: '',
    phone: '031-230-5000',
    parking: '지하주차장 이용 가능 (2시간 무료)',
    transport: {
      subway: '분당선 수원시청역 2번 출구에서 177m',
      bus: '수원역/수원 버스터미널 방면 버스 이용'
    }
  }

  // 카카오맵 퍼가기
  useEffect(() => {
    const initMap = () => {
      if (window.daum) {
        // 기존 지도가 있으면 제거
        const container = document.getElementById('daumRoughmapContainer1761897425859');
        if (container) {
          container.innerHTML = '';
          
          new window.daum.roughmap.Lander({
            "timestamp": "1761897425859",
            "key": "yx6ssqhxefv",
            "mapWidth": "100%",
            "mapHeight": "280"
          }).render();
        }
      }
    };

    // 약간의 지연으로 스크립트 로딩 대기
    const timer = setTimeout(initMap, 100);
    
    return () => clearTimeout(timer);
  }, [])

  const kakaoMapUrl = "https://map.kakao.com/?urlX=505543.0&urlY=1050775.0&name=이비스앰배서더수원#none"

  return (
    <section className="section-container">
      <div className="card-wrapper p-6" data-aos="fade-up"
        data-aos-delay="100">
        <h2 className="section-title">오시는 길</h2>

        {/* 장소 정보 */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{venueInfo.name}</h3>
          <p className="text-sm text-gray-600 mb-1">{venueInfo.address}</p>
          {venueInfo.floor && <p className="text-gray-500 text-sm">{venueInfo.floor}</p>}
          <a href={`tel:${venueInfo.phone}`} className="text-gray-500 text-sm hover:text-primary">
            📞 {venueInfo.phone}
          </a>
        </div>

        {/* 지도 */}
        <div className="mb-6">
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div id="daumRoughmapContainer1761897425859" className="root_daum_roughmap root_daum_roughmap_landing" style={{ minHeight: '280px' }}></div>
          </div>
          
          <div className="flex gap-2 mt-3">
            <a
              href={kakaoMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 text-center text-sm font-medium bg-[#fee500] text-gray-800 rounded-lg hover:bg-[#f5dc00] transition-colors"
            >
              카카오맵
            </a>
            <a
              href={`https://map.naver.com/v5/search/${encodeURIComponent(venueInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 text-center text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              네이버지도
            </a>
          </div>
        </div>

        {/* 교통 정보 */}
        <div className="grid grid-cols-1 gap-4">
          {/* 대중교통 */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">🚇</span> 대중교통
            </h4>
            <div className="space-y-2 text-gray-700 text-sm">
              <div>
                <p className="font-medium text-gray-800">지하철</p>
                <p>{venueInfo.transport.subway}</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">버스</p>
                <p>{venueInfo.transport.bus}</p>
              </div>
            </div>
          </div>

          {/* 주차 안내 */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">🚗</span> 주차 안내
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {venueInfo.parking}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              * 주차 공간이 협소하오니 가급적 대중교통을 이용해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

