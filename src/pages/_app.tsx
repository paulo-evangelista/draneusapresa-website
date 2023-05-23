import '../styles/global.css'
import 'katex/dist/katex.css'
import Navbar from '../components/navbar'
import { useState } from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  const setMenuState = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {isMenuOpen ? <Menu setMenuState={setMenuState} /> : null}
      <Navbar setMenuState={setMenuState} />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
