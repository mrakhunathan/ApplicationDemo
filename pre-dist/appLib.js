var thisApp = angular.module('myApp', ['ngRoute']);
/* global thisApp */
thisApp.service('WeatherService', ['$http', function ($http) {
        this.getWeatherForCity = function (city) {
            var promise = $http({
                method: 'GET',
                url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text='" + city + "')&format=json",
                headers: {
                    'Content-Type': undefined
                }
            }).then(function (response) {
                return response;
            });
            return promise;
        };
    }]);
/* global thisApp */
thisApp.controller('thisController', ['WeatherService', '$scope', '$location', function (WeatherService, $scope, $location) {
        console.log('thisController');
        $scope.getWeatherData = function ()
        {
            console.log('getWeatherData');
            WeatherService.getWeatherForCity($scope.city).then(function (d) {
                console.log(d.data.query.results);
                $scope.serviceResponse = d.data.query.results.channel;
                console.log($scope.serviceResponse);
                $scope.changeView();
            });
        };
        $scope.changeView = function () {
            $location.url('/getWeather');
        };
    }]);


thisApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/getWeather', {
            templateUrl: 'Result.html'
        }).when('/Default', {
            templateUrl: 'Default.html'
        }).otherwise({
            redirectTo: '/Default'
        });
    }]);
