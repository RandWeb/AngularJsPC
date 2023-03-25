app.controller('RegisterController', ['$scope', function ($scope) {
    $scope.login = () => {
        $scope.message = "welcome "+ $scope.user.email;

    }
    $scope.register=()=>{
        $scope.message = "welcome "+ $scope.user.firstname + " "+$scope.user.lastname;
    }
}]);

