(function (app) {
    "use strict";
    function AnchorScrollController($scope, $anchorScroll, $location) {
        $scope.title = '$anchorScroll';
        var x, list = [];
        for (x = 0; x < 100; x += 1) {
            list.push(x);
        }
        $scope.list = list;
        $scope.set = "0";
        $scope.doScroll = false;
        $scope.goTo = function () {
            $location.hash($scope.set);
            if ($scope.doScroll) {
                $anchorScroll();
            }
        };
        $scope.top = function () {
            $location.hash('top');
            if ($scope.doScroll) {
                $anchorScroll();
            }
        };
    }

    AnchorScrollController.$inject = ['$scope', '$anchorScroll', '$location'];
    app.controller("anchorScrollCtrl", AnchorScrollController);
})(AppMain.app);