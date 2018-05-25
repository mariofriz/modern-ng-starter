var fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const DotEnv = require('dotenv-webpack');
const common = require('./webpack.common.js');
const argv = require('minimist')(process.argv.slice(2));
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// get info from package.json
const PACKAGE = require('./package.json');

// parse args to get environment argv['env'] -> 'prod.env' -> '.env'
let env = '';
const envPath = './env/';
if (argv['env'] && fs.existsSync(envPath + argv['env'] + '.env')) {
  env = argv['env'];
} else if (fs.existsSync(envPath + 'prod.env')) {
  env = 'prod';
}
console.info('Using .env:', envPath + env + '.env');

// define banner
const bannerTemplate = `${PACKAGE.name} v${PACKAGE.version}
(c) ${new Date().getFullYear()} ${PACKAGE.author}`;

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.BannerPlugin({
      banner: bannerTemplate,
      entryOnly: true
    }),
    new DotEnv({
      path: envPath + env + '.env'
    })
  ]
});
