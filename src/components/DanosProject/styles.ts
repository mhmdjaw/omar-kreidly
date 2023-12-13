import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectContainer = styled.div`
  position: relative;
`

export const ImgContainer = styled(motion.div)`
  display: flex;
  padding-top: 200px;
  position: relative;
  overflow: hidden;
  ${theme.breakpoints.down('sm')} {
    padding-top: 100px;
  }
`

export const MockupSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #0372d9;
  & > .bottom {
    margin-top: 200px;
    ${theme.breakpoints.down('sm')} {
      margin-top: 100px;
    }
  }
`

export const MobileMockups = styled(motion(Flex))`
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
`
