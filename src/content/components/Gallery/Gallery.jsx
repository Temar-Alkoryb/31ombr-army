"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import img_1 from "../../../assets/strong-wirfire.jpg"
import img_2 from "../../../assets/repair_of_equipment.jpg"
import img_3 from "../../../assets/shot_with_fire.jpg"
import img_4 from "../../../assets/shotgun.jpg"
import img_5 from "../../../assets/kulish.jpg"
import img_6 from "../../../assets/look_out.jpg"
import img_7 from "../../../assets/landing_of_soldiers.jpg"
import img_8 from "../../../assets/disguised_car.jpg"
import img_9 from "../../../assets/guy_takes_shot.jpg"
import Image from 'next/image';

import style from "./Gallery.module.css"

function Gallery() {
  return (
    <div style={{width: "100%", height: "500px"}}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={style.swiper}
      >
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_1} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_2} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_3} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_4} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_5} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_6} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_7} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_8} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_9} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Gallery