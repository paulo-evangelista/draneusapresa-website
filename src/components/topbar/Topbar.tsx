'use client'
import { useState, useEffect } from 'react'
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
