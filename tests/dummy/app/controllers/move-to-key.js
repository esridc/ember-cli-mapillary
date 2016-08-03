import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  // get client id from config
  clientId: config.APP.mapillaryClientId,
  startKey: 'ytfE1_iD_N-jmHfTHkj1Ug',
  moveToKey: undefined,
  isResetDisabled: true,
  actions: {
    resetViewer() {
      this.set('moveToKey', this.get('startKey'));
    },
    nodeDidChange() {
      // allow reset
      this.set('isResetDisabled', false);
      // clear the previous move to key (if any)
      // to allow the user to reset the view again
      this.set('moveToKey', null);
    }
  }
});
