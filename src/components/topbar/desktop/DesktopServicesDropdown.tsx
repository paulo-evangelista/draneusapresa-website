import { motion } from 'framer-motion'
import { useState, useEffect,useRef } from 'react';

interface Props {
  setOpen: (state: boolean) => void
}

// function listenForOutsideClicks(listening, setListening, menuRef, setIsOpen) {
//   return () => {
//     if (listening) return;
//     if (!menuRef.current) return;
//     setListening(true);
//     [`click`, `touchstart`].forEach((type) => {
//       document.addEventListener(`click`, (evt) => {
//         try {
//         if (menuRef.current.contains(evt.target)) return;
//         } catch {return}
//         setIsOpen(false);
//       });
//     });
//   }
// }

const DesktopServicesDropdown = ({setOpen}: Props) => {

  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  
  const toggle = () => setIsOpen(!isOpen);

  // useEffect(listenForOutsideClicks(
  //   listening,
  //   setListening,
  //   menuRef,
  //   setOpen,
  // ));


  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="absolute grid grid-cols-2 top-14 right-[31%] rounded-lg bg-white shadow-lg"
      ref={menuRef}
    >
      <div className="p-4 pb-0 text-center">
        <p className="pt-2 hover:cursor-pointer text-lg text-mainPink hover:scale-110 transition">
          Medicina Preventiva
        </p>
        <hr className='border border-pink-300 w-16 mx-auto rounded mt-1 mb-4'/>
        <p className="pt-2 hover:cursor-pointer text-lg text-mainPink hover:scale-110 transition">
          Climatério e Menopausa
        </p>
        <hr className='border border-pink-300 w-16 mx-auto rounded mt-1 mb-4'/>
        <p className="pt-2 hover:cursor-pointer text-lg text-mainPink hover:scale-110 transition">
          Cirurgia Ginecológica
        </p>
        <hr className='border border-pink-300 w-16 mx-auto rounded mt-1 mb-4'/>
      </div>
      <div className="p-4 text-center">
        <p className="pt-2 hover:cursor-pointer text-lg text-mainPink hover:scale-110 transition">
          Ginecologia Clínica
        </p>
        <hr className='border border-pink-300 w-16 mx-auto rounded mt-1 mb-4'/>
        <p className="pt-2 hover:cursor-pointer text-lg text-mainPink hover:scale-110 transition">
          Longevidade Saudável
        </p>
        <hr className='border border-pink-300 w-16 mx-auto rounded mt-1 mb-4'/>
        <p className="pt-2 hover:cursor-pointer text-lg text-mainPink hover:scale-110 transition">
          Laser Ginecológico
        </p>
        <hr className='border border-pink-300 w-16 mx-auto rounded mt-1 mb-2'/>
      </div>
    </motion.div>
  )
}

export default DesktopServicesDropdown
