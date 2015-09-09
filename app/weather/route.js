import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    var lat = 34.7478771;
    var lng = -92.2652074;
    return Ember.$.ajax('http://mighty-lowlands-5553.herokuapp.com/' + lat + ',' + lng);
  },
});
