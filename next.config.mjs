/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://www.travelatstyle.biz/:path*',
          },
        ]
      },
};

export default nextConfig;
