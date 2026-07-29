/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel optimizations
  swcMinify: true,
  compress: true,
  
  // Image optimization
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // API proxy for development
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL 
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
          : 'http://localhost:5000/api/:path*',
      },
    ];
  },
  
  // Environment variables that are public
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  
  // Vercel-specific
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
