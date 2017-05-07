var reportapp = angular.module("ReportApp", []);
reportapp.controller("ReportHeaderController", function ($scope) {
    var date = new Date();
    $scope.date = date.toDateString();
    $scope.name = "jiteshwar Nishad";
});

reportapp.controller("ReportBuildController", function ($scope, $http) {
    $http.get("https://api.myjson.com/bins/a5umt")
        .then(function (response) {
            $scope.jsonbuilds = response.data;
        });
    $scope.getdropDownValue = function () {
        var dropDownSelectedValue = $("#dropdownbuild").val();
        console.log(dropDownSelectedValue);
        $http.get("https://api.myjson.com/bins/yq1q9")
        .then(function(res){
            $scope.tables=res.data;
            console.log("before printing"+ $scope.tables[0].buildversion);
        if (dropDownSelectedValue == $scope.tables[0].buildversion) {
            alert("build version is:" + dropDownSelectedValue);
            


        }
        });
    }
});


reportapp.controller("ReportTableController", function ($scope, $http) {
    $http.get("https://api.myjson.com/bins/yq1q9")
        .then(function (response) {
            $scope.tables = response.data;
            console.log($scope.tables[0].data[0].SPR);
            console.log($scope.tables[0].buildversion);

        });
});

// reportapp.directive("printTable",function(){
// return {
//     restrict:"EA",
//     link:function(scope,element,attrs){
//         console.log(element);
//         element.on("click",function(){
//             //alert("jitesh");
//             console.log(element.val())

//         })
//     }
// }
// });