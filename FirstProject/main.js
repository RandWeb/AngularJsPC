var contacts = angular.module('contacts', [
    'ngRoute',
    'ContactController'
]);

contacts.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        }).otherwise({
            redirectTo: '/list'
        });
    }
]);

var contactController = angular.module('ContactController', []);

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