const path = require("path");


module.exports = {
    entry: {
        index: './src/index.js',
        
      },


module: {
    rules: [
        {
            test: /\.html$/,
            use: ["html-loader"]
          },

        {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            type: "asset/resource",
           
        
        },

    ]
}


};