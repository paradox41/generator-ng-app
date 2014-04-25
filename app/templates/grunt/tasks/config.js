// This file contains configuration info that is used in the Gruntfile
'use strict';

var pkg = require('../package');

module.exports = {
    buildDir: 'build',
    appDir: 'app',
    patternDir: 'patterns',

    jsTestsConf: 'karma.conf.js',

    files: {
        js: [
            'Gruntfile.js',
            'app/**/*.js',
            '!**/bower_components/**'
        ],

        jsTests: [
            'Gruntfile.js',
            'app/**/*.js',
            '!**/bower_components/**',
            'app/tests/**/*.js'
        ],

        sass: {
            files: [
                'app/**/*.scss',
                'patterns/common/sass/*.scss',
                '!**/bower_components/**'
            ],
            src: 'app/app.scss',
            devDest: 'app/app.css',
            patternSrc: 'patterns/common/sass/patterns.scss',
            patternDest: 'patterns/patterns.css',
            buildDest: 'build/app.css'
        },

        ignore: [
            'app/tests/**/*.js',
            '**/bower_components/**'
        ]
    }
};
