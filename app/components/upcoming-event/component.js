import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    events: [],

  upcomingEvents: Ember.computed('events', 'event.@each.date', function() {
    return this.get('events').reduce((prev, current) => {
      var date = current.get('date');
      if (date > moment(date.start)) {
        prev.push(current);
      }
      return prev;
    }, []);
  }),
});
