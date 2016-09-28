var webpack = require('webpack');
var debug = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: ["./src/js/main.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.min.js",
    publicPath:  "dist/"
  },
  module: {
    loaders: [
      // loads/bundles the css
      {
        path: __dirname + "src/css",
        test: /\.css$/, 
        loader: "style!css"
      },
      // transpile new JS to older to make it more compatible
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'] 
        }
      },
      // loads and compresses all images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(), //remove duplicate code
    new webpack.DefinePlugin({ //drop unreachable code
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ //minimize code
      compress:{
        warnings: true
      }
    })
  ],
  devServer: {
    inline: true    
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};



