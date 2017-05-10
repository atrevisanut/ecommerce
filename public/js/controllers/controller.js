angular.module('ecommerce')
.controller('controller', function($scope, service, $location){
  // $scope.test = "test";
  // console.log($scope.test);
  $scope.getData = function(){
    service.model().then(function(response){
      $scope.product = response;
    });
  };$scope.getData();
});
