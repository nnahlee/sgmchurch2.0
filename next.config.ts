import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

interface SecurityHeaders {
  key: string;
  value: string;
}

const securityHeaders: SecurityHeaders[] = [
  {
    // enforce https 1year exp
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  },
  {
    // trust server content-type prevent 3rd party script injection XSS
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // prevent clickjack attacks
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // strip out sensitive query param data default*
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
];

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
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
