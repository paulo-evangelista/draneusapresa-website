import Image from 'next/image'
import Link from 'next/link'
import female from '../../assets/female.svg'

interface cardInterface {
  title: string
  description: string
  link: string
  icon: any
}

const CarouselCard = ({ title, description, link, icon }: cardInterface) => {
  return (
    <div className="mt-4 p-2 h-96 shadow-gray-400 shadow-lg relative text-white text-center break-words bg-mainPink rounded-lg">
      <div className="p-3">
        <Image className='mx-auto pb-2' alt="icon" src={icon}></Image>
        <p className="text-white text-2xl font-bold">{title}</p>
      </div>
      <div>
        <p className="text-white">{description}</p>
      </div>
      <div className='absolute bottom-4 left-10'>
        <Link href={link} rel="noopener noreferrer" target="_blank">
      <button className='py-2 px-4 bg-white mx-auto rounded-lg font-light shadow font-lg hover:scale-105 transition text-black'>
          Quero saber mais
      </button>
        </Link>
      </div>
    </div>
  )
}
export default CarouselCard
