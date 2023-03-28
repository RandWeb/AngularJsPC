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