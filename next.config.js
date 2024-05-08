/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'nonceblox.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'media-exp1.licdn.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'caterit.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
      },
    ],
  },
};
