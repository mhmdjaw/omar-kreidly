import theme from '@src/theme'
import styled, { css } from 'styled-components'

interface ContainerProps {
  fluid?: boolean
}

export const Container = styled.div<ContainerProps>`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
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
