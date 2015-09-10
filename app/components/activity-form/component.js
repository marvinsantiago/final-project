import Ember from 'ember';

export default Ember.Component.extend({
  resetFormValues: function() {
    var values = this.get('activity').toJSON();
    this.setProperties(values);
  }.on('init'),

  categories: Ember.inject.service(),

  actions: {
    save: function() {
      var data = this.getProperties('name', 'category', 'location', 'phone', 'url');
      this.sendAction('save', this.get('activity'), data);
    },
    selectionsChanged: function() {
      var selectCategory = this.getProperties('category');
      this.sendAction('selectionsChanged', this.get('activity'), selectCategory);
    },
  }
});
