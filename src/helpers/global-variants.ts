export const g_variants = {
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
