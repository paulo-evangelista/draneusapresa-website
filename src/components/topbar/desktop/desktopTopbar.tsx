import logo from '../../../../assets/logo-white.svg'
import Image from 'next/image'
import Link from 'next/link'

const DesktopTopbar = () => {
  return (
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
      <div className="w-full flex justify-center">
        <Link href="/">
          <p className="p-4 text-white  text-lg">Ínicio</p>
        </Link>
        <Link href="/agende">
          <p className="p-4 text-white  text-lg">Agende sua consulta</p>
        </Link>
      </div>
    </div>
  )
}
export default DesktopTopbar