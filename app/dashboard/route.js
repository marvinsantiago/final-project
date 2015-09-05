import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function() {
      return Ember.RSVP.hash ({
        activities: this.store.findAll('activity'),
        events: this.store.findAll('event'),
        user: this.get('session.currentUser'),
      });
  }
});
