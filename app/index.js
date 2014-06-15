'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var NgAppGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();

        this.log(this.yeoman);
        this.log(chalk.magenta('NgApp generator'));

        var prompts = [{
            type: 'input',
            name: 'appName',
            message: 'What is this application\'s name?'
        }, {
            type: 'confirm',
            name: 'skip-install',
            message: 'Would you like to skip the installation of dependencies?',
            default: false
        }];

        this.prompt(prompts, function(props) {
            this.appName = props.appName;

            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('app');
        this.mkdir('app/common');
        this.mkdir('app/assets');

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_config.js', 'app/config.js');

        this.copy('stylesheets/app.scss', 'app/app.scss');
    },

    projectfiles: function() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('gitignore', '.gitignore');
    },

    grunt: function() {
        this.copy('Gruntfile.js', 'Gruntfile.js');
        this.mkdir('tasks');
        this.directory('grunt/tasks', 'tasks');
    },

    angular: function() {
        this.copy('angular/app.js', 'app/app.js');
        this.copy('angular/index.html', 'app/index.html');
    }
});

module.exports = NgAppGenerator;
