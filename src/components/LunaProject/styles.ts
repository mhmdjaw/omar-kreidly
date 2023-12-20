import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectContainer = styled.div`
  position: relative;
`

export const ImgContainer = styled(motion.div)`
  display: flex;
  position: relative;
  overflow: hidden;
`

export const MockupSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 200px;
  ${theme.breakpoints.down('sm')} {
    padding-bottom: 100px;
  }
  position: relative;
  z-index: 39;
  background-color: ${(props) => props.theme.background};
`

export const MobileMockups = motion(styled(Flex)`
  margin-top: 200px;
  justify-content: space-evenly;
  & > div {
    display: flex;
    width: 25%;
  }
  ${theme.breakpoints.down('sm')} {
    margin-top: 100px;
    & > div {
      width: 30vw;
    }
  }
`)

export const Sections = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  z-index: 39;
`
