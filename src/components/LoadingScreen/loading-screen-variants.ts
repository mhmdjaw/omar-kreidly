import { ease } from '../../helpers'

const transition = {
  ease: ease.expoInOut,
  duration: 1.6
}

const loadingScreenVariants = {
  svgVariants: {
    hidden: {
      rotateY: 90
    },
    visible: {
      rotateY: 450,
      transition: {
        repeat: Infinity,
        ease: 'linear',
        duration: 3,
        delay: 0.5
      }
    }
  },

  overlayVertical: {
    hidden: {
      height: 0
    },
    visible: {
      height: 'calc(var(--vh, 1vh) * 100)',
      transition
    }
  },

  overlayHorizontal: {
    hidden: {
      width: 0
    },
    visible: {
      width: '50vw',
      transition
    }
  }
}

export default loadingScreenVariants
