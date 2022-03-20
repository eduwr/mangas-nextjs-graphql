import { gql } from "graphql-request";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";

const MANGA_QUERY = gql`
  query Mangas($mangaId: ID!) {
    mangaById(id: $mangaId) {
      name
      author
      score
      demographic
    }
  }
`;

const Manga: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const variables = { mangaId: id };
  const { data, error } = useSWR([MANGA_QUERY, variables]);

  return (
    <div>
      {error && <span>Oops! Something went wrong</span>}

      {data?.mangaById && (
        <div>
          <h3>{data.mangaById.name}</h3>
          <p>Author: {data.mangaById.author}</p>
          <p>Score: {data.mangaById.score}</p>
          <p>Demographic: {data.mangaById.demographic}</p>
        </div>
      )}
    </div>
  );
};

export default Manga;
