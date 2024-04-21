import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: 'y9y4lpo9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-11',
});
