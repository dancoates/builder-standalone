
import webpack from 'webpack';

var conf = {
    entry: "./src/js/index.js",
    output: {
        path: './dist/',
        filename: "bundle.js"
    },
    resolve :  {
        extensions : ['', '.js.jsx', '.jsx', '.js']
    },
    devtool : 'source-map',
    plugins : [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};

export default conf;