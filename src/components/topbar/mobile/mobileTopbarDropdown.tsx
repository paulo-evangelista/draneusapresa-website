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
          <motion.div variants={MenuItems} custom={i} key={i}>
            <Link href={item.route}>
              <p
                onClick={setMenuState}
                className="text-white cursor-pointer text-2xl my-6"
              >
                {item.item}
              </p>
            </Link>
          </motion.div>
        ) : (
          <TreatmentsDropdownSection/>
        )
      )}
    </motion.div>
  )
}
export default MobileTopbarDropdown
