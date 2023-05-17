import Link from "next/link";
import Layout from "../../Components/Layout";
import { styled } from "styled-components";

const blogContents = [
  {
    href:"gunluk-1",
    title: "Günlük Yazı 1",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    href:"gunluk-2",
    title: "Günlük Yazı 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const BlogDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: grid;
  display: inline;
`;

const H1 = styled.h1`
margin: 0;
padding: 0;
`;

const Div = styled.div`
  display: grid;
  gap: 20px;
`;

const Title = styled.h1`
`;

const Button = styled(Link)`
color: white;
text-decoration: none;
display: inline;
&:hover{
  color: darkgray;
}
`;

export default function Blog() {
  return (
    <Layout title="blog">
      <Title>Bloglar</Title>
      <Div>
        {blogContents.map((item, index) => (
          <BlogDiv key={index}>
            <H1>{item.title}</H1>
            <p>{item.content}</p>
            <Button href={`/blog/${item.href}`}>Devamı..</Button>
          </BlogDiv>
        ))}
      </Div>
    </Layout>
  );
}
