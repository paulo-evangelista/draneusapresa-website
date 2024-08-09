import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import close from '../../../../assets/x.svg'
import { menuVariant, MenuItems } from './animations'
import TreatmentsDropdownSection from './TreatmentsDropdownSection'

interface MobileTopbarDropdownProps {
  setMenuState: () => void
}

const menuItems = [
  { item: 'Home', route: '/' },
  { item: 'Sobre mim', route: '/sobre' },
  { item: 'Marque sua consulta', route: '/agende' },
  { item: 'treatmentSection' },
]

const MobileTopbarDropdown = ({ setMenuState }: MobileTopbarDropdownProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariant}
      className=" h-screen w-full bg-mainPink z-20 pt-30 text-center absolute"
    >
      {menuItems.map((item, i) =>
        item.item !== 'treatmentSection' ? (
          <motion.div variants={MenuItems} custom={i} key={i} className='hover:scale-110 transition'>
            <Link href={item.route}>
              <p
                onClick={setMenuState}
                className="text-white cursor-pointer text-2xl mt-6"
              >
                {item.item}
              </p>
              <hr className="mx-auto w-32 mb-5 mt-0.5 border border-pink-300 rounded" />
            </Link>
          </motion.div>
        ) : (
          <TreatmentsDropdownSection key={i}/>
        )
      )}
    </motion.div>
  )
}
export default MobileTopbarDropdown
