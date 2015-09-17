import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  events: Ember.computed.map('model', function(curr) {
    return curr.getProperties('start', 'end', 'title');
  }),

  upcomingEvents: Ember.computed.filter('model', function(curr) {
    var date = curr.get('end');
    var now = moment();

    if (date && date.isAfter(now)) {
      return true;
    }
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
