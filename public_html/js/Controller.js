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

