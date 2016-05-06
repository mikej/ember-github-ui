import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    favouriteWasClicked() {
      console.log('fave in the component');
      this.sendAction('on-fave', this.get('org'))
    }
  }
});
