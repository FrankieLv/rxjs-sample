var path = require('path');

module.exports = {
   entry: {
      app: './src/basic/basic.js'
   },
   output: {
      path: path.resolve(__dirname, 'dev'),
      filename: 'bundle.js'
   },
   mode:'development'
};