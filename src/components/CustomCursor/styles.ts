import styled, { css } from 'styled-components'

interface CursorProps {
  hovered: boolean
  hidden: boolean
}

export const Cursor = styled.div<CursorProps>`
  display: none;
  position: fixed;
  top: 400px;
  left: 400px;
  fill: #fff;
  width: 25px;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%) rotateY(0);
  transition:
    all 0.1s ease-out,
    transform 0.4s ease-out;
  pointer-events: none;
  z-index: 999;
  ${({ hovered }) =>
    hovered &&
    css`
      transform: translate(-50%, -50%) rotateY(180deg);
    `}
  ${({ hidden }) =>
    hidden &&
    css`
      visibility: hidden;
    `}
`
