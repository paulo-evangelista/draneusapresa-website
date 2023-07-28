'use client'
import { CgMenuRight } from 'react-icons/cg'
import { useState } from 'react'
import TopbarDropdown from './mobileTopbarDropdown'
import { AnimatePresence } from 'framer-motion'
import menuIcon from '../../../../assets/menu.svg'
import logo from '../../../../assets/logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import closeIcon from "../../../../assets/x.svg";
import MobileTopbarDropdown from './mobileTopbarDropdown'

const MobileTopbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const setMenuState = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="flex justify-between ">
        <div className="p-2 pr-4">
          <Image
            alt="logo"
            src={logo}
            height={50}
            width={50}
            className="ml-0"
          ></Image>
        </div>
        <div className="p-2" onClick={setMenuState}>
          <Image alt="menu" src={ isActive? closeIcon : menuIcon} className=""></Image>
        </div>
      </div>
      <AnimatePresence>
      {isActive && <MobileTopbarDropdown setMenuState={setMenuState}/>}
      </AnimatePresence>
    </>
  )
}

export default MobileTopbar
