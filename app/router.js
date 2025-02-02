import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('add-movie-form');
  this.route('movies', function () {
    this.route('single-movie', { path: '/:movie_id' });
    this.route('edit', { path: '/:movie_id/edit' });
  });
});
