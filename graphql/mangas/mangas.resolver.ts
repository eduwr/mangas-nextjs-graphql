import type { Context } from "../context";
import type { AddMangaInput } from "../../types/mangas";

export const mangasResolvers = {
  Query: {
    mangas: async (_parent: unknown, _args: unknown, ctx: Context) =>
      await ctx.db.getMangas(),
    mangaById: async (_parent: unknown, { id }: { id: string }, ctx: Context) =>
      await ctx.db.findMangaById(id),
  },
  Mutation: {
    createManga: async (
      _p: unknown,
      { input }: { input: AddMangaInput },
      ctx: Context
    ) => await ctx.db.createManga(input),
  },
};
