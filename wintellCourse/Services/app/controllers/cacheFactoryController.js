(function (app) {
    "use strict";
    function CacheFactoryController($scope, $cacheFactory) {
        $scope.title = '$cacheFactory';
        var _this = this;
        this.setStatus = function (msg) {
            var prefix = ($scope.status.length + 1).toString();
            $scope.status.push(prefix + ": " + msg);
        };
        this.cache = $cacheFactory.get('myExample');
        $scope.status = [];
        $scope.key = '';
        $scope.value = '';
        $scope.save = function () {
            if ($scope.cacheForm.$valid) {
                if ($scope.value === '') {
                    _this.cache.remove($scope.key);
                    _this.setStatus($scope.key + ' removed.');
                }
                else {
                    _this.cache.put($scope.key, $scope.value);
                    _this.setStatus($scope.key + ' set to ' + $scope.value);
                }
            }
            $scope.value = '';
        };
        $scope.recall = function () {
            if ($scope.cacheForm.$valid) {
                var value = _this.cache.get($scope.key);
                if (value) {
                    $scope.value = value;
                    _this.setStatus("Cache hit for key " + $scope.key);
                } else {
                    _this.setStatus("Cache miss for key " + $scope.key);
                }
            }
        };
    }

    CacheFactoryController.$inject = ['$scope', '$cacheFactory'];
    app.controller("cacheFactoryCtrl", CacheFactoryController);
})(AppMain.app);