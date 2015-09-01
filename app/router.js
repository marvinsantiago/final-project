import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('activities', function() {
    this.route('create', {path: '/new'});
    this.route('show', {path: '/:activities_id'});
    this.route('edit', {path: '/:activities_id/edit'});
  });
});

export default Router;
