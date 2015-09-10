/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    proxyHost: 'http://mighty-lowlands-5553.herokuapp.com/',
    modulePrefix: 'final-project',
    environment: environment,
    moment: {
      includeTimezone: 'all'
    },
    disqus: {
      shortname: 'allthingskid'
    },
    'simple-auth': {
      session: 'session:with-user',
      routeAfterAuthentication: 'dashboard',
      routeIfAlreadyAuthenticated: 'dashboard'
    },
    contentSecurityPolicy: {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"

     },
    firebase: 'https://ms-madaddox.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
