import React, { useEffect } from 'react'
import { Metadata } from 'next'
import AgendarForm from '@/components/AgendarForm/AgendarForm'

export const metadata: Metadata = {
  openGraph: {
    images: '/og_image.jpg',
    url: 'https://www.draneusapresa.com.br',
    type: 'website',
    title: 'Agende sua consulta online! | Dra. Neusa Presa',
  },
  title: 'Agende sua consulta online! | Dra. Neusa Presa',
  description:
    'Conquiste uma vida melhor sem sair de casa! Agende sua consulta online com a Dra. Neusa Presa.',
}

export default function AgendeOnline() {


  return (
    <>
      <div className="bg-white pb-8 items-center text-center">
        <div className="pt-1">
          <h1 className="text-3xl px-10 mb-2 text-black">
            Conquiste uma vida melhor{' '}
            <span className="text-mainPink">sem sair de casa! </span>
          </h1>
        </div>

        <AgendarForm />
      </div>
    </>
  )
}
