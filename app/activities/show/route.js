import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findById('activity', params.id);
  },
  actions: {
    delete: function(activity) {
      activity.destroyRecord();

      this.transitionTo('activities.index');
    }
  }
});
