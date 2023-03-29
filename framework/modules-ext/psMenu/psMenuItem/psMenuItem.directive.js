"use strict";

angular.module("psMenu").directive("psMenuItem", function () {
    return {
        require: "^psMenu",
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: "modules-ext/psMenu/psMenuItem/psMenuItemTemplate.html",
        link: function (scope, el, attr, ctrl) {
            scope.isActive = function (){
              return el == ctrl.getActiveElement();
            };

            scope.isVertical=function (){
                //return ctrl.isVertical() || el.parents('.ps-subitem-section'.length > 0);
                return ctrl.isVertical();
            }
            el.on('click', function (event) {
                console.log(scope,el,attr,ctrl);
                event.stopPropagation();
                event.preventDefault();
                  scope.$apply(function (){
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                  });
            });
        }
    }
});