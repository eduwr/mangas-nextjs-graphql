import { makeExecutableSchema } from "@graphql-tools/schema";
import { mangasResolvers } from "./mangas/mangas.resolver";
import { mangaSchema } from "./mangas/mangas.schema";

const schemas = [mangaSchema];
const resolvers = [mangasResolvers];

export const schema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers: resolvers,
});
