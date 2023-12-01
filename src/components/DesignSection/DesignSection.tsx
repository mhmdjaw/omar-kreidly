import React, { useState } from 'react'
import { Block, LogoContainer, DesignContainer } from './styles'
import variants from './variants'
import { Flex } from '@src/styles/global-styles'
import { useAnimation } from 'framer-motion'
import { navigate } from 'gatsby'
import { DanosLogo, LunaLogo, PCHuntLogo } from '@src/assets/svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@src/theme'

const DesignSection: React.FC = () => {
  const svgControls = useAnimation()
  const [svgAnimationComplete, setSVGAnimationComplete] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.md })

  const startSVGAnimation = () => {
    svgControls.start('visible')
  }

  return (
    <DesignContainer initial="hidden" animate="visible" column={isMobile} addBlur={svgAnimationComplete}>
      <Flex>
        <Block
          className="first"
          variants={variants.block}
          onAnimationComplete={startSVGAnimation}
          // onClick={() => navigate('/work/photography')}
        />
        <LogoContainer initial="hidden" animate={svgControls}>
          <DanosLogo width="100%" variants={variants.pathVariants} motionStyle={{ stroke: theme.text }} />
        </LogoContainer>
      </Flex>
      <Flex>
        <Block
          className="middle"
          variants={variants.block}
          // onClick={() => navigate('/work/photography')}
        />
        <LogoContainer className="luna" initial="hidden" animate={svgControls}>
          <LunaLogo width="100%" variants={variants.pathVariants} motionStyle={{ stroke: theme.text }} />
        </LogoContainer>
      </Flex>
      <Flex>
        <Block
          className="last"
          variants={variants.block}
          // onClick={() => navigate('/work/photography')}
        />
        <LogoContainer
          className="hunt"
          initial="hidden"
          animate={svgControls}
          onAnimationComplete={() => setSVGAnimationComplete(true)}
        >
          <PCHuntLogo
            width="100%"
            variants={variants.pathVariants}
            motionStyle={{ stroke: '#ffea00', strokeWidth: 4 }}
          />
        </LogoContainer>
      </Flex>
    </DesignContainer>
  )
}

export default DesignSection
