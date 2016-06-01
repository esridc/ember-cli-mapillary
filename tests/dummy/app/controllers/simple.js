import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  // get client id from config
  clientId: config.APP.mapillaryClientId
});
