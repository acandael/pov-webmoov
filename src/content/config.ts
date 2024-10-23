// 1. Import utilities from 'astro:content;
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { format } from "date-fns";
import { string } from "zod";

// 2. Define your colliection(s)
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    lang: string(),
    author: z.string(),
    date: z.string().transform((str) => format(new Date(str), "d MMMM, yyyy")),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string(),
    description: z.string(),
    translation: z.string(),
  }),
});

// 3. Export a single 'collections' object to register your collection(s)
// This key should match your collection directory name in 'src/content'
export const collections = {
  posts: postsCollection,
};
