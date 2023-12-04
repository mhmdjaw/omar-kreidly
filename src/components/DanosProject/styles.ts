import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
`

export const PageContent = styled(motion.div)`
  /* transition: all 0.3s; */
`

export const ImgContainer = styled(motion.div)`
  display: flex;
  padding-top: 200px;
  position: relative;
  /* display: flex; */
  width: 100vw;
  overflow: hidden;
  & img {
    width: 100%;
    object-fit: cover;
    object-position: center center;
    /* flex-grow: 1; */
    overflow: hidden;
  }
`
