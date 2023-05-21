import styled from "styled-components";
import Button from "./Button";

const HeaderDiv = styled.div`
  display: flex;
  gap: 20px;
  display: flex;
  justify-content: center;
`;



export default () => (
  <HeaderDiv>
      <Button href="/">Home Page</Button>
      <Button href="/about">About</Button>
      <Button href="/works">Works</Button>
      <Button href="/movies">Movies</Button>
      <Button href="/blog">Blog</Button>
      <Button href="/contact">Contact</Button>
  </HeaderDiv>
);
