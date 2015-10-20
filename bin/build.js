#!/usr/bin/env node

var args = require('minimist')(process.argv.slice(2));
var exec = require('child_process').exec;
var path = require('path');
var _ = require('lodash');
var tmp = require('tmp');
var fs = require('fs');

var dirs = {
    working : process.cwd(),
    self : path.resolve(__dirname, '..')
};

// Build will look for config.js or config.json in working dir
var config = require(path.resolve(process.cwd() , 'config'));
var colors = require('colors/safe');


var defaults = {
    esdoc : {
        config : {
            source: path.resolve(dirs.working, 'src/js'),
            destination: path.resolve(dirs.working, 'docs')
        }
    }
};

var settings = _.merge(defaults, config);

var task = args.task;
var tasks = {
    esdoc : function(){
        var tmpFile = tmp.fileSync();
        fs.writeFileSync(tmpFile.name, JSON.stringify(settings.esdoc.config));
        exec('esdoc -c ' + tmpFile.name, function(){
            console.log(arguments);
        });
    }
};



if(tasks[task]) {
    tasks[task]();
} else {
    process.stderr.write('Error: Task not found');
}