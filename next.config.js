/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_API: "https://webapplication120220426093502.azurewebsites.net",
    GOOGLE_MAP_API: "",
    CONTENTFUL_SPACE: "8u1iknu29fcj",
    CONTENTFUL_ACCESS_TOKEN: "fMLZNmpZY6G3iYHJfe82JUmZWZtITjXgyu6uyEmoI7s",
    CONTENTFUL_ENVIRONMENT: "master",
    CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN:
      "CFPAT-VHxKoGfa2dBNwFlF0QpNJyE2HMMCudwA_PrdEx-KcYk",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-1VZGF12P02",
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
