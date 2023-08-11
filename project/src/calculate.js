var app = angular.module("app", []);

app.controller('myCtrl', function($scope) {
    $scope.height;
    $scope.weight;
    $scope.bmiCalc = function () {
      $scope.bmi = $scope.weight/($scope.height*$scope.height);
    }
});
  