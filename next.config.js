/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com"],
    unoptimized: true,
  },
  async redirects() {
    return [];
  },
};
