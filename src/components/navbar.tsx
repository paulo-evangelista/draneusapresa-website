import menuIcon from '../../assets/menu.svg'
import logo from '../../assets/logo-white.svg'
import Image from 'next/image'

interface NavbarProps {
  setMenuState: () => void
}

const Navbar: React.FC<NavbarProps> = ({ setMenuState }) => {
  const handleMenu = () => {
    console.log('menu')
  }

  return (
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
  )
}

export default Navbar
