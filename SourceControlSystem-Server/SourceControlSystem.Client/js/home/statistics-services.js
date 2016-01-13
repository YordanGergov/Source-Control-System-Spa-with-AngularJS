(function () {
    'use strict';

    function statistics($http, $q, baseServiceUrl) {
        function getStatistics() {
            var defered = $q.defer();

            $http.get(baseServiceUrl + '/api/statistics')
            .then(function (response) {
                defered.resolve(response.data);
            });

            return defered.promise;
        }


        return {
            getStatistics: getStatistics
        }
    }


    angular.module('myApp.services')
    .factory('statistics', ['$http', '$q', 'baseServiceUrl', statistics]);
}());