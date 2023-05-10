import Link from "next/link";
import Header from "./Header";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
}

`

export default ({children}) => (
  <GlobalStyle>
    <Header />
    <h2 style={{backgroundColor:'tomato', width:"100vh", margin:"10px", padding:"10px"}}>{children}</h2>
    <footer> Powered Mirza Sahin</footer>

  </GlobalStyle>
);
