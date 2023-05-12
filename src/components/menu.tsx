import close from '../../assets/x.svg'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useEffect } from 'react'

interface MenuProps {
  setMenuState: () => void
}

const menuVariant: Variants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.2,
      type: 'just',
      ease: 'easeOut',
    },
  },
}

const Menu: React.FC<MenuProps> = ({ setMenuState }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={menuVariant}
      className=" h-screen w-full bg-mainPink z-20 pt-30 text-center absolute"
    >
      <div
        className="w-full justify-start flex ml-2 mt-2"
        onClick={setMenuState}
      >
        <Image src={close}></Image>
      </div>
      <Link href={'/'}>
        <p onClick={setMenuState} className="text-white text-2xl my-8">
          Início
        </p>
      </Link>
      <Link href={'/blog'}>
        <p onClick={setMenuState} className="text-white text-2xl my-8">
          Blog
        </p>
      </Link>
      <p className="text-white text-2xl my-8">Marque sua consulta</p>
      <p className="text-white text-2xl my-8">HELLOOOOO</p>
    </motion.div>
  )
}

export default Menu
