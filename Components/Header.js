import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  gap: 20px;

`;

const StyledLinkTop = styled(Link)`
  text-decoration: none;
  color: white;
  border: ${({ border }) => `${border}px`} solid yellow;
  font-size: ${({big}) => big ? "30px" : "20px" };

  cursor: pointer;
  &:hover{
    transition: 0.2s ease;
    text-decoration: underline;
  }
`;



export default () => (
  <HeaderDiv>
    <StyledLinkTop big href="/">Home Page</StyledLinkTop>
    <StyledLinkTop border={4} href="/about">About</StyledLinkTop>
  </HeaderDiv>
);
