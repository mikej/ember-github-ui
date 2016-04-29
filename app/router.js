import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs'); // /orgs
  this.route('org', {path: 'org/:id'}, function() { // /rg/emberjs
    this.route('repos');
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    }); // org/jquery/jquery-ui
    this.route('notfound');
  });
  this.route('notfound', {path:'*path'});
});

export default Router;
