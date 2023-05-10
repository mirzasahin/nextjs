import Link from "next/link";
import styled from "styled-components"



export default () => (
  <div>
    <div>
      <Link href="/">Ana Sayfa</Link>
    </div>

    <div>
      <Link href="/about">Hakkımızda</Link>
    </div>
  </div>
);
