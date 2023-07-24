'use client'

import '../styles/global.css'
import 'leaflet/dist/leaflet.css'
import Navbar from '../components/navbar'
import { useState } from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'


export default function RootLayout({children,}: {children: React.ReactNode}) {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    const setMenuState = () => {
      setMenuOpen(!isMenuOpen)
    }
  
  return (
    <html lang="en">
      <head>
        <title>Dra. Neusa Presa</title>
      </head>
      <body>
      {isMenuOpen ? <Menu setMenuState={setMenuState} /> : null}
      <Navbar setMenuState={setMenuState} />
      {children}
      <Footer></Footer>
        </body>
    </html>
  )
}
