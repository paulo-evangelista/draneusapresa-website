'use client'
import { CgMenuRight } from 'react-icons/cg'
import { useState, useEffect } from 'react'
import TopbarDropdown from './mobile/mobileTopbarDropdown'
import { AnimatePresence } from 'framer-motion'
import menuIcon from '../../assets/menu.svg'
import logo from '../../assets/logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import MobileTopbar from './mobile/mobileTopbar'
import DesktopTopbar from './desktop/desktopTopbar'

const Topbar = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return windowWidth <= 600 ? <MobileTopbar /> : <DesktopTopbar />
}

export default Topbar
