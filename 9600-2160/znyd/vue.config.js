const path = require("path");

function resolve(dir) {
	return path.join(__dirname, dir);
}

const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
	productionSourceMap: false,
	publicPath: process.env.NODE_ENV === "production" ? "/lvsweb/" : "/",

	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			return {
				plugins: [
					new CompressionPlugin({
						test: /\.js$|\.html$|.\css/,
						threshold: 10240,
						deleteOriginalAssets: true
					})
				]
			}
		}
	},
	devServer: {
		open: false,
		host: '0.0.0.0',
		port: 8080,
		https: false,
		hotOnly: false,
		proxy: {
			[process.env.VUE_APP_API]: {
				target:'http://39.98.156.143:8843',
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_API]: ''
				}
			}
		}
	}
};
