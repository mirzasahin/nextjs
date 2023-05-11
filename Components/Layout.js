import Link from "next/link";
import Header from "./Header";
import { styled } from "styled-components";

const BodyDiv = styled.div`
font-size: 20px;
`

export default ({children}) => (
  <BodyDiv>
    <Header />
    <h2 style={{backgroundColor:'tomato', width:"100vh", margin:"10px", padding:"10px"}}>{children}</h2>
    <footer> Powered Mir Codes</footer>

  </BodyDiv>
);
