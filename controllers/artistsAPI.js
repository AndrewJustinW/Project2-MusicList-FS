const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId

let artistSchema = mongoose.Schema({
    ArtistName: String,
    Genre: String,
    userId: ObjectId
});

let artistCollection = mongoose.model('Artist', artistSchema);

function createArtist(newUser) {
  return artistCollection.create(newUser);
}

function getArtists() {
  return artistCollection.find();
}

function getArtist(userId) {
  return artistCollection.findById(userId);
}

function deleteArtist(userId) {
  return artistCollection.deleteOne({ _id: userId});
}

function deleteAllArtists() {
  return artistsCollection.deleteMany({});
}

module.exports = {
  createArtist,
  getArtists,
  getArtist,
  deleteArtist,
  deleteAllArtists
}
