// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     unoptimized: true, // disable Next image optimization for Render
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;
