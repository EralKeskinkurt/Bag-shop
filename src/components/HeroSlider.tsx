// Import Swiper React components
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';


export default function HeroSlider() {
  return (
    <Swiper
    className='w-full h-[90vh]'
    modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="object-contain w-full h-full hero-background">
            
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="object-contain w-full h-full hero-background">
            
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
