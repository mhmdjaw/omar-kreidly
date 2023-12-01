import { ease } from '@src/helpers'

const transition = {
  ease: ease.expoInOut,
  duration: 1.6,
  delay: 0.5
}

const variants = {
  block: {
    hidden: {
      width: 0
    },
    visible: {
      width: '100%',
      transition
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
