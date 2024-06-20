/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.dummyjson.com'],
    },
    pageExtensions: ['ts', 'tsx', 'jsx', 'js', 'page.tsx'],
    distDir: 'build',
};

export default nextConfig;
