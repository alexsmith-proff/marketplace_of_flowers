/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_URL: 'http://localhost:5000',
    API_URI: 'http://localhost:5000',
    API_URI_DOCKER: 'http://backend:5000'
  },
  webpackDevMiddleware: config => {
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
        }
        return config
  }      
}

module.exports = nextConfig