var myControllers = angular.module('myApp.controllers', ['myApp.services'],
    function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/list', {
            templateUrl: 'List.html',
            controller: 'ListController'
        })    
        .when('/names/:nameId', {
            templateUrl: 'Details.html',
            controller: 'DetailsController'
        })
        .otherwise({
            redirectTo: '/list'
        });

    $locationProvider.hashPrefix('!');
});