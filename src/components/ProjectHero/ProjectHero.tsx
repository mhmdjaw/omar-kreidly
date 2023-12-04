import React, { SVGProps, useState, useEffect } from 'react'
import { BlocksContainer, HeroContainer, HeroContent, HeroLogo, ScrollIndicator } from './styles'
import { MotionStyle, Variants, motion } from 'framer-motion'
import theme from '@src/theme'
import variants from './variants'

interface ProjectHeroProps {
  logo: React.FC<SVGProps<SVGSVGElement> & { variants?: Variants; motionStyle?: MotionStyle }>
  shrink?: boolean
  onAnimationComplete: () => void
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ logo: Logo, shrink, onAnimationComplete }: ProjectHeroProps) => {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    if (animationComplete) {
      document.body.style.overflowY = 'visible'
    }
  }, [animationComplete])

  return (
    <HeroContainer initial="hidden" animate="visible">
      <BlocksContainer
        variants={variants.container}
        onAnimationComplete={() => {
          setAnimationComplete(true)
          onAnimationComplete()
        }}
      >
        <motion.div variants={variants.block} />
        <motion.div variants={variants.block} />
        <motion.div variants={variants.block} />
      </BlocksContainer>
      <HeroContent column>
        {/* <div /> */}
        <HeroLogo className={shrink ? 'shrink' : undefined}>
          <Logo width="100%" variants={variants.pathVariants} motionStyle={{ stroke: theme.text }} />
        </HeroLogo>
        {/* <ScrollIndicatorContainer> */}
        {/* {showIndicator && ( */}
        {/* <ScrollIndicator /> */}
        <ScrollIndicator visible={animationComplete}>
          <span></span>
          <span></span>
          <span></span>
        </ScrollIndicator>
        {/* )} */}
        {/* </ScrollIndicatorContainer> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default ProjectHero
