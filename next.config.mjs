/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/demos", destination: "/sistemas", permanent: false },
      { source: "/demos/:slug([^.]+)", destination: "/sistemas/:slug", permanent: false },
    ];
  },
};

export default nextConfig;
