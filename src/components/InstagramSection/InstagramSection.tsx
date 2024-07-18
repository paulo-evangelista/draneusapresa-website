import Image from 'next/image'
import React from 'react'
import StackImg from 'assets/insta-stack.png'
import InstaLogo from 'assets/instagram.svg'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InstagramSection() {
  return (
    <>
      <div className="h-4" />
      <Link rel="noopener noreferrer" target="_blank" href={'https://www.instagram.com/draneusapresa/'}>
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 2,
            repeat: 12,
            repeatType: 'reverse',
          }}
          className="h-32 hover:scale-95 hover:cursor-pointer transition p-2 text-white pr-4 mx-2 bg-gradient-to-bl from-pink-500 to-rose-500 rounded-lg shadow-xl grid grid-cols-2 mb-4"
        >
          <div>
            <p className="pl-1">Acompanhe no</p>
            <Image src={InstaLogo} height={87} alt="logo instagram" />
            <p className="pl-1">Clicando aqui!</p>
          </div>
          <div className="ml-auto pt-1">
            <Image className='align-middle relative' src={StackImg} alt='instagram preview' height={124} />
          </div>
        </motion.div>
      </Link>
    </>
  )
}
