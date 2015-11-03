module.exports = {
  entry: './src/index.js',
  output: {
    path: require('path').resolve('./build/'),
    filename: 'bundle.js'
  },
  publicPath: '/build/'
};
