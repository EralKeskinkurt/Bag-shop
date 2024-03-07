// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CSSProperties, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'animate.css';

export default function HeroSlider() {
  const [change, setChange] = useState<string>()

  return (
    <Swiper
      className='w-full h-[90vh]'
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => {
        setChange("")
        setTimeout(() => {
          return setChange("animate__animated animate__fadeInUp")
        }, 100)
      }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="object-cover w-full h-full hero-background">
          <div className='container grid grid-cols-2 max-sm:grid-cols-[auto_0fr] overflow-hidden w-full h-full items-center justify-between px-20'>
            <div className='flex-col items-start gap-10 justify-center max-sm:mt-10'>
              <h4 className={`font-semibold ${change}`}>AMAZING PRODUCT!</h4>
              <h1 className={`text-[5rem] max-sm:text-[2rem] font-semibold ${change}`}>BACKPACK</h1>
              <p className={`font-[300] ${change}`}>Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                quia non numquam eius modi
                tempora Neque porro quisquam est, qui dolorem ipsum</p>
              <button className={`text-2xl underline hover:text-purple-950 transition-all underline-offset-8 mt-28 ${change}`}>Shop Now</button>
            </div>
            <div className='w-full h-full flex justify-end items-center'>
              <img className='w-[33rem] h-[33rem] object-contain' src="https://htmldemo.net/payne/payne/assets/img/slider/slider-image-01.png" alt="hero product image" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="object-cover w-full h-full hero-background">
          <div className='container grid grid-cols-2 w-full max-sm:grid-cols-[auto_0fr] h-full items-center justify-between px-20'>
            <div className='flex-col items-start gap-10 justify-center max-sm:mt-10'>
              <h4 className={`font-semibold ${change}`} >AMAZING PRODUCT!</h4>
              <h1 className={`text-[5rem] max-sm:text-[2rem]  font-semibold ${change}`}>BACKPACK</h1>
              <p className={`font-[300] ${change}`}>Neque porro quisquam est, quiT
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                quia non numquam eius modi
                tempora Neque porro quisquam est, qui dolorem ipsum</p>
              <button className={`text-2xl underline hover:text-purple-950 transition-all underline-offset-8 mt-28 ${change}`}>Shop Now</button>
            </div>
            <div className='w-full h-full flex justify-end items-center'>
              <img className='w-[33rem] h-[33rem] object-contain' src="https://htmldemo.net/payne/payne/assets/img/slider/slider-image-02.png" alt="hero product image" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
