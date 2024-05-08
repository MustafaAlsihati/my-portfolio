import data from '@/constants/data.json';
import { MetadataRoute } from 'next';

const { name } = data;

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#000000',
    background_color: '#000000',
    display: 'standalone',
    scope: 'https://mustafaalsihati.vercel.app',
    start_url: 'https://mustafaalsihati.vercel.app',
    name,
    short_name: name,
    description: `${name}'s portfolio`,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
