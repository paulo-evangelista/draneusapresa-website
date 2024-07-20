import logo from '../../../../assets/logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DesktopServicesDropdown from './DesktopServicesDropdown'
import { AnimatePresence } from 'framer-motion'

const DesktopTopbar = () => {
  const [servicesDropdownState, setServicesDropdownState] = useState(false)

  return (
    <>
    <div className="flex grid-cols-2 bg-mainPink">
      <Link href="/">
      <div className="p-2 pr-4">
        <Image
          alt="logo"
          src={logo}
          height={50}
          width={50}
          className="ml-0"
          ></Image>
      </div>
          </Link>
      <div className="w-full flex justify-center">
        <Link href="/">
          <p className="py-4 hover:scale-110 transition text-white  text-lg">
            Ínicio
          </p>
        </Link>
        <Link href="/agende">
          <p className="py-4 px-10 hover:scale-110 transition text-white  text-lg">
            Agende sua consulta
          </p>
        </Link>
        {/* <p
          onClick={() => {
            setServicesDropdownState(!servicesDropdownState)
          }}
          className="py-4 hover:cursor-pointer hover:scale-110 transition text-white  text-lg"
          >
          Serviços
        </p> */}
      </div>
    </div>
    {/* <AnimatePresence>
    {servicesDropdownState && <DesktopServicesDropdown setOpen={setServicesDropdownState}/>}
    </AnimatePresence> */}
    </>

  )
}
export default DesktopTopbar
