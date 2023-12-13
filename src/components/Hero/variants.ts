import { ease } from '@src/helpers'

const variants = {
  cover: {
    hidden: {
      height: 'calc(var(--vh, 1vh) * 85)',
      y: 0
    },
    visible: {
      height: 0,
      y: '80px',
      transition: {
        ease: ease.slideIn,
        duration: 1.6
      }
    }
  }
}

export default variants
