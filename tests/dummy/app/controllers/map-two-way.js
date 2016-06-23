/* globals L:false */

import Ember from 'ember';
import config from '../config/environment';
import getMapillaryLayerConfig from '../utils/get-mapillary-layer-config';

export default Ember.Controller.extend({
  // get client id from config
  clientId: config.APP.mapillaryClientId,

  // mapillary viewer configuration
  mapillaryOptions: {
    cover: false
  },

  // map center and zoom
  lat: 42.834281768623676,
  lon: -3.7938279117275067,
  zoom: 16,

  // marker is bound to this location
  latLon: Ember.computed('lat', 'lon', function() {
    return [this.get('lat'), this.get('lon')];
  }),

  actions: {
    // when map loads add Esri basemap and
    // mapillary coverage as vector tile layer
    onMapLoad(e) {
      var map = e.target;
      var mlyVectorLayerConfig = getMapillaryLayerConfig();
      var mvtSource = new L.TileLayer.MVTSource(mlyVectorLayerConfig);
      L.esri.basemapLayer("Topographic").addTo(map);
      map.addLayer(mvtSource);
    },
    // when viewer updates to a new node, recenter map/marker
    onViewerUpdate(node) {
      this.setProperties({
        lat: node.latLon.lat,
        lon: node.latLon.lon
      });
    },
    // show image that is closest to point where map was clicked
    onMapClick (e) {
      const latlng = e.latlng;
      this.set('moveToLatLng', [latlng.lat, latlng.lng]);
    }
  }
});
