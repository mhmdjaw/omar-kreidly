import React from 'react'
import { HeroContainer, HeroContent, HeroImage, ScrollIndicator, ScrollIndicatorContainer, Title } from './styles'
import heroImage from '../../assets/images/omar-kreidly.jpg'
import { ease } from '../../helpers'
import useHero from './Hero.State'
import { motion } from 'framer-motion'
import ReactTextTransition from 'react-text-transition'

interface HeroProps {
  headerAnimationComplete: boolean
}

const Hero: React.FC<HeroProps> = ({ headerAnimationComplete }: HeroProps) => {
  const { showIndicator, titleControls, headlines, index } = useHero(headerAnimationComplete)

  return (
    <HeroContainer>
      {/* <StaticImage
        imgClassName="hero-img"
        src="../../assets/images/omar-kreidly.jpg"
        alt="omar-kreidly-hero-image"
        layout="fullWidth"
        placeholder="none"
        loading="eager"
        formats={["auto", "webp", "avif"]}
      /> */}
      {/* <HeroImage src={heroImage} alt="omar-kreidly-hero-image" /> */}
      <HeroContent column>
        <div />
        <Title>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            transition={{ ease: ease.slideIn, duration: 1 }}
            animate={titleControls}
          >
            <span>I&#8217;m a</span>{' '}
            <div>
              <span>UX/UI Designer</span>
              <div>
                <ReactTextTransition
                  // springConfig={{ mass: 1.5, tension: 200, friction: 15 }}
                  inline
                >
                  {headlines[index]}
                </ReactTextTransition>
              </div>
            </div>
          </motion.div>
        </Title>
        <div />
        {/* <ScrollIndicatorContainer>
          {showIndicator && (
            // <ScrollIndicator />
            <ScrollIndicator>
              <span></span>
              <span></span>
              <span></span>
            </ScrollIndicator>
          )}
        </ScrollIndicatorContainer> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
