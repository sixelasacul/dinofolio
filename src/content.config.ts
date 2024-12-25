import {defineCollection, z} from 'astro:content'
import {glob} from 'astro/loaders'

const dinos = defineCollection({
  loader: glob({pattern: "*.md", base: "./src/dinos"}),
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string().optional(),
    createdAt: z.coerce.date(),
    image: image(),
    dinosaurs: z.array(z.string()),
    colors: z.array(z.string()),
    tools: z.array(z.string()),
  })
})

export const collections = {
  dinos
}
