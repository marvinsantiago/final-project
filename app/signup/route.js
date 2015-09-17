import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  firebase: Ember.inject.service('firebase'),

  actions: {
    signup(email, password) {
      var firebase = this.get('firebase');

      firebase.createUser({email, password}, (err, data) => {
        if (err) {
          return console.log(err);
        }
        this.get('session').authenticate('authenticator:firebase', {
          provider: 'password',
          email,
          password
        }).then((data) => {
          this.session.get('currentUser').set('email', email);

          this.session.get('currentUser').save().then(() => {
            this.transitionTo('login');
          });
        });
      });
    }
  }
});
