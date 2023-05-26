/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
      NEXT_API_URL: process.env.NEXT_API_URL,
    },
    trailingSlash: true,
    swcMinify: false,
    images: {
      optimized: true,
    }
  };
  
  module.exports = nextConfig;
  