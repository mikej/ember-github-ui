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
    favouriteClicked(org) {
      if (this.get('favourites.orgs').contains(org)) {
        this.get('favourites').removeFavourite(org);
      } else {
        this.get('favourites').addFavourite(org);
      }
    }
  }
});
