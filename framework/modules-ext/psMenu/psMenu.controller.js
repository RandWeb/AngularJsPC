"use strict";

angular.module("psMenu").controller("psMenuController", ['$scope','$rootScope', function ($scope,$rootScope) {

        $scope.showMenu = true;

        this.getActiveElement = function () {
            return $scope.activeElement;
        };

        this.setActiveElement = function (element) {
            $scope.activeElement = element;
        };

        this.setRoute = function (route) {
            $rootScope.$broadcast('ps-menu-item-selected-event',
                { route: route });
        };
    $scope.$on('ps-menu-show', function (evt, data) {
        $scope.showMenu = data.show;
    });
    }]);