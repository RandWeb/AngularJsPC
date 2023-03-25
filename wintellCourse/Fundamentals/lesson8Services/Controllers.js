var myControllers = angular.module('myApp.controllers', ['myApp.services']);

myControllers.controller('ServiceController', function ($scope, nameService,
    goHome) {

    function applyNames(names) {
        $scope.names = names['results'];
    }

    $scope.moduleName = 'Learn about Services';
    $scope.home = function() {
        goHome();
    };
    nameService.getNames()
        .then(function(result) {
            applyNames(result);
        });
});