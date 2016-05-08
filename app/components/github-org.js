import Ember from 'ember';
import isInArray from 'github-ui/utils/is-in-array';

export default Ember.Component.extend({
  tagName: 'li',
  favourites: Ember.inject.service(),
  isFavourited: isInArray('org', 'favourites.orgs'),
  actions: {
    favouriteWasClicked() {
      console.log('fave in the component');
      this.sendAction('on-fave', this.get('org'))
    }
  }
});
