import React from 'react'
import {
  HeroContainer,
  HeroContent,
  HeroImage,
  ImageCover,
  // ScrollIndicator,
  // ScrollIndicatorContainer,
  Title
} from './styles'
import heroImage from '@src/assets/images/omar-kreidly.png'
import useHero from './Hero.State'
import { motion } from 'framer-motion'
import ReactTextTransition from 'react-text-transition'
import { ease } from '@src/helpers'
import variants from './variants'

interface HeroProps {
  headerAnimationComplete: boolean
}

const Hero: React.FC<HeroProps> = ({ headerAnimationComplete }: HeroProps) => {
  const { titleControls, coverControls, headlines, index, imageLoaded, setImageLoaded } =
    useHero(headerAnimationComplete)

  return (
    <HeroContainer>
      <HeroImage src={heroImage} alt="omar-kreidly-hero-image" onLoad={() => setImageLoaded(true)} />
      <ImageCover variants={variants.cover} initial="hidden" animate={coverControls} shadow={headerAnimationComplete} />
      <HeroContent column>
        <div />
        <Title>
          <motion.div
            initial={{ y: '100%', opacity: 0, skewY: 7 }}
            transition={{ ease: ease.slideIn, duration: 1 }}
            animate={titleControls}
            onAnimationComplete={() => imageLoaded && coverControls.start('visible')}
          >
            <span>I&#8217;m a</span>{' '}
            <div>
              <span>UX/UI Designer</span>
              <div>
                <ReactTextTransition inline>{headlines[index]}</ReactTextTransition>
              </div>
            </div>
          </motion.div>
        </Title>
        <div />
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
