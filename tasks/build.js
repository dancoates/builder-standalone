

import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import webpackConfig from './config/webpack.js';


class Build {
    run() {

        webpack(webpackConfig, function(err, stats){
            process.stdout.write(stats.toString());
        });
    }
}

export default new Build();