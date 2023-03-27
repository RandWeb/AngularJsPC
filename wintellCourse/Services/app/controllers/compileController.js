(function (app) {
    "use strict";
    function CompileController($scope, $compile, htmlFragment) {
        $scope.title = '$compile';
        this.$scope = $scope;
        $scope.value = {
            text: "Not Set.",
            input: ""
        };
        $scope.compiled = false;
        $scope.compile = function () {
            var element = angular.element(htmlFragment),
                scope = $scope.$new();
            this.scope = scope;
            $compile(element.contents())(scope);
            $scope.compiled = true;
        };
        $scope.update = function () {
            $scope.value.text = $scope.value.input;
            $scope.value.input = "";
        };
    }

    CompileController.$inject = ['$scope', '$compile', 'htmlFragment'];
    app.controller("compileCtrl", CompileController);
})(AppMain.app);