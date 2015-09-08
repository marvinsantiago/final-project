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
    // this.route('create', {path: '/new'});
    this.route('show', {path: '/:activities_id'});
    // this.route('edit', {path: '/:activities_id/edit'});
  });
  this.route('events', function() {
    // this.route('create', {path: '/new'});
    this.route('show', {path: '/:events_id'});
    // this.route('edit', {path: '/:events_id/edit'});
  });

this.route('admin', {path: '/admin'}, function() {
  this.route('events', function() {
      this.route('create', {path: '/new'});
      this.route('show', {path: '/:events_id'});
      this.route('edit', {path: '/:events_id/edit'});
    });
  this.route('activities', function() {
    this.route('create', {path: '/new'});
    this.route('show', {path: '/:activities_id'});
    this.route('edit', {path: '/:activities_id/edit'});
  });
});
});

export default Router;
