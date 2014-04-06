'use strict';

var config = require('../config');

// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
    'build': {
        src: [config.buildDir + '/']
    }
};
