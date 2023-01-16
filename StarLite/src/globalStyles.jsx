import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    border-style: none;
    text-decoration: none;
  }
  
  body{
    background: whitesmoke;
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;
