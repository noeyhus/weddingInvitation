const Couple = () => {
  const groomInfo = {
    name: '엄태성',
    parents: {
      father: '엄민호',
      mother: '김인자'
    },
    contact: '010-9621-2227',
    role: '장남'
  }

  const brideInfo = {
    name: '서지연',
    parents: {
      father: '서훈',
      mother: '박진희'
    },
    contact: '010-6485-8379',
    role: '장녀'
  }

  return (
    <section className="section-container">
      <div className="card-wrapper p-6" data-aos="fade-up"
        data-aos-delay="100">
        <h2 className="section-title">신랑 & 신부</h2>
        
        <p className="text-center text-gray-600 text-sm leading-relaxed mb-6">
          예쁜 예감이 들었다.<br />
          우리는 언제나 손을잡고<br />
          있게 될 것이다.<br />
          - 이이체'인연'-
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {/* 신랑 */}
        <div className="text-center">
          <div className="mb-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gray-100 rounded-full overflow-hidden shadow-md">
              <img 
                src="/images/groom.jpg" 
                alt="신랑" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray"%3E%3Cpath d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/%3E%3C/svg%3E'
                }}
              />
            </div>
          </div>
          
          <h3 className="text-xs sm:text-sm text-gray-500 mb-1">{groomInfo.parents.father} · {groomInfo.parents.mother}의 {groomInfo.role}</h3>
          <p className="text-lg font-bold text-gray-800">{groomInfo.name}</p>
          
          <a href={`tel:${groomInfo.contact}`} className="inline-block mt-2 px-3 py-1.5 text-xs bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
            📞 연락하기
          </a>
        </div>

        {/* 신부 */}
        <div className="text-center">
          <div className="mb-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gray-100 rounded-full overflow-hidden shadow-md">
              <img 
                src="/images/bride.jpg" 
                alt="신부" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="pink"%3E%3Cpath d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/%3E%3C/svg%3E'
                }}
              />
            </div>
          </div>
          
          <h3 className="text-xs sm:text-sm text-gray-500 mb-1">{brideInfo.parents.father} · {brideInfo.parents.mother}의 {brideInfo.role}</h3>
          <p className="text-lg font-bold text-gray-800">{brideInfo.name}</p>
          
          <a href={`tel:${brideInfo.contact}`} className="inline-block mt-2 px-3 py-1.5 text-xs bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
            📞 연락하기
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Couple

