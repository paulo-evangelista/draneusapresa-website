import React, { useRef, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import pattern from '../../assets/pattern.svg'
import perfil from '../../assets/perfil.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const textVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    translateY: 50,
    translateX: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    translateY: 0,
    translateX: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

export default function Index() {
  return (
    <>
      <div className="h-[572px]">
        <div className="absolute top-52">
          <Image height={460} src={perfil}></Image>
        </div>
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <div className="mt-14">
            <p className="text-white text-7xl font-extralight">Viva o</p>
          </div>
          <div className="w-full flex justify-end">
            <p className="text-white text-6xl xs:text-7xl font-bold mr-4">
              MELHOR
            </p>
          </div>
          <div className="w-full flex justify-end">
            <p className="text-white text-4xl xs:text-6xl font-thin mr-4">
              da <span className="font-bold text-5xl xs:text-6xl">VIDA</span>
            </p>
          </div>
          <div className=" flex justify-end">
            <p className="text-white text-xs xs:text-sm font-extralight mr-4">
              Medicina preventiva, estilo de vida
            </p>
          </div>
          <div className=" flex justify-end">
            <p className="text-white text-xs xs:text-sm font-extralight mr-4">
              e tratamento pós menopausa
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-1/3 text-center mr-8 mt-4">
              <p className="text-sm text-white font-extralight">
                A doutora que te deixa <span className="font-bold">longe</span>{' '}
                dos <span className="font-bold">médicos</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper w-full h-12"
      >
        <SwiperSlide className="h-12">Slide 1</SwiperSlide>
        <SwiperSlide className="h-12">Slide 2</SwiperSlide>
        <SwiperSlide className="h-12">Slide 3</SwiperSlide>
        <SwiperSlide className="h-12">Slide 4</SwiperSlide>
        <SwiperSlide className="h-12">Slide 5</SwiperSlide>
        <SwiperSlide className="h-12">Slide 6</SwiperSlide>
        <SwiperSlide className="h-12">Slide 7</SwiperSlide>
        <SwiperSlide className="h-12">Slide 8</SwiperSlide>
        <SwiperSlide className="h-12">Slide 9</SwiperSlide>
      </Swiper>
      <div className=" bg-white h-[700px]">
        <Image src={pattern}></Image>
      </div>
    </>
  )
}
