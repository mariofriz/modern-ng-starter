var fs = require('fs');
const merge = require('webpack-merge');
const DotEnv = require('dotenv-webpack');
const common = require('./webpack.common.js');
const argv = require('minimist')(process.argv.slice(2));

// parse args to get environment argv['env'] -> 'prod.env' -> '.env'
let env = '';
const envPath = './env/';
if (argv['env'] && fs.existsSync(envPath + argv['env'] + '.env')) {
  env = argv['env'];
}
console.info('Using .env:', envPath + env + '.env');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new DotEnv({
      path: envPath + env + '.env'
    })
  ]
});
