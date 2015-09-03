import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    save: function(event, data) {
      event.setProperties(data);

      event.save().then(() => {this.transitionTo('events.show', event);
    });
    }
  }
});
