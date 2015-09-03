import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findById('activity', params.id);
  },
  actions: {
    delete: function(activity) {
      if (window.confirm('Are you sure you want to delete?')) {
        activity.destroyRecord();
      }
      this.transitionTo('activities.index');
    }
  }
});
