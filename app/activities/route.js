import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    changeCategory: function(category) {
      if (category === 'new') {
        return this.transitionTo('activities.create');
      }

      this.transitionTo('activities.index', {queryParams: {category}});
    }
  }
});
