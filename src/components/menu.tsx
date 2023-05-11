import close from '../../assets/x.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface MenuProps {
  setMenuState: () => void
}

const Menu: React.FC<MenuProps> = ({ setMenuState }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" h-full bg-mainPink z-10 pt-30 w-full text-center absolute transition-all"
    >
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
    </motion.div>
  )
}

export default Menu
