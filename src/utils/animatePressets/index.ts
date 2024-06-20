export const menuVariants = {
  open: { rotate: 180, transition: { duration: 0.4 } },
  closed: { rotate: 0, transition: { duration: 0.4 } },
};

export const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const listVariant = {
  open: {
    clipPath: 'inset(-100% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.4,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};
