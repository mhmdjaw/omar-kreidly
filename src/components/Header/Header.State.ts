import { sleep } from '@src/helpers'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const useHeader = (delayAnimation?: boolean, onAnimationComplete?: () => void) => {
  const headerControls = useAnimation()

  const sequence = async () => {
    // if (delayAnimation) {
    //   await sleep(1500)
    // }
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
