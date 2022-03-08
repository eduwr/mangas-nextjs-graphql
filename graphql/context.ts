import { NextApiRequest, NextApiResponse } from "next";
import { Category, Demographic } from "../types/mangas";
import type { AddMangaInput, Manga } from "../types/mangas";

let mangas: Manga[] = [
  {
    id: "1",
    name: "Jujutsu Kaisen",
    score: 8.88,
    author: "Gege Akutami",
    demographic: Demographic.SHONEN,
    categories: [
      Category.ADVENTURE,
      Category.DARK_FANTASY,
      Category.SUPERNATURAL,
    ],
  },
  {
    id: "2",
    name: "Kimetsu no Yaiba",
    score: 9.5,
    author: "Koyoharu Gotōge",
    demographic: Demographic.SHONEN,
    categories: [Category.ACTION, Category.ADVENTURE, Category.DARK_FANTASY],
  },
];

const db = {
  getMangas: async () => {
    return mangas;
  },
  findMangaById: async (id: string) => {
    const manga = mangas.find((manga) => manga.id === id);

    if (!manga) {
      throw new Error(`Manga with id ${id} not found!`);
    }

    return manga;
  },
  createManga: async (input: AddMangaInput) => {
    const id = (mangas.length + 1).toString();
    const mangaToAdd: Manga = {
      id,
      ...input,
      categories: input.categories ? input.categories : [],
    };
    mangas = [...mangas, mangaToAdd];

    return mangas[mangas.length - 1];
  },
};

export type Context = {
  db: typeof db;
};

export async function createContext(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Context> {
  return {
    db,
  };
}
