import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [65, 75, 85, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "profusely-zigzagged-sneak.ngrok-free.dev",
  ],
};

const withNextIntl = createNextIntlPlugin();
// export default nextConfig;
export default withNextIntl(nextConfig);
