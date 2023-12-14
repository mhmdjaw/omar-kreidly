import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ColorsContainer = styled(motion.div)`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
  gap: 30px;
  ${theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(auto-fit, minmax(90px, 90px));
    gap: 20px;
  }
`

export const Color = motion(styled(Flex)`
  justify-content: center;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 7px solid;
  margin: 0 2%;
  font-size: 1.3rem;
  font-weight: 500;
  ${theme.breakpoints.down('sm')} {
    font-size: 0.8rem;
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  & > div {
    overflow: hidden;
    & > p {
      margin: 0;
    }
  }
`)
