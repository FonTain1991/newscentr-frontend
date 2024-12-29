/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www',
          },
        ],
        destination: '/:path*',
        permanent: true
      }
    ]
  },
  rewrites() {
    return process.env.SERVER_PROXY ? [
      {
        source: '/api/:path*',
        destination: process.env.SERVER_PROXY + '/api/:path*',
      },
      {
        source: process.env.NEXT_PUBLIC_GRAPHQL_PATH,
        destination: process.env.SERVER_PROXY + process.env.NEXT_PUBLIC_GRAPHQL_PATH
      },
      {
        source: '/sitemap.xml',
        destination: process.env.SERVER_ORIGIN + '/api/sitemap'
      }
    ] : []
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

export default nextConfig
