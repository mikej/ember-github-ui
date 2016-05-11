import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import Pretender from 'pretender';

function json(obj, status=200) {
  return [status, { 'Content-Type' : 'text/json'}, JSON.stringify(obj)];
}

let server;

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      server = new Pretender(function(){
        this.get('https://api.github.com/orgs/:id',
            () => json({
              id: 99,
              login: 'emberjs',
              name: 'Ember.js'
            }));

        this.get('https://api.github.com/orgs/:id/:repoid',
            () => json([{
              id: 123,
              name: 'data'
            }]));

        this.get('https://api.github.com/repos/:id/:repoid',
            () => json({
              id: 123,
              name: 'data'
            }));

        this.get('https://api.github.com/repos/:id/:repoid/issues',
            () => json([
              {id: 1, title: 'Issue 1'},
              {id: 2, title: 'Issue 2'}
            ]));

        this.get('https://api.github.com/repos/:id/:repoid/contributors',
            () => json([
              {id: 1, login: 'contributor1'},
              {id: 2, login: 'contributor2'}
            ]));
      });

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      destroyApp(this.application);

      if (options.afterEach) {
        options.afterEach.apply(this, arguments);
      }
    }
  });
}
