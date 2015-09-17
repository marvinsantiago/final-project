import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    logOut: function() {
      this.get('session').close().then(() => {
        this.transitionTo('index');
      });
    },
    sessionRequiresAuthentication: function() {
      this._super();
      alert('You must be logged in to perform this action');
    }
  }
});
