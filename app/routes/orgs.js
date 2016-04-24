import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {id: "emberjs"},
      {id: "facebook"},
      {id: "netflix"}
    ]; 
  }
});
