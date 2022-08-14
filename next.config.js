/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,

    eslint: {
        dirs: ["."], //or ['pages', 'hooks']
    },

    publicRuntimeConfig: {
        // Will be available on both server and client
        googleAnalyticsConfig: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    },

    images: {
        domains: [
            "images.unsplash.com",
            "unsplash.com",
            "amazonaws.com",
            "folio-pics.s3.eu-west-2.amazonaws.com",
            "res.cloudinary.com",
        ],
    },
}

module.exports = nextConfig
