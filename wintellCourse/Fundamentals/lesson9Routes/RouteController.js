angular.module('myApp.controllers')
    .controller('RouteController', function($scope, nameService) {

        $scope.moduleName = 'Learn about Routes';
        nameService.getNames()
            .then(function(result) {
                console.log(result);
                $scope.names = result['results']
            });

    });