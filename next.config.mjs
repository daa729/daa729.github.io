/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
