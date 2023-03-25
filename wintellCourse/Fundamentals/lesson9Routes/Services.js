var myServices = angular.module('myApp.services', [])
    .service('nameService', function ($http, $q) {
        let names = [];
        return {
            getNames: function() {
                var deferred = $q.defer();
                if (names.length > 0) {
                    deferred.resolve(names);
                    return deferred.promise;
                }

                $http({
                    method: 'GET',
                    url: 'names.txt'
                })
                    .then(function(result) {
                        names = result.data['results'];
                        deferred.resolve(angular.fromJson(result.data));
                    },function(error) {
                        deferred.reject('Error retrieving names.');
                    });
                return deferred.promise;
            },
            getNameById: function(id) {
                var x, numericId = Number(id);
                for (x = 0; x < names.length; x++) {
                    if (names[x].id === numericId) {
                        return names[x];
                    }
                }

                return {
                    firstName: 'Invalid',
                    lastName: 'Link',
                    bio: 'You have navigated to an invalid link.'
                };
            }
        };
    });