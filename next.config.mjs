/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://web-chatbot-nbg8.onrender.com/api/:path*", // Proxy to deployed backend
      },
    ];
  },
  images: {
    domains: ["reinisvaravs.com"],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  devIndicators: false,
};

export default nextConfig;
