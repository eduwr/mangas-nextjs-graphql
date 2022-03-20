import type { NextPage } from "next";
import { gql } from "graphql-request";
import Link from "next/link";
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
      <ul>
        {data?.mangas.map((manga) => (
          <li key={manga.id}>
            <Link href={`/manga/${manga.id}`}>
              <a>
                <h3>{manga.name}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {error && <span>Oops! Something went wrong.</span>}
    </div>
  );
};

export default Home;
