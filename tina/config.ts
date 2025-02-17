import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  search: {
    tina: {
      indexerToken: "036b51564f830955132ace5f6d3d3de356b4fe1b",
      stopwordLanguages: ["fra"],
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "dinos",
        label: "Dinos",
        path: "src/content/dinos",
        // for visual editing
        // ui: {
        //   router({ document }) {
        //     return `/dinos/${document._sys.filename}`;
        //   },
        // },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "datetime",
            name: "createdAt",
            label: "Date d'ajout",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "dinosaurs",
            label: "Dinosaures",
            list: true,
          },
          {
            type: "string",
            name: "tools",
            label: "Outils",
            list: true,
          },
          {
            type: "string",
            name: "colors",
            label: "Couleurs",
            list: true,
          },
        ],
      },
    ],
  },
});
