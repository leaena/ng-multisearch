angular.module("multiSearch", [])
.controller("multiSearch", function($scope){
  $scope.categories = {user: ["one", "two", "three"], location: ["SF", "HI", "OR"]}
})
.directive('multisearch', function(){
  return {
    link: function (scope, elem, attrs) {
    },
    controller: 'multiSearch',
    templateUrl: 'search.html',
    require: 'ngModel',
    restrict: 'E',
    scope: {
      categories: '=ngModel'
    }
  }
})
