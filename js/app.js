var App = angular.module("myApp" , []); 

App.controller("myCtr" , ["$scope" ,"$http" , function($scope , $http){
  $http.get("https://api.github.com/users").then(function(item){
      $scope.players = item.data;
  });
   
}]);