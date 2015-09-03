import Ember from 'ember';

export default Ember.Component.extend({
    resetFormValues: function() {
    var values = this.get('event').toJSON();
    this.setProperties(values);
  }.on('init'),

  actions: {
    save: function() {
      var data = this.getProperties('name', 'description', 'location', 'date', 'price', 'url');
      this.sendAction('save', this.get('event'), data);
    }
  }
});
