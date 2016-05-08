import isInArray from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

// Replace this with your real tests.
test('it works', function(assert) {
  
  const Example = Ember.Object.extend({
    item: 6,
    list: [1, 2, 3],
    itemIsInList: isInArray('item', 'list')
  });

  const exampleToTest = Example.create();

  assert.equal(exampleToTest.get('itemIsInList'), false, 'should not be in the list before being added');

  exampleToTest.get('list').addObject(6);

  assert.equal(exampleToTest.get('itemIsInList'), true, 'should be in the list after adding');

  exampleToTest.set('item', 42);

  assert.equal(exampleToTest.get('itemIsInList'), false, 'should not be in the list after item is changed');

});
