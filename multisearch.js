angular.module("multiSearch", [])
.controller("multiSearch", function($scope){
  $scope.search = '';
  $scope.results = '';
  $scope.$watch('search', function(newValue){
    var terms = null;
    var parts = newValue.match(/(\w+(?::|$)(?: ?\b\w+\b(?!:))*)+/g);
    if (parts) $scope.model = parts.map(function (p) {
      return p.split(':').map(function (s) {
        return s.trim();
      });
    });
  });
})
.directive('multisearch', function(){
  return {
    link: function (scope, elem, attrs, controller) {
      controller.$render = function () {
        if (!scope.model) return;
        var length = scope.model.length;
        var last = scope.model[length-1];
        if(last[1]){
          scope.stem = last[1];
          scope.completions = scope.facets()[last[0]];
        } else {
          scope.stem = last[0];
          scope.completions = Object.keys(scope.facets());
        }
      };
    },
    controller: 'multiSearch',
    templateUrl: 'search.html',
    require: 'ngModel',
    restrict: 'E',
    scope: {
      facets: '&',
      model: '=ngModel'
    }
  }
})
