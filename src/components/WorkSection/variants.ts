import { ease } from '@src/helpers'

const transition = {
  ease: ease.expoInOut,
  duration: 1.6,
  delay: 0.5
}

const variants = {
  block: {
    hidden: {
      height: 0
    },
    visible: {
      height: 'calc(var(--vh, 1vh) * 100)',
      transition
    }
  },
  title: {
    hidden: {
      y: '100%',
      opacity: 0,
      skewY: 7
    },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: { ease: ease.slideIn, duration: 1 }
    }
  }
}

export default variants
