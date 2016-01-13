(function () {
    'use strict';

    function config($routeProvider) {

        var Partials_Prefix = 'views/partials/';
        var Controller_As_View_Model = 'vm';

        $routeProvider
            .when('/', {
                templateUrl: Partials_Prefix + 'home/home.html',
                controller: 'HomeController',
                controllerAs: Controller_As_View_Model
            })
            .when('/register', {
                templateUrl: Partials_Prefix + 'identity/register.html',
                controller: 'SignUpCtrl'
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('myApp.services', []);
    angular.module('myApp.controllers', ['myApp.services']);
    angular.module('myApp', ['ngRoute', 'ngCookies', 'myApp.controllers']).
        config(['$routeProvider', config])
        .value('toastr', toastr)
        .constant('baseServiceUrl', 'http://spa.bgcoder.com/');
}());