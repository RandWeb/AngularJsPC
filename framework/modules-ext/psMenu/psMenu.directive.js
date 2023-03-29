"use strict";

angular.module("psMenu").directive("psMenu",['$timeout',function ($timeout){
    return {
        scope:{

        },
        transclude: true,
        controller:'psMenuController',
        templateUrl:"modules-ext/psMenu/psMenuTemplate.html",
        link:function (scope, el, attr){
            let item = el.find('.ps-selectable-item:first');
            $timeout(function (){
                item.trigger('click');
            });
        }
    }
}]);