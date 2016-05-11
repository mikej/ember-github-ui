import { test } from 'qunit';
import moduleForAcceptance from 'github-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentRouteName(), 'orgs', 'at orgs route');
  });

  click('a[href*="org/emberjs"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/repos', 'at repos page');
  });

  click('a[href*="org/emberjs/data"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/data/issues', 'at issues page');
    assert.ok($('.issues li').length > 0, 'some issues');
  });

  click('a[href*="org/emberjs/data/contributors"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/data/contributors', 'at contributors page');
    assert.ok($('.contributors li').length > 0, 'some contributors');
  });
});
