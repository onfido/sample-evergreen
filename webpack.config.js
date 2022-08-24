var webpack = require('webpack');

var config = {
  mode: 'development',
  context: __dirname + '/src',
  entry: { 
    app: './main.js',
   },
  output: { 
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
      rules: [ 
        {        
          test: /\.js$/, // rule for .js files        
          exclude: /node_modules/,        
          loader: "babel-loader" // name of the loader   
        },
        {        
          test: /\.css$/,        
          use: ['style-loader', // order is important !
                'css-loader'] // this is loaded first
        }
      ]
  }
}

module.exports = config;