app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('Home', {
            url: "/",
            templateUrl: "../View/home.html"
        })

        .state('Login', {
            url: "/Login",
            templateUrl: "../View/login.html",
            controller: "loginCtrl"

        });

});