import Image from 'next/image'
import React from 'react'
import StackImg from 'assets/insta-stack.png'
import InstaLogo from 'assets/instagram.svg'
import { motion } from 'framer-motion'


export default function InstagramSection() {
  return (
    <>
        <div className='h-4'/>
      <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1}}
      transition={{ duration: 0.6, delay: 2, repeat: 8, repeatType: "reverse"}}
      className="hover:scale-95 hover:cursor-pointer transition p-2 text-white pr-4 mx-2 bg-gradient-to-bl from-pink-500 to-rose-500 rounded-lg shadow-xl grid grid-cols-2 mb-4">
        <div>
          <p className='pl-1'>Siga-me no</p>
          <Image src={InstaLogo} alt="logo instagram" />
        </div>
        <div className="ml-auto">
          <Image src={StackImg} width={90} alt="fotos instagram" />
        </div>
      </motion.div>
    </>
  )
}
