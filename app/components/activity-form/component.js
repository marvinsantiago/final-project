import Ember from 'ember';

export default Ember.Component.extend({
    resetFormValues: function() {
    var values = this.get('activity').toJSON();
    this.setProperties(values);
  }.on('init'),

  actions: {
    save: function() {
      var data = this.getProperties('name', 'category', 'location', 'url');
      this.sendAction('save', this.get('activity'), data);
    }
  }
});
