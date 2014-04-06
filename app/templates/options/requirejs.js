'use strict';

var config = require('../config');

// https://github.com/gruntjs/grunt-contrib-requirejs
module.exports = {
    'build': {
        options: {
            mainConfigFile: config.appDir + '/config.js',
            name: 'app',
            out: config.buildDir + '/app.js',
            useStrict: true,
            // fileExclusionRegExp: /tests\/*/,
            optimizeCss: 'none',
            generateSourceMaps: false,
            optimize: 'uglify2',
            preserveLicenseComments: true,
            excludeShallow: ['ui.router']
        }
    }

};
