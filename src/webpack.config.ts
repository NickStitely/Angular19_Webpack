// webpack.config.js
const path = require('path');
        
module.exports = {
    optimization: {
        runtimeChunk: false,
    },
  entry: {
    app: "src/main.ts"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
/*     libraryTarget: 'commonjs', // Or 'var', 'commonjs2' depending on your needs
    library: 'UserModuleBundle', // The name of your bundle
    umdNamedDefine: true,
    scriptType: "text/javascript" */
  },
  module: {
    rules: [
      // Add rules for TypeScript, CSS, etc. as needed for your project
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: {
    /* '@angular/core': 'ng_core',
    '@angular/common': 'ng_common',
    '@angular/platform-browser': 'ng_platformBrowser',
    '@angular/platform-browser-dynamic': 'ng_platformBrowserDynamic',
    '@angular/router': 'ng_router',
    'rxjs': 'rxjs' */
  },
};