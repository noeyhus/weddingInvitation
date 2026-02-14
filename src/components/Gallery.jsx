import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Gallery = () => {
  // 미디어 배열: { type: 'image' | 'video', src: 'URL' }
  // 동영상은 YouTube, Vimeo 링크 또는 직접 mp4 등 사용 가능
  const mediaItems = [
    { type: 'image', src: '/images/gallery1.jpg' },
    { type: 'image', src: '/images/gallery2.jpg' },
    { type: 'image', src: '/images/gallery3.jpg' },
    { type: 'image', src: '/images/gallery4.jpg' },
    { type: 'image', src: '/images/gallery5.jpg' },
    { type: 'image', src: '/images/gallery6.jpg' },
    // 동영상 추가 예시 (public 폴더에 video.mp4 넣고 아래 주석 해제):
    // { type: 'video', src: '/videos/wedding-video.mp4' },
  ]

  const placeholderSvg = (label) =>
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23e5e7eb' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3E${encodeURIComponent(label)}%3C/text%3E%3C/svg%3E`

  return (
    <section className="section-container">
      <div className="card-wrapper p-6" data-aos="fade-up"
        data-aos-delay="100">
        <h2 className="section-title">우리의 순간들</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="rounded-xl overflow-hidden"
        >
          {mediaItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    poster={placeholderSvg('동영상')}
                  >
                    이 브라우저는 동영상을 지원하지 않습니다.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={`갤러리 ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = placeholderSvg(`사진 ${index + 1}`)
                    }}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-center text-gray-500 text-sm mt-4">
          두 사람의 아름다운 순간들을 함께 나눕니다
        </p>
      </div>
    </section>
  )
}

export default Gallery

