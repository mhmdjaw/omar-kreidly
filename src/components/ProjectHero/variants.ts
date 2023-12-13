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
      height: '100vh',
      transition: {
        ease: ease.expoInOut,
        duration: 1.6
      }
    }
  }
}

export default variants
