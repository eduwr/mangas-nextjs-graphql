import type { NextPage } from "next";
import { gql, request } from "graphql-request";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import { Manga } from "../types/mangas";

const fetcher = (query: string) => request("/api/graphql", query);

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
  const { data, error } = useSWR<FetchResponse>(MANGAS_QUERY, fetcher);

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
