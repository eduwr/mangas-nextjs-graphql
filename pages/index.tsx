import type { NextPage } from "next";
import { gql } from "graphql-request";

import useSWR from "swr";
import { Manga } from "../types/mangas";

const MANGAS_QUERY = gql`
  query Mangas {
    mangas {
      id
      name
    }
  }
`;

type FetchResponse = {
  mangas: Manga[];
};
const Home: NextPage = () => {
  const { data, error } = useSWR<FetchResponse>(MANGAS_QUERY);

  return (
    <div>
      {data?.mangas.map((manga) => (
        <div key={manga.id}>
          <h3>{manga.name}</h3>
        </div>
      ))}
      {error && <span>Oops! Something went wrong.</span>}
    </div>
  );
};

export default Home;
