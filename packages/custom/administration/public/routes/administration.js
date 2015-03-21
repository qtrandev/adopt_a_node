'use strict';

angular.module('mean.administration').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('administration', {
      url: '/administration',
      templateUrl: 'administration/views/index.html'
    });
  }
]);
