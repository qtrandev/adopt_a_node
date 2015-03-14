'use strict';

/* jshint -W098 */
angular.module('mean.reports').controller('ReportsController', ['$scope', '$stateParams', '$location', 'Global', 'Reports',
  function($scope, $stateParams, $location, Global, Reports) {
    $scope.global = Global;

    $scope.hasAuthorization = function(report) {
      if (!report || !report.user) return false;
      return $scope.global.isAdmin || report.user._id === $scope.global.user._id;
    };

    $scope.create = function(isValid) {
      if (isValid) {
        var report = new Reports({
          event_name: this.event_name,
          event_date: this.event_date,
          participants: this.participants,
          hours_per_participant: this.hours_per_participant,
          trash_bags_collected: this.trash_bags_collected,
          sign_waiver: this.sign_waiver,
          review_safety_sheet: this.review_safety_sheet,
          call_311: this.call_311,
          problems_unusual_items: this.problems_unusual_items,
          problems_items_explain: this.problems_items_explain,
          comments: this.comments,
          group_name: this.group_name,
          group_leader: this.group_leader
        });
        report.$save(function(response) {
          $location.path('reports/' + response._id);
        });

        this.title = '';
        this.content = '';
        this.event_name = '';
        this.event_date = '';
        this.participants = '';
        this.hours_per_participant = '';
        this.trash_bags_collected = '';
        this.sign_waiver = '';
        this.review_safety_sheet = '';
        this.call_311 = '';
        this.problems_unusual_items = '';
        this.problems_items_explain = '';
        this.comments = '';
        this.group_name = '';
        this.group_leader = '';
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(report) {
      if (report) {
        report.$remove(function(response) {
          for (var i in $scope.reports) {
            if ($scope.reports[i] === report) {
              $scope.reports.splice(i, 1);
            }
          }
          $location.path('reports');
        });
      } else {
        $scope.report.$remove(function(response) {
          $location.path('reports');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var report = $scope.report;
        if (!report.updated) {
          report.updated = [];
        }
        report.updated.push(new Date().getTime());

        report.$update(function() {
          $location.path('reports/' + report._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Reports.query(function(reports) {
        $scope.reports = reports;
      });
    };

    $scope.findOne = function() {
      Reports.get({
        reportId: $stateParams.reportId
      }, function(report) {
        $scope.report = report;
      });
    };
  }
]);
