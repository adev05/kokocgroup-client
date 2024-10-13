/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8000',
				pathname: '/api/v1/files/images/**',
			},
			{
				protocol: 'http',
				hostname: 'server',
				port: '8000',
				pathname: '/api/v1/files/images/**',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/u/**',
			},
			{
				protocol: 'https',
				hostname: 'store.cloud9.gg',
				port: '',
				pathname: '/cdn/**',
			},
		],
	},
	env: {
		SERVER_URL: process.env.SERVER_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL_INTERNAL,
		AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,
	},
}

module.exports = nextConfig
