'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'ember-quickstart',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.firebase = {
    apiKey: 'AIzaSyCUXvPY3iu5WiZSybyllWeTA_QuXSNCGe0',
    authDomain: 'clarus-tech-test-74373.firebaseapp.com',
    projectId: 'clarus-tech-test-74373',
    storageBucket: 'clarus-tech-test-74373.firebasestorage.app',
    messagingSenderId: '253067208440',
    appId: '1:253067208440:web:349b24e12675fcd92c3d0d',
    measurementId: 'G-XREMK9YG3Z',
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
