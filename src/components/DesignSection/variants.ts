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
  }
}

export default variants
