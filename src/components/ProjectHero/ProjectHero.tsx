import React, { SVGProps, useState, useEffect } from 'react'
import { BlocksContainer, HeroContainer, HeroContent, HeroLogo, ScrollIndicator } from './styles'
import { MotionStyle, Variants, motion } from 'framer-motion'
import theme from '@src/theme'
import variants from './variants'
import { g_variants } from '@src/helpers'

interface ProjectHeroProps {
  logo: React.FC<SVGProps<SVGSVGElement> & { variants?: Variants; motionStyle?: MotionStyle }>
  shrink?: boolean
  thickStroke?: boolean
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ logo: Logo, shrink, thickStroke }: ProjectHeroProps) => {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    document.body.style.position = 'fixed'
    if (animationComplete) {
      document.body.style.overflowY = 'visible'
      document.body.style.position = 'relative'
    }
    return () => {
      document.body.style.overflowY = 'visible'
      document.body.style.position = 'relative'
    }
  }, [animationComplete])

  return (
    <HeroContainer initial="hidden" animate="visible">
      <BlocksContainer variants={variants.container} onAnimationComplete={() => setAnimationComplete(true)}>
        <motion.div variants={variants.block} />
        <motion.div variants={variants.block} />
        <motion.div variants={variants.block} />
      </BlocksContainer>
      <HeroContent column>
        {/* <div /> */}
        <HeroLogo className={shrink ? 'shrink' : undefined}>
          <Logo
            width="100%"
            variants={g_variants.pathVariants}
            motionStyle={{ stroke: theme.text, strokeWidth: thickStroke ? 3 : undefined }}
          />
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
