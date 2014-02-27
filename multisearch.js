angular.module("multiSearch", [])
.controller("multiSearch", function($scope){
  $scope.categories = {user: ["one", "two", "three"], location: ["SF", "HI", "OR"]}
})
.directive('multisearch', function(){
  return {
    templateUrl: 'search.html'
  }
})
