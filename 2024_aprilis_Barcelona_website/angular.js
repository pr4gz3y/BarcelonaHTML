let app = angular.module('BarcelonaApp', []);
app.controller('BarcelonaController', function($scope, $http){
    $scope.title = "Barcelona Sights";
    console.log($scope.title);

    $scope.barcelona = [];

    $http.get('database_content.json')
    .then(function(response){
        $scope.stages = response.data;
        $scope.barcelona = response.data;
        console.log($scope.barcelona)
    })
    .catch(function(error){
        $scope.error("Hiba az adatok betöltése során!")
    })
})