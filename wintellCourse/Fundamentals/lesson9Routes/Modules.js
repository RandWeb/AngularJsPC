var myApp = angular.module('myApp', ['ngRoute','myApp.services', 'myApp.controllers'])
    .value('appName', 'Fundamentals of AngularJS')
    .factory('goHome', function ($window) {
        return function () {
            $window.location.href = '../Index.html';
        };
    });

myApp.run(function ($rootScope, $timeout, appName, goHome) {
    $rootScope.appName = appName;
    $rootScope.time = new Date();
    $rootScope.home = goHome;
            
    function updateTime() {
        $rootScope.time = new Date();
        $timeout(updateTime, 1000);
    }

    $timeout(updateTime, 1);
});