import Ember from 'ember';

export default Ember.Route.extend({

  favourites: Ember.inject.service(),

  model: function() {
    return [
      {id: "emberjs"},
      {id: "facebook"},
      {id: "netflix"}
    ]; 
  },

  actions: {
    fave(org) {
      this.get('favourites').addFavourite(org);
    }
  }
});
