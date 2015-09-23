
var dev = process.argv[1] && process.argv[1].indexOf('webpack-dev-server') !== -1;
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: './dist/',
        filename: "bundle.js",
        publicPath : "dist/"
    },
    resolve :  {
        extensions : ['', '.js.jsx', '.jsx', '.js', '.scss'],
        modulesDirectories : ['./src/js', './src/sass', 'node_modules']
    },
    devtool : 'source-map',
    plugins : (dev ? [
        new ExtractTextPlugin('style.css')
    ] : [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.UglifyJsPlugin()
    ]),

    module: {
        preLoaders : [
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'eslint-loader'}
        ],
        loaders: [
            { test: /\.js[x]?$/, exclude: /node_modules/, loaders: (dev ? ['react-hot-loader', 'babel-loader'] : ['babel-loader'])},
            { test: /\.scss?$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss?sourceMap!sass?sourceMap')}
        ]
    },
    eslint : {
        configFile: './.eslintrc'
    },
    stats : {colors : true},
    postcss : function() {
        return [autoprefixer]
    }
};
