const variants = {
  mobileMockups: {
    variants: {
      inView: {
        transition: {
          staggerChildren: 0.2
        }
      }
    },
    initial: 'hidden',
    whileInView: 'inView',
    viewport: { once: true, amount: 0.2 }
  },
  mobile: {
    hidden: (i: number) => ({
      y: i * 100
    }),
    inView: {
      y: 0,
      transition: {
        ease: 'easeInOut'
      }
    }
  },
  handsMobile: {
    hidden: { y: '50%' },
    inView: {
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.5
      }
    }
  }
}

export default variants
