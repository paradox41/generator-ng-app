(function() {
    'use strict';

    var moduleName = 'app',

        angularDependencies = [
            'ui.router'
        ];

    define([
        'require',
        'angular',
        'lodash',
        'ui.router',
    ], function(require, angular, _) {

        var module = angular.module(moduleName, angularDependencies);

        module.config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouteProvider) {

                $urlRouteProvider.otherwise('');

                $stateProvider.state('app', {
                    url: ''
                });
            }
        ]);

        angular.bootstrap(document.querySelector('html'), [moduleName]);

        return module;
    });
})();
