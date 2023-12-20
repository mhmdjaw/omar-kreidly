import React, { useState } from 'react'
import { Block, LogoContainer, DesignContainer } from './styles'
import variants from './variants'
import { Flex } from '@src/styles/global-styles'
import { useAnimation } from 'framer-motion'
import { navigate } from 'gatsby'
import { DanosLogo, LunaLogo, PCHuntLogo } from '@src/assets/svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@src/theme'
import { g_variants } from '@src/helpers'

const DesignSection: React.FC = () => {
  const svgControls = useAnimation()
  const [svgAnimationComplete, setSVGAnimationComplete] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.md })

  const startSVGAnimation = () => {
    svgControls.start('visible')
  }

  return (
    <DesignContainer initial="hidden" animate="visible" $column={isMobile} $addBlur={svgAnimationComplete}>
      <Flex onClick={() => svgAnimationComplete && navigate('/work/design/danos')}>
        <Block className="first" variants={variants.block} onAnimationComplete={startSVGAnimation} />
        <LogoContainer initial="hidden" animate={svgControls}>
          <DanosLogo width="100%" variants={g_variants.pathVariants} motionStyle={{ stroke: theme.text }} />
        </LogoContainer>
      </Flex>
      <Flex>
        <LogoContainer className="luna" initial="hidden" animate={svgControls}>
          <LunaLogo width="100%" variants={g_variants.pathVariants} motionStyle={{ stroke: theme.text }} />
        </LogoContainer>
      </Flex>
      <Flex onClick={() => svgAnimationComplete && navigate('/work/design/pchunt')}>
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
            variants={g_variants.pathVariants}
            motionStyle={{ stroke: '#ffea00', strokeWidth: 4 }}
          />
        </LogoContainer>
      </Flex>
    </DesignContainer>
  )
}

export default DesignSection
