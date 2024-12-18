/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/sdk.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
