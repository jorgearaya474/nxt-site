export const heroImageVariants = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1
    }
  }
}

export const heroImageBackVariants = {
  hidden: {
    y: 0,
    x: 0,
    opacity: 0
  },
  visible: {
    y: 20,
    x: 20,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.5,
      delay: 0.5
    }
  }
}

export const FadeUpVariantsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const FadeUpVariantsItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
};