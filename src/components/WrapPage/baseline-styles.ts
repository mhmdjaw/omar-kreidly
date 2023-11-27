import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
    scroll-behavior: smooth;
  }

  body {
    font-family: montserrat;
    /* height: calc(var(--vh, 1vh) * 100); */
    /* overscroll-behavior: none;
    overflow-x: hidden; */
  }

  html, body {
    background-color: ${(props) => props.theme.background};
    visibility: hidden;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    -webkit-tap-highlight-color: "transparent";
    text-decoration: none;
    color: ${(props) => props.theme.text}
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  main {
    height: calc(var(--vh, 1vh) * 100);
  }
`

export default GlobalStyle
