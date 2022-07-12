/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ["."], //or ['pages', 'hooks']
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
