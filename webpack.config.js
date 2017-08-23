const path = require('path')

const config = {
	entry: {
		app: ['./src/index.jsx']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: ''
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
		contentBase: './dist',
		inline: true,
	},
	devtool: process.env.NODE_ENV === 'prod' ? "source-map" : "eval-source-map",
	plugins: [
	],
};

module.exports = config