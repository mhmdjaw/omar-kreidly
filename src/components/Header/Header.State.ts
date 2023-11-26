import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const useHeader = (onAnimationComplete?: () => void) => {
  const headerControls = useAnimation()

  const sequence = async () => {
    await headerControls.start({ y: 0, opacity: 1 })
    if (onAnimationComplete) {
      onAnimationComplete()
    }
  }

  useEffect(
    () => {
      sequence()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return { headerControls }
}

export default useHeader
