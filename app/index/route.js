import Ember from 'ember';


export default Ember.Route.extend({
    model: function() {
      return Ember.RSVP.hash ({
        activities: this.store.find('activity', {
          limitToLast: 5
        }),
        events: this.store.find('event'),
      });
  }
});
