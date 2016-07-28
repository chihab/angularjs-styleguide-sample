var path = require('path');
module.exports = {
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/app/!html'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }
        ]
    },
    context: __dirname,
    entry: "./app/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map"
}
