/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/vector-art',
        destination: '/services/vector-art',
        permanent: true, // 301
      },
      {
        source: '/shop',
        destination: '/place-an-order',
        permanent: true, // 301
      },
      {
        source: '/contact',
        destination: '/place-an-order',
        permanent: true, // 301
      },
      {
        source: '/order',
        destination: '/place-an-order',
        permanent: true, // 301
      },
      {
        source: '/services/digitizing',
        destination: '/services/embroidery-digitizing',
        permanent: true, // 301
      },
      {
        source: '/digitizing',
        destination: '/services/embroidery-digitizing',
        permanent: true, // 301
      },
      {
        source: '/index',
        destination: '/',
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
