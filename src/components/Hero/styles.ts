import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

export const HeroContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: hidden;
`

export const HeroImage = styled.img`
  position: absolute;
  height: calc(var(--vh, 1vh) * 85);
  width: auto;
  max-width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  object-fit: cover;
  object-position: center top;
  transform: translateX(7vw);
  overflow: visible;
`
export const ImageCover = styled(motion.div)`
  position: absolute;
  height: calc(var(--vh, 1vh) * 85);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.background};
`

export const HeroContent = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & > div:first-child {
    flex-basis: 50%;
  }
  & > div:last-child {
    flex-basis: 50%;
  }
`

export const Title = styled.h1`
  mix-blend-mode: difference;
  font-size: 4rem;
  margin: 0;
  overflow: hidden;
  padding: 15px 0;
  ${theme.breakpoints.down('lg')} {
    font-size: 3.1rem;
  }
  ${theme.breakpoints.down('md')} {
    font-size: 2.3rem;
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 1.4rem;
  }
  & > div {
    display: block;
    & > span:first-child {
      font-weight: 300;
    }
    & > div:last-child {
      display: inline-block;
      position: relative;
      font-weight: 700;
      & > span {
        color: transparent;
      }
      & div {
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(to right, #fff 50%, #000 120%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`

// const scrollAnimation = keyframes`
//   0% {
//     opacity: 0;
//   }
//   50% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//   }
// `

// export const ScrollIndicator = styled.div`
//   position: relative;
//   ${theme.breakpoints.down('md')} {
//     transform: scale(0.6);
//   }
//   & span {
//     position: absolute;
//     top: 0;
//     width: 24px;
//     height: 24px;
//     border-left: 1px solid #fff;
//     border-bottom: 1px solid #fff;
//     transform: rotate(-45deg) translate(150%, -150%);
//     animation: ${scrollAnimation} 2s infinite;
//     opacity: 0;
//     &:nth-of-type(1) {
//       animation-delay: 0s;
//     }
//     &:nth-of-type(2) {
//       top: 16px;
//       animation-delay: 0.15ss;
//     }
//     &:nth-of-type(3) {
//       top: 32px;
//       animation-delay: 0.3s;
//     }
//   }
// `

// export const ScrollIndicatorContainer = styled(Flex)`
//   flex-basis: 50%;
// `

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
// `;

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
//     content: "";
//     width: 10px;
//     height: 10px;
//     margin-left: -5px;
//     background-color: currentColor;
//     border-radius: 100%;
//     animation: ${scrollAnimation} 2s infinite;
//   }
//   ${theme.breakpoints.down("md")} {
//     transform: scale(0.6);
//   }
// `;
