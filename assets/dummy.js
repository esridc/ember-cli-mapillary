"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _emberLeafletComponentsArrayPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsArrayPathLayer['default'];
    }
  });
});
define('dummy/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _emberLeafletComponentsBaseLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsBaseLayer['default'];
    }
  });
});
define('dummy/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _emberLeafletComponentsCircleLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleLayer['default'];
    }
  });
});
define('dummy/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _emberLeafletComponentsCircleMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleMarkerLayer['default'];
    }
  });
});
define('dummy/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _emberLeafletComponentsContainerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsContainerLayer['default'];
    }
  });
});
define('dummy/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _emberLeafletComponentsGeojsonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsGeojsonLayer['default'];
    }
  });
});
define('dummy/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _emberLeafletComponentsImageLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsImageLayer['default'];
    }
  });
});
define('dummy/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _emberLeafletComponentsLeafletMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsLeafletMap['default'];
    }
  });
});
define('dummy/components/mapillary-viewer/component', ['exports', 'ember-cli-mapillary/components/mapillary-viewer/component'], function (exports, _emberCliMapillaryComponentsMapillaryViewerComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMapillaryComponentsMapillaryViewerComponent['default'];
    }
  });
});
define('dummy/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _emberLeafletComponentsMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsMarkerLayer['default'];
    }
  });
});
define('dummy/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _emberLeafletComponentsPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPathLayer['default'];
    }
  });
});
define('dummy/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _emberLeafletComponentsPointPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPointPathLayer['default'];
    }
  });
});
define('dummy/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _emberLeafletComponentsPolygonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolygonLayer['default'];
    }
  });
});
define('dummy/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _emberLeafletComponentsPolylineLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolylineLayer['default'];
    }
  });
});
define('dummy/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _emberLeafletComponentsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTileLayer['default'];
    }
  });
});
define('dummy/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _emberLeafletComponentsWmsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsWmsTileLayer['default'];
    }
  });
});
define('dummy/controllers/map-one-way', ['exports', 'ember', 'dummy/config/environment', 'dummy/utils/get-mapillary-layer-config'], function (exports, _ember, _dummyConfigEnvironment, _dummyUtilsGetMapillaryLayerConfig) {
  exports['default'] = _ember['default'].Controller.extend({
    // get client id from config
    clientId: _dummyConfigEnvironment['default'].APP.mapillaryClientId,
    // map center and zoom
    lat: 56.04958221173251,
    lon: 12.689836318219475,
    zoom: 15,

    // marker is bound to this location
    latLon: _ember['default'].computed('lat', 'lon', function () {
      return [this.get('lat'), this.get('lon')];
    }),

    actions: {
      // when map loads, add vector tile mapillary coverage layer
      onMapLoad: function onMapLoad(e) {
        var map = e.target;
        var mlyVectorLayerConfig = (0, _dummyUtilsGetMapillaryLayerConfig['default'])();
        var mvtSource = new L.TileLayer.MVTSource(mlyVectorLayerConfig);
        map.addLayer(mvtSource);
      },
      // when viewer updates to a new node, recenter map/marker
      onViewerUpdate: function onViewerUpdate(node) {
        this.setProperties({
          lat: node.latLon.lat,
          lon: node.latLon.lon
        });
      }
    }
  });
});
/* globals L:false */
define('dummy/controllers/map-two-way', ['exports', 'ember', 'dummy/config/environment', 'dummy/utils/get-mapillary-layer-config'], function (exports, _ember, _dummyConfigEnvironment, _dummyUtilsGetMapillaryLayerConfig) {
  exports['default'] = _ember['default'].Controller.extend({
    // get client id from config
    clientId: _dummyConfigEnvironment['default'].APP.mapillaryClientId,

    // mapillary viewer configuration
    mapillaryOptions: {
      cover: false
    },

    // map center and zoom
    lat: 42.834281768623676,
    lon: -3.7938279117275067,
    zoom: 16,

    // marker is bound to this location
    latLon: _ember['default'].computed('lat', 'lon', function () {
      return [this.get('lat'), this.get('lon')];
    }),

    actions: {
      // when map loads add Esri basemap and
      // mapillary coverage as vector tile layer
      onMapLoad: function onMapLoad(e) {
        var map = e.target;
        var mlyVectorLayerConfig = (0, _dummyUtilsGetMapillaryLayerConfig['default'])();
        var mvtSource = new L.TileLayer.MVTSource(mlyVectorLayerConfig);
        L.esri.basemapLayer("Topographic").addTo(map);
        map.addLayer(mvtSource);
      },
      // when viewer updates to a new node, recenter map/marker
      onViewerUpdate: function onViewerUpdate(node) {
        this.setProperties({
          lat: node.latLon.lat,
          lon: node.latLon.lon
        });
      },
      // show image that is closest to point where map was clicked
      onMapClick: function onMapClick(e) {
        var latlng = e.latlng;
        this.set('moveToLatLng', [latlng.lat, latlng.lng]);
      }
    }
  });
});
/* globals L:false */
define('dummy/controllers/simple', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend({
    // get client id from config
    clientId: _dummyConfigEnvironment['default'].APP.mapillaryClientId
  });
});
define('dummy/ember-cli-mapillary/tests/modules/ember-cli-mapillary/components/mapillary-viewer/component.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-cli-mapillary/components/mapillary-viewer/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-mapillary/components/mapillary-viewer/component.js should pass jshint.');
  });
});
define('dummy/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _emberLeafletHelpersDivIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon['default'];
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon.divIcon;
    }
  });
});
define('dummy/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _emberLeafletHelpersIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon['default'];
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon.icon;
    }
  });
});
define('dummy/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _emberLeafletHelpersLatLngBounds) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds['default'];
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds.latLngBounds;
    }
  });
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _emberLeafletHelpersPoint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint['default'];
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint.point;
    }
  });
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/leaflet-assets', ['exports', 'ember-leaflet/initializers/leaflet-assets'], function (exports, _emberLeafletInitializersLeafletAssets) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletInitializersLeafletAssets['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLeafletInitializersLeafletAssets.initialize;
    }
  });
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('simple');
    this.route('map-two-way');
    this.route('map-one-way');
  });

  exports['default'] = Router;
});
define('dummy/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      this.transitionTo('simple');
    }
  });
});
define('dummy/routes/map-one-way', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('dummy/routes/map-two-way', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('dummy/routes/simple', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 13
            },
            "end": {
              "line": 2,
              "column": 40
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Simple");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 3
            },
            "end": {
              "line": 3,
              "column": 42
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Map (One Way)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 3
            },
            "end": {
              "line": 4,
              "column": 42
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Map (Two Way)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Mapillary for Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Examples: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n | ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n | ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["simple"], [], 0, null, ["loc", [null, [2, 13], [2, 52]]]], ["block", "link-to", ["map-one-way"], [], 1, null, ["loc", [null, [3, 3], [3, 54]]]], ["block", "link-to", ["map-two-way"], [], 2, null, ["loc", [null, [4, 3], [4, 54]]]], ["content", "outlet", ["loc", [null, [5, 0], [5, 10]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/map-one-way", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/map-one-way.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "tile-layer", [], ["url", "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"], ["loc", [null, [8, 4], [8, 74]]]], ["inline", "marker-layer", [], ["location", ["subexpr", "@mut", [["get", "latLon", ["loc", [null, [9, 28], [9, 34]]]]], [], []]], ["loc", [null, [9, 4], [9, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/map-one-way.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Map (One Way)");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Navigating through the viewer will update the map location.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-left");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-left");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "clear-both");
        var el2 = dom.createTextNode("This example shows one-way interaction betwen the Mapillary viewer component and a ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://www.ember-leaflet.com/");
        var el3 = dom.createTextNode("Leaflet map component");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".\n  The map shows Mapillary coverage over an ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://www.openstreetmap.org");
        var el3 = dom.createTextNode("OpenStreetMap");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" basemap.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [6]), 1, 1);
        return morphs;
      },
      statements: [["inline", "mapillary-viewer", [], ["clientId", ["subexpr", "@mut", [["get", "clientId", ["loc", [null, [4, 30], [4, 38]]]]], [], []], "key", "zarcRdNFZwg3FkXNcsFeGw", "onNodeChanged", ["subexpr", "action", ["onViewerUpdate"], [], ["loc", [null, [4, 82], [4, 107]]]]], ["loc", [null, [4, 2], [4, 110]]]], ["block", "leaflet-map", [], ["lat", ["subexpr", "@mut", [["get", "lat", ["loc", [null, [7, 21], [7, 24]]]]], [], []], "lng", ["subexpr", "@mut", [["get", "lon", ["loc", [null, [7, 29], [7, 32]]]]], [], []], "zoom", ["subexpr", "@mut", [["get", "zoom", ["loc", [null, [7, 38], [7, 42]]]]], [], []], "onLoad", ["subexpr", "action", ["onMapLoad"], [], ["loc", [null, [7, 50], [7, 70]]]]], 0, null, ["loc", [null, [7, 2], [10, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/map-two-way", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 9,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/map-two-way.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "marker-layer", [], ["location", ["subexpr", "@mut", [["get", "latLon", ["loc", [null, [8, 28], [8, 34]]]]], [], []]], ["loc", [null, [8, 4], [8, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/map-two-way.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Map (Two Way)");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Click on the map and the viewer will navigate to the closest location where there is Mapillary coverage. Navigating through the viewer will also update the map location.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-left");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-left");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "clear-both");
        var el2 = dom.createTextNode("This example shows two-way interaction betwen the Mapillary viewer component and a ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://www.ember-leaflet.com/");
        var el3 = dom.createTextNode("Leaflet map component");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". The map shows Mapillary coverage over an ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://www.esri.com/");
        var el3 = dom.createTextNode("Esri");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" basemap.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [6]), 1, 1);
        return morphs;
      },
      statements: [["inline", "mapillary-viewer", [], ["clientId", ["subexpr", "@mut", [["get", "clientId", ["loc", [null, [4, 30], [4, 38]]]]], [], []], "key", "3wkiRZ35UU-ZiqXrkMw8DA", "options", ["subexpr", "@mut", [["get", "mapillaryOptions", ["loc", [null, [4, 76], [4, 92]]]]], [], []], "onNodeChanged", ["subexpr", "action", ["onViewerUpdate"], [], ["loc", [null, [4, 107], [4, 132]]]], "latLng", ["subexpr", "@mut", [["get", "moveToLatLng", ["loc", [null, [4, 140], [4, 152]]]]], [], []]], ["loc", [null, [4, 2], [4, 155]]]], ["block", "leaflet-map", [], ["lat", ["subexpr", "@mut", [["get", "lat", ["loc", [null, [7, 21], [7, 24]]]]], [], []], "lng", ["subexpr", "@mut", [["get", "lon", ["loc", [null, [7, 29], [7, 32]]]]], [], []], "zoom", ["subexpr", "@mut", [["get", "zoom", ["loc", [null, [7, 38], [7, 42]]]]], [], []], "onLoad", ["subexpr", "action", ["onMapLoad"], [], ["loc", [null, [7, 50], [7, 70]]]], "onClick", ["subexpr", "action", ["onMapClick"], [], ["loc", [null, [7, 79], [7, 100]]]]], 0, null, ["loc", [null, [7, 2], [9, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/simple", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/simple.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Simple");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Click on the viewer to begin navigating through the area.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "mly-wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]), 2, 2);
        return morphs;
      },
      statements: [["inline", "mapillary-viewer", [], ["clientId", ["subexpr", "@mut", [["get", "clientId", ["loc", [null, [5, 30], [5, 38]]]]], [], []], "key", "ytfE1_iD_N-jmHfTHkj1Ug"], ["loc", [null, [5, 2], [5, 70]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/utils/get-mapillary-layer-config', ['exports'], function (exports) {
  exports['default'] = getMapillaryLayerConfig;

  function getMapillaryLayerConfig() {
    return {
      url: 'https://d2munx5tg0hw47.cloudfront.net/tiles/{z}/{x}/{y}.mapbox',
      maxZoom: 18,
      style: function style() /*feature*/{
        var style = {};
        style.color = 'rgba(0, 255, 0, 0.7)';
        style.size = 3;

        return style;
      }
    };
  }
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"mapillaryClientId":"cjJ1SUtVOEMtdy11b21JM0tyYTZIQTo2ZmVjNTQ3YWQ0OWI2Yjgx","name":"ember-cli-mapillary","version":"0.3.0+d8c43168"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map