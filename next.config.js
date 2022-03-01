/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ["."], //or ['pages', 'hooks']
    },
}

module.exports = nextConfig
