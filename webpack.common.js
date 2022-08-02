const path = require("path");




module.exports = {
    entry: {
        main: './src/index.js',
        vendor:'./src/vendor.js'
        
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