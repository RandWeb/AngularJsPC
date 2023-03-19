var contacts = angular.module('contacts', []);

contacts.controller('ContactsController', [
    '$scope', '$http', ($scope, $http) => {
        // $http.get('data.json').success((data) => {
        //     $scope.artists = data;
        // });

        $http.get('data.json').then(successCallback, errorCallback);

        function successCallback(response) {
            console.log(response);
            $scope.artists = response.data;
        }

        function errorCallback(error) {
            console.log('error', error)
        }
    }
]);


