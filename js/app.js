
var app = angular.module("App", ["ngRoute", "firebase"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'FirstController'
    })
    .when('/sign-up', {
        templateUrl: 'templates/sign-up.html',
        controller: 'SignUpController'
    })
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })
    .when('/weather', {
        templateUrl: 'templates/weather.html',
        controller: 'WeatherController'
    })
    .when('/news', {
        templateUrl: 'templates/news.html',
        controller: 'NewsController'
    })
});
