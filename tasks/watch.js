

import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import webpackConfig from './config/webpack.js';


class Watch {
    run() {

        webpack(webpackConfig, function(err, stats){
            process.stdout.write(stats.toString());
        });
    }
}

export default new Watch();