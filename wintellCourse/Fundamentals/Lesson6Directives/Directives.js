var myDirectives = angular.module('myApp.directives', []);

myDirectives.directive('ngSecured', function($compile) {
    var definition = {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            scope.$watch(attrs.ngSecured, function(value) {
                if (value) {
                    return;
                }

                var e = $compile('<span>Sorry, this content is restricted.</span>')(scope);
                element.replaceWith(e);
            });
        }
    };
    return definition;
});

myDirectives.directive('ngGridList', function() {
    var definition = {
        restrict: 'E',
        replace: true,
        templateUrl: 'Template.html',        
    };
    return definition;
});
