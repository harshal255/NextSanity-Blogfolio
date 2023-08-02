/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PROJECT_ID: process.env.NEXT_SANITY_PROJECT_ID,
    EMAILJS_SERVICE_KEY: process.env.NEXT_EMAILJS_SERVICE_KEY,
    EMAILJS_TEMPLETE_KEY: process.env.NEXT_EMAILJS_TEMPLETE_KEY,
    EMAILJS_PUBLIC_KEY: process.env.NEXT_EMAILJS_PUBLIC_KEY
  },
  images: {
    domains: [
      "cdn.sanity.io",
    ],
  },

}

module.exports = nextConfig
