import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import variants from './variants'
import { sleep } from '@src/helpers'

const useLoadingScreen = (setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { svgVariants, overlayVertical, overlayHorizontal } = variants
  const overlay1Controls = useAnimation()
  const overlay2Controls = useAnimation()
  const overlay3Controls = useAnimation()
  const sequence = async () => {
    await sleep(1500)
    await overlay1Controls.start('visible')
    await overlay2Controls.start('visible')
    await overlay3Controls.start('visible')
    setAnimationComplete(true)
  }

  useEffect(
    () => {
      sequence()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return {
    svgVariants,
    overlayVertical,
    overlayHorizontal,
    overlay1Controls,
    overlay2Controls,
    overlay3Controls
  }
}

export default useLoadingScreen
