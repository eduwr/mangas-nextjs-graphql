import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import request from "graphql-request";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (query: string, variables) =>
          request("/api/graphql", query, variables),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
