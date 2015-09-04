import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  location: DS.attr('string'),
  phone: DS.attr('string'),
  url: DS.attr('string'),
});
