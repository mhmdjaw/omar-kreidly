import styled from 'styled-components'

export const Block = styled.div`
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
