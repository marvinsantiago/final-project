import Ember from 'ember';

export default Ember.Controller.extend({
  events: Ember.computed.map('model', function(curr) {
    return curr.getProperties('title', 'start', 'end');
  }),

  actions: {
    calendarAddOccurrence: function(occurrence) {
      this.get('occurrences').pushObject(Ember.Object.create({
        title: occurrence.get('title'),
        start: occurrence.get('start'),
        end: occurrence.get('end')
      }));
    },

    calendarUpdateOccurrence: function(occurrence, properties) {
      occurrence.setProperties(properties);
    },

    calendarRemoveOccurrence: function(occurrence) {
      this.get('occurrences').removeObject(occurrence);
    }
  }
});
