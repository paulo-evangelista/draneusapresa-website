import ExtLink from './ext-link'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="bg-secondPink text-center">
        <p className="text-gray-300 pt-4 text-lg">Siga-nos nas redes socias</p>
        <div className="flex justify-center gap-6 item-center w-auto p-4">
          <Link href="https://www.facebook.com/DraNeusaMarliPresa/">
            <BsFacebook color="#ffffff" size={50} />
          </Link>
          <BsInstagram color="#ffffff" size={50} />
        </div>
        <p className="text-gray-400">Feito com ❤️ por Paulo</p>
      </div>
    </>
  )
}
