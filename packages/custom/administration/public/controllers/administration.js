'use strict';

/* jshint -W098 */
angular.module('mean.administration').controller('AdministrationController', ['$scope', 'Global', 'Administration',
  function($scope, Global, Administration) {
    $scope.global = Global;
    $scope.package = {
      name: 'administration'
    };
  }
]);
