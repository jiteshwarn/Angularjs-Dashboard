var reportapp = angular.module("ReportApp", []);
reportapp.controller("ReportHeaderController", function ($scope) {
    var date = new Date();
    $scope.date = date.toDateString();
    $scope.name = "jiteshwar Nishad";
});

reportapp.controller("ReportBuildController",function($scope,$http){
$http.get("https://api.myjson.com/bins/a5umt")
.then(function(response){
$scope.jsonbuilds=response.data;
});
});

