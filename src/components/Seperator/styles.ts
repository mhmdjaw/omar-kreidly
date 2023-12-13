import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SeparatorContainer = styled(motion(Flex))`
  margin: 150px 0;
  ${theme.breakpoints.down('sm')} {
    margin: 75px 0;
  }
`

export const Line = styled(motion.div)`
  height: 2px;
  background-color: ${(props) => props.theme.text};
  flex-grow: 1;
  &:first-child {
    margin-right: 30px;
  }
  &:last-child {
    margin-left: 30px;
  }
  ${theme.breakpoints.down('sm')} {
    &:first-child {
      margin-right: 20px;
    }
    &:last-child {
      margin-left: 20px;
    }
  }
`

export const LogoContainer = styled(motion.div)`
  position: relative;
  fill: ${(props) => props.theme.text};
  width: 30px;
  height: 33.6px;
  ${theme.breakpoints.down('sm')} {
    width: 25px;
    height: 28px;
  }
`

export const FirstLogo = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  /* transform: translate(20%, 20%); */
`

export const SecondLogo = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  /* transform: translate(-20%, -20%); */
`
