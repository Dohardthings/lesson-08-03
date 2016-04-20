import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  email: attr(),
  password: attr(),
  username: attr(),
  tickets: attr(),
});