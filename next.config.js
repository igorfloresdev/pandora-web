/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/web',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
