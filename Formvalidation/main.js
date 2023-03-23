const app = angular.module("app", []);

app.controller("RegistrationController", ['$scope', ($scope) => {
    $scope.register = () => {
        $scope.message = "Welcome "+ $scope.user.firstname + " "+ $scope.user.lastname;
    };
}]);