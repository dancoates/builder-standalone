#!/usr/bin/env node

var args = require('minimist')(process.argv.slice(2));
var exec = require('child_process').exec;
var path = require('path');
var _ = require('lodash');

var dirs = {
    working : process.cwd(),
    self : path.resolve(__dirname, '..')
};

// Build will look for config.js or config.json in working dir
var config = require(path.resolve(process.cwd() , 'config'));
var colors = require('colors/safe');


var defaults = {
    esdoc : {
        config : 'esdoc.json',
        location : 'working'

    }
};

var settings = _.assign(defaults, config);

var commands = {
    esdoc : 'esdoc' +
            ' -c ' + path.resolve(dirs[settings.esdoc.location], settings.esdoc.config)
};

var task = args.task;

if(commands[task]) {
    console.log(commands[task]);
} else {
    process.stderr.write('Error: Task not found');
}