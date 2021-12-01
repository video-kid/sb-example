import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --default-font: 'Source Sans Pro', sans-serif;
  --special-font: 'Playfair Display', serif;
  --special-font-admin: 'Poppins', sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  html {
    font-size: 10px;
  }
  body {
    font-family: var(--default-font);
    margin: 0;    
    font-size: 1.4rem;
  }
`;

export default GlobalStyle;
