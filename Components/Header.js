import Link from "next/link";
import styled from "styled-components"

const HeaderDiv = styled.div`
background-color: pink;
`

export default () => (
  <HeaderDiv>
      <Link href="/">Ana Sayfa</Link>
      <Link href="/about">Hakkımızda</Link>
  </HeaderDiv>
);
