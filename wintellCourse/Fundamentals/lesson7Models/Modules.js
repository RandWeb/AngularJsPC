var myApp = angular.module('myApp', ['myApp.controllers']);

myApp.value('appName', 'Fundamentals of AngularJS');

myApp.run(function ($rootScope, appName) {
    $rootScope.appName = appName;
    $rootScope.startTime = new Date();
});

myApp.factory('appTime', function($rootScope) {
    return function() {
        var now = new Date();
        return now - $rootScope.startTime;
    };
});

