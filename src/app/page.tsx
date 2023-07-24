'use client'

import React, { useRef, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import happyIcon from '../../assets/icon_happy.svg'
import exerciseIcon from '../../assets/icon_exercise.svg'
import femaleIcon from '../../assets/icon_female.svg'
import pillIcon from '../../assets/icon_pill.svg'
import pattern from '../../assets/pattern.svg'
import perfil from '../../assets/perfil.png'
import CarouselCard from '../components/carouselCard'
import {
  titleVariant1,
  titleVariant2,
  titleVariant3,
  titleVariant4,
  buttonVariant,
} from '../animations'

import 'swiper/css/autoplay'
import 'swiper/css'

export default function Index() {
  return (
    <>
      <div className="h-[572px]">
        <div className="absolute z-10 top-52">
          <Image alt="background" height={460} src={perfil}></Image>
        </div>
        <motion.div initial="hidden" animate="visible" variants={titleVariant1}>
          <div className="mt-14">
            <p className="text-white text-7xl font-extralight">Viva o</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={titleVariant2}>
          <div className="w-full flex justify-end">
            <p className="text-white text-6xl xs:text-7xl font-bold mr-4">
              MELHOR
            </p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={titleVariant3}>
          <div className="w-full flex justify-end">
            <p className="text-white text-4xl xs:text-6xl font-thin mr-4">
              da <span className="font-bold text-5xl xs:text-6xl">VIDA</span>
            </p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={titleVariant4}>
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
      <div className="bg-white">
        <div className="bg-linePattern">
          <div className="pt-4 text-center">
            <p className="font-bold italic text-mainPink text-3xl">
              DRA. NEUSA PRESA
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <span className="text-black font-bold">
                Corporis beatae ipsa possimus eligendi
              </span>{' '}
              porro a amet earum quos, in maiores eum, nulla similique libero
              officiis perferendis unde nihil eveniet molestias.
            </p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariant1}
          >
            <Swiper
              modules={[Autoplay]}
              loop={true}
              slidesPerView={'auto'}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              spaceBetween={10}
              className="mySwiper"
            >
              <SwiperSlide style={{ width: '300px' }}>
                <CarouselCard
                  icon={femaleIcon}
                  title="Hormonal"
                  description="A reposição hormonal é um tratamento que tem como objetivo repor os hormônios que o corpo deixa de produzir após a menopausa."
                  link="ihomwegkfpl"
                />
              </SwiperSlide>
              <SwiperSlide className="" style={{ width: '300px' }}>
                <CarouselCard
                  icon={pillIcon}
                  title="Suplementação"
                  description="A suplementação é um tratamento que tem como objetivo repor os hormônios que o corpo deixa de produzir após a menopausa."
                  link="ihomwegkfpl"
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: '300px' }}>
                <CarouselCard
                  icon={happyIcon}
                  title="Bem-estar"
                  description="O bem-estar é um tratamento que tem como objetivo repor os hormônios que o corpo deixa de produzir após a menopausa."
                  link="ihomwegkfpl"
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: '300px' }}>
                <CarouselCard
                  icon={exerciseIcon}
                  title="Emagrecimento"
                  description="O emagrecimento é um tratamento que tem como objetivo repor os hormônios que o corpo deixa de produzir após a menopausa."
                  link="ihomwegkfpl"
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>

          <div className="text-center mt-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={buttonVariant}
              viewport={{ once: true }}
            >
              <button className="bg-mainPink text-white text-2xl shadow-gray-400 shadow-xl rounded-lg p-4 mb-8">
                Agende sua consulta!
              </button>
            </motion.div>
            {/* <p className="text-2xl text-black">Quer saber mais?</p>

            <Link href={'/blog'}>
              <button className="shadow-xl shadow-gray-300 bg-pink-400 text-white rounded-lg p-3 text-2xl mb-10">
                Acessar o blog
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}
