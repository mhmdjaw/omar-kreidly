import theme from '@src/theme'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface ContainerProps {
  fluid?: boolean
  disableFlexGrow?: boolean
  fullWidth?: boolean
  mt?: boolean
  mb?: boolean
}

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  ${theme.breakpoints.up('sm')} {
    padding: 0 65px;
  }
  ${theme.breakpoints.up('md')} {
    max-width: 960px;
  }
  ${theme.breakpoints.up('lg')} {
    max-width: 1244px;
  }

  ${({ fluid }) =>
    fluid &&
    css`
      /* padding: 0; */
      margin: 0;
      max-width: 100% !important;
    `}

  ${({ disableFlexGrow }) =>
    disableFlexGrow &&
    css`
      flex-grow: 0;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ mt }) =>
    mt &&
    css`
      margin-top: 200px;
      ${theme.breakpoints.down('sm')} {
        margin-top: 100px;
      }
    `}

    ${({ mb }) =>
    mb &&
    css`
      margin-bottom: 200px;
      ${theme.breakpoints.down('sm')} {
        margin-bottom: 100px;
      }
    `}
`

interface FlexProps {
  spaceBetween?: boolean
  alignTop?: boolean
  flexEnd?: boolean
  column?: boolean
  noHeight?: boolean
}

export const Flex = styled.div<FlexProps>`
  position: relative;
  display: flex;
  align-items: center;

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${({ alignTop }) =>
    alignTop &&
    css`
      align-items: flex-start;
    `}

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}

  ${({ noHeight }) =>
    noHeight &&
    css`
      height: 0;
    `}
`

export const ImageBlock = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  overflow: hidden;
  & img {
    width: 100%;
    object-fit: cover;
    object-position: center center;
    flex-grow: 1;
    overflow: hidden;
  }
`

export const ProjectContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1920px;
`

export const SectionTitle = styled(motion.h2)`
  display: inline-block;
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 100px;
  ${theme.breakpoints.down('sm')} {
    margin-bottom: 50px;
    font-size: 2.5rem;
  }
`

export const AboutText = styled(motion.h3)`
  margin: 0;
  font-weight: 500;
  line-height: 1.7;
  font-size: 1.7rem;
  text-align: justify;
  ${theme.breakpoints.down('lg')} {
    font-size: 1.3rem;
  }
  ${theme.breakpoints.down('md')} {
    font-size: 1.1rem;
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 1rem;
  }
`

export const Wireframes = styled(motion(Flex))`
  &.first {
    margin-bottom: 200px;
    ${theme.breakpoints.down('sm')} {
      margin-bottom: 100px;
    }
  }
  & > div {
    display: flex;
    flex-grow: 1;
    &:first-child {
      margin-right: 20%;
    }
  }
`
