(function () {
    'use strict';

    function projects($http, $q, baseServiceUrl) {
        function getPublicProjects() {
            return data.get('api/projects')
        }
        return {
            getPublicProjects: getPublicProjects
        }
    }


    angular.module('myApp.services')
    .factory('projects', ['data', projects]);
}());