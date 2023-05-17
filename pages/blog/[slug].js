import fs from 'fs';
import matter from 'gray-matter';
import { useRouter} from "next/router";
import md from 'markdown-it';
import Error from "next/error"
import Layout from "../../Components/Layout";


/* const data = [
  {
    slug: "gunluk-1",
    title:"Günlük 1",
    text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain.`,
  },

  {
    slug: "gunluk-2",
    title:"Günlük 2",
    text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `,
  },
]; */

export default ({frontmatter, content}) => {

  const {title, author, category, date, bannerImage, tags} = frontmatter

 /*  const router = useRouter()
  const { slug } = router.query

  let foundItem = data.find((dataItem) => dataItem.slug === slug)
  console.log(foundItem);

  if (!foundItem) {
    return <Error statusCode={404}/>
  }

  const goBack = () => {
    router.back();
  }; */

  return (
  <Layout>
    <img src={bannerImage}/>
        <h1>{title}</h1>
        <h2>{author} || {date}</h2>
        <h3>{category} || {tags && tags.join()}</h3>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
  </Layout>
  )
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}