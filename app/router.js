import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('login', {path: '/login'});
  this.route('signup', {path: '/signup'});
  this.route('dashboard');

  this.route('users');
  this.route('user-profile');
  this.route('activities', function() {
    this.route('create', {path: '/new'});
    this.route('show', {path: '/:activity_id'});
    this.route('edit', {path: '/:activity_id/edit'});
  });
  this.route('events', function() {
    this.route('create', {path: '/new'});
    this.route('show', {path: '/:event_id'});
    this.route('edit', {path: '/:event_id/edit'});
  });

  this.route('weather');
});

export default Router;
