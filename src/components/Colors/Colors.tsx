import React, { useEffect, useRef } from 'react'
import { Color, ColorsContainer } from './styles'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import { ease } from '@src/helpers'

interface ColorsProps {
  colors: string[]
}

const Colors: React.FC<ColorsProps> = ({ colors }: ColorsProps) => {
  const scope = useRef(null)
  const isInView = useInView(scope, { margin: '-50px' })

  const colorAnimationControls = useAnimationControls()
  const textAnimationControls = useAnimationControls()

  const startAnimation = async () => {
    await colorAnimationControls.start((i) => ({ scale: 1, transition: { duration: 0.3, delay: i * 0.1 } }))
    colorAnimationControls.start((i) => ({ color: `#${colors[i]}`, transition: { duration: 1.5, ease: 'linear' } }))
    textAnimationControls.start({
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: { ease: ease.slideIn, duration: 1 }
    })
  }

  useEffect(
    () => {
      if (isInView) startAnimation()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isInView]
  )

  return (
    <ColorsContainer ref={scope}>
      {colors.map((color, i) => (
        <Color key={i} custom={i} initial={{ scale: 0 }} animate={colorAnimationControls}>
          <div>
            <motion.p initial={{ y: '100%', skewY: 7, opacity: 0 }} animate={textAnimationControls}>
              {color}
            </motion.p>
          </div>
        </Color>
      ))}
    </ColorsContainer>
  )
}

export default Colors
