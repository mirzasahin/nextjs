import Link from "next/link";
import Header from "./Header";
import { styled } from "styled-components";

const StyleHeader = styled(Header)`
background-color: pink;
`

export default ({children}) => (
  <div>
    <StyleHeader/>
    <h2 style={{backgroundColor:'tomato', width:"100vh", margin:"10px", padding:"10px"}}>{children}</h2>
    <footer> Powered Mirza Sahin</footer>

  </div>
);
