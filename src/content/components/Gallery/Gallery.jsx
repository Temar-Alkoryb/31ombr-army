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
import img_10 from "../../../assets/351118729.jpg"
import img_11 from "../../../assets/441044034.jpg"
import img_12 from "../../../assets/441231345.jpg"
import img_13 from "../../../assets/441366318.jpg"
import img_14 from "../../../assets/IMG-20240609-WA0001.jpg"
import img_15 from "../../../assets/IMG-20240609-WA0002.jpg"
import img_16 from "../../../assets/IMG-20240609-WA0003.jpg"
import img_17 from "../../../assets/IMG-20240609-WA0004.jpg"
import img_18 from "../../../assets/IMG-20240609-WA0005.jpg"
import img_19 from "../../../assets/IMG-20240609-WA0006.jpg"
import img_20 from "../../../assets/IMG-20240609-WA0007.jpg"
import img_21 from "../../../assets/IMG-20240609-WA0008.jpg"
import img_22 from "../../../assets/IMG-20240609-WA0009.jpg"
import img_23 from "../../../assets/IMG-20240609-WA0010.jpg"
import img_24 from "../../../assets/IMG-20240609-WA0011.jpg"
import img_25 from "../../../assets/IMG-20240609-WA0012.jpg"
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
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_10} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_11} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_12} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_13} alt='Slider image' width={350} height={300} />
        </SwiperSlide>

        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_14} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_15} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_16} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_17} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_18} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_19} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_20} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_21} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_22} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_23} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_24} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
        <SwiperSlide className={style['swiper-slide']}>
          <Image src={img_25} alt='Slider image' width={350} height={300} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Gallery