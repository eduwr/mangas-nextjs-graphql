import { gql } from "apollo-server-micro";

export const mangaSchema = gql`
  enum Demographic {
    SHONEN
    KODOMO
    SHOJO
    SEINEN
    JOSEI
  }

  enum Category {
    ADVENTURE
    DARK_FANTASY
    ACTION
    SUPERNATURAL
    DRAMA
  }

  type Manga {
    id: ID!
    name: String!
    score: Float
    author: String!
    demographic: Demographic
    categories: [Category]!
  }

  input AddMangaInput {
    name: String!
    score: Float
    author: String!
    demographic: Demographic!
    categories: [Category]
  }

  type Query {
    mangas: [Manga]
    mangaById(id: ID!): Manga
  }

  type Mutation {
    createManga(input: AddMangaInput): Manga
  }
`;
