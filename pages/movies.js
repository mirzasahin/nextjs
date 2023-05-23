import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import styled from "styled-components";
import Image from "next/image";


const MovieCard = styled.div`
  display: grid;
  & b {
    padding-top: 5px;
  }
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-center;
  justify-items: center;
`;

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("Render oldu");
    fetch("https://api.sampleapis.com/movies/animation")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <Layout>
      <MovieList>
        {movies.map((item) => (
          <MovieCard>
            <Image alt="image" key={item.id} width={300} height={400} src={item.posterURL} />
            <b >
              {item.title} - {item.id}
            </b>
          </MovieCard>
        ))}
      </MovieList>
    </Layout>
  );
}
