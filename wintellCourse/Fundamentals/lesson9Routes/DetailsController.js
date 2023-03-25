angular.module('myApp.controllers')
    .controller('DetailsController', function (
        $scope,
        $location,
        $routeParams,
        nameService) {

        function goBack() {
            $location.path('/');
        }

        $scope.goBack = goBack;

        if (angular.isUndefined($routeParams.nameId)) {
            goBack();
            return;
        }

        $scope.name = nameService.getNameById($routeParams.nameId);
    });