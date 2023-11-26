import { ease } from '@src/helpers'

export const variants = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  },
  cover: {
    hidden: {
      width: '100%'
    },
    visible: {
      width: 0,
      transition: {
        ease: ease.imageReveal,
        duration: 1.6
      }
    }
  },
  image: {
    hidden: {
      scale: 1.4
    },
    visible: {
      scale: 1,
      transition: {
        ease: ease.imageReveal,
        duration: 1.6
      }
    }
  }
}
