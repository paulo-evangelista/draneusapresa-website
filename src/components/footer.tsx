import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import Link from 'next/link'
import logoFull from '../../assets/logo-full-white.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className="bg-secondPink text-center ft:pt-4 ft:flex ft:justify-between pb-6">
        <div className="flex justify-center gap-6 item-center w-auto p-4 ft:pt-6 ft:ml-6">
          <Link rel='noopener noreferrer' target='_blank' href="https://www.facebook.com/DraNeusaMarliPresa/">
            <BsFacebook color="#ffffff" size={50} />
          </Link>
          <Link rel='noopener noreferrer' target='_blank' href={"https://www.instagram.com/draneusapresa/"}>
          <BsInstagram color="#ffffff" size={50} />
          </Link>
          
        </div>
        <Image alt="logo" className="px-10" src={logoFull}></Image>
      </div>
    </>
  )
}
