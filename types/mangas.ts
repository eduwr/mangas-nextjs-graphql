export enum Demographic {
  SHONEN = "SHONEN",
  KODOMO = "KODOMO",
  SHOJO = "SHOJO",
  SEINEN = "SEINEN",
  JOSEI = "JOSEI",
}

export enum Category {
  ADVENTURE = "ADVENTURE",
  DARK_FANTASY = "DARK_FANTASY",
  ACTION = "ACTION",
  SUPERNATURAL = "SUPERNATURAL",
  DRAMA = "DRAMA",
}

export interface Manga {
  id: string;
  name: string;
  score?: number;
  author: string;
  demographic: Demographic;
  categories: Category[];
}

export interface AddMangaInput {
  name: string;
  score?: number;
  author: string;
  demographic: Demographic;
  categories?: Category[];
}
