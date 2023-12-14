import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled, { css, keyframes } from 'styled-components'

export const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  z-index: 49;
  background-color: ${(props) => props.theme.background};
`
export const HeroContent = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  mix-blend-mode: difference;
  /* & > div:first-child {
    flex-basis: 50%;
  }
  & > div:last-child {
    flex-basis: 50%;
  } */
  justify-content: space-evenly;
`
export const HeroLogo = styled.div`
  display: flex;
  position: relative;
  fill: ${(props) => props.theme.text};
  width: 30%;
  &.shrink {
    width: 15%;
  }
  ${theme.breakpoints.down('md')} {
    width: 300px;
    &.shrink {
      width: 130px;
    }
  }
  ${theme.breakpoints.down('sm')} {
    width: 200px;
  }
`

export const BlocksContainer = motion(styled(Flex)`
  position: relative;
  height: 100vh;
  overflow: hidden;
  align-items: flex-start;
  & > div {
    position: relative;
    flex-grow: 1;
    flex-basis: 0;
    overflow: hidden;
    height: 100vh;
    background-color: ${(props) => props.theme.text};
  }
`)

// export const Block = styled(motion.div)`
//   flex-grow: 1;
//   flex-basis: 0;
//   position: absolute;
//   height: calc(var(--vh, 1vh) * 100);
//   width: 100%;
//   top: 0;
//   left: 0;
//   background-color: ${(props) => props.theme.text};
// `

const scrollAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

interface ScrollIndicatorProps {
  $visible?: boolean
}

export const ScrollIndicator = styled.div<ScrollIndicatorProps>`
  opacity: 0;
  position: relative;
  ${theme.breakpoints.down('md')} {
    transform: scale(0.6);
  }
  & span {
    position: absolute;
    top: 0;
    width: 24px;
    height: 24px;
    border-left: 2px solid ${(props) => props.theme.text};
    border-bottom: 2px solid ${(props) => props.theme.text};
    transform: rotate(-45deg) translate(150%, -150%);
    animation: ${scrollAnimation} 2s infinite;
    opacity: 0;
    &:nth-of-type(1) {
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      top: 16px;
      animation-delay: 0.15ss;
    }
    &:nth-of-type(3) {
      top: 32px;
      animation-delay: 0.3s;
    }
  }
  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transition: opacity 1s;
    `}
`

export const ScrollIndicatorContainer = styled(Flex)`
  flex-basis: 50%;
`

// const scrollAnimation = keyframes`
//   0% {
//     transform: translate(0, 0);
//     opacity: 0;
//   }
//   40% {
//     opacity: 1;
//   }
//   80% {
//     transform: translate(0, 20px);
//     opacity: 0;
//   }
//   100% {
//     opacity: 0;
//   }
// `

// export const ScrollIndicator = styled.span`
//   position: relative;
//   width: 30px;
//   height: 50px;
//   border: 2px solid;
//   border-radius: 50px;
//   &::before {
//     position: absolute;
//     top: 8px;
//     left: 50%;
//     content: '';
//     width: 10px;
//     height: 10px;
//     margin-left: -5px;
//     background-color: currentColor;
//     border-radius: 100%;
//     animation: ${scrollAnimation} 2s infinite;
//   }
//   ${theme.breakpoints.down('md')} {
//     transform: scale(0.6);
//   }
// `
