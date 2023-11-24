import { ease } from '@src/helpers'

const variants = {
  cover: {
    hidden: {
      height: 'calc(var(--vh, 1vh) * 85)'
    },
    visible: {
      height: 0,
      transition: {
        ease: ease.slideIn,
        duration: 1.6
      }
    }
  }
}

export default variants
