import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function() {
      return Ember.RSVP.hash ({
        activities: this.store.find('activity', {
          limitToLast: 5
        }),
        events: this.store.findAll('event', {
          orderBy: 'startsAt'
        }),
        user: this.get('session.currentUser'),
      });
    }
});
