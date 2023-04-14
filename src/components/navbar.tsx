import menuIcon from '../../assets/menu.svg'
import logo from '../../assets/logo1.png'
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
        <Image src={menuIcon} className=""></Image>
      </div>
      <div className="p-2">
        <Image src={logo} className=""></Image>
      </div>
    </div>
  )
}

export default Navbar
