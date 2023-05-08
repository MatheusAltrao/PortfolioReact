import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


import { Autoplay } from "swiper";

const Techs = () => {
  return (
    <div id='techs' className='my-20 border-t border-b border-sky-400 px-4 py-5  '>

      <div className='w-full max-w-[1200px] mx-auto' >
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
          }}


          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className='techs-font'>Html/Css</SwiperSlide>
          <SwiperSlide className='techs-font'>Javascript</SwiperSlide>
          <SwiperSlide className='techs-font'>NextJs</SwiperSlide>
          <SwiperSlide className='techs-font'>Vite</SwiperSlide>
          <SwiperSlide className='techs-font'>ReactJs</SwiperSlide>
          <SwiperSlide className='techs-font'>Tailwind</SwiperSlide>
          <SwiperSlide className='techs-font'>Figma</SwiperSlide>
          <SwiperSlide className='techs-font'>Ui/Ux</SwiperSlide>
          <SwiperSlide className='techs-font'>Motion</SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Techs
