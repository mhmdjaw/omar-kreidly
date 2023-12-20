import { Flex } from '@src/styles/global-styles'
import theme from '@src/theme'
import styled from 'styled-components'

export const Browser = styled(Flex)`
  background-color: rgba(230, 230, 230, 0.25);
  box-shadow:
    0 0 1px 2px rgba(255, 255, 255, 0.25),
    0px 50px 100px -20px rgba(255, 255, 255, 0.15);
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 200px;
  ${theme.breakpoints.down('sm')} {
    margin-bottom: 100px;
  }
`

export const Header = styled(Flex)`
  height: 0px;
  padding: 33px 20px;
  width: 100%;

  & .control {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: 6px;
    display: flex;
    background-color: gold;
    &:first-child {
      background-color: red;
    }
    &:last-child {
      background-color: #0bb502;
    }
  }

  & .url {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: rgba(230, 230, 230, 0.15);
    flex-grow: 1;
    border-radius: 99px;
    color: white;
    text-decoration: none;
    padding-left: 16px;
    margin-left: 6px;
    transition: all 0.2s;
    &:hover {
      background-color: rgba(230, 230, 230, 0.25);
    }
  }

  ${theme.breakpoints.down('sm')} {
    padding: 25px 17px;
    & .control {
      width: 12px;
      height: 12px;
      margin: 4px;
    }
    & .url {
      height: 35px;
      padding-left: 13px;
      margin-left: 4px;
    }
  }
`

export const LogoContainer = styled(Flex)`
  width: 1rem;
  fill: #009688;
  margin-right: 8px;
  ${theme.breakpoints.down('sm')} {
    margin-right: 5px;
  }
`

export const Content = styled(Flex)`
  padding: 0 14px 14px;
  position: relative;
  width: 100%;
  overflow: hidden;
  & .media {
    width: 100%;
    object-fit: cover;
    object-position: center center;
    flex-grow: 1;
    overflow: hidden;
    border-radius: 12px;
  }
  ${theme.breakpoints.down('sm')} {
    padding: 0 10px 10px;
  }
`
