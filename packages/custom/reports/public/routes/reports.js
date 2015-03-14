'use strict';

//Setting up route
angular.module('mean.reports').config(['$stateProvider',
  function($stateProvider) {
    // Check if the user is connected
    var checkLoggedin = function($q, $timeout, $http, $location) {
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') $timeout(deferred.resolve);

        // Not Authenticated
        else {
          $timeout(deferred.reject);
          $location.url('/login');
        }
      });

      return deferred.promise;
    };

    // states for my app
    $stateProvider
      .state('all reports', {
        url: '/reports',
        templateUrl: 'reports/views/list.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('create report', {
        url: '/reports/create',
        templateUrl: 'reports/views/create.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('edit report', {
        url: '/reports/:reportId/edit',
        templateUrl: 'reports/views/edit.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('report by id', {
        url: '/reports/:reportId',
        templateUrl: 'reports/views/view.html',
        resolve: {
          loggedin: checkLoggedin
        }
      });
  }
]);
