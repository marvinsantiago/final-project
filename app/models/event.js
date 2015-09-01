import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('string'),
});
