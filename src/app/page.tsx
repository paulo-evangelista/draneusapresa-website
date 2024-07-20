'use client'

import React, { useRef, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CardsCarousel from '../components/CardsCarousel/CardsCarousel'
import perfil from '../../assets/perfil.png'
import InstagramSection from '@/components/InstagramSection/InstagramSection'
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
    <h1 className='hidden'>Viva o melhor da vida!</h1>
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
              e ginecologia
            </p>
          </div>
          <div className="flex md:justify-center justify-end">
            <div className="w-1/3 text-center mr-8 md:mr-0 mt-4 md:mt-16">
              <p className="text-sm md:text-3xl text-white font-extralight">
                Tudo para você viver a <span className="font-bold">sua</span>{' '}
                melhor <span className="font-bold">versão</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-white">
      <InstagramSection/>
        <div className="bg-linePattern">
          <div className="pt-4 text-center mx-auto max-w-xl">
            <p className="font-bold italic text-mainPink text-3xl">
              DRA. NEUSA PRESA
            </p>
            <p className="text-lg">
              "Sou médica ginecologista, professora da Universidade Estadual de
              Maringá, cuido da saúde, bem estar e beleza da mulher nas várias
              fases da vida e principalmente no climatério e menopausa."
            </p>
            {/* <div className='my-4'>
              <Link href={'/sobre'}>
                <button className='text-mainPink bg-white hover:scale-110 transition border-mainPink border-2 rounded-lg py-2 px-4 shadow-xl'>
                Saiba mais sobre mim {'>'}
                </button>
              </Link>
            </div> */}
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
