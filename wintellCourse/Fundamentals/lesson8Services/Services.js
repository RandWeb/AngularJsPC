const myServices = angular.module('myApp.services', [])
    .service('nameService', function($http, $q) {
        return {
            getNames: function () {
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: 'names.txt'
                })
                .then(function(result) {
                    deferred.resolve(angular.fromJson(result.data));
                },function (error) {
                    deferred.reject('Error retrieving names.');
                });
                return deferred.promise;
            }
        };
    });