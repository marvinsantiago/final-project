import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  actions: {
    login(email, password) {
      this.get('session').authenicate('authenticator:firebase', {
        email,
        password
      });
    }
    }
});
