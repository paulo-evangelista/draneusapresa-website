import close from '../../assets/x.svg'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuProps {
  setMenuState: () => void
}

const Menu: React.FC<MenuProps> = ({ setMenuState }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
    </AnimatePresence>
  )
}

export default Menu
