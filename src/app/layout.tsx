import 'src/styles/global.css'
import 'leaflet/dist/leaflet.css'
import Navbar from '../components/navbar'
import { useState } from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Topbar from '../components/topbar/Topbar'


export default function RootLayout({children,}: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <head>
        <title>Dra. Neusa Presa</title>
      </head>
      <body>
      <Topbar />
      {children}
      <Footer></Footer>
        </body>
    </html>
  )
}
