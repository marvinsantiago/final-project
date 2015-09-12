import Ember from 'ember';


export default Ember.Route.extend({
    model: function() {
      return Ember.RSVP.hash ({
        activities: this.store.query('activity', {
          limitToLast: 5
        }),
        events: this.store.query('event', {
          orderBy: 'start',
        }),
      });
  }
});
