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
    this.mly = new Mapillary.Viewer(this.elementId, this.clientId, this.key, this.options);
  }
});
