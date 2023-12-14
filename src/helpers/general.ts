import { Easing } from 'framer-motion'

export const isBrowser = typeof window !== 'undefined'

interface Ease {
  [key: string]: Easing
}

export const ease: Ease = {
  expoInOut: [0.95, 0.03, 0.12, 0.97],
  slideIn: [0.6, 0.05, 0, 0.9],
  imageReveal: [0.85, -0.01, 0.23, 1.06]
}

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const isTouchDevice = () => {
  if (isBrowser) {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  return false
}

export const isSafari = isBrowser && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

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
        default: { duration: 2 + i, ease: 'easeInOut' },
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
