'use strict';

var config = require('../config');

// https://github.com/sindresorhus/grunt-concurrent
module.exports = {
    'dev': {
        tasks: [
            'shell:mongo',
            'nodemon:dev',
            'watch:server',
            'watch:dev'
        ],
        options: {
            logConcurrentOutput: true
        }
    }
};
