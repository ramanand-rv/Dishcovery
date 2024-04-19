import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-11',
});
