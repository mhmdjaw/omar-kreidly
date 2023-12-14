import React, { useState, useEffect } from 'react'
import Loading from '../Loading'
import { useMenuAnimation } from '@src/helpers'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { NudeImagesContainer } from './styles'
import variants from './variants'

//images
import nude1 from '@src/assets/images/nudes/nude1.jpg'
import nude2 from '@src/assets/images/nudes/nude2.jpg'
import nude3 from '@src/assets/images/nudes/nude3.jpg'
import nude4 from '@src/assets/images/nudes/nude4.jpg'
import nude5 from '@src/assets/images/nudes/nude5.jpg'

const nudes = [nude1, nude2, nude3, nude4, nude5]

const PortraitImages: React.FC = () => {
  const animationControls = useAnimationControls()
  const [imagesLoading, setImagesLoading] = useState(5)
  const { menuAnimationComplete } = useMenuAnimation()
  const [loop, setLoop] = useState<NodeJS.Timeout | undefined>(undefined)
  const [slideIndex, setSlideIndex] = useState(0)

  if (imagesLoading === 0) {
    animationControls.start('visible')
    setImagesLoading(-1)
  }

  const startSlideShow = () => {
    setLoop(
      setInterval(() => {
        setSlideIndex((slideIndex) => (slideIndex === 4 ? 0 : slideIndex + 1))
      }, 4000)
    )
  }

  useEffect(() => {
    return () => clearInterval(loop)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return menuAnimationComplete ? (
    <>
      <NudeImagesContainer
        initial="hidden"
        animate={animationControls}
        variants={variants.container}
        onAnimationComplete={startSlideShow}
      >
        <div className="main">
          <AnimatePresence>
            <motion.img
              key={slideIndex}
              className={slideIndex === 1 ? 'bottom' : undefined}
              src={nudes[slideIndex]}
              initial="hidden"
              animate="visible"
              exit="out"
              variants={variants.image}
            />
          </AnimatePresence>
        </div>
        <img src={nude1} onLoad={() => setImagesLoading((s) => s - 1)} />
        <img className="bottom" src={nude2} onLoad={() => setImagesLoading((s) => s - 1)} />
        <img src={nude3} onLoad={() => setImagesLoading((s) => s - 1)} />
        <img src={nude4} onLoad={() => setImagesLoading((s) => s - 1)} />
        <img src={nude5} onLoad={() => setImagesLoading((s) => s - 1)} />
      </NudeImagesContainer>
      {imagesLoading > 0 && <Loading />}
    </>
  ) : (
    <Loading />
  )
}

export default PortraitImages
