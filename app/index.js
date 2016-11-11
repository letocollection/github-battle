var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
// var Raven = require('raven-js');

// var sentryKey = '79da26cae32c458189cc0afdbcd2c7cf'
// var sentryApp = '113739'
// var sentryURL = 'https://' + sentryKey + '@sentry.io' + sentryApp

// Raven.config(sentryURL).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
);
