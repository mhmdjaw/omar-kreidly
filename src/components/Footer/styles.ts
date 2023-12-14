import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const Block = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 50vw;
  background-color: ${(props) => props.theme.text};
  &:first-child {
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    right: 0;
    bottom: 0;
  }
`

export const FooterContent = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-evenly;
  transition: transform 0.1s;
`

export const FooterLogo = styled.div`
  display: flex;
  position: relative;
  width: 30%;
  transition: transform 0.5s;
  pointer-events: none;
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
  & > .move-up {
    transform: translateY(-20%);
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.text};
  border: none;
  border-radius: 50%;
  aspect-ratio: 1/1;
  position: absolute;
  width: 33vw;
  max-width: 90vmin;
  transform: scale(0);
  transition: transform 0.5s;
  &.shrink {
    width: 25vw;
  }
  ${theme.breakpoints.down('md')} {
    width: 330px;
    &.shrink {
      width: 220px;
    }
  }
  ${theme.breakpoints.down('sm')} {
    width: 220px;
  }
`
