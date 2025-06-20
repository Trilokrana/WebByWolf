/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // <-- this is needed for App Router
  },
};

module.exports = nextConfig;
