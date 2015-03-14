'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Report = mongoose.model('Report'),
  _ = require('lodash');


/**
 * Find report by id
 */
exports.report = function(req, res, next, id) {
  Report.load(id, function(err, report) {
    if (err) return next(err);
    if (!report) return next(new Error('Failed to load report ' + id));
    req.report = report;
    next();
  });
};

/**
 * Create an report
 */
exports.create = function(req, res) {
  var report = new Report(req.body);
  report.user = req.user;

  report.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the report'
      });
    }
    res.json(report);

  });
};

/**
 * Update an report
 */
exports.update = function(req, res) {
  var report = req.report;

  report = _.extend(report, req.body);

  report.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the report'
      });
    }
    res.json(report);

  });
};

/**
 * Delete an report
 */
exports.destroy = function(req, res) {
  var report = req.report;

  report.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the report'
      });
    }
    res.json(report);

  });
};

/**
 * Show an report
 */
exports.show = function(req, res) {
  res.json(req.report);
};

/**
 * List of Reports
 */
exports.all = function(req, res) {
  Report.find().sort('-created').populate('user', 'name username').exec(function(err, reports) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the reports'
      });
    }
    res.json(reports);

  });
};
