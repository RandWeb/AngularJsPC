var myApp = angular.module('myApp', ['myApp.services', 'myApp.controllers'])
    .value('appName', 'Fundamentals of AngularJS')
    .factory('goHome', function($window) {
        return function() {
            $window.location.href = '../Index.html';
        };
    });
        
myApp.run(function ($rootScope, appName) {
    $rootScope.appName = appName;
});