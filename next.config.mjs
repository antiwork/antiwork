/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/bounties",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
