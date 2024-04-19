import {SanityClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = SanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-11',
});

const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);

export default client;
