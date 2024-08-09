'use client'
import { CgMenuRight } from 'react-icons/cg'
import { useState } from 'react'
import TopbarDropdown from './mobileTopbarDropdown'
import { AnimatePresence, Variants } from 'framer-motion'
import menuIcon from '../../../../assets/menu.svg'
import logo from '../../../../assets/logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import closeIcon from '../../../../assets/x.svg'
import MobileTopbarDropdown from './mobileTopbarDropdown'
import { motion } from 'framer-motion'

const menuIconVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: 'just',
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'just',
      ease: 'easeOut',
    },
  },
}
const XIconVariant = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      type: 'just',
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: {
      duration: 0.2,
      type: 'just',
      ease: 'easeOut',
    },
  },
}

const MobileTopbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const setMenuState = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="flex justify-between ">
        <div className="p-2 pr-4">
          <Link href="/">
          <Image
            alt="logo"
            src={logo}
            height={50}
            width={50}
            className="ml-0"
            ></Image>
            </Link>
        </div>
          {isActive ? (
        <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={XIconVariant}
              className="p-2 z-50"
              onClick={setMenuState}
            >
              <Image alt="menu" src={closeIcon} className="" />
            </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuIconVariant}
              className="p-2"
              onClick={setMenuState}
            >
              <Image alt="menu" src={menuIcon} className="" />
            </motion.div>
          )}
      </div>
      <AnimatePresence>
        {isActive && <MobileTopbarDropdown setMenuState={setMenuState} />}
      </AnimatePresence>
    </>
  )
}

export default MobileTopbar
