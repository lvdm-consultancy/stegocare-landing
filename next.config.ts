import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    // stegocare.com serves the same deployment; force it to the canonical domain.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "stegocare.com" }],
        destination: "https://www.stego.care/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.stegocare.com" }],
        destination: "https://www.stego.care/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
