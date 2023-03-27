(function (app) {
    "use strict";
    function ExceptionHandlerController($scope) {
        $scope.title = '$exceptionHandler';
        $scope.oops = function () {
            throw new Error("Oops");
        };
    }

    ExceptionHandlerController.$inject = ['$scope'];
    app.controller("exceptionHandlerCtrl", ExceptionHandlerController);
})(AppMain.app);