import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    resetFormValues: function() {
    var values = this.get('event').toJSON();
    this.setProperties(values);
  }.on('init'),

  actions: {
    save: function() {
      var data = this.getProperties('title', 'description', 'location', 'start', 'end', 'price', 'url');
      data.start = moment(data.start);
      data.end = moment(data.end);

      this.sendAction('save', this.get('event'), data);
    }
  }
});
