angular.module("multiSearch", [])
.controller("multiSearch", function($scope){
  $scope.search = '';
  $scope.results = [];
  $scope.parts = ["Sta", "New York"];
  $scope.$watch('search', function(newValue){
    var terms = null;
    var parts = newValue.match(/(\w+(?::|$)(?:\w+(?!:))*)+/g);
    if (parts) terms = parts.map(function (p) { return p.split(':'); });
    $scope.terms = terms;
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
