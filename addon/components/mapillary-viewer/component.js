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

    // raise an action whenever the node changes
    this.viewer.on('nodechanged', (node) => {
      this.sendAction('onNodeChanged', node);
    });
  },

  // handle changes to input data (attributes)
  didReceiveAttrs(e) {
    this._moveToLatLng(Ember.get(e, 'newAttrs.latLng.value'));
  },

  // move the viewer to the image that is closest to that location
  _moveToLatLng(latLng) {
    if (this.viewer && latLng && Ember.isArray(latLng) && latLng.length === 2) {
      this.viewer.moveCloseTo(latLng[0], latLng[1]);
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
