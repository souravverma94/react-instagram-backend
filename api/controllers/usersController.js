'use strict';

var mongoose = require('mongoose'),

  UserList = mongoose.model('Users');

exports.list_all_users = function (req, res) {
  UserList.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function (req, res) {
  var new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function (req, res) {
  UserList.findOne({ "username": req.params.userName }, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  UserList.findOneAndUpdate({username: req.params.userName}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};