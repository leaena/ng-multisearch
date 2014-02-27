angular.module("multiSearch", [])
.controller("multiSearch", function($scope){
  $scope.search = '';
  $scope.results = [];
  $scope.parts = ["Sta", "New York"];
  $scope.$watch('search', function(newValue){
    $scope.parse();
  });
  $scope.parse = function(){

  }
})
.directive('multisearch', function(){
  return {
    link: function (scope, elem, attrs, controller) {
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
