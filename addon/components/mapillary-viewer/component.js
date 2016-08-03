/* globals Mapillary:false */
import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNames: ['mapillary-viewer'],
  clientId: undefined,
  key: null,
  options: undefined,

  // initialize the viewer once this component has been inserted in the dom
  didInsertElement() {
    this.viewer = new Mapillary.Viewer(this.elementId, this.clientId, this.key, this.options);

    // raise an action whenever the node (image) changes
    this.viewer.on('nodechanged', (node) => {
      this.sendAction('onNodeChanged', node);
    });

    // raise an action whenever the loading state changes
    this.viewer.on('loadingchanged', (node) => {
      this.sendAction('onLoadingChanged', node);
    });
  },

  // handle changes to input data (attributes)
  didReceiveAttrs(e) {
    if (!this.viewer) {
      return;
    }

    // TODO: remove support for latLng at next major version bump
    const latLng = Ember.get(e, 'newAttrs.latLng.value');
    if (latLng) {
      console.warn('mapillary-viewer::latLng has been deprecated. Please use the moveTo property instead.');
    }
    const moveTo = Ember.get(e, 'newAttrs.moveTo.value') || latLng;

    // check if need to move to node by key or lat/lng
    Ember.run.schedule('afterRender', this, function() {
      if (moveTo) {
        this._moveTo(moveTo).then(() => {}, (err) => {
          this.sendAction('onError', err);
        });
      }
    });
  },

  // move the viewer to the node (image) that is
  // either closest to the given location (if lat/lng)
  // or identified by the given key
  _moveTo(val) {
    // TODO: ideally we'd just call resize() whenever this DOM node
    // has been resized or has changed display/visibilty
    this.viewer.resize();
    if (Ember.isArray(val) && val.length === 2) {
      // move to lat/lng
      return this.viewer.moveCloseTo(val[0], val[1]);
    } else {
      // move to key
      return this.viewer.moveToKey(val);
    }
  },

  // clean up viewer
  willDestroyElement() {
    this._super(...arguments);
    if (this.viewer && this.viewer.off) {
      // remove all event listeners
      this.viewer.off();
    }
  }
});
