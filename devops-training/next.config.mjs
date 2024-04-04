/** @type {import('next').NextConfig} */
// next.config.mjs
import { config } from 'dotenv'
config()

const nextConfig = {
  // Sua configuração Next.js aqui
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

export default nextConfig;
