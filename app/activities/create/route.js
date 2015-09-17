import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
