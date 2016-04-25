import Ember from 'ember';

export default Ember.Service.extend({
  orgs: [],

  addFavourite(org) {
    this.get('orgs').addObject(org);
    console.log(
      this.get('orgs')
        .map(org => org.id)
        .join(', ')
      );
  }
});
