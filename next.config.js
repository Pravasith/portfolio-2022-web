/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ["."], //or ['pages', 'hooks']
    },

    images: {
        domains: ["images.unsplash.com", "unsplash.com"],
    },
}

module.exports = nextConfig
