import 'src/styles/global.css'
import 'leaflet/dist/leaflet.css'
import Navbar from '../components/navbar'
import { useState } from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Topbar from '../components/topbar/Topbar'
import ogImage from "public/og_image.jpg"
import { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph : {
    images: "/og_image.jpg"
  },
  title: "Dra. Neusa Presa | Viva o melhor da vida!",

  description: "Medicina preventiva, estilo de vida e ginecologia para você criar a sua melhor versão."
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <body>
      <Topbar />
      {children}
      <Footer></Footer>
        </body>
    </html>
  )
}
