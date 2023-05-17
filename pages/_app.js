 import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
margin: 0;
padding: 0;
font-family: helvetica;
background-color: rgba(0, 0, 0, 0.8);
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