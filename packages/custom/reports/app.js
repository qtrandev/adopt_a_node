'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Reports = new Module('reports');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Reports.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Reports.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Reports.menus.add({
    title: 'View Reports',
    link: 'all reports',
    roles: ['authenticated'],
    menu: 'main'
  });

  Reports.menus.add({
    title: 'Create Report',
    link: 'create report',
    roles: ['authenticated'],
    menu: 'main'
  });

  Reports.aggregateAsset('css', 'reports.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Reports.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Reports.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Reports.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Reports;
});
