import { motion } from 'framer-motion'
import { Menu, MenuItems } from '../animations'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import close from '../../../../assets/x.svg'

interface MobileTopbarDropdownProps {
  setMenuState: () => void
}

const menuVariant: any = {
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

  exit: {
    x: '-100vw',
    transition: {
      duration: 0.2,
      type: 'just',
      ease: 'easeOut',
    },
  },
}

const items = [
  { item: 'Home', route: '/' },
  { item: 'About', route: '/about' },
  { item: 'Contact', route: '/contact' },
]

const MobileTopbarDropdown = ({ setMenuState }: MobileTopbarDropdownProps) => {
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
      exit="exit"
      variants={menuVariant}
      className=" h-screen w-full bg-mainPink z-20 pt-30 text-center absolute"
    >
      <Link href={'/'}>
        <p
          onClick={setMenuState}
          className="text-white cursor-pointer text-2xl my-8"
        >
          Início
        </p>
      </Link>
      {/* <Link href={'/blog'}>
      <p onClick={setMenuState} className="text-white text-2xl my-8">
        Blog
      </p>
    </Link> */}
      <Link href={'./agende'}>
        <p
          onClick={setMenuState}
          className="text-white cursor-pointer text-2xl my-8"
        >
          Marque sua consulta
        </p>
      </Link>
      {/* <p className="text-white text-2xl my-8">HELLOOOOO</p> */}
    </motion.div>
  )
}
export default MobileTopbarDropdown
