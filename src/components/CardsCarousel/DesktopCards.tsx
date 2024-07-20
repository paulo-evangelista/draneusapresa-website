import happyIcon from '../../../assets/icon_happy.svg'
import exerciseIcon from '../../../assets/icon_exercise.svg'
import femaleIcon from '../../../assets/icon_female.svg'
import pillIcon from '../../../assets/icon_pill.svg'
import heartIcon from '../../../assets/heart.svg'
import spaIcon from '../../../assets/spa.svg'
import CarouselCard from '../carouselCard'

import 'swiper/css/autoplay'
import 'swiper/css'

const cardInfos = [
  {
    icon: pillIcon,
    title: 'Medicina Preventiva',
    text: 'Descubra como os pilares da medicina preventiva podem melhorar a sua qualidade de vida.',
  },
  {
    icon: happyIcon,
    title: 'Climatério e Menopausa',
    text: 'Encare a menopausa com confiança. A idade não é mais uma limitação para seu bem-estar!',
  },
  {
    icon: heartIcon,
    title: 'Cirurgia Ginecológica',
    text: 'Histerectomia, Ooforectomia e outros. Procedimentos modernos com a doutora mais experiente para sua segurança e bem-estar.',
  },
  {
    icon: femaleIcon,
    title: 'Ginecologia Clínica',
    text: 'Da contracepção ao planejamento da gravidez, seja acompanhada por uma das maiores especialistas em saúde feminina do país.',
  },
  {
    icon: exerciseIcon,
    title: 'Longevidade Saudável',
    text: 'Viva mais e melhor. Adquira um estilo de vida para guiá-la em uma jornada de longevidade saudável.',
  },
  {
    icon: spaIcon,
    title: 'Laser Ginecológico',
    text: 'Experimente o rejuvenescimento e tratamento eficaz de diversas condições ginecológicas com tecnologia de ponta.',
  },
]

const DesktopCards = () => {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {cardInfos.map((card, i) => (
        <div className="w-[300px]" key={i}>
          <CarouselCard
            icon={card.icon}
            title={card.title}
            description={card.text}
            link="ihomwegkfpl"
          />
        </div>
      ))}
    </div>
  )
}

export default DesktopCards
