import fs from 'fs';
import matter from 'gray-matter';
import Link from "next/link";
import Layout from "../../Components/Layout";
import { styled } from "styled-components";

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


export default ({posts}) => {
  return (
    <Layout title="blog">
      <Title>Bloglar</Title>
      <Div>
      {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, author, category, date, bannerImage, tags} = frontmatter

            //JSX for individual blog listing
            return <article key={title}>
                <Button href={`/blog/${slug}`}>
                    <h1>{title}</h1>
                </Button>
                <h3>{author}</h3>
                <h3>{date}</h3>
            </article>
        })}
      </Div>
    </Layout>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps(){
  // get list of files from the posts folder
  const files = fs.readdirSync('posts');

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
  });

  // Return the pages static props
  return {
      props: {
        posts,
      },
  };
}
