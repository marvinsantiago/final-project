import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirectToLogin: function() {
      window.alert('You must be logged in to add a new activity');
        this.transitionTo('login');
    }
  }
});
