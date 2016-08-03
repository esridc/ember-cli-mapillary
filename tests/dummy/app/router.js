import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('simple');
  this.route('map-two-way');
  this.route('map-one-way');
  this.route('move-to-key');
});

export default Router;
