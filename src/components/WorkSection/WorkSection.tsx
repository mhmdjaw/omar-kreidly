import React, { useState } from 'react'
import { Overlay, SectionTitle, WorkContainer } from './styles'
import variants from './variants'
import { Flex } from '@src/styles/global-styles'
import { motion, useAnimation } from 'framer-motion'

const WorkSection: React.FC = () => {
  const titleControls = useAnimation()
  const [inverted, setInverted] = useState(false)
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false)

  const startTitleAnimation = () => {
    titleControls.start('visible')
  }

  return (
    <WorkContainer initial="hidden" animate="visible">
      <Overlay
        variants={variants.overlay}
        onAnimationComplete={() => startTitleAnimation()}
        onMouseOver={() => {
          titleAnimationComplete && setInverted(false)
        }}
        invert={inverted}
        addTransition={titleAnimationComplete}
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
      </Overlay>
      <Overlay
        variants={variants.overlay}
        onMouseMove={() => {
          titleAnimationComplete && setInverted(true)
        }}
        invert={inverted}
        addTransition={titleAnimationComplete}
      >
        <Flex>
          <SectionTitle>
            <motion.div variants={variants.title} initial="hidden" animate={titleControls}>
              UX/UI Design
            </motion.div>
          </SectionTitle>
        </Flex>
      </Overlay>
    </WorkContainer>
  )
}

export default WorkSection
