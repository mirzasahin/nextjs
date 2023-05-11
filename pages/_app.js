 import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
margin: 0;
padding: 0;
font-family: helvetica;
background-color: darkgray;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}