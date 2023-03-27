(function (app) {
    "use strict";
    function QController($scope, primes, maxPrimes) {
        $scope.title = '$q';
        $scope.primes = [];
        $scope.started = false;
        $scope.max = maxPrimes;
        $scope.progress = 0;
        $scope.compute = function () {
            $scope.started = true;
            primes.computePrimes(maxPrimes).then(function (data) {
                $scope.primes = data;
            }, function (error) {
                throw error;
            }, function (progress) {
                $scope.value = progress;
            });
        };
    }

    QController.$inject = ['$scope', 'primes', 'maxPrimes'];
    app.controller("qCtrl", QController);
})(AppMain.app);