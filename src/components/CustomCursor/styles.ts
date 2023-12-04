import styled, { css } from 'styled-components'

interface CursorProps {
  hovered: boolean
  hidden: boolean
}

export const CursorContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  fill: #fff;
  pointer-events: none;
  z-index: 999;
  transition: transform 0.06s ease-out;
`

export const Cursor = styled.div<CursorProps>`
  display: flex;
  width: 25px;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%) rotateY(0) scale(1);
  transition: transform 0.4s ease-out;
  pointer-events: none;
  ${({ hovered }) =>
    hovered &&
    css`
      transform: translate(-50%, -50%) rotateY(180deg);
    `}
  ${({ hidden }) =>
    hidden &&
    css`
      transform: translate(-50%, -50%) scale(0.01);
      transition:
        all 0.06s ease-out,
        transform 0.3s ease-out;
    `}
`
