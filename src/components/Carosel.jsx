import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.jpg';
import slide7 from '../assets/slide7.jpg';
import slide8 from '../assets/slide8.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carosel() {

  

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide className="slide1 relative">
          <img src={slide1} alt="slide1" />
          <div className="overlay1 h-full w-full bg-black opacity-10  absolute"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
          <div className="overlay1 h-full w-full bg-black opacity-10  absolute"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
          <div className="overlay1 h-full w-full bg-black opacity-10  absolute"></div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="slide4" />
         <div className="overlay1 h-full w-full bg-black opacity-10  absolute"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
         <div className="overlay1 h-full w-full bg-black opacity-10  absolute"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="slide6" />
         <div className="overlay1 h-full w-full bg-black opacity-10  absolute"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="slide7" />
         <div className="overlay1 h-full w-full bg-black opacity-10  absolute"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="slide8" />
        <div className="overlay1 h-full w-full bg-black opacity-10  absolute"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
