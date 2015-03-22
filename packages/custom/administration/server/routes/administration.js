'use strict';

function sampleContent(title, text) {
  var html = '<!DOCTYPE html> <html lang="en"> <head> <title>Administration</title>';
  html += '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet"> </head> <body>';
  html += '<div class="jumbotron">';
  html += '<h1>' +title+ ' Interface</h1>';
  html += '<p>'+text+'</p>';
  html += '<p><a class="btn btn-primary btn-lg" role="button" onclick="window.history.back()">Go Back</a></p>';
  html += '</div>';

  html += '</body></html>';
  return html;
}

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Administration, app, auth, database) {

  app.get('/administration/adoptions', auth.requiresLogin, function(req, res, next) {
    res.send(sampleContent('Adoptions','Page with list of all adoptions will be displayed'));
  });

  app.get('/administration/reports', auth.requiresLogin, function(req, res, next) {
    res.send(sampleContent('Reports','Page with list of all reports will be displayed'));
  });

  app.get('/administration/users', auth.requiresLogin, function(req, res, next) {
    res.send(sampleContent('Users','Interface to manage all users will be displayed'));
  });

  app.get('/administration/email', auth.requiresLogin, function(req, res, next) {
    res.send(sampleContent('Email','Interface to email users will be displayed'));
  });

  app.get('/administration/reportsdue', auth.requiresLogin, function(req, res, next) {
    res.send(sampleContent('Reports Due','Interface to show adoptions with reports being due'));
  });

  app.get('/administration/adoptionsexpire', auth.requiresLogin, function(req, res, next) {
    res.send(sampleContent('Expired Adoptions','Interface to show adoptions expiring soon'));
  });

  app.get('/administration/streets', auth.requiresLogin, function(req, res, next) {
    res.send(sampleContent('Streets','Interface to show all adopted and undopted streets'));
  });

  app.get('/administration/backup', auth.requiresLogin, function(req, res, next) {
    res.send(sampleContent('Backup','Interface to allow all data to be backed up - spreadsheets or zip files'));
  });

  /**
  app.get('/administration/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });
  */

  // This is kept as an example for using html files to render the view
  app.get('/administration/documentation', auth.requiresLogin, function(req, res, next) {
    Administration.render('index', {
      package: 'administration'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
