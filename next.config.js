/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',  // Google
      'avatars.githubusercontent.com',  // GitHub
      'githubusercontent.com',
      'avatar.vercel.sh',
      'res.cloudinary.com'
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 