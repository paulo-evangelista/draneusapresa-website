import menuIcon from '../../assets/menu.svg'
import logo from '../../assets/logo-white.svg'
import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'

interface NavbarProps {
  setMenuState: () => void
}
const Navbar: React.FC<NavbarProps> = ({ setMenuState }) => {
  const windowWidth = window.innerWidth
  console.log('hellooo')
  console.log(windowWidth)

  return windowWidth <= 600 ? (
    <div className="flex justify-between ">
      <div className="p-2" onClick={setMenuState}>
        <Image alt="menu" src={menuIcon} className=""></Image>
      </div>
      <div className="p-2 pr-4">
        <Image
          alt="logo"
          src={logo}
          height={50}
          width={50}
          className="ml-0"
        ></Image>
      </div>
    </div>
  ) : (
    <div className="flex grid-cols-2 bg-mainPink">
      <div className="p-2 pr-4">
        <Image
          alt="logo"
          src={logo}
          height={50}
          width={50}
          className="ml-0"
        ></Image>
      </div>
      <div className='w-full flex justify-center'>
        <Link href="/">
      <p className='p-4 text-white  text-lg'>Ínicio</p>
        </Link>
        <Link href="/agende">
      <p className='p-4 text-white  text-lg'>Agende sua consulta</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
