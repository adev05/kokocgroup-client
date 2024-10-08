module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
				pathname: '/api/**',
			},
			{
				protocol: 'https',
				hostname: '*',
				port: '',
				pathname: '/**',
			},
		],
	},
	env: {
		SERVER_URL: process.env.SERVER_URL,
	},
}
