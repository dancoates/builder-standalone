
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
        //new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        preLoaders : [
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'eslint-loader'}
        ],
        loaders: [
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    eslint : {
        configFile: './.eslintrc'
    }
};

export default conf;