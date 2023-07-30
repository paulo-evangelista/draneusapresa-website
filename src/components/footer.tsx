import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import Link from 'next/link'
import logoFull from '../../assets/logo-full-white.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className="bg-secondPink text-center pb-6">
        <div className="flex justify-center gap-6 item-center w-auto p-4">
          <Link href="https://www.facebook.com/DraNeusaMarliPresa/">
            <BsFacebook color="#ffffff" size={50} />
          </Link>
          <Link href={"https://www.instagram.com/draneusapresa/"}>
          <BsInstagram color="#ffffff" size={50} />
          </Link>
          
        </div>
        <Image alt="logo" className="px-10" src={logoFull}></Image>
      </div>
    </>
  )
}
