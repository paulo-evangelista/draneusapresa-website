import Link from 'next/link'
import { motion } from 'framer-motion'
import { treatmentsSectionItems, treatmentsSection } from './animations'

const menuItems = [
    {
        title: 'Medicina Preventiva',
      },
      {
        title: 'Climatério e Menopausa',
      },
      {
        title: 'Cirurgia Ginecológica',
      },
      {
        title: 'Ginecologia Clínica',
      },
      {
        title: 'Longevidade Saudável',
      },
      {
        title: 'Laser Ginecológico',
      },
]

const TreatmentsDropdownSection = () => {
  return (
    <motion.div variants={treatmentsSection}>
      <p className="text-2xl font-light text-white pt-2 tect-white mb-2">
        {'Entenda melhor:'}
      </p>
      <div className="p-4 border border-pink-300 rounded-xl shadow-xl w-max mx-auto">
        {menuItems.map((item, i) => (
          <motion.div variants={treatmentsSectionItems} key={i} custom={i} className='hover:scale-110 transition'>
            <Link href={"/"}>
              <p className="text-white cursor-pointer font-extralight text-xl mt-2">
                {item.title}
              </p>
              <hr className="mx-auto w-32 mb-5 mt-0.5 border border-pink-300 rounded" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TreatmentsDropdownSection
