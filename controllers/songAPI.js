const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId

let songSchema = mongoose.Schema({
    Name: String,
    Genre: String,
    userId: ObjectId
});

let songCollection = mongoose.model('Song', songSchema);

function createSong(newUser) {
  return songCollection.create(newUser);
}

function getSongs() {
  return songCollection.find();
}

function getSong(userId) {
  return songCollection.findById(userId);
}

function deleteSong(userId) {
  return songCollection.deleteOne({ _id: userId});
}

function deleteAllSong() {
  return songCollection.deleteMany({});
}

module.exports = {
  createSong,
  getSongs,
  getSong,
  deleteSong,
  deleteAllSongs
}
