import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  start: DS.attr('moment-utc', {defaultValue: function() {
    return moment();
  }}),
  end: DS.attr('moment-utc', {defaultValue: function() {
    return moment();
  }}),
  description: DS.attr('string'),
  price: DS.attr('string'),
  url: DS.attr('string'),

});
