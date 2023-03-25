/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
