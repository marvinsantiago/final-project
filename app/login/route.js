import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  firebase: Ember.inject.service(),
  actions: {
    login(email, password) {
      this.get('firebase').authWithPassword({
        email,
        password,
      }, (err) => {
        if (err) {
          window.alert('The username or password you entered was incorrect', err);
      } else {
        this.get('session').authenticate('authenticator:firebase', {
          email,
          password
        });
      }
      });
    }
    }
});
