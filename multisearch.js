angular.module("multiSearch", [])
.controller("multiSearch", function($scope){
  $scope.search = '';
  $scope.$watch('search', function(newValue){

  });
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
