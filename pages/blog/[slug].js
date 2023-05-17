import { useRouter} from "next/router";
import Error from "next/error"
import Layout from "../../Components/Layout";

const data = [
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
];

export default () => {
  const router = useRouter()
  const { slug } = router.query

  let foundItem = data.find((dataItem) => dataItem.slug === slug)
  console.log(foundItem);

  if (!foundItem) {
    return <Error statusCode={404}/>
  }

  const goBack = () => {
    router.back();
  };

  return (
  <Layout>
    <h1>{foundItem?.title}</h1>
    <p>{foundItem?.text}</p>
    <button onClick={goBack}>Geri</button>
  </Layout>
  )
}
