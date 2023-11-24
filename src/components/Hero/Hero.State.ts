import { useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const headlines = ['UI/UX Designer', 'Photographer', 'Gamer', 'Car Enthusiast']

const useHero = (headerAnimationComplete: boolean) => {
  const [index, setIndex] = useState(0)
  const [showIndicator, setShowIndicator] = useState(false)
  const titleControls = useAnimation()
  const coverControls = useAnimation()
  const [imageLoaded, setImageLoaded] = useState(false)

  const sequence = async () => {
    await titleControls.start({ y: 0, opacity: 1, skewY: 0 })
    setShowIndicator(true)
  }

  useEffect(
    () => {
      let interval: NodeJS.Timer
      if (headerAnimationComplete) {
        sequence()
        interval = setInterval(() => {
          setIndex((s) => (s === headlines.length - 1 ? 0 : s + 1))
        }, 2000)
      }

      return () => {
        clearInterval(interval)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [headerAnimationComplete]
  )

  return { showIndicator, titleControls, coverControls, headlines, index, imageLoaded, setImageLoaded }
}

export default useHero
