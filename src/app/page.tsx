'use client'

import React, { useRef, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import CardsCarousel from '../components/CardsCarousel/CardsCarousel'

import happyIcon from '../../assets/icon_happy.svg'
import exerciseIcon from '../../assets/icon_exercise.svg'
import femaleIcon from '../../assets/icon_female.svg'
import pillIcon from '../../assets/icon_pill.svg'
import pattern from '../../assets/pattern.svg'
import perfil from '../../assets/perfil.png'
import heartIcon from '../../assets/heart.svg'
import spaIcon from '../../assets/spa.svg'
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

const cardInfos = [
  {
    icon: pillIcon,
    title: 'Medicina Preventiva',
    text: 'Descubra como os pilares da medicina preventiva podem melhorar a sua qualidade de vida.',
  },
  {
    icon: happyIcon,
    title: 'Climatério e Menopausa',
    text: 'Encare a menopausa com confiança. A idade não é mais uma limitação para seu bem-estar!',
  },
  {
    icon: heartIcon,
    title: 'Cirurgia Ginecológica',
    text: 'Procedimentos cirúrgicos ginecológicos como ??????????? ????? ????? ??? ??',
  },
  {
    icon: femaleIcon,
    title: 'Ginecologia Clínica',
    text: 'Da contracepção ao planejamento da gravidez, seja acompanhada por uma das maiores especialistas em saúde feminina do país.',
  },
  {
    icon: exerciseIcon,
    title: 'Longevidade Saudável',
    text: 'Viva mais e melhor. Adquira um estilo de vida para guiá-la em uma jornada de longevidade saudável.',
  },
  {
    icon: spaIcon,
    title: 'Laser Ginecológico',
    text: 'O laser é utilizado para x e devolver a elasticidade naquela parte lá sabe xxxx ???? politechnik',
  },
]

export default function Index() {
  return (
    <>
      <div className="h-[578px]">
        <div className="absolute z-10 top-52">
          <Image alt="background" height={460} src={perfil}></Image>
        </div>
        <motion.div initial="hidden" animate="visible" variants={titleVariant1}>
          <div className="mt-14 md:text-center">
            <p className="text-white text-7xl font-extralight">Viva o</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={titleVariant2}>
          <div className="w-full flex justify-end md:justify-center">
            <p className="text-white text-6xl xs:text-7xl font-bold mr-4 md:mr-0">
              MELHOR
            </p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={titleVariant3}>
          <div className="w-full flex justify-end md:justify-center">
            <p className="text-white text-4xl xs:text-6xl md:text-7xl font-thin mr-4">
              da{' '}
              <span className="font-bold text-5xl md:text-7xl xs:text-6xl">
                VIDA
              </span>
            </p>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={titleVariant4}>
          <div className=" flex md:justify-center justify-end">
            <p className="text-white text-xs xs:text-sm font-extralight mr-4 md:mr-0 md:text-2xl md:pt-6">
              Medicina preventiva, estilo de vida
            </p>
          </div>
          <div className=" flex md:justify-center justify-end">
            <p className="text-white text-xs xs:text-sm font-extralight mr-4 md:mr-0 md:text-2xl">
              e tratamento pós menopausa
            </p>
          </div>
          <div className="flex md:justify-center justify-end">
            <div className="w-1/3 text-center mr-8 md:mr-0 mt-4 md:mt-16">
              <p className="text-sm md:text-3xl text-white font-extralight">
                A doutora que te deixa <span className="font-bold">longe</span>{' '}
                dos <span className="font-bold">médicos</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-white">
        <div className="bg-linePattern">
          <div className="pt-4 text-center mx-auto max-w-xl">
            <p className="font-bold italic text-mainPink text-3xl">
              DRA. NEUSA PRESA
            </p>
            <p className="text-lg">
              "Sou médica ginecologista, professora da Universidade Estadual de
              Maringá, cuido da saúde, bem estar e beleza da mulher nas várias
              fases da vida e principalmente no climatério e menopausa."
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <span className="text-black font-bold">
                Corporis beatae ipsa possimus eligendi
              </span>{' '}
              porro a amet earum quos, in maiores eum, nulla similique libero
              officiis perferendis unde nihil eveniet molestias. */}
            </p>
            <div className='my-4'>
              <Link href={'/sobre'}>
                <button className='text-mainPink bg-white hover:scale-110 transition border-mainPink border-2 rounded-lg py-2 px-4 shadow-xl'>
                Saiba mais sobre mim {'>'}
                </button>
              </Link>
            </div>
          </div>
              <CardsCarousel/>
          <div className="text-center mt-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={buttonVariant}
              viewport={{ once: true }}
            >
              <Link href={'/agende'}>
                <button className="bg-mainPink text-white text-2xl shadow-gray-400 shadow-xl rounded-lg p-4 mb-8">
                  Agende sua consulta!
                </button>
              </Link>
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
