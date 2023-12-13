import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

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

interface ImageCoverProps {
  shadow?: boolean
}

export const ImageCover = styled(motion.div)<ImageCoverProps>`
  /* mix-blend-mode: difference; */
  position: absolute;
  height: calc(var(--vh, 1vh) * 85);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.background};
  transition: box-shadow 0.3s;
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 0 60px 50px #000;
      /* box-shadow: 0 0 60px #fff; */
    `}
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
        background: linear-gradient(to right, #fff 50%, #000 135%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`
