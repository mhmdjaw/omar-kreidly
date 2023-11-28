import { motion } from 'framer-motion'
import styled from 'styled-components'

export const NudeImagesContainer = styled(motion.div)`
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  & > div {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  & img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    overflow: hidden;
    &.bottom {
      object-position: center bottom;
    }
  }
  & > img {
    opacity: 0;
  }
`
