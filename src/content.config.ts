import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resources = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/resources' }),
  schema: z.object({
    level: z.enum(['primary', 'secondary', 'aes']),
    classSlug: z.string(),
    subjectSlug: z.string(),
    type: z.enum(['notes', 'schemes', 'past-papers', 'holiday-packages', 'textbooks']),
    title: z.string(),
    examBoard: z.string().optional(),
    year: z.number().optional(),
    fileUrl: z.string().refine(
      (v) => v.startsWith('/') || /^https?:\/\//.test(v),
      { message: 'fileUrl must be a full https:// URL or a site-relative path starting with /' }
    ),
    fileSize: z.string().optional(),
    markingSchemeUrl: z.string().refine(
      (v) => v.startsWith('/') || /^https?:\/\//.test(v),
      { message: 'markingSchemeUrl must be a full https:// URL or a site-relative path starting with /' }
    ).optional(),
    markingSchemeSize: z.string().optional(),
    dateAdded: z.coerce.date(),
  }),
});

export const collections = { resources };
