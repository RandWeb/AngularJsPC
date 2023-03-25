angular.module('myApp.controllers')
    .controller('ListController', function($scope, $location) {
        $scope.show = function(id) {
            $location.path('/names/' + id);
        };
    });