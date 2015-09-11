import Ember from 'ember';

export default Ember.Controller.extend({
  events: Ember.computed.map('model', function(curr) {
    return curr.getProperties('start', 'end');
  }),

  // actions: {
  //   calendarAddOccurrence: function(occurrence) {
  //     this.get('occurrences').pushObject(Ember.Object.create({
  //       title: occurrence.get('title'),
  //       startsAt: occurrence.get('startsAt'),
  //       endsAt: occurrence.get('endsAt')
  //     }));
  //   },

  //   calendarUpdateOccurrence: function(occurrence, properties) {
  //     occurrence.setProperties(properties);
  //   },

  //   calendarRemoveOccurrence: function(occurrence) {
  //     this.get('occurrences').removeObject(occurrence);
  //   }
  // }
});
