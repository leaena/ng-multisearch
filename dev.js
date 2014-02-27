angular.module('multiSearch.dev', ['multiSearch'])
.run(function ($rootScope) {
  $rootScope.data = {
    State: [
      'New York',
      'California'
    ],
    User: [
      'Me',
      'You'
    ]
  };
})
