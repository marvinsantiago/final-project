import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('string'),
  startsAt: DS.attr('string'),
  endsAt: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('string'),
  url: DS.attr('string'),

});
