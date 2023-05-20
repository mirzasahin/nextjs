import Link from "next/link";
import styled from "styled-components";

const StyledLinkTop = styled(Link)`
  text-decoration: none;
  color: orange;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
  padding-top: 20px;
  padding-bottom: 30px;

  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;


export default ({ href, children}) => {
  return (
    <StyledLinkTop href={href}>
      {children}
    </StyledLinkTop>


  );
};
