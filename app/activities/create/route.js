import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    return this.store.createRecord('activity');
  },

  actions: {
    save: function(activity, data) {
      activity.setProperties(data);

      activity.save().then(() => {
        this.transitionTo('activities');
      });
    }
  }
});
