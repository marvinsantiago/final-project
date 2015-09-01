import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.findById('event', params.id);
  },
  actions: {
    delete: function(event) {
      event.destroyRecord();

      this.transitionTo('events');
    }
  }
});
