const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId

let songSchema = mongoose.Schema({
    Songname: String,
    Genre: String,
    userId: ObjectId

  });


  module.exports = mongoose.model('Song',songSchema);
