import { ease } from '@src/helpers'

const variants = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.3
        // delayChildren: 0.3
      }
    }
  },
  block: {
    hidden: {
      height: 0
    },
    visible: {
      height: 'calc(var(--vh, 1vh) * 100)',
      transition: {
        ease: ease.expoInOut,
        duration: 1.6
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
        default: { duration: 2 + i, ease: 'easeInOut' },
        fillOpacity: { duration: 2.5 - i * 0.5, ease: [1, 0, 0.8, 1] }
      }
    })
  }
}

export default variants
