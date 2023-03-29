"use strict";
angular.module("psMenu").directive("psMenuGroup", function () {
    return {
        require: '^psMenu',
        restrict: 'E',
        scope: {
            label: '@',
            icon: '@'
        },
        transclude: true,
        templateUrl: "modules-ext/psMenu/psMenuGroup/psMenuGroupTemplate.html",
        link: function (scope, el, attrs, ctrl) {
            scope.isOpen = false;
            scope.closeMenu = function () {
                scope.isOpen = false;
            }
            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;

                ctrl.setOpenMenuScope(scope);
            }
            scope.isVertical = function () {
                return ctrl.isVertical();
            }

        }
    }
});