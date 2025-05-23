/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for proper static hosting
  trailingSlash: true,
  // Disable server-side features
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 