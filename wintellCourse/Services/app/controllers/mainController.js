(function (app) {
    "use strict";
    function MainController($scope, $window, $locale) {
        $scope.title = 'Table of Contents';
        $scope.list = [
            '$anchorScroll',
            '$cacheFactory',
            '$compile',
            '$exceptionHandler',
            '$interpolate',
            '$interval',
            '$location',
            '$parse',
            '$q'
        ];
        $scope.go = function (listItem) {
            $window.location.href = listItem.substring(1) + ".html";            
        };
        $scope.locale = $locale.id;
    }

    MainController.$inject = ['$scope', '$window', '$locale'];
    app.controller("mainCtrl", MainController);
})(AppMain.app);