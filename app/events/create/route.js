import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function() {
    return this.store.createRecord('event');
  },

  actions: {
    save: function(event, data) {
      event.setProperties(data);

      event.save().then(() => {
        this.transitionTo('events');
      });
    }
  }
});
