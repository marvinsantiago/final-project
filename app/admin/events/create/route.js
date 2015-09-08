import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    return this.store.createRecord('event');
  },

  actions: {
    save: function(event, data) {
      event.setProperties(data);

      event.save().then(() => {
        this.transitionTo('admin.events');
      });
    }
  }
});
