'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: 'Kindly enter a valid username'
    },
    name:{
        type: String,
        required: 'Kindly Enter a valid First and Last Name'
    },
    imgSrc:{
        type: String,
    },
    followers: {
        type: Array
    },
    following: {
        type: Array
    },
    posts:{
        type: Array
    }
});

module.exports = mongoose.model('Users', UserSchema);
