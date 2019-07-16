import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');
  html {
    min-height: 100%;
    height: 100%;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    body {
        min-height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        *, ::after, ::before{
            box-sizing: border-box;
        }
    }
    a {
      text-decoration-line: none;
      color: white;
      outline: none;
    } 
  }
`
