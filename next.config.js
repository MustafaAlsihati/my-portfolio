const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  images: {
    domains: [
      'media-exp1.licdn.com',
      'www.nonceblox.com',
      'i0.wp.com',
      'firebasestorage.googleapis.com',
      'i.ibb.co',
    ],
  },
});
