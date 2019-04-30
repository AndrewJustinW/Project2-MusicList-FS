const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId

let userSchema = mongoose.Schema({
    Username: String,
    FavoriteGenre: String,
    
  });


  module.exports = mongoose.model('User',userSchema);
