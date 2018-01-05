var counterApp = angular.module('root', []);


counterApp.controller('plusMinus', function($scope){
  $scope.counter = 0;
  $scope.plus = function(){
    $scope.counter ++;
  };
  $scope.minus = function(){
    $scope.counter --;
  };
});
