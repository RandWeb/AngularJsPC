var contacts = angular.module('contacts', [
    'ngRoute',
    'ContactController'
]);

contacts.config([
    '$routeProvider',  ($routeProvider) =>{
        $routeProvider.
        when('/list', {
            templateUrl: '../partials/list.html',
            controller: 'ListController'
        }).
        when('/details/:itemId',{
            templateUrl:'../partials/details.html',
            controller:'DetailsController'
        }).
        otherwise({
            redirectTo: '/list'
        });
    }
]);

var contactController = angular.module('ContactController', ['ngAnimate']);

contactController.controller('ListController', [
    '$scope', '$http', function ($scope, $http) {
        $http.get('data.json').then(successCallback, errorCallback);

        function successCallback(response) {
            console.log(response);
            $scope.artists = response.data;
            $scope.artistOrder = 'name';
        }

        function errorCallback(error) {
            console.log('error', error)
        }
    }
]);

contactController.controller('DetailsController', [
    '$scope', '$http','$routeParams', function ($scope, $http,$routeParams) {

        $http.get('data.json').then(successCallback, errorCallback);

        function successCallback(response) {
            console.log(response.data);
            $scope.artists = response.data;
            $scope.whichItem = $routeParams.itemId;

            if ($routeParams.itemId > 0){
                $scope.prevItem = Number($routeParams.itemId) - 1;
            }else{
                $scope.prevItem = $scope.artists.length - 1;
            }

            if ($routeParams.itemId < $scope.artists.length - 1){
                $scope.nextItem = Number($routeParams.itemId) + 1;
            }else{
                $scope.nextItem = 0;
            }
        }

        function errorCallback(error) {
            console.log('error', error)
        }
    }
]);