import Image from 'next/image'

import female from '../../assets/female.svg'

interface cardInterface {
  title: string
  description: string
  link: string
  icon: any
}

const CarouselCard = ({ title, description, link, icon }: cardInterface) => {
  return (
    <div className="mt-4 mb-4 p-4 shadow-gray-400 shadow-lg text-white text-center  break-words bg-mainPink rounded-lg">
      <div className="p-3">
        <Image src={icon}></Image>
        <p className="text-white text-2xl font-bold">{title}</p>
      </div>
      <div>
        <p className="text-white">{description}</p>
      </div>
    </div>
  )
}
export default CarouselCard
