import React, { useState } from 'react'
import { Block, SectionTitle, WorkContainer } from './styles'
import variants from './variants'
import { Flex } from '@src/styles/global-styles'
import { motion, useAnimation } from 'framer-motion'
import { navigate } from 'gatsby'

const WorkSection: React.FC = () => {
  const titleControls = useAnimation()
  const [inverted, setInverted] = useState(false)
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false)

  const startTitleAnimation = () => {
    titleControls.start('visible')
  }

  return (
    <WorkContainer initial="hidden" animate="visible">
      <Block
        variants={variants.block}
        onAnimationComplete={startTitleAnimation}
        onMouseOver={() => {
          titleAnimationComplete && setInverted(false)
        }}
        invert={inverted}
        addTransition={titleAnimationComplete}
        onClick={() => navigate('/work/photography')}
      >
        <Flex>
          <SectionTitle>
            <motion.div
              variants={variants.title}
              initial="hidden"
              animate={titleControls}
              onAnimationComplete={() => setTitleAnimationComplete(true)}
            >
              Photography
            </motion.div>
          </SectionTitle>
        </Flex>
      </Block>
      <Block
        variants={variants.block}
        onMouseMove={() => {
          titleAnimationComplete && setInverted(true)
        }}
        invert={inverted}
        addTransition={titleAnimationComplete}
        onClick={() => navigate('/work/design')}
      >
        <Flex>
          <SectionTitle>
            <motion.div variants={variants.title} initial="hidden" animate={titleControls}>
              UI/UX Design
            </motion.div>
          </SectionTitle>
        </Flex>
      </Block>
    </WorkContainer>
  )
}

export default WorkSection
