'use strict';

var reports = require('../controllers/reports');

// Report authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.report.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

module.exports = function(Reports, app, auth) {

  app.route('/reports')
    .get(reports.all)
    .post(auth.requiresLogin, reports.create);
  app.route('/reports/:reportId')
    .get(reports.show)
    .put(auth.requiresLogin, hasAuthorization, reports.update)
    .delete(auth.requiresLogin, hasAuthorization, reports.destroy);

  // Finish with setting up the reportId param
  app.param('reportId', reports.report);
};
