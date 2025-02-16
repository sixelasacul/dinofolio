import { defineCollection, z } from "astro:content";
import client from "~tina/client";

const dinos = defineCollection({
  async loader() {
    const response = await client.queries.dinosConnection();
    const dinosData = response.data.dinosConnection.edges;
    const dinos = dinosData.map((data) => ({
      ...data.node,
      id: data?.node?._sys.filename,
    }));
    return dinos;
  },
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      createdAt: z.coerce.date(),
      image: z.string(),
      dinosaurs: z.array(z.string()),
      colors: z.array(z.string()),
      tools: z.array(z.string()),
    }),
});

export const collections = {
  dinos,
};
