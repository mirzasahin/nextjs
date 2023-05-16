import Header from "./Header";
import { styled } from "styled-components";

const BodyDiv = styled.div`
width: 100%;
`;

const ContentDiv = styled.div`
margin-top: 20px;
justify-content: center;
display: flex;
`;


const Content = styled.h2`
  color: white;
  font-size: 15px;
  font-weight: 100;
  text-align: center;
  justify-content: center;
  width: 75%;
  color: white;
  opacity: 0.9;
`;
const Footer = styled.footer`
  font-size: 15px;
  color: white;
  position: fixed;
  bottom: 20px;
  width: 100%;
  text-align: center;
`;

export default ({ children }) => (
  <BodyDiv>
    <Header />
    <ContentDiv>
      <Content>{children}</Content>
    </ContentDiv>

    <Footer> Powered Mir Codes</Footer>
  </BodyDiv>
);
