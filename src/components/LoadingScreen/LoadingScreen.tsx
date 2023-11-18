import React from 'react'
import { SecondaryLogo } from '../../assets/svg'
import { Overlay, LoadingContainer, SvgContainer } from './loading-screen-styles'
import useLoadingScreen from './LoadingScreen.State'

interface LoadingScreenProps {
  setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ setAnimationComplete }: LoadingScreenProps) => {
  const { svgVariants, overlayVertical, overlayHorizontal, overlay1Controls, overlay2Controls, overlay3Controls } =
    useLoadingScreen(setAnimationComplete)

  return (
    <LoadingContainer>
      <Overlay variants={overlayVertical} initial="hidden" animate={overlay1Controls} />
      <Overlay variants={overlayHorizontal} initial="hidden" animate={overlay2Controls} />
      <SvgContainer variants={svgVariants} initial="hidden" animate="visible">
        <SecondaryLogo />
      </SvgContainer>
      <Overlay variants={overlayHorizontal} initial="hidden" animate={overlay2Controls} />
      <Overlay variants={overlayVertical} initial="hidden" animate={overlay3Controls} />
    </LoadingContainer>
  )
}

export default LoadingScreen
