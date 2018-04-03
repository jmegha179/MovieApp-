var info = angular.module('detail', []);
let index = 0;

info.controller('detailCtrl', function ($scope, $http, $location) {
    $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9bf8050b44e4f2c3416381922ee69286")
        .then(function (response) {
            $scope.name = response.data.results;
            $scope.index = $location.absUrl().substring($location.absUrl().length - 1);

        });

});