import React, { useState } from 'react'
import Loading from '../Loading'
import { useMenuAnimation } from '@src/helpers'
import { motion, useAnimationControls } from 'framer-motion'
import variants from './variants'
import { ImageBlock } from '@src/styles/global-styles'

//images
import automotive1 from '@src/assets/images/automotives/automotive1.jpeg'
import automotive2 from '@src/assets/images/automotives/automotive2.jpeg'
import automotive3 from '@src/assets/images/automotives/automotive3.jpeg'
import automotive4 from '@src/assets/images/automotives/automotive4.jpeg'
import automotive5 from '@src/assets/images/automotives/automotive5.jpeg'
import automotive6 from '@src/assets/images/automotives/automotive6.jpeg'
import automotive7 from '@src/assets/images/automotives/automotive7.jpg'
import automotive8 from '@src/assets/images/automotives/automotive8.jpg'

const AutomotiveImages: React.FC = () => {
  const animationControls = useAnimationControls()
  const [imagesLoading, setImagesLoading] = useState(8)
  const { menuAnimationComplete } = useMenuAnimation()

  if (imagesLoading === 0) {
    animationControls.start('visible')
    setImagesLoading(-1)
  }

  return menuAnimationComplete ? (
    <>
      <motion.div initial="hidden" animate={animationControls} variants={variants.container}>
        <ImageBlock>
          <img src={automotive1} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={automotive2} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={automotive3} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={automotive4} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={automotive5} onLoad={() => setImagesLoading((s) => s - 1)} />
          <img src={automotive6} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={automotive7} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
        <ImageBlock>
          <img src={automotive8} onLoad={() => setImagesLoading((s) => s - 1)} />
        </ImageBlock>
      </motion.div>
      {imagesLoading > 0 && <Loading />}
    </>
  ) : (
    <Loading />
  )
}

export default AutomotiveImages
