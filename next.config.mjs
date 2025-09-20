/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui.shadcn.com',
        port: '',
        pathname: '/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'greengo-api-production.up.railway.app',
        port: '',
        pathname: '/upload/**',
      },
    ],
  },
};

export default nextConfig;
