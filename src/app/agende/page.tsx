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
      <div className="items-center text-center bg-white">
          <Image className='p-8 mx-auto' src={edit} width={400} alt="photo"></Image>
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
          <p className="p-2">R. Néo Alves Martins, N°3377. Maringá, PR </p>
          <Link rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send/?phone=554491581548&text=Ol%C3%A1!+Gostaria+de+agendar+uma+consulta!">
          <button className="bg-mainPink mb-2 text-xl hover:bg-secondPink transition-all text-white font-bold py-2 px-4 shadow-xl rounded-xl">
          Agende sua consulta!
        </button>
          </Link>
          <p className='text-black text-xl'>Horário de atendimento</p>
          <p>Seg. a sex.</p>
          <p>08:00 as 11:30 <br/> 13:00 as 18:00</p>
        </div>
    </>
  )
}
export default Agende
