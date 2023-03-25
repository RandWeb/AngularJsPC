var myControllers = angular.module('myApp.controllers', []);

myControllers.controller('DirectiveController', function ($scope) {
    $scope.secured = true;
    $scope.notSecured = true;
    $scope.disallow = function() {
        $scope.notSecured = false;
    };
    $scope.names = [{
            firstName: 'Jeremy',
            lastName: 'Likness'
        }, {
            firstName: 'Jeff',
            lastName: 'Prosise'
        },{
            firstName: 'Jeffrey',
            lastName: 'Richter'
        }, {
            firstName: 'John',
            lastName: 'Robbins'
        }];
});