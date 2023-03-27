(function (app) {
    "use strict";
    function LocationController($scope, $location) {
        $scope.title = '$location';
        var _this = this;
        this.$location = $location;
        this.getLocationInfo = function () {
            console.log($location);
            return {
                "absolute-Url": _this.$location.absUrl(),
                "hash": _this.$location.hash(),
                "host": _this.$location.host(),
                "path": _this.$location.path(),
                "port": _this.$location.port(),
                "protocol": _this.$location.protocol(),
                "search": _this.$location.search(),
                "url": _this.$location.url()
            };
        };
        $scope.locationInfo = this.getLocationInfo();
        $scope.$on("$locationChangeStart", function () {
            $scope.locationInfo = _this.getLocationInfo();
        });
        $scope.route = function () {
            $location.path("/relative-path-no-route");
        };
        $scope.hash = function () {
            $location.hash("someHashTag");
        };
        $scope.search = function () {
            $location.search("query", "value");
        };
        $scope.url = function () {
            $location.url("/");
        };
    }

    LocationController.$inject = ['$scope', '$location'];
    app.controller("locationCtrl", LocationController);
})(AppMain.app);