'use client'

import Link from 'next/link'
import edit from '../../../assets/edit.png'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Agende = () => {
  const MapWithNoSSR = dynamic(() => import('../../components/map/Map'), {
    ssr: false,
  })
  return (
    <>
      <div className="items-center text-center min-h-screen bg-white">
        <div className="p-8 pb-0">
          <Image src={edit} alt="photo"></Image>
        </div>
        <h1 className="text-4xl mb-2 text-black">
          Conquiste uma vida melhor{' '}
          <span className="text-mainPink">sem sair de casa! </span>
        </h1>
        <p className="text-lg mb-2 text-center px-4 text-gray-700">
          Quer entender por que a doutora é tão aclamada?
        </p>
        <Link rel="noopener noreferrer" target="_blank" href={"https://api.whatsapp.com/send/?phone=554491581548&text=Ol%C3%A1!+Gostaria+de+entender+mais+sobre+a+consulta+online"}>
        <button className="bg-mainPink text-2xl hover:bg-secondPink transition-all text-white font-bold py-2 px-4 shadow-xl rounded-xl w-72">
          Marque sua consulta online
        </button>
        </Link>

        <p className="text-3xl font-bold mt-12 mb-2 text-black">
          Nosso endereço:
        </p>
          <div className="mx-auto w-fit">
            <MapWithNoSSR />
          </div>
          <p className="p-2">R. Néo Alves Martins, N°3377 </p>
          <Link rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send/?phone=554491581548&text=Ol%C3%A1!+Gostaria+de+agendar+uma+consulta!">
          <button className="bg-mainPink mb-2 text-xl hover:bg-secondPink transition-all text-white font-bold py-2 px-4 shadow-xl rounded-xl">
          Agende sua consulta!
        </button>
          </Link>
          <p className='text-black text-xl'>Horário de atendimento</p>
          <p>Seg. a sex.</p>
          <p>09:00 as 18:00</p>
        </div>
    </>
  )
}
2
export default Agende
