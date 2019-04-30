const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId

let artistSchema = mongoose.Schema({
    ArtistName: String,
    Genre: String,
    userId: ObjectId
  });

  module.exports = mongoose.model('Artist', artistSchema);

