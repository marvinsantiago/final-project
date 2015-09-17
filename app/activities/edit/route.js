import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    save: function(activity, data) {
      activity.setProperties(data);

      activity.save().then(() => {this.transitionTo('activities.show', activity);
    });
    }
  }
});
