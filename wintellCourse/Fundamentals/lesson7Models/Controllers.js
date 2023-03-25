var myControllers = angular.module('myApp.controllers', []);

myControllers.controller('ModuleController', function($scope, $window, appTime) {
    $scope.moduleName = 'Learn about Modules';
    $scope.appRunning = appTime();
    $scope.refresh = function() {
        $scope.appRunning = appTime();
    };
    $scope.home = function() {
        $window.location.href = '../Index.html';
    };
});