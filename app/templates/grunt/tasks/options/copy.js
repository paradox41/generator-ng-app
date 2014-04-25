'use strict';

var config = require('../config');

// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
    'build': {
        cwd: config.appDir,
        src: [
            'bower_components/requirejs/require.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'index.html',
            'config.js',
            '**/_*.html',
            '**/*.{tff,woff,svg,png,jpg,gif}'
        ],
        dest: config.buildDir + '/',
        filter: 'isFile',
        expand: true
    }
};
