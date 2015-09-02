import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    category: {
      refreshModel: true
    }
  },

  model: function(params) {
    if (params.category) {
      return this.store.query('activity', {
        orderBy: 'category',
        equalTo: params.category
      });
    } else {
      return this.store.findAll('activity');
    }
  }
});
