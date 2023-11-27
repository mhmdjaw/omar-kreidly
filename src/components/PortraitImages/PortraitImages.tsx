import React, { useState } from 'react'
import Loading from '../Loading'
import { useMenuAnimation } from '@src/helpers'
import { motion, useAnimationControls } from 'framer-motion'
import { Block } from './styles'
import variants from './variants'

//images
import portrait1 from '@src/assets/images/portraits/portrait1.jpg'
import portrait2 from '@src/assets/images/portraits/portrait2.jpg'
import portrait3 from '@src/assets/images/portraits/portrait3.jpg'
import portrait4 from '@src/assets/images/portraits/portrait4.jpg'
import portrait5 from '@src/assets/images/portraits/portrait5.jpg'
import portrait6 from '@src/assets/images/portraits/portrait6.jpg'
import portrait7 from '@src/assets/images/portraits/portrait7.jpg'

const PortraitImages: React.FC = () => {
  const animationControls = useAnimationControls()
  const [imagesLoading, setImagesLoading] = useState(7)
  const { menuAnimationComplete } = useMenuAnimation()

  if (imagesLoading === 0) {
    animationControls.start('visible')
    setImagesLoading(-1)
  }

  return menuAnimationComplete ? (
    <>
      <motion.div initial="hidden" animate={animationControls} variants={variants.container}>
        <Block>
          <img src={portrait1} onLoad={() => setImagesLoading((s) => s - 1)} />
        </Block>
        <Block>
          <img src={portrait2} onLoad={() => setImagesLoading((s) => s - 1)} />
          <img src={portrait3} onLoad={() => setImagesLoading((s) => s - 1)} />
        </Block>
        <Block>
          <img src={portrait4} onLoad={() => setImagesLoading((s) => s - 1)} />
        </Block>
        <Block>
          <img src={portrait5} onLoad={() => setImagesLoading((s) => s - 1)} />
          <img src={portrait6} onLoad={() => setImagesLoading((s) => s - 1)} />
        </Block>
        <Block>
          <img src={portrait7} onLoad={() => setImagesLoading((s) => s - 1)} />
        </Block>
      </motion.div>
      {imagesLoading > 0 && <Loading />}
    </>
  ) : (
    <Loading />
  )
}

export default PortraitImages
