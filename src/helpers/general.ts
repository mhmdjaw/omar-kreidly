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
