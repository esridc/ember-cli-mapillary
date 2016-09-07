/* jshint node: true */
'use strict';

// NOTE: not including in vendor b/c of:
// https://github.com/esridc/ember-cli-mapillary/issues/4
// TODO: once resolved, uncomment the following code

// var path = require('path');
// var mergeTrees = require('broccoli-merge-trees');
// var Funnel = require('broccoli-funnel');
// var packagePath = path.dirname(require.resolve('mapillary-js'));

module.exports = {
  name: 'ember-cli-mapillary',

  // // include mapillary-js in vendor folder
  // treeForVendor: function(tree) {
  //
  //   var packageTree = new Funnel(this.treeGenerator(packagePath), {
  //     srcDir: '/',
  //     destDir: 'mapillary-js'
  //   });
  //
  //   if (tree) {
  //     return mergeTrees([tree, packageTree]);
  //   } else {
  //     return packageTree;
  //   }
  // },
  //
  // // include mapillary-js assets
  // treeForPublic: function(tree) {
  //   var assetTree = new Funnel(this.treeGenerator(packagePath), {
  //     include: ['**/*.svg'],
  //     destDir: '/assets'
  //   });
  //
  //   if (tree) {
  //     return mergeTrees([tree, assetTree]);
  //   } else {
  //     return assetTree;
  //   }
  // },
  //
  // // bundle mapillary-js code with other vendor code
  // included: function(app) {
  //   this._super.included(app);
  //   this.app.import('vendor/mapillary-js/mapillary-js.min.css');
  //   this.app.import('vendor/mapillary-js/mapillary-js.min.js');
  // }

  // NOTE: until above are resolved, we're just going to
  // inject tags to get mapillary CSS/JS from CDN
  // TODO: once resolved, remove the following code
  contentFor: function(type/*, config*/) {
    if (type === 'head') {
      return '<link rel="stylesheet" href="//unpkg.com/mapillary-js@1.4.2/dist/mapillary-js.min.css">';
    }
    if (type === 'body') {
      return '<script src="//unpkg.com/mapillary-js@1.4.2/dist/mapillary-js.min.js"></script>';
    }
  }
};
