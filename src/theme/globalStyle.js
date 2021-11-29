import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --default-font: 'Source Sans Pro', sans-serif;
  //--special-font: 'Playfair Display', serif;
  //--special-font: 'Poppins', sans-serif;
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
