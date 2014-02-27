angular.module("multiSearch", [])
.controller("multiSearch", function($scope, $rootScope){
  $scope.search = '';
  $scope.results = '';
  $scope.$watch('search', function(newValue){
    var terms = null;
    var parts = newValue.match(/(\w+(?::|$)(?: ?\b\w+\b(?!:))*)+/g);
    if (parts) terms = parts.map(function (p) { return p.split(':'); });
    $scope.terms = terms;
    if(terms) $scope.parse();
  });
  $scope.searchFilter = function(stem){

      return function(item){
        return item.match(stem);
      }

  }
  $scope.parse = function(){
    var length = $scope.terms.length;
    var last = $scope.terms[length-1];
    if(last[1]){
      $scope.stem = last[1];
      $scope.completions = $rootScope.data[last[0]];
    } else {
      $scope.stem = last[0];
      $scope.completions = Object.keys($rootScope.data);
    }
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
