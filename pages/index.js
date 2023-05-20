import Layout from "../Components/Layout";
import { styled } from 'styled-components';

const Title = styled.h1`
font-size: 30px;
-webkit-background-clip: text;
color: transparent;
background-image: linear-gradient(to right, purple, white );
font-family: Arial, Helvetica, sans-serif;
padding: 0;
margin: 0;
padding-bottom:10px;
`
  
export default function Index() {
  // console.log('ENV', process.env)
  return (
    <Layout>
    <Title>Hello World!</Title>
      {/* <div>{process.env.API_URL}</div> */}
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English.
    </Layout>
  );
}
