// src/content/config.ts
import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    projectURL: z.string().url().optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    url: z.string().url(),
  }),
});

export const collections = {
  "case-studies": caseStudies,
  posts,
};
