'use strict';
module.exports = function (app) {
  var users = require('../controllers/usersController');

  //users Routes
  app.route('/users')
    .get(users.list_all_users)
    .post(users.create_a_user);

  app.route('/users/:userName')
    .get(users.read_a_user)
    .put(users.update_a_user);

  app.route('/users/:username/addfollower')
    .put(users.add_follower);

  app.route('/users/:username/removefollower')
    .put(users.remove_follower);

  app.route('/users/:username/addfollowing')
    .put(users.add_following);

  app.route('/users/:username/removefollowing')
    .put(users.remove_following);

};
