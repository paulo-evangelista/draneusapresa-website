export const Menu = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
    exit: { opacity: 0 },
  };
  
  export const MenuItems = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: 0.3 * i }
    }),
    hidden: {
      opacity: 0, 
    },
  };
  