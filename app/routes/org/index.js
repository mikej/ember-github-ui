import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this._super(...arguments);
    this.replaceWith('org.repos');
  }
});
