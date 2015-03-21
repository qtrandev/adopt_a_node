'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Administration, app, auth, database) {

  app.get('/administration/adoptions', auth.requiresLogin, function(req, res, next) {
    res.send('Page with list of all adoptions will be displayed');
  });

  app.get('/administration/reports', auth.requiresLogin, function(req, res, next) {
    res.send('Page with list of all reports will be displayed');
  });

  app.get('/administration/users', auth.requiresLogin, function(req, res, next) {
    res.send('Interface to manage all users will be displayed');
  });

  app.get('/administration/email', auth.requiresLogin, function(req, res, next) {
    res.send('Interface to email users will be displayed');
  });

  app.get('/administration/reportsdue', auth.requiresLogin, function(req, res, next) {
    res.send('Interface to show adoptions with reports being due');
  });

  app.get('/administration/adoptionsexpire', auth.requiresLogin, function(req, res, next) {
    res.send('Interface to show adoptions expiring soon');
  });

  app.get('/administration/streets', auth.requiresLogin, function(req, res, next) {
    res.send('Interface to show all adopted and undopted streets');
  });

  app.get('/administration/backup', auth.requiresLogin, function(req, res, next) {
    res.send('Interface to allow all data to be backed up - spreadsheets or zip files');
  });

  /**
  app.get('/administration/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });
  */

  app.get('/administration/example/render', function(req, res, next) {
    Administration.render('index', {
      package: 'administration'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
