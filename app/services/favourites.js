import Ember from 'ember';

export default Ember.Service.extend({
  orgs: [],

  log() {
    console.log(
      this.get('orgs')
        .map(org => org.id)
        .join(', ')
      );
  },

  addFavourite(org) {
    this.get('orgs').addObject(org);
    this.log();
  },

  removeFavourite(org) {
    this.get('orgs').removeObject(org);
    this.log();
  }
});
