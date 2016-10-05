/* jshint node: true */
'use strict';

var path = require('path');


module.exports = {
  name: 'ember-perfect-scroll',
  
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + '/perfect-scrollbar/js/perfect-scrollbar.js');
    app.import(app.bowerDirectory + '/perfect-scrollbar/css/perfect-scrollbar.css');
  }
};
