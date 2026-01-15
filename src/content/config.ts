import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        techStack: z.array(z.string()),
        features: z.array(z.string()).optional(),
        image: z.string().optional(),
        demoUrl: z.string().url().optional(),
        githubUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(0)
    })
});

export const collections = { projects };
