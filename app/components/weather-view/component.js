import Ember from 'ember';

export default Ember.Component.extend({
  weather: [],

  computeWeather: Ember.on('init', function() {
    // look up geo

    // call to api
    var lat = 34.7478771;
    var lng = -92.2652074;
    Ember.$.ajax('http://mighty-lowlands-5553.herokuapp.com/' + lat + ',' + lng)
      .then((data) => {
        this.set('weather', data);
      });

    // set a value on this component for weather
  })
});
