angular.module("multiSearch", [])
.controller("multiSearch", function($scope){
  $scope.search = '';
  $scope.results = '';
  $scope.$watch('search', function(newValue){
    var terms = null;
    var parts = newValue.match(/(\w+(?::|$)(?: ?\b\w+\b(?!:))*)+/g);
    if (parts) terms = parts.map(function (p) { return p.split(':'); });
    $scope.terms = terms;
    if(terms) $scope.parse();
  });
  $scope.searchFilter = function(){
    if($scope.value){
      return function(item){
        return $scope.results === item
      }
    }

  }
  $scope.parse = function(){
    var length = $scope.terms.length;
    var last = $scope.terms[length-1];
    if(last[1]){
      $scope.value = true;
      $scope.results = last[1];
    } else {
      $scope.value = false;
      $scope.results = last[0];
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
