export const g_variants = {
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
  pathVariants: {
    hidden: {
      pathLength: 0,
      fillOpacity: 0
    },
    visible: (i: number) => ({
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        default: { duration: 1.5 + i * 1.5, ease: 'easeInOut' },
        fillOpacity: { duration: 2.5 - i * 0.5, ease: [1, 0, 0.8, 1] }
      }
    })
  },
  text: {
    variants: {
      hidden: { y: '50px', opacity: 0 },
      inView: {
        y: 0,
        opacity: 1,
        transition: {
          ease: 'easeInOut'
        }
      }
    },
    initial: 'hidden',
    whileInView: 'inView',
    viewport: { once: true, margin: '-50px' }
  }
}
