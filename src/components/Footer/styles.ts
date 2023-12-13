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
`

export const FooterLogo = styled.div`
  display: flex;
  position: relative;
  fill: ${(props) => props.theme.background};
  ${theme.breakpoints.up('sm')} {
    width: 30%;
    &.shrink {
      width: 15%;
    }
  }
  ${theme.breakpoints.down('md')} {
    width: 200px;
    &.shrink {
      width: 130px;
    }
  }
`
