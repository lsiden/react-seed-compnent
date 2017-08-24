const path = require('path')

const config = {
	entry: {
		app: ['./src/app-root.jsx']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
	devServer: {
		contentBase: '.',
		inline: true,
	},
	devtool: process.env.NODE_ENV.match(/^prod/i) ? "source-map" : "eval-source-map",
	plugins: [
	],
};

module.exports = config