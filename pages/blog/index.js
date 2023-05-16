import Layout from "../../Components/Layout";
import { styled } from "styled-components";

const blogContents = [
  {
    title: "Günlük Yazı 1",
    content: "İçerik Kısmı 1",
  },
  {
    title: "Günlük Yazı 2",
    content: "İçerik Kısmı 2",
  },
];

const BlogDiv = styled.div`
text-align: center;
background-color: red;
padding: 10px;
`

export default function Blog () {
  return (
      <Layout title="blog">
        Bloglar
        <div>
          {blogContents.map((item, index) => (
            <BlogDiv key={index}>
              <h2>{item.title}</h2>
              <div>{item.content}</div>
            </BlogDiv>
          ))}
        </div>
      </Layout>
  );
};
