'use strict';

var config = require('../config');

var helper = {};

helper.sassDev = {};
helper.sassDev[config.sass.devDest] = config.sass.src;

helper.sassBuild = {};
helper.sassBuild[config.sass.buildDest] = config.sass.src;

// https://github.com/sindresorhus/grunt-sass
module.exports = {
    'dev': {
        options: {
            outputStyle: 'compressed',
            sourceComments: 'map',
            sourceMap: config.sass.map
        },
        files: helper.sassDev
    },
    'build': {
        options: {
            outputStyle: 'compressed'
        },
        files: helper.sassBuild
    }
};
