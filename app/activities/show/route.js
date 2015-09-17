import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(activity) {
      if (window.confirm('Are you sure you want to delete?')) {
        activity.destroyRecord();
      }
      this.transitionTo('activities.index');
    }
  }
});
