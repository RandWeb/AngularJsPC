 let app = angular.module("RegistrationApp", ['ngRoute']);

app.config(['$routeProvider', ($routeProvider)=> {
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RegisterController'
    }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
    }).when('/success', {
        templateUrl: 'views/success.html',
        controller: ''
    }).otherwise({
        redirectTo: '/login'
    });
}]);
