

import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import webpackConfig from './config/webpack.js';


class Build {
    run() {
        console.log('Current directory: ' + process.cwd());
        webpack(webpackConfig, function(err, stats){
            console.log(err, stats.toString());
        });
    }
}

export default new Build();