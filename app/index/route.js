import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return Ember.RSVP.hash ({
        activities: this.store.findAll('activity'),
        events: this.store.findAll('event'),
      });
  }
});
