(function () {
    'use strict';

    function HomeController(statistics, projects) {
        var vm = this;

        statistics.getStatistics()
        .then(function (statistics) {
            vm.statistics = statistics
        });

        projects.getPublicProjects()
        .then(function(publicProjects){
        vm.publicProjects = publicProjects;

        });
    }


    angular.module('myApp.controllers')
    .controller('HomeController', ['statistics', 'projects', HomeController])

}());