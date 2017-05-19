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
