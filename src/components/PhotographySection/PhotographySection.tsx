import React, { useState } from 'react'
import { PhotographySectionContainer } from './styles'
import portrait1 from '@src/assets/images/portraits/portrait1.jpg'
import nudes1 from '@src/assets/images/nudes/nudes1.jpg'
import documentary1 from '@src/assets/images/documentaries/documentary1.jpg'
import automotive1 from '@src/assets/images/automotives/automotive1.jpg'
import { Flex } from '@src/styles/global-styles'
import { motion, useAnimationControls } from 'framer-motion'
import { useMenuAnimation } from '@src/helpers'
import { variants } from './variants'
import { useMediaQuery } from 'react-responsive'
import theme from '@src/theme'
import { navigate } from 'gatsby'
import Loading from '../Loading'

const PhotographySection: React.FC = () => {
  const animationControls = useAnimationControls()
  const [imagesLoading, setImagesLoading] = useState(4)
  const [animationComplete, setAnimationComplete] = useState(false)
  const { menuAnimationComplete } = useMenuAnimation()

  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.md })

  if (imagesLoading === 0) {
    animationControls.start('visible')
    setImagesLoading(-1)
  }

  return menuAnimationComplete ? (
    <>
      <PhotographySectionContainer
        initial="hidden"
        animate={animationControls}
        variants={variants.container}
        animationComplete={animationComplete}
        column={isMobile}
      >
        <Flex>
          <Flex onClick={() => navigate('/work/photography/portrait')}>
            <motion.img src={portrait1} onLoad={() => setImagesLoading((s) => s - 1)} variants={variants.image} />
            <div className="overlay">
              <h1>Portrait</h1>
            </div>
            <motion.div className="cover" variants={variants.cover} />
          </Flex>
          <Flex>
            <motion.img src={nudes1} onLoad={() => setImagesLoading((s) => s - 1)} variants={variants.image} />
            <div className="overlay">
              <h1>Nudes</h1>
            </div>
            <motion.div className="cover" variants={variants.cover} />
          </Flex>
        </Flex>
        <Flex>
          <Flex>
            <motion.img src={documentary1} onLoad={() => setImagesLoading((s) => s - 1)} variants={variants.image} />
            <div className="overlay">
              <h1>Documentary</h1>
            </div>
            <motion.div className="cover" variants={variants.cover} />
          </Flex>
          <Flex>
            <motion.img src={automotive1} onLoad={() => setImagesLoading((s) => s - 1)} variants={variants.image} />
            <div className="overlay">
              <h1>Automotive</h1>
            </div>
            <motion.div
              className="cover"
              variants={variants.cover}
              onAnimationComplete={() => setAnimationComplete(true)}
            />
          </Flex>
        </Flex>
      </PhotographySectionContainer>
      {imagesLoading > 0 && <Loading />}
    </>
  ) : (
    <Loading />
  )
}

export default PhotographySection