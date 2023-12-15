import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import { motion } from 'framer-motion'
import { GatsbyLinkProps, Link } from 'gatsby'
import styled, { IStyledComponent, css } from 'styled-components'

export const NotFoundContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  overflow: hidden;
`

export const Content = motion(styled(Flex)`
  justify-content: center;
  height: 100%;
  position: relative;
  text-align: center;
`)

export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 8rem;
  margin-bottom: 50px;
  ${theme.breakpoints.down('md')} {
    font-size: 5rem;
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 3rem;
  }
`

export const Text = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 1.7;
  font-size: 1.7rem;
  margin-bottom: 50px;
  ${theme.breakpoints.down('lg')} {
    /* font-size: 1.3rem; */
  }
  ${theme.breakpoints.down('md')} {
    font-size: 1.1rem;
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 1rem;
  }
`

interface HomeButtonProps extends Omit<GatsbyLinkProps<object>, 'ref'> {
  $fill?: boolean
}

export const HomeButton = styled(Link)<HomeButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 0;
  background-color: transparent;
  box-shadow: 0 0 0 4px inset;
  color: ${(props) => props.theme.text};
  border-radius: 99px 0 99px 0;
  padding: 0;
  min-height: 76px;
  width: 186px;
  font-weight: 600;
  font-size: 1rem;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    border-radius: 99px 0 99px 0;
    background-color: ${(props) => props.theme.text};
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    overflow: hidden;
    transition: width 0.7s;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
  ${({ $fill }) =>
    $fill &&
    css`
      &::before {
        width: 100%;
      }
    `}
  & p {
    mix-blend-mode: difference;
  }
` as IStyledComponent<'web', HomeButtonProps>
