import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-org}}`);

  assert.equal(this.$().text().trim(), `[
Favourite
]`);

  // Template block usage:
  this.render(hbs`
    {{#github-org}}
      template block text
    {{/github-org}}
  `);

  assert.equal(this.$().text().trim(), `[
Favourite
]`);
});

test('binding to org', function(assert) {
  const org = Ember.Object.create({
    id: 'testorg',
    favorites: {
      items: []
    }
  });

  this.set('org', org);
  this.render(hbs`{{github-org org=org on-fave=on-fav-clicked}}`);

  // test the HTML rendered by the component - link should have the org login as its text
  assert.equal(Ember.$('.github-org a').text(), 'testorg');

  let actionCount = 0;
  this.set('on-fav-clicked', function () {
    actionCount++;
  });
 
  // the span is the "Favourite" button
  Ember.$('.github-org span').click();
 
  assert.equal(actionCount, 1, 'Action was fired once');
});