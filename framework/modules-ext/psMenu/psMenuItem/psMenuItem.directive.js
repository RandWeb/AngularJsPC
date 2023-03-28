"use strict";

angular.module("psMenu").directive("psMenuItem",function (){
    return {
        require:"^psMenu",
        scope:{
            label:'@',
        },
        templateUrl:"modules-ext/psMenu/psMenuItem/psMenuItemTemplate.html",
        link:function (scope, el, attr,ctrl) {

        }
    }
});