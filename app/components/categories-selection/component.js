import Ember from 'ember';

export default Ember.Component.extend({

  categories: Ember.computed('categories', 'categories.@each.category', 'categories.@each.name', function() {
    return this.get('categories').reduce((build, activity) => {
      var obj = build.findBy('name', activity.get('category'));

      if(obj) {
        obj.categories.push(activity);
      } else {
        obj = {
          name: activity.get('category'),
          categories: [activity]
        };
        build.push(obj);
      }

      return build;
      }, []);
    })

});
