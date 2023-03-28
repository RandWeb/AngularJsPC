"use strict";

angular.module("psFramework").directive("psFramework", function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: "psFrameworkController",
        templateUrl: "modules-ext/psFramework/psFrameworkTemplate.html",
    }
});