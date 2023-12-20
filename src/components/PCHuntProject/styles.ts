import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectContainer = styled.div`
  position: relative;
`
export const MockupContainer = styled(motion.div)`
  display: flex;
  padding: 200px 0;
  position: relative;
  overflow: hidden;
  width: 65%;
  margin: auto;
  ${theme.breakpoints.down('sm')} {
    width: 85%;
    padding: 100px 0;
  }
  & > .slide {
    position: absolute;
    top: 200px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: calc(100% - 400px);
    overflow: hidden;
    ${theme.breakpoints.down('sm')} {
      top: 100px;
      height: calc(100% - 200px);
    }
  }
`

export const IphoneContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  ${theme.breakpoints.down('sm')} {
    height: 60vh;
  }
  touch-action: none;
`
