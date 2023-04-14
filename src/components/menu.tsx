import close from '../../assets/x.svg'
import Image from 'next/image'

interface MenuProps {
  setMenuState: () => void
}

const Menu: React.FC<MenuProps> = ({ setMenuState }) => {
  return (
    <div className=" h-full bg-mainPink z-10 pt-30 w-full text-center absolute transition-all">
      <div
        className="w-full justify-start flex ml-2 mt-2"
        onClick={setMenuState}
      >
        <Image src={close}></Image>
      </div>
      <h1>HELLOOOOO</h1>
      <h1>HELLOOOOO</h1>
      <h1>HELLOOOOO</h1>
      <h1>HELLOOOOO</h1>
      <h1>HELLOOOOO</h1>
    </div>
  )
}

export default Menu
