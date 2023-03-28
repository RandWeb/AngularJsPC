"use strict";

angular.module("psMenu").directive("psMenu",function (){
    return {
        transclude: true,
        restrict:'E',
        scope:{

        },
        templateUrl:"modules-ext/psMenu/psMenuTemplate.html",
        link:function (scope, el, attr){

        }
    }
});