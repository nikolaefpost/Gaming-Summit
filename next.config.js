/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_API: "https://webapplication120220426093502.azurewebsites.net",
    GOOGLE_MAP_API: "",
    CONTENTFUL_SPACE: "lb3plniidqbt",
    CONTENTFUL_ACCESS_TOKEN: "JhLR3wSU489LUEkXuPDvPaJlqSGe14RrB53cnHZHtyk",
    CONTENTFUL_ENVIRONMENT: "master",
    CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN:
      "CFPAT-s-7Sxy0CzMFJF22t6RZEgd-LlGbvm5Rq2pm8CNa8Nco",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-1VZGF12P02",
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
