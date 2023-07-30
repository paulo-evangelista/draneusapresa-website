'use client'
import { useEffect, useState } from 'react'
import DesktopCards from './DesktopCards'
import MobileCarousel from './MobileCarousel'

export const CardsCarousel = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return windowWidth < 800 ? <MobileCarousel /> : <DesktopCards />
}

export default CardsCarousel
