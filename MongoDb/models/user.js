const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number
})

const Users = mongoose.model('user', UserSchema);

module.exports = Users;