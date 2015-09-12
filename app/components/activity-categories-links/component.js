import Ember from 'ember';

export default Ember.Component.extend({

  categories: Ember.inject.service(),

    actions: {
    redirectToLogin: function() {
      window.alert('You must be logged in to add a new activity');
        this.transitionTo('login');
    }
  }
});
