(function (app) {
    "use strict";
    function InterpolateController($scope, $interpolate) {
        $scope.title = '$interpolate';
        $scope.json = {
            name: "Jeremy Likness",
            birthYear: 1974,
            height: 179.07,
            home: {
                city: "Woodstock",
                state: "GA"
            }
        };
        $scope.fragment = "My Home City: {{home.city | uppercase}}";
        $scope.result = "";
        $scope.interpolate = function () {
            var fn = $interpolate($scope.fragment);
            $scope.result = fn($scope.json);
        };
    }

    InterpolateController.$inject = ['$scope', '$interpolate'];
    app.controller("interpolateCtrl", InterpolateController);
})(AppMain.app);