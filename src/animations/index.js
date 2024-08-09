export const titleVariant1 = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    translateY: 30,
    translateX: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    translateY: 0,
    translateX: 0,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

export const titleVariant2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.6,
    },
  },
}

export const titleVariant3 = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    translateY: 30,
    translateX: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    translateY: 0,
    translateX: 0,
    transition: {
      ease: 'circOut',
      delay: 2,
      duration: 0.5,
    },
  },
}

export const titleVariant4 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 5,
      duration: 1.2,
    },
  },
}
export const buttonVariant = {
  hidden: {
    opacity: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.7,
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}
