import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { copyPastePlugin } from '@superside-oss/sanity-plugin-copy-paste'

export default defineConfig({
  name: 'default',
  title: 'Sanity_Portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
 

  plugins: [deskTool(), visionTool(), copyPastePlugin()],

  schema: {
    types: schemaTypes,
  },
})
