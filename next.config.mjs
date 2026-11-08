/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/bounties",
        destination: "/",
        permanent: true,
      },
      {
        // The architecture/showcase moved to the agent's own site; keep the
        // public link that used to live here working instead of 404ing.
        source: "/skills",
        destination: "https://gumclaw.github.io/how-i-work/skills.html",
        permanent: true,
      },
      {
        source: "/skills/:path*",
        destination: "https://gumclaw.github.io/how-i-work/skills.html",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
