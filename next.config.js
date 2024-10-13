/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: {
		domains: ['localhost', 'avatars.githubusercontent.com', 'store.cloud9.gg'],
		loader: 'default',
	},
	env: {
		SERVER_URL: process.env.SERVER_URL,
	},
}

module.exports = nextConfig
