/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var packagePath = path.dirname(require.resolve('mapillary-js'));

module.exports = {
  name: 'ember-cli-mapillary',

  // include mapillary-js in vendor folder
  treeForVendor: function(tree) {
    var packageTree = new Funnel(this.treeGenerator(packagePath), {
      srcDir: '/',
      destDir: 'mapillary-js'
    });
    return mergeTrees([tree, packageTree]);
  },

  // include mapillary-js assets
  treeForPublic: function(tree) {
    var assetTree = new Funnel(this.treeGenerator(packagePath), {
      include: ['**/*.svg'],
      destDir: '/assets'
    });

    if (tree) {
      return mergeTrees([tree, assetTree]);
    } else {
      return assetTree;
    }
  },

  // bundle mapillary-js code with other vendor code
  included: function(app) {
    this._super.included(app);
    this.app.import('vendor/mapillary-js/mapillary-js.min.css');
    this.app.import('vendor/mapillary-js/mapillary-js.min.js');
  }
};
