var photoApp = angular.module('root', []);

photoApp.controller('photoList', function($scope){
  $scope.photos = [
    "images/leeloo.jpg",
    "images/leeloo2.jpg",
    "images/leeloo3.jpg",
    "images/leeloo4.jpg",
  ]
});
