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