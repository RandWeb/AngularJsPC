"use strict";

angular.module("psMenu").directive("psMenu",function (){
    return {
        scope:{

        },
        transclude: true,
        controller:'psMenuController',
        templateUrl:"modules-ext/psMenu/psMenuTemplate.html",
        link:function (scope, el, attr){

        }
    }
});