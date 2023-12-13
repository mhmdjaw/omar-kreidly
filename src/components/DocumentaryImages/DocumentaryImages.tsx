import React, { useState } from 'react'
import Loading from '../Loading'
import { useMenuAnimation } from '@src/helpers'
import { motion, useAnimationControls } from 'framer-motion'
import variants from './variants'
import { ImageBlock } from '@src/styles/global-styles'

//images
import documentary1 from '@src/assets/images/documentaries/documentary1.jpg'
import documentary2 from '@src/assets/images/documentaries/documentary2.jpg'
import documentary3 from '@src/assets/images/documentaries/documentary3.jpg'
import documentary4 from '@src/assets/images/documentaries/documentary4.jpg'

const PortraitImages: React.FC = () => {
  const animationControls = useAnimationControls()
  const [imagesLoading, setImagesLoading] = useState(4)
  const { menuAnimationComplete } = useMenuAnimation()

  if (imagesLoading === 0) {
    animationControls.start('visible')
    setImagesLoading(-1)
  }

  return menuAnimationComplete ? (
    <>
      <motion.div initial="hidden" animate={animationControls} variants={variants.container}>
        <ImageBlock>
          <img src={documentary1} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={documentary2} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={documentary3} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={documentary4} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
      </motion.div>
      {imagesLoading > 0 && <Loading />}
    </>
  ) : (
    <Loading />
  )
}

export default PortraitImages
