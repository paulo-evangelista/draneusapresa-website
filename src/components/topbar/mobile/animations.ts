export const menuVariant: any = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.2,
      type: 'just',
      ease: 'easeOut',
    },
  },

  exit: {
    x: '-100vw',
    transition: {
      duration: 0.2,
      type: 'just',
      ease: 'easeOut',
    },
  },
}

export const MenuItems = {
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i == 0 ? 0.1 : 0.1 * i + 0.1 },
  }),
  hidden: {
    opacity: 0,
  },
}
export const treatmentsSectionItems = {
  visible: (i) => ({
    opacity: 1,
    transition: { delay: 0.1 * i + 1 },
  }),
  hidden: {
    opacity: 0,
  },
}
export const treatmentsSection = {
  visible: {
    opacity: 1,
    transition: { delay: 0.6 },
  },
  hidden: {
    opacity: 0,
  },
}
