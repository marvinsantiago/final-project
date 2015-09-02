import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    return this.store.createRecord('user');
  },

  actions: {
    save: function(user, data) {
      user.setProperties(data);

      user.save().then(() => {
        this.transitionTo('activities');
      });
    }
  }
});
