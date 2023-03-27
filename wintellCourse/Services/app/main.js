var AppMain = {};
(function (appMain) {
    "use strict";
    appMain.app = angular.module("myApp", [])
        .config(function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'http://*.wintellect.com/**'
            ]);
            //$sceDelegateProvider.resourceUrlBlacklist([
            //    'http://localhost**'
            //]);
        })
        .run(['$rootScope', function ($rootScope) {
            $rootScope.headerUrl = 'templates/header.html';
        }]);
})(AppMain);