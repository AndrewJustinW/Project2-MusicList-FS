const mongoose = require('./connection.js');

let userSchema = mongoose.Schema({
    Username: String,
    FavoriteGenre: String,
  });

let UserCollection = mongoose.model('User', userSchema);

function createUser(newUser) {
  return UserCollection.create(newUser);
}

function getUsers() {
  return UserCollection.find();
}

function getUser(userId) {
  return UserCollection.findById(userId);
}

function deleteUser(userId) {
  return UserCollection.deleteOne({ _id: userId});
}

function deleteAllUsers() {
  return UserCollection.deleteMany({});
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  deleteAllUsers
}
