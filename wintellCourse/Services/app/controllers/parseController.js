(function (app) {
    "use strict";
    function ParseController($scope, $parse) {
        $scope.title = '$parse';
        $scope.json = {
            name: "Jeremy Likness",
            birthYear: 1974,
            height: 179.07,
            home: {
                city: "Woodstock",
                state: "GA"
            }
        };
        $scope.expression = "home.city | uppercase";
        $scope.result = "";
        $scope.parse = function () {
            var fn = $parse($scope.expression);
            $scope.result = fn($scope.json);
        };
    }

    ParseController.$inject = ['$scope', '$parse'];
    app.controller("parseCtrl", ParseController);
})(AppMain.app);